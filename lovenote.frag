<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: #FFD1E0;
}

/* Fixed foreground elements */
#fixed-icons {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1999;
    transform-origin: 0 0;
    pointer-events: none;
}

#fixed-msg {
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%) scale(0.65);
    z-index: 2001;
    pointer-events: none;
}

#fixed-write {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 2001;
    pointer-events: auto;
    cursor: pointer;
    transform: scale(0.5);
    transform-origin: bottom right;
}

#fixed-write img {
    display: block;
    width: auto;
    height: auto;
}

/* Overlay */
#overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 2999;
}

#overlay.active {
    display: block;
}

/* Letter Modal */
#letter-modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3000;
    width: 600px;
    height: 692px;
    background-image: url('assets/lovenote/留言板块_0004_信纸.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 10px;
}

#letter-modal.active {
    display: block;
}

#letter-modal .msg-textarea {
    position: absolute;
    top: 18%;
    left: 16%;
    width: 68%;
    height: 44%;
    border: none;
    background: transparent;
    resize: none;
    font-size: 22px;
    color: #493434;
    outline: none;
    font-family: 'ZCOOL KuaiLe', 'Dongle', 'Malgun Gothic', sans-serif;
    line-height: 1.6;
}

#letter-modal .author-input {
    position: absolute;
    bottom: 26%;
    right: 16%;
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
    font-size: 20px;
    color: #FF5785;
    outline: none;
    width: 22%;
    text-align: right;
    font-family: 'ZCOOL KuaiLe', 'Dongle', 'Malgun Gothic', sans-serif;
}

#letter-modal .author-input::placeholder,
#letter-modal .msg-textarea::placeholder {
    color: #bbb;
}

#letter-modal .timestamp {
    position: absolute;
    bottom: 5%;
    left: 16%;
    font-size: 16px;
    color: #999;
    font-family: 'ZCOOL KuaiLe', 'Dongle', 'Malgun Gothic', sans-serif;
}

.btn-publish {
    position: absolute;
    bottom: 10%;
    right: 24%;
    width: 13%;
    aspect-ratio: 589 / 180;
    background-image: url('assets/lovenote/留言板块_0007_发布键.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    background-color: transparent;
}

.btn-cancel {
    position: absolute;
    bottom: 10%;
    right: 8%;
    width: 13%;
    aspect-ratio: 596 / 180;
    background-image: url('assets/lovenote/留言板块_0008_取消键.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    background-color: transparent;
}

#letter-modal.read-mode .btn-publish,
#letter-modal.read-mode .btn-cancel {
    display: none;
}

/* Notes waterfall area */
#notes-area {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0;
    padding-top: 200px;
    padding-bottom: 200px;
    margin: 0;
    width: 100%;
}

.note-item {
    display: block;
    flex-shrink: 0;
    width: 200px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
    transition: transform 0.2s;
    font-size: 0;
}

.note-item.yellow {
    background-image: url('assets/lovenote/留言板块_0005_便签-黄.png');
    aspect-ratio: 636 / 267;
}

.note-item.pink {
    background-image: url('assets/lovenote/留言板块_0006_便签-粉.png');
    aspect-ratio: 634 / 584;
}

.note-item:hover {
    transform: scale(1.05);
    z-index: 10;
}

.note-item .note-preview {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 74%;
    text-align: center;
    font-size: 18px;
    color: #493434;
    line-height: 1.5;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    pointer-events: none;
    font-family: 'ZCOOL KuaiLe', 'Dongle', 'Malgun Gothic', sans-serif;
}

.note-item .note-author {
    position: absolute;
    bottom: 14%;
    right: 12%;
    font-size: 16px;
    color: #FF5785;
    pointer-events: none;
    font-family: 'ZCOOL KuaiLe', 'Dongle', 'Malgun Gothic', sans-serif;
}

/* Empty state */
#notes-empty {
    width: 100%;
    text-align: center;
    padding: 60px 0;
    color: #d4a0b0;
    font-size: 15px;
    font-family: 'Georgia', serif;
}

</style>

<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; z-index:2000;">
        <img src="assets/lovenote/留言板块_0000_nana图标.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
    <div style="position:absolute; left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center;">
        <img src="assets/lovenote/留言板块_0001_顶层白边.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<div id="fixed-msg" style="position:fixed; bottom:5px; left:50%; transform:translateX(-50%) scale(0.65); z-index:2001; pointer-events:none;">
    <img src="assets/lovenote/留言板块_0002_留言提示语.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<div id="fixed-write">
    <img src="assets/lovenote/留言板块_0003_留言键.png" alt="写留言">
</div>

<div id="overlay"></div>

<div id="letter-modal">
    <textarea class="msg-textarea" placeholder="在这里写下你想说的话..." maxlength="1000"></textarea>
    <input class="author-input" placeholder="署名" maxlength="20">
    <div class="timestamp"></div>
    <button class="btn-publish" title="发布"></button>
    <button class="btn-cancel" title="取消"></button>
</div>

<div id="char-counter" style="display:none; position:fixed; top:calc(50% + 360px); left:50%; transform:translateX(-50%); z-index:3002; color:#FF5785; font-size:16px; font-family:'ZCOOL KuaiLe', 'Dongle', 'Malgun Gothic', sans-serif;">已输入 0 / 1000</div>

<div id="notes-area"></div>

<div id="back-btn" style="position:fixed; left:0px; bottom:0px; transform:scale(0.6); transform-origin:left bottom; z-index:2000; cursor:pointer;">
    <img src="assets/返回按钮.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<script>
