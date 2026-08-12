<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: #FFD1E0;
}

.canvas-wrapper {
    width: 2560px;
    transform-origin: top left;
    position: relative;
}

.journey-icon {
    position: absolute;
    cursor: default;
}

.journey-icon img {
    display: block;
    width: auto;
    height: auto;
}

/* Photo stack */
.tray-wrapper {
    position: relative;
    display: inline-block;
}

.photo-stack {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.70125);
    width: 1346px;
    height: 939px;
    z-index: 5;
    pointer-events: none;
}

.stack-photo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    pointer-events: auto;
    cursor: pointer;
}

.shadow-caster {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.35));
    pointer-events: none;
    z-index: 1;
}

.arr-left, .arr-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 30;
    color: #493434;
    font-size: 47.04px;
    cursor: pointer;
    user-select: none;
    font-family: sans-serif;
    line-height: 1;
    padding: 8px 4px;
    pointer-events: auto;
}
.arr-left {
    left: -70px;
}
.arr-right {
    right: -70px;
}

/* Lightbox */
.lightbox-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    overflow: auto;
}

.lightbox-overlay.active {
    display: flex;
}

.lightbox-overlay img {
    max-width: 95vw;
    max-height: 95vh;
    object-fit: contain;
    z-index: 10000;
    cursor: default;
}

/* Navigation panels */
#nav-left, #nav-right {
    position: fixed;
    top: 30px;
    height: calc(100vh - 30px);
    z-index: 1996;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    pointer-events: none;
}
#nav-left { left: 82px; align-items: flex-start; }
#nav-right { right: 12px; align-items: flex-end; }
.nav-item {
    pointer-events: auto;
    color: #493434;
    text-decoration: none;
    font-family: 'ZCOOL XiaoWei', cursive;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.1;
    transition: opacity 0.2s;
    white-space: nowrap;
}
.nav-item:hover {
    opacity: 0.5;
}
</style>

<div class="canvas-wrapper" id="canvas">

        <div class="journey-icon" data-src="assets/生日贺图_0012_生日贺图图标.png" style="left:50%; top:260px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:37;" title="0012">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0012_生日贺图图标.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0012" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
</div>            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0011_生日2017.png" style="left:50%; top:709px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:36;" title="0011">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0011_生日2017.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0011" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0011_2017-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-3deg);">
<img class="stack-photo" src="assets/生日贺图_0011_2017-02.jpg" alt="" style="transform: translate(-50%,-50%) rotate(2deg) scale(0.85);">
<img class="stack-photo" src="assets/生日贺图_0011_2017-03.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-1deg);">
</div>
                <div class="arr-left" data-icon="0011" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0011" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0010_生日2018.png" style="left:50%; top:1616px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:34;" title="0010">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0010_生日2018.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0010" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0010_2018-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-2deg);">
<img class="stack-photo" src="assets/生日贺图_0010_2018-02.jpg" alt="" style="transform: translate(-50%,-50%) rotate(3deg);">
<img class="stack-photo" src="assets/生日贺图_0010_2018-03.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-1deg);">
</div>
                <div class="arr-left" data-icon="0010" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0010" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0009_生日2019.png" style="left:50%; top:2522px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:33;" title="0009">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0009_生日2019.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0009" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0009_2019-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-2deg);">
</div>
                <div class="arr-left" data-icon="0009" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0009" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0008_生日2020.png" style="left:50%; top:3429px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:26;" title="0008">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0008_生日2020.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0008" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0008_2020-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-3deg);">
<img class="stack-photo" src="assets/生日贺图_0008_2020-02.jpg" alt="" style="transform: translate(-50%,-50%) rotate(2deg);">
</div>
                <div class="arr-left" data-icon="0008" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0008" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0007_生日2021.png" style="left:50%; top:4335px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:24;" title="0007">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0007_生日2021.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0007" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.631125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0007_2021-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(3deg);">
<img class="stack-photo" src="assets/生日贺图_0007_2021-02.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-2deg);">
</div>
                <div class="arr-left" data-icon="0007" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0007" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0006_生日2022.png" style="left:50%; top:5242px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:19;" title="0006">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0006_生日2022.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0006" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.631125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0006_2022-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-2deg);">
</div>
                <div class="arr-left" data-icon="0006" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0006" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0005_生日2023.png" style="left:50%; top:6149px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:15;" title="0005">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0005_生日2023.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0005" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.631125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0005_2023-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(1deg);">
<img class="stack-photo" src="assets/生日贺图_0005_2023-02.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-3deg);">
</div>
                <div class="arr-left" data-icon="0005" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0005" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0004_生日2024.png" style="left:50%; top:7055px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:14;" title="0004">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0004_生日2024.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0004" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.631125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0004_2024-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(2deg);">
</div>
                <div class="arr-left" data-icon="0004" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0004" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0003_生日2025.png" style="left:50%; top:7962px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:12;" title="0003">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0003_生日2025.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0003" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.631125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0003_2025-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-2deg);">
<img class="stack-photo" src="assets/生日贺图_0003_2025-02.jpg" alt="" style="transform: translate(-50%,-50%) rotate(3deg);">
<img class="stack-photo" src="assets/生日贺图_0003_2025-03.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-1deg);">
</div>
                <div class="arr-left" data-icon="0003" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0003" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/生日贺图_0002_生日2026.png" style="left:50%; top:8868px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:10;" title="0002">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/生日贺图_0002_生日2026.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0002" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;pointer-events:none;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo" src="assets/生日贺图_0002_2026-01.jpg" alt="" style="transform: translate(-50%,-50%) rotate(-3deg);">
</div>
                <div class="arr-left" data-icon="0002" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0002" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
