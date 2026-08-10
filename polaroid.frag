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
}

.stack-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    top: 60px;
    height: calc(100vh - 60px);
    z-index: 1996;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    pointer-events: none;
}
#nav-left { left: 12px; align-items: flex-start; }
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
        <div class="journey-icon" data-src="assets/拍立得_0002_得托盘rookies.png" style="left:50%; top:260px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:37;" title="0002">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/拍立得_0002_得托盘rookies.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0002" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0002_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(1.8deg) translate(-7.5px,4.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-0.8deg) translate(4.3px,-5.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-1.4deg) translate(-0.6px,6.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.3deg) translate(6.7px,-3.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-3.4deg) translate(-3.2px,1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(0.7deg) translate(2.1px,-7.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0002_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-2.9deg) translate(-5.4px,-0.3px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0002" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0002" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>

        <div class="journey-icon" data-src="assets/出道照片_0038_照片托盘chewing.png" style="left:50%; top:1347px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:36;" title="0038">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0038_照片托盘chewing.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0038" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0038_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0038_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0038" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0038" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0036_照片托盘2018nct.png" style="left:50%; top:2434px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:34;" title="0036">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0036_照片托盘2018nct.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0036" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0036_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0036_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto" loading="lazy">
                    </div>
                <div class="arr-left" data-icon="0036" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0036" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0035_照片托盘wegoup.png" style="left:50%; top:3521px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:33;" title="0035">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0035_照片托盘wegoup.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0035" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0035_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0035_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0035_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto" loading="lazy">

                    </div>
                <div class="arr-left" data-icon="0035" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0035" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0028_照片托盘weboom.png" style="left:50%; top:4608px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:26;" title="0028">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0028_照片托盘weboom.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0028" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0028_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto" loading="lazy">
                    
                    </div>
                <div class="arr-left" data-icon="0028" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0028" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0026_照片托盘reload.png" style="left:50%; top:5695px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:24;" title="0026">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0026_照片托盘reload.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0026" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0026_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0026_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0026_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0026_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0026_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0026_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto" loading="lazy">
                    </div>
                <div class="arr-left" data-icon="0026" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0026" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0021_照片托盘universe.png" style="left:50%; top:6782px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:19;" title="0021">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0021_照片托盘universe.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0021" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0021_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto" loading="lazy">
                    
                    </div>
                <div class="arr-left" data-icon="0021" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0021" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>

        <div class="journey-icon" data-src="assets/出道照片_0017_照片托盘candy.png" style="left:50%; top:7869px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:15;" title="0017">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0017_照片托盘candy.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0017" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0017_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/polaroid/0017_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto" loading="lazy">
                    
                    </div>
                <div class="arr-left" data-icon="0017" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0017" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0016_照片托盘smcupalace.png" style="left:50%; top:8956px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:14;" title="0016">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0016_照片托盘smcupalace.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0016" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0016_photo_01.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(3.7deg) translate(1.0px,-0.4px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0016_photo_02.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(0.2deg) translate(4.3px,7.8px);pointer-events:auto">
                    </div>
                <div class="arr-left" data-icon="0016" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0016" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0014_照片托盘istj.png" style="left:50%; top:10043px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:12;" title="0014">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0014_照片托盘istj.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0014" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0014_photo_01.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:14;transform:rotate(3.7deg) translate(1.0px,-0.4px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_02.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:13;transform:rotate(0.2deg) translate(4.3px,7.8px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_03.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:12;transform:rotate(-0.6deg) translate(-4.3px,-2.0px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_04.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:11;transform:rotate(-3.5deg) translate(2.3px,7.9px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_05.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:10;transform:rotate(-2.3deg) translate(4.1px,-4.6px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_06.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:9;transform:rotate(3.4deg) translate(0.9px,-1.8px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_07.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:8;transform:rotate(-3.8deg) translate(-5.5px,6.4px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_08.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:7;transform:rotate(-2.5deg) translate(1.8px,0.9px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_09.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:6;transform:rotate(-0.4deg) translate(3.4px,-6.0px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_10.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(1.4deg) translate(-7.0px,-4.6px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_11.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(1.4deg) translate(-5.0px,-5.8px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_12.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(-0.0deg) translate(2.2px,-7.9px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_13.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(1.4deg) translate(1.3px,-8.0px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0014_photo_14.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(0.5deg) translate(-8.0px,0.9px);pointer-events:auto">
</div>
                <div class="arr-left" data-icon="0014" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0014" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0012_照片托盘smoothie.png" style="left:50%; top:11130px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:10;" title="0012">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0012_照片托盘smoothie.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0012" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0012_photo_01.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(3.3deg) translate(-5.8px,0.9px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0012_photo_02.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(-0.1deg) translate(7.3px,-1.9px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0012_photo_03.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(-0.4deg) translate(1.2px,-1.9px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0012_photo_04.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(3.3deg) translate(6.1px,3.6px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0012_photo_05.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-3.6deg) translate(7.8px,0.8px);pointer-events:auto">
