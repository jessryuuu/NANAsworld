import http.server
import os
import sys

PORT = 8899
DIR = os.path.dirname(os.path.abspath(__file__))

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def do_GET(self):
        path = self.path.split('?')[0]
        file_path = os.path.join(DIR, path.lstrip('/'))

        # 如果请求的是实际存在的文件，直接返回
        if os.path.isfile(file_path):
            return super().do_GET()

        # 否则回退到 index.html（SPA 路由）
        self.path = '/index.html'
        return super().do_GET()

if __name__ == '__main__':
    server = http.server.HTTPServer(('127.0.0.1', PORT), SPAHandler)
    print(f'SPA server running at http://127.0.0.1:{PORT}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.server_close()
        print('Server stopped.')
