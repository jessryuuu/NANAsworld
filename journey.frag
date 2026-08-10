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
    top: 40px;
    height: calc(100vh - 40px);
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
        <div class="journey-icon" data-src="assets/出道照片_0038_照片托盘chewing.png" style="left:50%; top:260px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:36;" title="0038">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0038_照片托盘chewing.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0038" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0038_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:12;transform:rotate(-1.8deg) translate(0.7px,2.9px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:11;transform:rotate(3.7deg) translate(-2.1px,0.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:10;transform:rotate(-1.0deg) translate(0.8px,4.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:9;transform:rotate(3.9deg) translate(6.9px,6.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:8;transform:rotate(-3.6deg) translate(-4.1px,6.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:7;transform:rotate(0.5deg) translate(-5.7px,1.7px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:6;transform:rotate(3.5deg) translate(-4.3px,-2.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(-2.6deg) translate(7.6px,-4.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(-1.9deg) translate(-6.7px,-5.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(-3.9deg) translate(-7.9px,0.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(-1.6deg) translate(-2.1px,1.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0038_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-1.5deg) translate(3.9px,-3.6px);pointer-events:auto" loading="lazy">
</div>
                <div class="arr-left" data-icon="0038" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0038" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0037_照片托盘go.png" style="left:50%; top:1347px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:35;" title="0037">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0037_照片托盘go.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0037" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0037_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.1deg) translate(-4.5px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(-3.8deg) translate(0.1px,3.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(-1.8deg) translate(-7.6px,-2.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(-2.2deg) translate(-4.8px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(1.9deg) translate(2.4px,7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(1.4deg) translate(0.7px,-2.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(3.1deg) translate(-4.5px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(-3.3deg) translate(1.4px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(-0.6deg) translate(5.0px,5.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0037_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:0;transform:rotate(-3.8deg) translate(-7.9px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0037" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0037" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0036_照片托盘2018nct.png" style="left:50%; top:2434px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:34;" title="0036">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0036_照片托盘2018nct.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0036" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0036_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0036_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0036_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0036_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0036_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto" loading="lazy">
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

<img class="stack-photo shadow" src="assets/0035_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:11;transform:rotate(2.4deg) translate(-2.8px,-3.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:10;transform:rotate(2.6deg) translate(-6.2px,-0.3px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:9;transform:rotate(0.5deg) translate(1.8px,-5.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:8;transform:rotate(1.0deg) translate(0.0px,4.9px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:7;transform:rotate(-3.8deg) translate(7.3px,-4.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:6;transform:rotate(2.5deg) translate(0.1px,4.7px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(-2.5deg) translate(-2.9px,-5.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(2.2deg) translate(0.5px,-4.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(-2.5deg) translate(-6.7px,-4.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(0.5deg) translate(-1.0px,2.9px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0035_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-3.4deg) translate(5.4px,6.7px);pointer-events:auto" loading="lazy">
</div>
                <div class="arr-left" data-icon="0035" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0035" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0034_照片托盘ateen.png" style="left:50%; top:4608px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:32;" title="0034">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0034_照片托盘ateen.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0034" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0034_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(1.1deg) translate(1.7px,-5.6px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0034" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0034" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0033_照片托盘hairintheair.png" style="left:50%; top:5695px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:31;" title="0033">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0033_照片托盘hairintheair.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0033" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0033_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0033_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0033" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0033" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0032_照片托盘candlelight.png" style="left:50%; top:6782px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:30;" title="0032">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0032_照片托盘candlelight.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0032" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0032_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0032_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0032" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0032" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0031_照片托盘讨厌你的方法.png" style="left:50%; top:7869px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:29;" title="0031">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0031_照片托盘讨厌你的方法.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0031" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0031_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.8deg) translate(-4.8px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(4.0deg) translate(2.4px,-1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(0.1deg) translate(-6.1px,-4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-1.3deg) translate(1.4px,-4.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-2.2deg) translate(-6.9px,2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-2.2deg) translate(6.5px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-3.4deg) translate(-4.2px,2.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-2.3deg) translate(-5.9px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(0.6deg) translate(-0.4px,4.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0031_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(2.5deg) translate(-5.0px,-6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0031" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0031" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0030_照片托盘dontneedyoulove.png" style="left:50%; top:8956px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:28;" title="0030">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0030_照片托盘dontneedyoulove.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0030" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0030_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-0.6deg) translate(-1.2px,-0.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0030_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(1.8deg) translate(2.8px,7.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0030_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-3.2deg) translate(-1.6px,-2.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0030_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.9deg) translate(-4.0px,-5.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0030_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-0.4deg) translate(-1.2px,-3.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0030_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.0deg) translate(6.8px,-0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0030_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(2.9deg) translate(0.8px,-7.2px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0030" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0030" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0029_照片托盘fireflies.png" style="left:50%; top:10043px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:27;" title="0029">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0029_照片托盘fireflies.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0029" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0029_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(4.0deg) translate(5.4px,7.5px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0029" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0029" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0028_照片托盘weboom.png" style="left:50%; top:11130px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:26;" title="0028">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0028_照片托盘weboom.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0028" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0028_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:8;transform:rotate(3.3deg) translate(-3.3px,-0.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0028_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:7;transform:rotate(-2.9deg) translate(7.9px,-4.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0028_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:6;transform:rotate(1.4deg) translate(1.6px,3.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0028_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(-0.7deg) translate(-1.9px,-1.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0028_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(-3.4deg) translate(-2.9px,-3.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0028_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(2.2deg) translate(-0.9px,-5.7px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0028_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(-3.7deg) translate(-2.5px,6.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0028_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-3.8deg) translate(-0.8px,3.8px);pointer-events:auto" loading="lazy">
