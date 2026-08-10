<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #FFD1E0;
}

#fixed-icons {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1999;
    transform-origin: 0 0;
    pointer-events: none;
}

#fixed-left {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: scale(0.6);
    transform-origin: left bottom;
    z-index: 1998;
    pointer-events: none;
}

#fixed-left img { display: block; width: auto; height: auto; }

#fixed-right {
    position: fixed;
    right: 0;
    bottom: 0;
    transform: scale(0.6);
    transform-origin: right bottom;
    z-index: 1998;
    pointer-events: none;
}

#fixed-right img { display: block; width: auto; height: auto; }

#fixed-title {
    position: fixed;
    left: 50%;
    top: 70px;
    transform: translateX(-50%) scale(0.5);
    z-index: 2000;
    pointer-events: none;
}

#fixed-title img { display: block; width: auto; height: auto; }

/* Photobooth core */
#viewfinder-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 50px)) scale(0.6);
    width: 1024px;
    height: 768px;
    z-index: 100;
}

#viewfinder-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transform: scaleX(-1) scale(0.95);
}

#viewfinder-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    pointer-events: none;
}

#viewfinder-frame img {
    display: block;
    width: 100%;
    height: 100%;
}

/* Countdown overlay — covers cutout area */
#countdown-overlay {
    position: absolute;
    top: 4%;
    left: 4%;
    width: 92%;
    height: 92%;
    z-index: 5;
    display: none;
    align-items: center;
    justify-content: center;
}

#countdown-overlay.active {
    display: flex;
}

#countdown-text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 240px;
    font-family: 'Georgia', serif;
    user-select: none;
}

/* Guide — above viewfinder */
#guide {
    position: fixed;
    top: calc(50% - 414px);
    left: 50%;
    transform: translateX(-50%) scale(0.6);
    z-index: 200;
    pointer-events: none;
}

#guide img { display: block; width: auto; height: auto; }

#guide.hidden { display: none; }

/* Button area — below viewfinder */
#btn-area {
    position: fixed;
    top: calc(50% + 414px);
    left: 50%;
    transform: translateX(-50%) scale(0.6);
    z-index: 200;
    display: flex;
    gap: 60px;
    align-items: center;
    justify-content: center;
}

.btn-photobooth {
    width: 300px;
    height: 300px;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0;
}

.btn-photobooth img {
    display: block;
    width: 100%;
    height: 100%;
}

.btn-photobooth:active {
    transform: scale(0.93);
}

.hidden { display: none !important; }

#btn-capture.disabled {
    pointer-events: none;
    opacity: 0.5;
}

/* Frame selector block */
#frame-selector-area {
    position: fixed;
    right: 0;
    bottom: 140px;
    transform-origin: right bottom;
    z-index: 2001;
    pointer-events: auto;
}

#frame-selector {
    background: #FFC6D8;
    border-radius: 12px;
    padding: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}

.frame-option-btn {
    width: 160px;
    height: 122px;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 8px;
    background: transparent;
    padding: 0;
    transition: border-color 0.2s;
    overflow: hidden;
}

.frame-option-btn img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.frame-option-btn.active {
    border-color: #FF6B9D;
    box-shadow: 0 0 8px rgba(255,107,157,0.5);
}

.frame-option-btn:active {
    transform: scale(0.95);
}

/* Character selector block */
#character-selector-area {
    position: fixed;
    left: 60px;
    bottom: 40px;
    z-index: 2001;
    pointer-events: auto;
}

#character-selector {
    background: #FFC6D8;
    border-radius: 12px;
    padding: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    max-height: calc(60vh - 120px);
    overflow-y: auto;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    width: 328px;
}

.char-option-btn {
    width: 80px;
    height: 106px;
    cursor: pointer;
    border: 3px solid transparent;
    border-radius: 8px;
    background: transparent;
    padding: 0;
    transition: border-color 0.2s;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.char-option-btn img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.char-option-btn .no-char-label {
    font-size: 14px;
    color: #8B5E6B;
    font-family: 'Microsoft YaHei', sans-serif;
}

.char-option-btn.active {
    border-color: #FF6B9D;
    box-shadow: 0 0 8px rgba(255,107,157,0.5);
}

.char-option-btn:active {
    transform: scale(0.95);
}

/* Character overlay inside viewfinder */
#character-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    clip-path: inset(4%);
}

#selected-character-img {
    position: absolute;
    right: calc(3% + 70px);
    top: 50%;
    transform: translateY(calc(-50% + 70px)) scale(1.44);
    max-width: 45%;
    max-height: 80%;
    display: none;
}

