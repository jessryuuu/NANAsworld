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

</style>

<div class="canvas-wrapper" id="canvas">

    <!-- 0007 相册锛堣创搴曞眳涓級 -->
    <div class="icon-layer" style="left:258px; top:270px; z-index:3; transform: scale(0.8712); transform-origin: 0 0;">
        <img src="assets/相册_0007_相册.png" alt="">
    </div>

    <!-- 0006 child -->
    <div class="icon-layer clickable" id="icon-0006" style="left:662px; top:545px; z-index:4;">
        <img src="assets/相册_0006_child.png" alt="">
    </div>

    <!-- 0005 rookies -->
    <div class="icon-layer clickable" id="icon-0005" style="left:506px; top:868px; z-index:5;">
        <img src="assets/相册_0005_rookies.png" alt="">
    </div>

    <!-- 0004 dream -->
    <div class="icon-layer clickable" id="icon-0004" style="left:506px; top:1148px; z-index:6;">
        <img src="assets/相册_0004_dream.png" alt="">
    </div>

    <!-- 0003 拍立得 -->
    <div class="icon-layer clickable" id="icon-0003" style="left:1480px; top:500px; z-index:11;">
        <img src="assets/相册_0003_拍立得.png" alt="">
    </div>

    <!-- 0002 生日贺图 -->
    <div class="icon-layer clickable" id="icon-0002" style="left:1428px; top:958px; z-index:8; transform: scale(0.7298); transform-origin: 0 0;">
        <img src="assets/相册_0002_生日贺图.png" alt="">
    </div>

    <!-- 0001 顶层白边锛堣创椤跺眳涓紝鏀惧ぇ20%锛?-->
    <div class="icon-layer" style="left:-160px; top:0px; z-index:9; transform: scale(0.90934); transform-origin: top center;">
        <img src="assets/相册_0001_顶层白边.png" alt="">
    </div>

</div>

<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; transform: scale(1.02); transform-origin: 0 0;">
        <img src="assets/相册_0000_nana图标.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<div id="back-btn" style="position:fixed; left:0px; bottom:0px; transform:scale(0.6); transform-origin:left bottom; z-index:2000; cursor:pointer;">
    <img src="assets/返回按钮.png" alt="" style="display:block; width:auto; height:auto;">
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
        document.getElementById('fixed-icons').style.transform = 'scale(' + scale + ')';
    }
    resize();
    window.addEventListener('resize', resize);

    // 闊抽 鈥?娌跨敤宸查獙璇佺殑棣栨鐐瑰嚮鏈夊０鏂规
    var clickSound = new Audio('assets/点击音效.mp3');

    function playSound() {
        clickSound.volume = 1;
        clickSound.currentTime = 0;
        clickSound.play().catch(function(){});
    }

    var clickables = document.querySelectorAll('.clickable');
    clickables.forEach(function(icon) {
        icon.addEventListener('click', function() {
            playSound();
            setTimeout(function() {
                var iconId = icon.id;
                if (iconId === 'icon-0006') { navigateTo('child'); }
                else if (iconId === 'icon-0005') { navigateTo('rookies'); }
                else if (iconId === 'icon-0004') { navigateTo('journey'); }
                else if (iconId === 'icon-0003') { navigateTo('polaroid'); }
                else if (iconId === 'icon-0002') { navigateTo('birthday'); }
            }, 300);
        });
    });
    // 返回按钮
    document.getElementById('back-btn').addEventListener('click', function() {
        playSound();
        setTimeout(function() {
            navigateTo('main');
        }, 300);
    });
})();
</script>