(function() {
    var API_URL = 'http://127.0.0.1:8899/api/messages';
    var STORAGE_KEY = 'lovenote_messages';

    var DESIGN_W = 2560;
    var fixedIcons = document.getElementById('fixed-icons');
    var overlay = document.getElementById('overlay');
    var modal = document.getElementById('letter-modal');
    var msgTextarea = modal.querySelector('.msg-textarea');
    var authorInput = modal.querySelector('.author-input');
    var timestampEl = modal.querySelector('.timestamp');
    var btnPublish = modal.querySelector('.btn-publish');
    var btnCancel = modal.querySelector('.btn-cancel');
    var fixedWrite = document.getElementById('fixed-write');
    var notesArea = document.getElementById('notes-area');
    var charCounter = document.getElementById('char-counter');

    var currentReadIndex = -1; // -1 means write mode

    var clickSound = new Audio('assets/lovenote/点击音效.mp3');
    function playSound() {
        clickSound.volume = 1;
        clickSound.currentTime = 0;
        clickSound.play().catch(function() {});
    }

    function resize() {
        var vw = window.innerWidth;
        var scale = vw / DESIGN_W;
        fixedIcons.style.transform = 'scale(' + scale + ')';
    }

    resize();
    window.addEventListener('resize', resize);

    // Format time
    function formatTime(date) {
        var y = date.getFullYear();
        var m = ('0' + (date.getMonth() + 1)).slice(-2);
        var d = ('0' + date.getDate()).slice(-2);
        var h = ('0' + date.getHours()).slice(-2);
        var min = ('0' + date.getMinutes()).slice(-2);
        return y + '/' + m + '/' + d + ' ' + h + ':' + min;
    }

    // Get messages from API, fallback to localStorage
    async function getMessages() {
        try {
            var resp = await fetch(API_URL);
            var data = await resp.json();
            return data;
        } catch (e) {
            console.warn('[lovenote] API 不可用，回退 localStorage');
            try {
                var raw = localStorage.getItem(STORAGE_KEY);
                return raw ? JSON.parse(raw) : [];
            } catch (e2) {
                return [];
            }
        }
    }

    // Save messages to API, fallback to localStorage
    async function saveMessages(msgs) {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(msgs)
            });
        } catch (e) {
            console.warn('[lovenote] API 不可用，回退 localStorage');
            localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
        }
    }

    // Open modal in write mode
    function openWriteModal() {
        playSound();
        currentReadIndex = -1;
        msgTextarea.value = '';
        msgTextarea.disabled = false;
        authorInput.value = '';
        authorInput.disabled = false;
        timestampEl.textContent = '';
        modal.classList.remove('read-mode');
        overlay.classList.add('active');
        modal.classList.add('active');
        btnPublish.style.display = '';
        btnCancel.style.display = '';
        charCounter.style.display = 'block';
        charCounter.textContent = '已输入 0 / 1000';
    }

    // Open modal in read mode
    async function openReadModal(index) {
        playSound();
        var msgs = await getMessages();
        if (index < 0 || index >= msgs.length) return;
        var msg = msgs[index];
        currentReadIndex = index;
        msgTextarea.value = msg.text;
        msgTextarea.disabled = true;
        authorInput.value = msg.author;
        authorInput.disabled = true;
        timestampEl.textContent = msg.time;
        modal.classList.add('read-mode');
        overlay.classList.add('active');
        modal.classList.add('active');
    }

    // Close modal
    function closeModal() {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        modal.classList.remove('read-mode');
        currentReadIndex = -1;
        charCounter.style.display = 'none';
    }

    // Render all notes
    async function renderNotes() {
        var msgs = await getMessages();
        notesArea.innerHTML = '';

        if (msgs.length === 0) {
            notesArea.innerHTML = '<div id="notes-empty">暂时还没有留言，点击右下角留言键写下第一条吧</div>';
            return;
        }

        for (var i = 0; i < msgs.length; i++) {
            var msg = msgs[i];
            var isYellow = msg.text.length <= 20;
            var note = document.createElement('div');
            note.className = 'note-item ' + (isYellow ? 'yellow' : 'pink');
            note.setAttribute('data-index', i);

            var preview = document.createElement('div');
            preview.className = 'note-preview';
            var previewText = msg.text.length > 40 ? msg.text.slice(0, 40) + '...' : msg.text;
            preview.textContent = previewText;

            var author = document.createElement('div');
            author.className = 'note-author';
            author.textContent = msg.author || '匿名';

            note.appendChild(preview);
            note.appendChild(author);

            note.addEventListener('click', function(e) {
                var idx = parseInt(this.getAttribute('data-index'));
                openReadModal(idx);
            });

            notesArea.appendChild(note);
        }
    }

    // Publish
    async function publish() {
        playSound();
        var text = msgTextarea.value.trim();
        var author = authorInput.value.trim();

        if (!text) {
            alert('请先写下留言内容');
            return;
        }

        var now = new Date();
        var timeStr = formatTime(now);

        var msgs = await getMessages();
        msgs.push({ text: text, author: author || '匿名', time: timeStr });
        await saveMessages(msgs);

        closeModal();
        await renderNotes();
        console.log('[lovenote] 留言已发布，当前共 ' + msgs.length + ' 条留言', msgs);
    }

    // Event bindings
    fixedWrite.addEventListener('click', openWriteModal);
    btnPublish.addEventListener('click', publish);
    btnCancel.addEventListener('click', function() { playSound(); closeModal(); });
    overlay.addEventListener('click', closeModal);

    // Character counter
    msgTextarea.addEventListener('input', function() {
        charCounter.textContent = '已输入 ' + this.value.length + ' / 1000';
    });

    // Prevent modal clicks from closing
    modal.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Initialize
    async function init() {
        await renderNotes();
    }
    init();

    document.getElementById('back-btn').addEventListener('click', function() {
        playSound();
        setTimeout(function() { navigateTo('main'); }, 300);
    });
})();
</script>