/* Selected frame overlay inside viewfinder */
#selected-frame-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    pointer-events: none;
}

#selected-frame-overlay img {
    display: block;
    width: 100%;
    height: 100%;
    transform: scale(0.95);
}
</style>

<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; z-index:2000;">
        <img src="assets/photobooth/拍照亭板块_0000_nana图标.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
    <div style="position:absolute; left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center;">
        <img src="assets/photobooth/拍照亭板块_0001_顶层白边.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<div id="fixed-left">
    <img src="assets/photobooth/拍照亭板块_0020_人物.png" alt="">
</div>

<div id="fixed-right">
    <img src="assets/photobooth/拍照亭板块_0019_边框.png" alt="">
</div>

<div id="frame-selector-area">
    <div id="frame-selector">
        <button class="frame-option-btn active" data-frame="1">
            <img src="assets/photobooth/拍照亭板块_0005_相框1选项.png" alt="相框1">
        </button>
        <button class="frame-option-btn" data-frame="2">
            <img src="assets/photobooth/拍照亭板块_0004_相框2选项.png" alt="相框2">
        </button>
        <button class="frame-option-btn" data-frame="3">
            <img src="assets/photobooth/拍照亭板块_0003_相框3选项.png" alt="相框3">
        </button>
        <button class="frame-option-btn" data-frame="4">
            <img src="assets/photobooth/拍照亭板块_0002_相框4选项.png" alt="相框4">
        </button>
    </div>
</div>

<div id="fixed-title">
    <img src="assets/photobooth/拍照亭板块_0011_photo标题.png" alt="">
</div>

<div id="guide">
    <img src="assets/photobooth/拍照亭板块_0018_指引.png" alt="">
</div>

<div id="character-selector-area">
    <div id="character-selector">
        <button class="char-option-btn active" data-char="none">
            <span class="no-char-label">无人物</span>
        </button>
        <button class="char-option-btn" data-char="1">
            <img src="assets/photobooth/characters/人物1.png" alt="人物1">
        </button>
        <button class="char-option-btn" data-char="2">
            <img src="assets/photobooth/characters/人物2.png" alt="人物2">
        </button>
        <button class="char-option-btn" data-char="3">
            <img src="assets/photobooth/characters/人物3.png" alt="人物3">
        </button>
        <button class="char-option-btn" data-char="4">
            <img src="assets/photobooth/characters/人物4.png" alt="人物4">
        </button>
        <button class="char-option-btn" data-char="5">
            <img src="assets/photobooth/characters/人物5.png" alt="人物5">
        </button>
        <button class="char-option-btn" data-char="6">
            <img src="assets/photobooth/characters/人物6.png" alt="人物6">
        </button>
        <button class="char-option-btn" data-char="7">
            <img src="assets/photobooth/characters/人物7.png" alt="人物7">
        </button>
        <button class="char-option-btn" data-char="8">
            <img src="assets/photobooth/characters/人物8.png" alt="人物8">
        </button>
        <button class="char-option-btn" data-char="9">
            <img src="assets/photobooth/characters/人物9.png" alt="人物9">
        </button>
        <button class="char-option-btn" data-char="10">
            <img src="assets/photobooth/characters/人物10.png" alt="人物10">
        </button>
        <button class="char-option-btn" data-char="11">
            <img src="assets/photobooth/characters/人物11.png" alt="人物11">
        </button>
        <button class="char-option-btn" data-char="12">
            <img src="assets/photobooth/characters/人物12.png" alt="人物12">
        </button>
        <button class="char-option-btn" data-char="13">
            <img src="assets/photobooth/characters/人物13.png" alt="人物13">
        </button>
        <button class="char-option-btn" data-char="14">
            <img src="assets/photobooth/characters/人物14.png" alt="人物14">
        </button>
        <button class="char-option-btn" data-char="15">
            <img src="assets/photobooth/characters/人物15.png" alt="人物15">
        </button>
        <button class="char-option-btn" data-char="16">
            <img src="assets/photobooth/characters/人物16.png" alt="人物16">
        </button>
        <button class="char-option-btn" data-char="17">
            <img src="assets/photobooth/characters/人物17.png" alt="人物17">
        </button>
        <button class="char-option-btn" data-char="18">
            <img src="assets/photobooth/characters/人物18.png" alt="人物18">
        </button>
        <button class="char-option-btn" data-char="19">
            <img src="assets/photobooth/characters/人物19.png" alt="人物19">
        </button>
        <button class="char-option-btn" data-char="20">
            <img src="assets/photobooth/characters/人物20.png" alt="人物20">
        </button>
        <button class="char-option-btn" data-char="21">
            <img src="assets/photobooth/characters/人物21.png" alt="人物21">
        </button>
        <button class="char-option-btn" data-char="22">
            <img src="assets/photobooth/characters/人物22.png" alt="人物22">
        </button>
        <button class="char-option-btn" data-char="23">
            <img src="assets/photobooth/characters/人物23.png" alt="人物23">
        </button>
        <button class="char-option-btn" data-char="24">
            <img src="assets/photobooth/characters/人物24.png" alt="人物24">
        </button>
        <button class="char-option-btn" data-char="25">
            <img src="assets/photobooth/characters/人物25.png" alt="人物25">
        </button>
        <button class="char-option-btn" data-char="26">
            <img src="assets/photobooth/characters/人物26.png" alt="人物26">
        </button>
        <button class="char-option-btn" data-char="27">
            <img src="assets/photobooth/characters/人物27.png" alt="人物27">
        </button>
        <button class="char-option-btn" data-char="28">
            <img src="assets/photobooth/characters/人物28.png" alt="人物28">
        </button>
        <button class="char-option-btn" data-char="29">
            <img src="assets/photobooth/characters/人物29.png" alt="人物29">
        </button>
        <button class="char-option-btn" data-char="30">
            <img src="assets/photobooth/characters/人物30.png" alt="人物30">
        </button>
        <button class="char-option-btn" data-char="31">
            <img src="assets/photobooth/characters/人物31.png" alt="人物31">
        </button>
    </div>