</div>
                <div class="arr-left" data-icon="0012" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0012" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0009_照片托盘rainsinheaven.png" style="left:50%; top:12217px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:7;" title="0009">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0009_照片托盘rainsinheaven.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0009" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0009_photo_01.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(3.3deg) translate(-5.8px,0.9px);pointer-events:auto">
</div>
                <div class="arr-left" data-icon="0009" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0009" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0008_照片托盘wheniwithyou.png" style="left:50%; top:13304px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:6;" title="0008">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0008_照片托盘wheniwithyou.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0008" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
            <img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0008_photo_01.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-0.0deg) translate(-3.7px,2.2px);pointer-events:auto">
                </div>
                <div class="arr-left" data-icon="0008" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0008" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0006_照片托盘gobacktothefuture.png" style="left:50%; top:14391px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:4;" title="0006">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0006_照片托盘gobacktothefuture.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0006" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0006_photo_01.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(0.4deg) translate(-5.9px,3.4px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0006_photo_02.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(-1.6deg) translate(7.0px,-4.9px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0006_photo_03.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(2.1deg) translate(-5.3px,7.5px);pointer-events:auto">
</div>
                <div class="arr-left" data-icon="0006" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0006" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0003_照片托盘bothsides.png" style="left:50%; top:15478px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:1;" title="0003">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0003_照片托盘bothsides.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0003" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/polaroid/0003_photo_01.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(-1.8deg) translate(-0.2px,-6.7px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0003_photo_02.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(-1.3deg) translate(-6.8px,-7.8px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0003_photo_03.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(-1.7deg) translate(-6.1px,-3.0px);pointer-events:auto">
<img class="stack-photo" src="assets/polaroid/0003_photo_04.jpg" alt="" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(1.9deg) translate(-7.4px,2.0px);pointer-events:auto">
                    </div>
                <div class="arr-left" data-icon="0003" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0003" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
</div>

<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; z-index:2000;">
        <img src="assets/出道照片_0000_nana图标.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
    <div style="position:absolute; left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center;">
        <img src="assets/出道照片_0001_顶层白边.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<div id="fixed-hint" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%); font-size:40px; color:#d4889e; font-family:'Ma Shan Zheng',cursive; text-align:center; z-index:1998;">-往下滑查看更多-</div>

<div id="nav-left">
<a href="javascript:void(0)" data-top="260" class="nav-item">rookies</a>
<a href="javascript:void(0)" data-top="1347" class="nav-item">chewinggum</a>
<a href="javascript:void(0)" data-top="2434" class="nav-item">2018nct</a>
<a href="javascript:void(0)" data-top="3521" class="nav-item">wegoup</a>
<a href="javascript:void(0)" data-top="4608" class="nav-item">weboom</a>
<a href="javascript:void(0)" data-top="5695" class="nav-item">reload</a>
<a href="javascript:void(0)" data-top="6782" class="nav-item">universe</a>
<a href="javascript:void(0)" data-top="7869" class="nav-item">candy</a>
<a href="javascript:void(0)" data-top="8956" class="nav-item">smcupalace</a>
<a href="javascript:void(0)" data-top="10043" class="nav-item">istj</a>
<a href="javascript:void(0)" data-top="11130" class="nav-item">smoothie</a>
<a href="javascript:void(0)" data-top="12217" class="nav-item">rainsinheaven</a>
<a href="javascript:void(0)" data-top="13304" class="nav-item">wheniwithyou</a>
<a href="javascript:void(0)" data-top="14391" class="nav-item">gobacktothefuture</a>
<a href="javascript:void(0)" data-top="15478" class="nav-item">bothsides</a>
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
    // Shift entire icon tray down 50px
    document.querySelectorAll('.journey-icon').forEach(function(icon) {
        var cur = parseInt(icon.style.top);
        if (!isNaN(cur)) icon.style.top = (cur + 50) + 'px';
    });

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
        document.body.style.minHeight = (16835 * scale) + 'px';
        document.getElementById('page-content').style.overflow = 'auto';

    // Scale nav text
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
            var targetScroll = iconCenterY - window.innerHeight / 2 - 10;
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

        // Init: show first photo, sync shadow-caster
        photos.forEach(function(p, i) {
            p.style.zIndex = (i === 0) ? 10 : 0;
        });
        if (caster && photos[0]) {
            caster.src = photos[0].src;
            caster.style.transform = window.getComputedStyle(photos[0]).transform;
        }

        // Click photo to open lightbox (original size)
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
        var iconNum = stack.getAttribute('data-icon');
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