</div>
                <div class="arr-left" data-icon="0028" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0028" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0027_照片托盘thedream.png" style="left:50%; top:12217px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:25;" title="0027">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0027_照片托盘thedream.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0027" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/0027_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0027_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0027" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0027" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0026_照片托盘reload.png" style="left:50%; top:13304px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:24;" title="0026">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0026_照片托盘reload.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0026" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0026_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:15;transform:rotate(1.9deg) translate(7.1px,4.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:14;transform:rotate(3.3deg) translate(-6.2px,1.3px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:13;transform:rotate(-0.5deg) translate(-3.8px,5.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:12;transform:rotate(-1.4deg) translate(7.6px,-2.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:11;transform:rotate(0.4deg) translate(4.4px,4.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:10;transform:rotate(-3.7deg) translate(3.7px,-6.3px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:9;transform:rotate(-1.3deg) translate(-6.5px,1.7px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:8;transform:rotate(-2.4deg) translate(-4.9px,0.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:7;transform:rotate(-0.6deg) translate(0.6px,0.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:6;transform:rotate(1.6deg) translate(6.4px,7.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(0.7deg) translate(2.0px,1.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(-1.2deg) translate(4.5px,-6.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(3.5deg) translate(-0.4px,4.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(1.5deg) translate(-6.7px,-1.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0026_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-0.9deg) translate(-6.0px,3.9px);pointer-events:auto" loading="lazy">
