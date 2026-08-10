<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #FFD1E0;
}

.canvas-wrapper {
    width: 2560px;
    height: 1440px;
    transform-origin: top left;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #FFD1E0;
    overflow: hidden;
}

.icon-layer {
    position: absolute;
    transform: scale(0.792);
    transform-origin: 0 0;
}

.icon-layer img {
    display: block;
    width: auto;
    height: auto;
}

.clickable { cursor: pointer; }

.deco-layer {
    pointer-events: none;
}
</style>

<div class="canvas-wrapper" id="canvas">

    <!-- 0018 图层-1 底层装饰 -->
    <div class="icon-layer deco-layer" style="left:0px; top:0px; z-index:1;">
        <img src="assets/主界面_0018_图层-1.png" alt="">
    </div>

    <!-- 0017 相框 -->
    <div class="icon-layer deco-layer" style="left:50%; top:50%; z-index:2; transform: translate(-50%, -50%) scale(0.812); transform-origin: center center;">
        <img src="assets/主界面_0017_相框.png" alt="">
    </div>

    <!-- 0016 大标题 -->
    <div class="icon-layer clickable" id="icon-0016" style="left:137px; top:93px; z-index:10;" data-sound="click" data-mode="once">
        <img id="img-0016-default" src="assets/主界面_0016_大标题.png" alt="">
        <img id="img-0016-active" src="assets/主界面_0016_大标题.png" alt="" style="display:none;">
    </div>

    <!-- 0008 留言板 / 0007 -->
    <div class="icon-layer clickable" id="icon-0008" style="left:889px; top:324px; z-index:10;" data-default="0008" data-active="0007" data-sound="click" data-mode="once">
        <img id="img-0008-default" src="assets/主界面_0008_留言板.png" alt="">
        <img id="img-0008-active" src="assets/主界面_0007_留言板（点击）.png" alt="" style="display:none; position:relative; left:-15px; top:-15px;">
    </div>

    <!-- 0006 播放器 / 0005 -->
    <div class="icon-layer clickable" id="icon-0006" style="left:1201px; top:329px; z-index:10;" data-default="0006" data-active="0005" data-sound="click" data-mode="once">
        <img id="img-0006-default" src="assets/主界面_0006_播放器.png" alt="">
        <img id="img-0006-active" src="assets/主界面_0005_播放器（点击）.png" alt="" style="display:none; position:relative; left:-15px; top:-15px;">
    </div>

    <!-- 0012 拍照亭 / 0011 -->
    <div class="icon-layer clickable" id="icon-0012" style="left:1741px; top:307px; z-index:10;" data-default="0012" data-active="0011" data-sound="click" data-mode="once">
        <img id="img-0012-default" src="assets/主界面_0012_拍照亭.png" alt="">
        <img id="img-0012-active" src="assets/主界面_0011_拍照亭（点击）.png" alt="" style="display:none; position:relative; left:-10px; top:-30px;">
    </div>

    <!-- 0010 换装 / 0009 -->
    <div class="icon-layer clickable" id="icon-0010" style="left:447px; top:642px; z-index:10;" data-default="0010" data-active="0009" data-sound="click" data-mode="once">
        <img id="img-0010-default" src="assets/主界面_0010_换装.png" alt="">
        <img id="img-0010-active" src="assets/主界面_0009_换装（点击）.png" alt="" style="display:none; position:relative; left:-15px; top:-15px;">
    </div>

    <!-- 0004 拍立得1 / 0003 -->
    <div class="icon-layer clickable" id="icon-0004" style="left:953px; top:698px; z-index:10;" data-default="0004" data-active="0003" data-sound="birthday" data-mode="toggle">
        <img id="img-0004-default" src="assets/主界面_0004_拍立得1.png" alt="">
        <img id="img-0004-active" src="assets/主界面_0003_拍立得2.png" alt="" style="display:none;">
    </div>

    <!-- 0014 相册 / 0013 -->
    <div class="icon-layer clickable" id="icon-0014" style="left:1765px; top:753px; z-index:10;" data-default="0014" data-active="0013" data-sound="click" data-mode="once">
        <img id="img-0014-default" src="assets/主界面_0014_相册.png" alt="">
        <img id="img-0014-active" src="assets/主界面_0013_相册（点击）.png" alt="" style="display:none; position:relative; left:-15px; top:-15px;">
    </div>

    <!-- 0001 作者的话 / 0000 -->
    <div class="icon-layer clickable" id="icon-0001" style="left:2077px; top:1032px; z-index:10;" data-default="0001" data-active="0000" data-sound="click" data-mode="once">
        <img id="img-0001-default" src="assets/主界面_0001_作者的话.png" alt="">
        <img id="img-0001-active" src="assets/主界面_0000_作者的话（点击）.png" alt="" style="display:none;">
    </div>