</div>

<div id="viewfinder-wrapper">
    <video id="viewfinder-video" autoplay playsinline></video>
    <img id="captured-photo" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:1; transform: scale(0.95);">
    <div id="selected-frame-overlay">
        <img id="selected-frame-img" src="assets/photobooth/拍照亭板块_0010_相框1.png" alt="">
    </div>
    <div id="character-overlay">
        <img id="selected-character-img" src="" alt="">
    </div>
    <div id="viewfinder-frame">
        <img src="assets/photobooth/拍照亭板块_0006_棕边.png" alt="">
    </div>
    <div id="countdown-overlay">
        <span id="countdown-text"></span>
    </div>
</div>

<div id="btn-area">
    <button id="btn-capture" class="btn-photobooth">
        <img src="assets/photobooth/拍照亭板块_0017_拍照键.png" alt="拍照">
    </button>
    <button id="btn-reset" class="btn-photobooth hidden">
        <img src="assets/photobooth/拍照亭板块_0013_重制键.png" alt="重置">
    </button>
</div>

<canvas id="capture-canvas" style="display:none"></canvas>

<div id="back-btn" style="position:fixed; right:0px; bottom:0px; transform:scale(0.6); transform-origin:right bottom; z-index:2000; cursor:pointer;">
    <img src="assets/返回按钮.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<script>