</div>
                <div class="arr-left" data-icon="0026" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0026" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0025_照片托盘resonpt1.png" style="left:50%; top:14391px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:23;" title="0025">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0025_照片托盘resonpt1.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0025" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/0025_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0025_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0025" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0025" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0024_照片托盘resonpt2.png" style="left:50%; top:15478px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:22;" title="0024">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0024_照片托盘resonpt2.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0024" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0024_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0024_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0024" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0024" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0023_照片托盘hotsauce.png" style="left:50%; top:16565px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:21;" title="0023">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0023_照片托盘hotsauce.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0023" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0023_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(1.8deg) translate(-5.4px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(3.9deg) translate(2.2px,0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(1.5deg) translate(5.5px,4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-2.2deg) translate(-7.5px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-1.9deg) translate(-4.6px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(3.0deg) translate(-3.0px,2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0023_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-0.8deg) translate(6.6px,-0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0023" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0023" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0022_照片托盘hellofuture.png" style="left:50%; top:17652px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:20;" title="0022">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0022_照片托盘hellofuture.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0022" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0022_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(1.8deg) translate(-5.4px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(3.9deg) translate(2.2px,0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(1.5deg) translate(5.5px,4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-2.2deg) translate(-7.5px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-1.9deg) translate(-4.6px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(3.0deg) translate(-3.0px,2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0022_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-0.8deg) translate(6.6px,-0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0022" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0022" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0021_照片托盘universe.png" style="left:50%; top:18739px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:19;" title="0021">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0021_照片托盘universe.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0021" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0021_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:18;transform:rotate(-0.4deg) translate(-3.3px,5.7px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:17;transform:rotate(-0.1deg) translate(-6.6px,3.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:16;transform:rotate(-3.4deg) translate(-4.8px,-6.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:15;transform:rotate(1.0deg) translate(5.5px,1.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:14;transform:rotate(-2.2deg) translate(5.5px,5.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:13;transform:rotate(-1.4deg) translate(-3.6px,2.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:12;transform:rotate(3.8deg) translate(6.6px,5.3px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:11;transform:rotate(1.7deg) translate(-4.4px,1.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:10;transform:rotate(-0.6deg) translate(2.2px,-0.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:9;transform:rotate(-2.4deg) translate(6.4px,-6.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:8;transform:rotate(-1.3deg) translate(-2.7px,6.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:7;transform:rotate(-3.1deg) translate(1.2px,6.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:6;transform:rotate(0.9deg) translate(6.8px,-1.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(-0.5deg) translate(-2.1px,-1.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(-1.2deg) translate(-6.8px,6.8px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(1.9deg) translate(2.9px,0.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(-2.4deg) translate(-4.4px,6.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0021_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(2.6deg) translate(-0.7px,3.4px);pointer-events:auto" loading="lazy">
</div>
                <div class="arr-left" data-icon="0021" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0021" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0020_照片托盘smcuexpress.png" style="left:50%; top:19826px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:18;" title="0020">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0020_照片托盘smcuexpress.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0020" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0020_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0020_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0020_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0020_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0020" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0020" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0019_照片托盘glitchmode.png" style="left:50%; top:20913px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:17;" title="0019">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0019_照片托盘glitchmode.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0019" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0019_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:32;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:31;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:30;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:29;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:28;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:27;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(1.8deg) translate(-5.4px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(3.9deg) translate(2.2px,0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(1.5deg) translate(5.5px,4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(-2.2deg) translate(-7.5px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-1.9deg) translate(-4.6px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.0deg) translate(-3.0px,2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-0.8deg) translate(6.6px,-0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_27.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-1.9deg) translate(-4.1px,1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_28.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-1.9deg) translate(1.4px,6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_29.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-0.8deg) translate(-4.5px,8.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_30.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(0.1deg) translate(-6.5px,-7.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_31.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-3.1deg) translate(2.0px,4.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0019_photo_32.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-0.6deg) translate(-7.0px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0019" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0019" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0018_照片托盘beatbox.png" style="left:50%; top:22000px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:16;" title="0018">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0018_照片托盘beatbox.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0018" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">