</div>

<script>
(function() {
    var canvas = document.getElementById('canvas');
    var DESIGN_W = 2560;
    var DESIGN_H = 1440;

    function resize() {
        var vw = window.innerWidth;
        var vh = window.innerHeight;
        var scale = Math.min(vw / DESIGN_W, vh / DESIGN_H);
        canvas.style.transform = 'translate(' + ((vw - DESIGN_W * scale) / 2) + 'px, ' + ((vh - DESIGN_H * scale) / 2) + 'px) scale(' + scale + ')';
    }
    resize();
    window.addEventListener('resize', resize);

    // 音频
    var clickSound = new Audio('assets/点击音效.mp3');
    var birthdaySong = new Audio('assets/生日歌.mp3');
    birthdaySong.loop = true;

    // 首次交互标记（无需预播放，点击本身已是用户手势，play 可直接执行）
    var audioUnlocked = false;
    function unlockAudio() { audioUnlocked = true; }

    function playSound(type) {
        if (type === 'click') {
            clickSound.volume = 1;
            clickSound.currentTime = 0;
            clickSound.play().catch(function(){});
        } else if (type === 'birthday') {
            birthdaySong.volume = 1;
            birthdaySong.currentTime = 0;
            birthdaySong.play().catch(function(){});
        }
    }

    function stopBirthday() {
        birthdaySong.pause();
        birthdaySong.currentTime = 0;
    }

    var icons = document.querySelectorAll('.clickable');
    icons.forEach(function(icon) {
        icon.addEventListener('click', function(e) {
            unlockAudio();
            var mode = icon.getAttribute('data-mode');
            var sound = icon.getAttribute('data-sound');
            var num = icon.id.split('-')[1];
            var defaultImg = document.getElementById('img-' + num + '-default');
            var activeImg = document.getElementById('img-' + num + '-active');

            if (mode === 'toggle') {
                if (activeImg.style.display === 'none' || activeImg.style.display === '') {
                    defaultImg.style.display = 'none';
                    activeImg.style.display = 'block';
                    playSound('birthday');
                } else {
                    activeImg.style.display = 'none';
                    defaultImg.style.display = 'block';
                    stopBirthday();
                }
            } else {
                if (activeImg.style.display === 'none' || activeImg.style.display === '') {
                    defaultImg.style.display = 'none';
                    activeImg.style.display = 'block';
                    playSound(sound);
                }
            }
            setTimeout(function() {
                var iconId = icon.id;
                if (iconId === 'icon-0016') { navigateTo('index'); }
                else if (iconId === 'icon-0014') { navigateTo('album'); }
                else if (iconId === 'icon-0012') { navigateTo('photobooth'); }
                else if (iconId === 'icon-0010') { navigateTo('dressup'); }
                else if (iconId === 'icon-0008') { navigateTo('lovenote'); }
                else if (iconId === 'icon-0006') { navigateTo('theplaylist'); }
                else if (iconId === 'icon-0001') { navigateTo('behind'); }
            }, 300);
        });
    });
})();
</script>