</div>

<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; z-index:2000;">
        <img src="assets/生日贺图_0000_nana图标.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
    <div style="position:absolute; left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center;">
        <img src="assets/生日贺图_0001_顶层白边.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<div id="fixed-hint" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%); font-size:40px; color:#d4889e; font-family:'Ma Shan Zheng',cursive; text-align:center; z-index:1998;">-往下滑查看更多-</div>

<div id="nav-left">
<a href="javascript:void(0)" data-top="709" class="nav-item">2017年</a>
<a href="javascript:void(0)" data-top="1616" class="nav-item">2018年</a>
<a href="javascript:void(0)" data-top="2522" class="nav-item">2019年</a>
<a href="javascript:void(0)" data-top="3429" class="nav-item">2020年</a>
<a href="javascript:void(0)" data-top="4335" class="nav-item">2021年</a>
<a href="javascript:void(0)" data-top="5242" class="nav-item">2022年</a>
<a href="javascript:void(0)" data-top="6149" class="nav-item">2023年</a>
<a href="javascript:void(0)" data-top="7055" class="nav-item">2024年</a>
<a href="javascript:void(0)" data-top="7962" class="nav-item">2025年</a>
<a href="javascript:void(0)" data-top="8868" class="nav-item">2026年</a>
</div>
<div id="nav-right">
</div>

<!-- Lightbox -->
<div class="lightbox-overlay" id="lightbox">
    <img id="lightbox-img" src="" alt="">
</div>

<div id="back-btn" style="position:fixed; right:0px; bottom:0px; transform:scale(0.6); transform-origin:right bottom; z-index:2000; cursor:pointer;"><img src="assets/返回按钮.png" alt="" style="display:block;"></div>

<script>
(function() {
    var canvas = document.getElementById('canvas');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var DESIGN_W = 2560;

    var clickSound = new Audio('assets/点击音效.mp3');

    function playSound() {
        clickSound.volume = 1;
        clickSound.currentTime = 0;
        clickSound.play().catch(function(){});
    }

    function resize() {
        var vw = window.innerWidth;
        var scale = vw / DESIGN_W;
        canvas.style.transform = 'scale(' + scale + ')';
        document.getElementById('fixed-icons').style.transform = 'scale(' + scale + ')';
        document.getElementById('fixed-hint').style.fontSize = (40 * scale) + 'px';
        document.body.style.minHeight = (9745 * scale) + 'px';
        var pc = document.getElementById('page-content');
        pc.style.overflow = 'auto';
        pc.style.backgroundImage = "url('assets/背景1左.png'), url('assets/背景1右.png')";
        pc.style.backgroundRepeat = 'repeat-y, repeat-y';
        pc.style.backgroundAttachment = 'local, local';
        pc.style.backgroundPosition = 'right calc(50% + 940px) top, left calc(50% + 60px) top';
        pc.style.backgroundSize = 'auto, auto';

        var navFontSize = Math.max(18, 40 * scale);
        document.querySelectorAll('.nav-item').forEach(function(item) {
            item.style.fontSize = navFontSize + 'px';
        });
    }

    resize();
    window.addEventListener('resize', resize);

    // Nav click: scroll to center icon
    document.querySelectorAll('.nav-item').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            var iconTop = parseInt(this.getAttribute('data-top'));
            var vw = window.innerWidth;
            var scale = vw / DESIGN_W;
            var iconCenterY = (iconTop + 528) * scale;
            var targetScroll = iconCenterY - window.innerHeight / 2 - 80;
            playSound();
            document.getElementById('page-content').scrollTo({ top: targetScroll, behavior: 'smooth' });
        });
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        }
    });

    /* Photo carousel */
    document.querySelectorAll('.photo-stack').forEach(function(stack) {
        var photos = stack.querySelectorAll('.stack-photo');
        var caster = stack.querySelector('.shadow-caster');
        if (photos.length === 0) return;

        photos.forEach(function(p, i) {
            p.style.zIndex = (i === 0) ? 10 : 0;
        });
        if (caster && photos[0]) {
            caster.src = photos[0].src;
            caster.style.transform = window.getComputedStyle(photos[0]).transform;
        }

        photos.forEach(function(photo) {
            photo.addEventListener('click', function(e) {
                e.stopPropagation();
                playSound();
                lightboxImg.src = this.src;
                lightbox.classList.add('active');
            });
        });

        if (photos.length <= 1) {
            var tray = stack.parentElement;
            var la = tray.querySelector('.arr-left');
            var ra = tray.querySelector('.arr-right');
            if (la) la.style.display = 'none';
            if (ra) ra.style.display = 'none';
            return;
        }
        var current = 0;
        var tray = stack.parentElement;

        function syncShadow() {
            if (caster && photos[current]) {
                caster.src = photos[current].src;
                caster.style.transform = window.getComputedStyle(photos[current]).transform;
            }
        }

        tray.querySelector('.arr-left').addEventListener('click', function(e) {
            e.stopPropagation();
            playSound();
            current = (current - 1 + photos.length) % photos.length;
            photos.forEach(function(p, i) {
                p.style.zIndex = (i === current) ? 10 : 0;
            });
            syncShadow();
        });

        tray.querySelector('.arr-right').addEventListener('click', function(e) {
            e.stopPropagation();
            playSound();
            current = (current + 1) % photos.length;
            photos.forEach(function(p, i) {
                p.style.zIndex = (i === current) ? 10 : 0;
            });
            syncShadow();
        });
    });

    var backBtn = document.getElementById('back-btn');
    if (backBtn) { backBtn.addEventListener('click', function() { playSound(); setTimeout(function() { navigateTo('album'); }, 300); }); }

})();
</script>
