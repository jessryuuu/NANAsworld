import http.server
import json
import os
import sys
from urllib.parse import unquote

HOST = '127.0.0.1'
PORT = 8899
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MESSAGES_FILE = os.path.join(BASE_DIR, 'lovenote_messages.json')


class LovenoteHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_GET(self):
        if self.path == '/api/messages':
            self._serve_messages()
            return

        # SPA fallback: 请求非文件路径时回退到 index.html
        path = self.path.split('?')[0].split('#')[0]
        decoded_path = unquote(path)
        file_path = os.path.join(BASE_DIR, decoded_path.lstrip('/'))

        # 安全检查：防止路径遍历
        real_path = os.path.realpath(file_path)
        if not real_path.startswith(os.path.realpath(BASE_DIR)):
            self.send_error(403, 'Forbidden')
            return

        if os.path.isfile(file_path):
            # 真实文件，正常返回并禁止缓存 HTML 之外的静态资源不设限制
            super().do_GET()
        else:
            # SPA 回退，禁止缓存避免浏览器缓存 HTML 到图片/JSS URL 上
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
            self.end_headers()
            with open(os.path.join(BASE_DIR, 'index.html'), 'rb') as f:
                self.wfile.write(f.read())

    def do_POST(self):
        if self.path == '/api/messages':
            self._handle_post_messages()
        else:
            self.send_error(404, 'Not Found')

    def do_OPTIONS(self):
        self._set_cors_headers()
        self.send_response(200)
        self.end_headers()

    def _set_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def _serve_messages(self):
        data = []
        if os.path.exists(MESSAGES_FILE):
            try:
                with open(MESSAGES_FILE, 'r', encoding='utf-8') as f:
                    data = json.load(f)
            except (json.JSONDecodeError, IOError):
                data = []
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self._set_cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))

    def _handle_post_messages(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)
        try:
            messages = json.loads(body.decode('utf-8'))
        except (json.JSONDecodeError, UnicodeDecodeError):
            self.send_response(400)
            self._set_cors_headers()
            self.end_headers()
            self.wfile.write(b'{"error": "Invalid JSON"}')
            return

        with open(MESSAGES_FILE, 'w', encoding='utf-8') as f:
            json.dump(messages, f, ensure_ascii=False, indent=2)

        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self._set_cors_headers()
        self.end_headers()
        self.wfile.write(b'{"ok": true}')


if __name__ == '__main__':
    print(f'Lovenote server running at http://{HOST}:{PORT}')
    httpd = http.server.HTTPServer((HOST, PORT), LovenoteHandler)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\nServer stopped.')
        httpd.server_close()