<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0018_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:42;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:41;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:40;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:39;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:38;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:37;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:36;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:35;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:34;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:33;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:32;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:31;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:30;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:29;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:28;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:27;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(1.8deg) translate(-5.4px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(3.9deg) translate(2.2px,0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(1.5deg) translate(5.5px,4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(-2.2deg) translate(-7.5px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(-1.9deg) translate(-4.6px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(3.0deg) translate(-3.0px,2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(-0.8deg) translate(6.6px,-0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_27.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-1.9deg) translate(-4.1px,1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_28.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-1.9deg) translate(1.4px,6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_29.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(-0.8deg) translate(-4.5px,8.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_30.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(0.1deg) translate(-6.5px,-7.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_31.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-3.1deg) translate(2.0px,4.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_32.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(-0.6deg) translate(-7.0px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_33.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(4.0deg) translate(0.5px,7.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_34.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(2.9deg) translate(-7.8px,3.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_35.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(1.5deg) translate(0.6px,-3.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_36.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(1.1deg) translate(-6.2px,-1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_37.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-0.4deg) translate(7.3px,6.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_38.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-1.9deg) translate(0.0px,-5.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_39.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(3.3deg) translate(5.9px,-3.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_40.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(1.1deg) translate(1.7px,-5.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_41.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(2.1deg) translate(0.6px,4.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0018_photo_42.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(0.2deg) translate(-8.0px,-2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0018" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0018" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0017_照片托盘candy.png" style="left:50%; top:23087px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:15;" title="0017">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0017_照片托盘candy.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0017" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0017_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:12;transform:rotate(-2.2deg) translate(6.9px,6.2px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:11;transform:rotate(-3.8deg) translate(5.6px,3.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:10;transform:rotate(1.4deg) translate(-7.8px,4.6px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:9;transform:rotate(-1.0deg) translate(4.9px,0.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:8;transform:rotate(2.1deg) translate(3.7px,-2.3px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:7;transform:rotate(1.4deg) translate(7.5px,5.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:6;transform:rotate(3.3deg) translate(-6.4px,2.0px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:5;transform:rotate(2.8deg) translate(-3.1px,-6.4px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:4;transform:rotate(2.0deg) translate(1.0px,6.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:3;transform:rotate(-2.0deg) translate(-6.6px,1.1px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:2;transform:rotate(2.8deg) translate(2.4px,-5.5px);pointer-events:auto" loading="lazy">
<img class="stack-photo" src="assets/0017_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;border-radius:10px;z-index:1;transform:rotate(-1.3deg) translate(-6.0px,-1.3px);pointer-events:auto" loading="lazy">
</div>
                <div class="arr-left" data-icon="0017" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0017" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0016_照片托盘smcupalace.png" style="left:50%; top:24174px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:14;" title="0016">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0016_照片托盘smcupalace.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0016" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0016_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-3.2deg) translate(2.1px,6.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0016_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-0.5deg) translate(3.1px,6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0016_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-3.6deg) translate(4.7px,-3.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0016_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-1.0deg) translate(-5.7px,0.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0016_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(0.5deg) translate(4.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0016" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0016" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0015_照片托盘bestfriendever.png" style="left:50%; top:25261px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:13;" title="0015">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0015_照片托盘bestfriendever.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0015" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0015_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.4deg) translate(5.9px,1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0015_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-2.1deg) translate(6.6px,-5.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0015_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-0.3deg) translate(-3.9px,-3.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0015_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-3.9deg) translate(4.9px,6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0015_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(1.4deg) translate(-5.5px,-0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0015_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-1.2deg) translate(1.4px,2.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0015_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0015_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0015" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0015" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0014_照片托盘istj.png" style="left:50%; top:26348px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:12;" title="0014">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0014_照片托盘istj.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0014" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0014_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:37;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:36;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:35;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:34;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:33;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:32;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:31;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:30;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:29;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:28;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:27;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(1.8deg) translate(-5.4px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(3.9deg) translate(2.2px,0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(1.5deg) translate(5.5px,4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-2.2deg) translate(-7.5px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(-1.9deg) translate(-4.6px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(3.0deg) translate(-3.0px,2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-0.8deg) translate(6.6px,-0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_27.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(-1.9deg) translate(-4.1px,1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_28.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(-1.9deg) translate(1.4px,6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_29.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-0.8deg) translate(-4.5px,8.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_30.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(0.1deg) translate(-6.5px,-7.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_31.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.1deg) translate(2.0px,4.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_32.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-0.6deg) translate(-7.0px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_33.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(4.0deg) translate(0.5px,7.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_34.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.9deg) translate(-7.8px,3.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_35.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(1.5deg) translate(0.6px,-3.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_36.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(1.1deg) translate(-6.2px,-1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0014_photo_37.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-0.4deg) translate(7.3px,6.0px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0014" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0014" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0013_照片托盘goldenage.png" style="left:50%; top:27435px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:11;" title="0013">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0013_照片托盘goldenage.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0013" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0013_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0013_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0013" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0013" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0012_照片托盘smoothie.png" style="left:50%; top:28522px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:10;" title="0012">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0012_照片托盘smoothie.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0012" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/0012_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0012_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0012" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0012" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0011_照片托盘moonlight.png" style="left:50%; top:29609px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:9;" title="0011">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0011_照片托盘moonlight.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0011" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0011_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-1.8deg) translate(2.1px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0011" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0011" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0010_照片托盘narcissism.png" style="left:50%; top:30696px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:8;" title="0010">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0010_照片托盘narcissism.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0010" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0010_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0010_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0010" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0010" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0009_照片托盘rainsinheaven.png" style="left:50%; top:31783px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:7;" title="0009">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0009_照片托盘rainsinheaven.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0009" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
<img class="stack-photo shadow" src="assets/0009_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0009_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0009" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0009" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0008_照片托盘wheniwithyou.png" style="left:50%; top:32870px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:6;" title="0008">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0008_照片托盘wheniwithyou.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0008" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
            <img class="shadow-caster" src="" alt="">
                        <img class="stack-photo shadow" src="assets/0008_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:31;transform:rotate(1.12deg) translate(-8px,-4px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:30;transform:rotate(-2.21deg) translate(4px,3px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:29;transform:rotate(3.14deg) translate(-7px,-1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:28;transform:rotate(-3.76deg) translate(-5px,0px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:27;transform:rotate(-3.79deg) translate(-5px,2px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(0.36deg) translate(-4px,1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(2.48deg) translate(-8px,5px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(1.59deg) translate(-3px,-6px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(3.66deg) translate(-3px,-7px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(-3.23deg) translate(6px,2px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(2.46deg) translate(4px,1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(3.78deg) translate(-2px,1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(2.64deg) translate(2px,6px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(0.62deg) translate(3px,-7px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(-2.18deg) translate(-3px,-7px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-2.14deg) translate(-6px,-4px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(1.09deg) translate(-2px,-2px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(-2.32deg) translate(-4px,7px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(1.18deg) translate(2px,-5px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(1.83deg) translate(-5px,-2px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(3.92deg) translate(2px,1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.48deg) translate(5px,4px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-2.17deg) translate(-7px,-3px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-1.86deg) translate(-5px,7px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(3.01deg) translate(-3px,2px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-0.83deg) translate(7px,-1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_27.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-1.88deg) translate(-4px,1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_28.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-1.90deg) translate(1px,6px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_29.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-0.80deg) translate(-4px,8px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_30.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(0.08deg) translate(-7px,-7px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0008_photo_31.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-3.12deg) translate(2px,5px);pointer-events:auto;cursor:pointer" loading="lazy"></div>
                <div class="arr-left" data-icon="0008" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0008" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0007_照片托盘sm30years.png" style="left:50%; top:33957px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:5;" title="0007">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0007_照片托盘sm30years.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0007" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
            <img class="shadow-caster" src="" alt="">
                        <img class="stack-photo shadow" src="assets/0007_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(1.12deg) translate(-8px,-4px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(-2.21deg) translate(4px,3px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(3.14deg) translate(-7px,-1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-3.76deg) translate(-5px,0px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.79deg) translate(-5px,2px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(0.36deg) translate(-4px,1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(2.48deg) translate(-8px,5px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(1.59deg) translate(-3px,-6px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(3.66deg) translate(-3px,-7px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-3.23deg) translate(6px,2px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(2.46deg) translate(4px,1px);pointer-events:auto;cursor:pointer" loading="lazy">
                        <img class="stack-photo" src="assets/0007_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(3.78deg) translate(-2px,1px);pointer-events:auto;cursor:pointer" loading="lazy"></div>
                <div class="arr-left" data-icon="0007" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0007" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0006_照片托盘gobacktothefuture.png" style="left:50%; top:35044px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:4;" title="0006">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0006_照片托盘gobacktothefuture.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0006" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0006_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:31;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:30;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:29;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:28;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:27;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(1.8deg) translate(-5.4px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(3.9deg) translate(2.2px,0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.5deg) translate(5.5px,4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(-2.2deg) translate(-7.5px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-1.9deg) translate(-4.6px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(3.0deg) translate(-3.0px,2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-0.8deg) translate(6.6px,-0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_27.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-1.9deg) translate(-4.1px,1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_28.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-1.9deg) translate(1.4px,6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_29.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-0.8deg) translate(-4.5px,8.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_30.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(0.1deg) translate(-6.5px,-7.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0006_photo_31.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-3.1deg) translate(2.0px,4.7px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0006" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0006" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0005_照片托盘beatitup.png" style="left:50%; top:36131px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:3;" title="0005">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0005_照片托盘beatitup.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0005" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">

<img class="stack-photo shadow" src="assets/0005_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:29;transform:rotate(1.1deg) translate(-7.6px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:28;transform:rotate(-2.2deg) translate(3.8px,2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:27;transform:rotate(3.1deg) translate(-6.6px,-1.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(-3.8deg) translate(-4.5px,0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(-3.8deg) translate(-4.8px,2.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(0.4deg) translate(-4.5px,1.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(2.5deg) translate(-7.9px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(1.6deg) translate(-2.6px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(3.7deg) translate(-2.6px,-6.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(-3.2deg) translate(5.6px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(2.5deg) translate(3.7px,0.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(3.8deg) translate(-1.9px,0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(2.6deg) translate(1.9px,5.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(0.6deg) translate(3.3px,-7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(-2.2deg) translate(-3.4px,-6.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(-2.1deg) translate(-6.4px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(1.1deg) translate(-2.2px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-2.3deg) translate(-3.7px,7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(1.2deg) translate(1.7px,-5.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.8deg) translate(-5.4px,-1.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(3.9deg) translate(2.2px,0.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(1.5deg) translate(5.5px,4.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(-2.2deg) translate(-7.5px,-3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-1.9deg) translate(-4.6px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(3.0deg) translate(-3.0px,2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-0.8deg) translate(6.6px,-0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_27.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-1.9deg) translate(-4.1px,1.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_28.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-1.9deg) translate(1.4px,6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0005_photo_29.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-0.8deg) translate(-4.5px,8.0px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0005" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0005" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0004_照片托盘windup.png" style="left:50%; top:37218px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:2;" title="0004">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0004_照片托盘windup.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0004" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0004_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(-1.7deg) translate(-7.3px,-4.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0004_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-3.7deg) translate(6.9px,0.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0004_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(3.9deg) translate(0.7px,-3.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0004_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(2.0deg) translate(-4.9px,-2.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0004_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(2.2deg) translate(5.9px,-2.7px);pointer-events:auto;cursor:pointer" loading="lazy">
</div>
                <div class="arr-left" data-icon="0004" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">◀</div>
                <div class="arr-right" data-icon="0004" style="position:absolute;top:50%;transform:translateY(-50%);z-index:30;color:#493434;font-size:47.04px;cursor:pointer;user-select:none;font-family:sans-serif;line-height:1;padding:8px 4px;pointer-events:auto;">▶</div>
            </div>
        </div>
        <div class="journey-icon" data-src="assets/出道照片_0003_照片托盘bothsides.png" style="left:50%; top:38305px; transform:translateX(-50%) scale(0.9); transform-origin:top center; z-index:1;" title="0003">
            <div class="tray-wrapper" style="position:relative;display:inline-block;">
                <img src="assets/出道照片_0003_照片托盘bothsides.png" alt="" style="display:block;width:auto;height:auto;">
                <div class="photo-stack" data-icon="0003" style="position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - 70px)) scale(0.70125);width:1346px;height:939px;z-index:5;">
<img class="shadow-caster" src="" alt="">
                    
<img class="stack-photo shadow" src="assets/0003_photo_01.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:56;transform:rotate(-3.0deg) translate(-2.1px,6.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_02.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:55;transform:rotate(1.9deg) translate(6.3px,-1.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_03.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:54;transform:rotate(3.8deg) translate(-0.1px,-0.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_04.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:53;transform:rotate(3.4deg) translate(0.3px,4.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_05.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:52;transform:rotate(1.8deg) translate(-6.7px,1.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_06.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:51;transform:rotate(2.6deg) translate(0.7px,-2.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_07.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:50;transform:rotate(-3.4deg) translate(2.6px,-3.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_08.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:49;transform:rotate(0.8deg) translate(-1.2px,3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_09.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:48;transform:rotate(-1.2deg) translate(-7.3px,5.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_10.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:47;transform:rotate(-1.2deg) translate(8.0px,-3.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_11.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:46;transform:rotate(3.8deg) translate(7.2px,-6.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_12.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:45;transform:rotate(1.1deg) translate(-2.2px,4.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_13.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:44;transform:rotate(1.4deg) translate(7.2px,-5.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_14.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:43;transform:rotate(0.9deg) translate(4.5px,-7.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_15.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:42;transform:rotate(-3.5deg) translate(4.5px,-2.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_16.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:41;transform:rotate(-0.9deg) translate(1.1px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_17.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:40;transform:rotate(1.4deg) translate(7.2px,-2.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_18.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:39;transform:rotate(2.1deg) translate(1.2px,0.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_19.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:38;transform:rotate(-0.8deg) translate(2.4px,-4.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_20.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:37;transform:rotate(-3.1deg) translate(3.8px,-0.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_21.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:36;transform:rotate(-0.9deg) translate(1.0px,-3.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_22.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:35;transform:rotate(-1.9deg) translate(-0.9px,7.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_23.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:34;transform:rotate(-1.7deg) translate(6.7px,-0.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_24.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:33;transform:rotate(-3.0deg) translate(5.6px,-0.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_25.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:32;transform:rotate(3.2deg) translate(-0.9px,-6.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_26.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:31;transform:rotate(1.5deg) translate(5.5px,-2.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_27.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:30;transform:rotate(-1.2deg) translate(-7.0px,0.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_28.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:29;transform:rotate(3.1deg) translate(5.6px,3.4px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_29.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:28;transform:rotate(3.4deg) translate(2.2px,4.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_30.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:27;transform:rotate(0.1deg) translate(-6.1px,-4.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_31.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:26;transform:rotate(-2.9deg) translate(4.6px,-7.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_32.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:25;transform:rotate(0.4deg) translate(-2.1px,4.9px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_33.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:24;transform:rotate(0.4deg) translate(1.8px,-6.6px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_34.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:23;transform:rotate(-1.5deg) translate(8.0px,3.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_35.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:22;transform:rotate(0.2deg) translate(4.3px,5.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_36.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:21;transform:rotate(-3.4deg) translate(7.6px,2.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_37.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:20;transform:rotate(-0.4deg) translate(2.9px,-2.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_38.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:19;transform:rotate(3.0deg) translate(4.5px,2.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_39.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:18;transform:rotate(-2.5deg) translate(7.5px,-1.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_40.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:17;transform:rotate(3.3deg) translate(-7.1px,-6.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_41.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:16;transform:rotate(-2.8deg) translate(-5.4px,-2.8px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_42.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:15;transform:rotate(1.7deg) translate(-2.5px,7.1px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_43.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:14;transform:rotate(3.2deg) translate(5.5px,-4.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_44.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:13;transform:rotate(1.1deg) translate(0.8px,-6.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_45.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:12;transform:rotate(-1.6deg) translate(0.5px,0.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_46.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:11;transform:rotate(-2.7deg) translate(7.1px,-5.5px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_47.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:10;transform:rotate(1.3deg) translate(3.5px,1.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_48.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:9;transform:rotate(2.7deg) translate(1.0px,5.2px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_49.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:8;transform:rotate(-3.8deg) translate(-7.3px,2.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_50.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:7;transform:rotate(0.6deg) translate(2.4px,4.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_51.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:6;transform:rotate(-0.7deg) translate(2.2px,-0.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_53.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:5;transform:rotate(1.0deg) translate(-3.4px,7.3px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_54.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:4;transform:rotate(-0.1deg) translate(4.9px,3.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_55.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:3;transform:rotate(-1.6deg) translate(-6.8px,-7.0px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_56.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:2;transform:rotate(-0.5deg) translate(-0.3px,-4.7px);pointer-events:auto;cursor:pointer" loading="lazy">
<img class="stack-photo" src="assets/0003_photo_57.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;z-index:1;transform:rotate(-2.6deg) translate(-3.2px,-6.4px);pointer-events:auto;cursor:pointer" loading="lazy">
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
<a href="javascript:void(0)" data-top="260" class="nav-item">chewinggum</a>
<a href="javascript:void(0)" data-top="1347" class="nav-item">go</a>
<a href="javascript:void(0)" data-top="2434" class="nav-item">2018nct</a>
<a href="javascript:void(0)" data-top="3521" class="nav-item">wegoup</a>
<a href="javascript:void(0)" data-top="4608" class="nav-item">ateen</a>
<a href="javascript:void(0)" data-top="5695" class="nav-item">hairintheair</a>
<a href="javascript:void(0)" data-top="6782" class="nav-item">candlelight</a>
<a href="javascript:void(0)" data-top="7869" class="nav-item">讨厌你的方法</a>
<a href="javascript:void(0)" data-top="8956" class="nav-item">dontneedyoulove</a>
<a href="javascript:void(0)" data-top="10043" class="nav-item">fireflies</a>
<a href="javascript:void(0)" data-top="11130" class="nav-item">weboom</a>
<a href="javascript:void(0)" data-top="12217" class="nav-item">thedream</a>
<a href="javascript:void(0)" data-top="13304" class="nav-item">reload</a>
<a href="javascript:void(0)" data-top="14391" class="nav-item">resonpt1</a>
<a href="javascript:void(0)" data-top="15478" class="nav-item">resonpt2</a>
<a href="javascript:void(0)" data-top="16565" class="nav-item">hotsauce</a>
<a href="javascript:void(0)" data-top="17652" class="nav-item">hellofuture</a>
<a href="javascript:void(0)" data-top="18739" class="nav-item">universe</a>
</div>
<div id="nav-right">
<a href="javascript:void(0)" data-top="19826" class="nav-item">smcuexpress</a>
<a href="javascript:void(0)" data-top="20913" class="nav-item">glitchmode</a>
<a href="javascript:void(0)" data-top="22000" class="nav-item">beatbox</a>
<a href="javascript:void(0)" data-top="23087" class="nav-item">candy</a>
<a href="javascript:void(0)" data-top="24174" class="nav-item">smcupalace</a>
<a href="javascript:void(0)" data-top="25261" class="nav-item">bestfriendever</a>
<a href="javascript:void(0)" data-top="26348" class="nav-item">istj</a>
<a href="javascript:void(0)" data-top="27435" class="nav-item">goldenage</a>
<a href="javascript:void(0)" data-top="28522" class="nav-item">smoothie</a>
<a href="javascript:void(0)" data-top="29609" class="nav-item">moonlight</a>
<a href="javascript:void(0)" data-top="30696" class="nav-item">narcissism</a>
<a href="javascript:void(0)" data-top="31783" class="nav-item">rainsinheaven</a>
<a href="javascript:void(0)" data-top="32870" class="nav-item">wheniwithyou</a>
<a href="javascript:void(0)" data-top="33957" class="nav-item">sm30years</a>
<a href="javascript:void(0)" data-top="35044" class="nav-item">gobacktothefuture</a>
<a href="javascript:void(0)" data-top="36131" class="nav-item">beatitup</a>
<a href="javascript:void(0)" data-top="37218" class="nav-item">windup</a>
<a href="javascript:void(0)" data-top="38305" class="nav-item">bothsides</a>
</div>

<!-- Lightbox -->
<div class="lightbox-overlay" id="lightbox">
    <img id="lightbox-img" src="" alt="">
</div>

<div id="back-btn" style="position:fixed; right:120px; bottom:0px; transform:scale(0.6); transform-origin:right bottom; z-index:2000; cursor:pointer;"><img src="assets/返回按钮.png" alt="" style="display:block;"></div>

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
        document.body.style.minHeight = (41962 * scale) + 'px';
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
            var targetScroll = iconCenterY - window.innerHeight / 2 - 60;
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