(function() {
    var DESIGN_W = 2560;

    var fixedIcons = document.getElementById('fixed-icons');
    var wrapper = document.getElementById('viewfinder-wrapper');
    var video = document.getElementById('viewfinder-video');
    var countdownOverlay = document.getElementById('countdown-overlay');
    var countdownText = document.getElementById('countdown-text');
    var guide = document.getElementById('guide');
    var btnCapture = document.getElementById('btn-capture');
    var btnReset = document.getElementById('btn-reset');
    var captureCanvas = document.getElementById('capture-canvas');
    var capturedImg = document.getElementById('captured-photo');
    var selectedFrameImg = document.getElementById('selected-frame-img');
    var frameOptionBtns = document.querySelectorAll('.frame-option-btn');
    var frameSelectorArea = document.getElementById('frame-selector-area');
    var viewfinderFrame = document.getElementById('viewfinder-frame');
    var backBtn = document.getElementById('back-btn');

    var clickSound = new Audio('assets/photobooth/点击音效.mp3');

    function playSound() {
        clickSound.volume = 1;
        clickSound.currentTime = 0;
        clickSound.play().catch(function() {});
    }

    var capturedImage = null;
    var pendingFrameImg = null;

    var isCountingDown = false;
    var stream = null;
    var selectedFrame = 1;

    var frameBlobUrls = {};
    var frameSrcMap = {
        1: 'assets/photobooth/拍照亭板块_0010_相框1.png',
        2: 'assets/photobooth/拍照亭板块_0009_相框2.png',
        3: 'assets/photobooth/拍照亭板块_0008_相框3.png',
        4: 'assets/photobooth/拍照亭板块_0007_相框4.png'
    };

    var charOptionBtns = document.querySelectorAll('.char-option-btn');
    var selectedCharacterImg = document.getElementById('selected-character-img');
    var characterSelectorArea = document.getElementById('character-selector-area');
    var selectedCharacter = null;

    // Viewfinder base size
    var VF_W = 1024;
    var VF_H = 768;

    function resize() {
        var vw = window.innerWidth;
        var scale = vw / DESIGN_W;
        fixedIcons.style.transform = 'scale(' + scale + ')';

        // Scale frame selector
        frameSelectorArea.style.transform = 'scale(1.2)';
        // Scale character selector
        characterSelectorArea.style.transform = 'scale(1.2)';

        // Scale viewfinder to fit viewport
        var maxW = vw * 0.85;
        var maxH = window.innerHeight * 0.65;
        var vfScale = Math.min(maxW / VF_W, maxH / VF_H, 1);
        wrapper.style.width = (VF_W * vfScale) + 'px';
        wrapper.style.height = (VF_H * vfScale) + 'px';

        // Update button area and guide positions
        var halfH = (VF_H * vfScale) / 2;
        guide.style.top = 'calc(50% - ' + (halfH + 30) + 'px + 550px)';
        document.getElementById('btn-area').style.top = 'calc(50% + ' + (halfH + 20) + 'px - 130px)';
    }

    resize();
    window.addEventListener('resize', resize);

    // Start camera
    async function startCamera() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: { width: { ideal: 1280 }, height: { ideal: 960 }, facingMode: 'user' }
            });
            video.srcObject = stream;
        } catch (e) {
            console.error('Camera error:', e);
            alert('无法访问摄像头，请检查权限设置。');
        }
    }
    startCamera();

    // Preload all frames as blob URLs
    function preloadFrameBlobs() {
        for (var key in frameSrcMap) {
            (function(k, url) {
                fetch(url)
                    .then(function(res) { return res.blob(); })
                    .then(function(blob) {
                        frameBlobUrls[k] = URL.createObjectURL(blob);
                        if (parseInt(k) === selectedFrame && selectedFrameImg) {
                            selectedFrameImg.src = frameBlobUrls[k];
                        }
                    })
                    .catch(function(err) {
                        console.warn('Frame preload failed:', k, err);
                    });
            })(key, frameSrcMap[key]);
        }
    }
    preloadFrameBlobs();

    // Countdown
    function startCountdown() {
        if (isCountingDown) return;
        playSound();
        isCountingDown = true;
        btnCapture.classList.add('disabled');

        countdownOverlay.classList.add('active');
        var count = 3;
        countdownText.textContent = count;

        var timer = setInterval(function() {
            count--;
            if (count > 0) {
                countdownText.textContent = count;
            } else {
                clearInterval(timer);
                countdownOverlay.classList.remove('active');
                capturePhoto();
                isCountingDown = false;
                btnCapture.classList.remove('disabled');
            }
        }, 1000);
    }

    // Capture photo from video — merges selected frame
    function capturePhoto() {
        // Guard: video must be ready
        if (!video.videoWidth || !video.videoHeight) {
            alert('摄像头未就绪，请刷新后重试。');
            return;
        }

        var rect = wrapper.getBoundingClientRect();
        if (!rect.width || !rect.height) {
            alert('取景框未就绪，请刷新后重试。');
            return;
        }

        var vfScale = rect.width / VF_W;
        var cutX = 0.04 * VF_W * vfScale;
        var cutY = 0.04 * VF_H * vfScale;
        var cutW = 0.92 * VF_W * vfScale;
        var cutH = 0.92 * VF_H * vfScale;

        var videoW = video.videoWidth;
        var videoH = video.videoHeight;
        var displayW = rect.width;
        var displayH = rect.height;
        var videoAspect = videoW / videoH;
        var displayAspect = displayW / displayH;
        var sx, sy, sw, sh;

        if (videoAspect > displayAspect) {
            sh = videoH;
            sw = videoH * displayAspect;
            sy = 0;
            sx = (videoW - sw) / 2;
        } else {
            sw = videoW;
            sh = videoW / displayAspect;
            sx = 0;
            sy = (videoH - sh) / 2;
        }

        var srcX = sx + (cutX / displayW) * sw;
        var srcY = sy + (cutY / displayH) * sh;
        var srcW = (cutW / displayW) * sw;
        var srcH = (cutH / displayH) * sh;

        // Step 1: capture mirrored cutout from video
        var cutoutCanvas = document.createElement('canvas');
        cutoutCanvas.width = Math.max(1, Math.round(srcW));
        cutoutCanvas.height = Math.max(1, Math.round(srcH));
        var cctx = cutoutCanvas.getContext('2d');
        cctx.translate(cutoutCanvas.width, 0);
        cctx.scale(-1, 1);
        cctx.drawImage(video, srcX, srcY, srcW, srcH, 0, 0, cutoutCanvas.width, cutoutCanvas.height);

        // Step 2: merge cutout + selected frame on design-size canvas
        var mergeCanvas = document.createElement('canvas');
        mergeCanvas.width = VF_W;
        mergeCanvas.height = VF_H;
        var mctx = mergeCanvas.getContext('2d');

        var cutX_d = Math.round(0.04 * VF_W);
        var cutY_d = Math.round(0.04 * VF_H);
        var cutW_d = Math.round(0.92 * VF_W);
        var cutH_d = Math.round(0.92 * VF_H);
        mctx.drawImage(cutoutCanvas, 0, 0, cutoutCanvas.width, cutoutCanvas.height, cutX_d, cutY_d, cutW_d, cutH_d);

        // Step 1: save pure photo (guaranteed, mergeCanvas from video = may taint later)
        try {
            capturedImage = mergeCanvas.toDataURL('image/png');
        } catch (de) {
            console.error('toDataURL failed:', de);
            alert('图片生成失败，请重试。');
            return;
        }

        // Step 2: compose photo + frame on a FRESH canvas (dataURL + blob URL = never taints)
        if (pendingFrameImg && pendingFrameImg.complete && pendingFrameImg.naturalWidth > 0) {
            var compCanvas = document.createElement('canvas');
            compCanvas.width = VF_W;
            compCanvas.height = VF_H;
            var cctx = compCanvas.getContext('2d');
            var photoImg = new Image();
            photoImg.src = capturedImage;
            if (photoImg.complete && photoImg.naturalWidth > 0) {
                cctx.drawImage(photoImg, 0, 0, VF_W, VF_H);
            }
            var fW = Math.round(VF_W * 0.95);
            var fH = Math.round(VF_H * 0.95);
            var fX = Math.round((VF_W - fW) / 2);
            var fY = Math.round((VF_H - fH) / 2);
            cctx.drawImage(pendingFrameImg, 0, 0, pendingFrameImg.naturalWidth, pendingFrameImg.naturalHeight, fX, fY, fW, fH);
            try {
                capturedImage = compCanvas.toDataURL('image/png');
            } catch (de) {
                // keep pure photo if composite taints (should not happen)
            }
        }

        // Freeze viewfinder as captured photo
        video.pause();
        capturedImg.src = capturedImage;
        capturedImg.style.display = '';
        video.style.display = 'none';
        viewfinderFrame.style.display = 'none';

        // Switch buttons
        btnCapture.classList.add('hidden');
        btnReset.classList.remove('hidden');
        guide.classList.add('hidden');
    }

    // Reset
    function resetPhoto() {
        playSound();
        capturedImage = null;
        pendingFrameImg = null;

        // Restore live viewfinder
        capturedImg.style.display = 'none';
        video.style.display = '';
        video.play();
        viewfinderFrame.style.display = '';

        btnCapture.classList.remove('hidden', 'disabled');
        btnReset.classList.add('hidden');
        guide.classList.remove('hidden');
    }

    // Frame selection
    function selectFrame(frameNum) {
        playSound();
        selectedFrame = frameNum;
        selectedFrameImg.src = frameBlobUrls[frameNum] || frameSrcMap[frameNum];
        frameOptionBtns.forEach(function(btn) {
            var f = parseInt(btn.getAttribute('data-frame'));
            if (f === frameNum) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Character selection
    function selectCharacter(charVal) {
        playSound();
        selectedCharacter = charVal;
        if (charVal === 'none') {
            selectedCharacterImg.style.display = 'none';
            selectedCharacterImg.src = '';
        } else {
            selectedCharacterImg.src = 'assets/photobooth/characters/人物' + charVal + '.png';
            selectedCharacterImg.style.display = 'block';
        }
        charOptionBtns.forEach(function(btn) {
            var c = btn.getAttribute('data-char');
            if (c === charVal) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Bind frame option clicks
    frameOptionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var f = parseInt(this.getAttribute('data-frame'));
            selectFrame(f);
        });
    });

    // Bind character option clicks
    charOptionBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var c = this.getAttribute('data-char');
            selectCharacter(c);
        });
    });

    // Event bindings
    btnCapture.addEventListener('click', startCountdown);
    btnReset.addEventListener('click', resetPhoto);
    backBtn.addEventListener('click', function() {
        playSound();
        setTimeout(function() { navigateTo('main'); }, 300);
    });
})();
</script>