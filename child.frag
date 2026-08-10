<style>
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background: #FFD1E0;
}

.canvas-wrapper {
    width: 2560px;
    transform-origin: top left;
    position: relative;
    background-color: #FFD1E0;
    min-height: 2800px;
}

.photo {
    position: absolute;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.photo img {
    display: block;
    height: auto;
    border-radius: 4px;
    box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.12);
}

.photo:hover {
    z-index: 200 !important;
}

/* Background decorations */
.deco {
    position: absolute;
    pointer-events: none;
}

.deco img {
    display: block;
    height: auto;
    opacity: 0.35;
}

/* Fixed icons */
.icon-fixed {
    position: fixed;
    pointer-events: none;
}

.icon-fixed img {
    display: block;
    width: auto;
    height: auto;
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
}

.lightbox-overlay.active {
    display: flex;
}

.lightbox-overlay img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 6px;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
    z-index: 10000;
}
</style>

<div class="canvas-wrapper" id="canvas">

    <!-- Background decorations (z-index: 4-6, below photos at z-index: 51+) -->
    <div class="deco" style="left:924px; top:903px; z-index:4; transform:translate(-50%,-50%);"><img src="assets/首页_0005_首页兔子.png" alt="rabbit-center" style="width:664px; height:auto;"></div>
    <div class="deco" style="left:2295px; top:951px; z-index:5;"><img src="assets/首页_0005_首页兔子.png" alt="rabbit" style="width:369px; height:auto;"></div>
    <div class="deco" style="left:1480px; top:137px; z-index:6;"><img src="assets/首页_0005_首页兔子.png" alt="rabbit" style="width:369px; height:auto;"></div>
    <div class="deco" style="left:-96px; top:139px; z-index:5;"><img src="assets/首页_0005_首页兔子.png" alt="rabbit" style="width:369px; height:auto;"></div>
    <div class="deco" style="left:-38px; top:1750px; z-index:6;"><img src="assets/首页_0005_首页兔子.png" alt="rabbit" style="width:369px; height:auto;"></div>
    <div class="deco" style="left:1466px; top:1328px; z-index:5;"><img src="assets/首页_0006_首页小猫.png" alt="cat" style="width:414px; height:auto;"></div>
    <div class="deco" style="left:2097px; top:109px; z-index:6;"><img src="assets/首页_0006_首页小猫.png" alt="cat" style="width:414px; height:auto;"></div>
    <div class="deco" style="left:2118px; top:1749px; z-index:5;"><img src="assets/首页_0006_首页小猫.png" alt="cat" style="width:414px; height:auto;"></div>

    <!-- 35 childhood photos, 7x5 grid + large random offsets -->
    <div class="photo" data-src="assets/child1.jpg" style="left:123px; top:244px; z-index:58; transform: rotate(-5deg);"><img src="assets/child1.jpg" alt="child1" style="width:220px;"></div>
    <div class="photo" data-src="assets/child2.jpg" style="left:394px; top:288px; z-index:72; transform: rotate(-7deg);"><img src="assets/child2.jpg" alt="child2" style="width:220px;"></div>
    <div class="photo" data-src="assets/child3.jpg" style="left:735px; top:283px; z-index:53; transform: rotate(-11deg);"><img src="assets/child3.jpg" alt="child3" style="width:208px;"></div>
    <div class="photo" data-src="assets/child4.jpg" style="left:1100px; top:286px; z-index:74; transform: rotate(-9deg);"><img src="assets/child4.jpg" alt="child4" style="width:220px;"></div>
    <div class="photo" data-src="assets/child5.jpg" style="left:1566px; top:295px; z-index:59; transform: rotate(15deg);"><img src="assets/child5.jpg" alt="child5" style="width:234px;"></div>
    <div class="photo" data-src="assets/child6.jpg" style="left:1878px; top:267px; z-index:63; transform: rotate(9deg);"><img src="assets/child6.jpg" alt="child6" style="width:234px;"></div>
    <div class="photo" data-src="assets/child7.jpg" style="left:2224px; top:383px; z-index:79; transform: rotate(-5deg);"><img src="assets/child7.jpg" alt="child7" style="width:234px;"></div>
    <div class="photo" data-src="assets/child8.jpg" style="left:112px; top:717px; z-index:64; transform: rotate(-12deg);"><img src="assets/child8.jpg" alt="child8" style="width:220px;"></div>
    <div class="photo" data-src="assets/child9.jpg" style="left:376px; top:732px; z-index:69; transform: rotate(-13deg);"><img src="assets/child9.jpg" alt="child9" style="width:234px;"></div>
    <div class="photo" data-src="assets/child10.jpg" style="left:740px; top:669px; z-index:65; transform: rotate(-3deg);"><img src="assets/child10.jpg" alt="child10" style="width:234px;"></div>
    <div class="photo" data-src="assets/child11.jpg" style="left:1277px; top:723px; z-index:54; transform: rotate(-12deg);"><img src="assets/child11.jpg" alt="child11" style="width:220px;"></div>
    <div class="photo" data-src="assets/child12.jpg" style="left:1557px; top:731px; z-index:73; transform: rotate(-4deg);"><img src="assets/child12.jpg" alt="child12" style="width:220px;"></div>
    <div class="photo" data-src="assets/child13.jpg" style="left:1979px; top:747px; z-index:81; transform: rotate(12deg);"><img src="assets/child13.jpg" alt="child13" style="width:220px;"></div>
    <div class="photo" data-src="assets/child14.jpg" style="left:2216px; top:622px; z-index:52; transform: rotate(-4deg);"><img src="assets/child14.jpg" alt="child14" style="width:234px;"></div>
    <div class="photo" data-src="assets/child15.jpg" style="left:45px; top:1028px; z-index:75; transform: rotate(4deg);"><img src="assets/child15.jpg" alt="child15" style="width:220px;"></div>
    <div class="photo" data-src="assets/child16.jpg" style="left:390px; top:1149px; z-index:66; transform: rotate(-7deg);"><img src="assets/child16.jpg" alt="child16" style="width:220px;"></div>
    <div class="photo" data-src="assets/child17.jpg" style="left:883px; top:1030px; z-index:61; transform: rotate(10deg);"><img src="assets/child17.jpg" alt="child17" style="width:234px;"></div>
    <div class="photo" data-src="assets/child18.jpg" style="left:1216px; top:1056px; z-index:51; transform: rotate(-14deg);"><img src="assets/child18.jpg" alt="child18" style="width:208px;"></div>
    <div class="photo" data-src="assets/child19.jpg" style="left:1622px; top:1056px; z-index:76; transform: rotate(8deg);"><img src="assets/child19.jpg" alt="child19" style="width:234px;"></div>
    <div class="photo" data-src="assets/child20.jpg" style="left:1869px; top:1029px; z-index:68; transform: rotate(-1deg);"><img src="assets/child20.jpg" alt="child20" style="width:208px;"></div>
    <div class="photo" data-src="assets/child21.jpg" style="left:2282px; top:1020px; z-index:56; transform: rotate(2deg);"><img src="assets/child21.jpg" alt="child21" style="width:234px;"></div>
    <div class="photo" data-src="assets/child22.jpg" style="left:99px; top:1513px; z-index:84; transform: rotate(-12deg);"><img src="assets/child22.jpg" alt="child22" style="width:220px;"></div>
    <div class="photo" data-src="assets/child23.jpg" style="left:428px; top:1391px; z-index:55; transform: rotate(14deg);"><img src="assets/child23.jpg" alt="child23" style="width:220px;"></div>
    <div class="photo" data-src="assets/child24.jpg" style="left:901px; top:1457px; z-index:82; transform: rotate(-3deg);"><img src="assets/child24.jpg" alt="child24" style="width:208px;"></div>
    <div class="photo" data-src="assets/child25.jpg" style="left:1109px; top:1345px; z-index:70; transform: rotate(-13deg);"><img src="assets/child25.jpg" alt="child25" style="width:234px;"></div>
    <div class="photo" data-src="assets/child26.jpg" style="left:1461px; top:1458px; z-index:85; transform: rotate(2deg);"><img src="assets/child26.jpg" alt="child26" style="width:234px;"></div>
    <div class="photo" data-src="assets/child27.jpg" style="left:1969px; top:1427px; z-index:80; transform: rotate(-6deg);"><img src="assets/child27.jpg" alt="child27" style="width:220px;"></div>
    <div class="photo" data-src="assets/child28.jpg" style="left:2195px; top:1426px; z-index:77; transform: rotate(11deg);"><img src="assets/child28.jpg" alt="child28" style="width:208px;"></div>
    <div class="photo" data-src="assets/child29.jpg" style="left:175px; top:1812px; z-index:60; transform: rotate(5deg);"><img src="assets/child29.jpg" alt="child29" style="width:234px;"></div>
    <div class="photo" data-src="assets/child30.jpg" style="left:524px; top:1887px; z-index:71; transform: rotate(4deg);"><img src="assets/child30.jpg" alt="child30" style="width:208px;"></div>
    <div class="photo" data-src="assets/child31.jpg" style="left:733px; top:1844px; z-index:78; transform: rotate(13deg);"><img src="assets/child31.jpg" alt="child31" style="width:234px;"></div>
    <div class="photo" data-src="assets/child32.jpg" style="left:1216px; top:1820px; z-index:57; transform: rotate(12deg);"><img src="assets/child32.jpg" alt="child32" style="width:220px;"></div>
    <div class="photo" data-src="assets/child33.jpg" style="left:1499px; top:1839px; z-index:62; transform: rotate(-4deg);"><img src="assets/child33.jpg" alt="child33" style="width:220px;"></div>
    <div class="photo" data-src="assets/child34.jpg" style="left:1839px; top:1807px; z-index:83; transform: rotate(3deg);"><img src="assets/child34.jpg" alt="child34" style="width:208px;"></div>
    <div class="photo" data-src="assets/child35.jpg" style="left:2267px; top:1895px; z-index:67; transform: rotate(-9deg);"><img src="assets/child35.jpg" alt="child35" style="width:220px;"></div>

</div>

<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; z-index:2000;">
        <img src="assets/出道前照片_0000_nana图标.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
    <div style="position:absolute; left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center;">
        <img src="assets/出道前照片_0001_顶层白边.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<div id="fixed-hint" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%); font-size:40px; color:#d4889e; font-family:'Comic Sans MS','Ma Shan Zheng','KaiTi',cursive; text-align:center; z-index:1998;">-往下滑查看更多-</div>

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
        document.body.style.minHeight = (canvas.scrollHeight * scale) + 'px';
        document.getElementById('page-content').style.overflow = 'auto';
    }

    resize();
    window.addEventListener('resize', resize);

    var photos = document.querySelectorAll('.photo');
    photos.forEach(function(photo) {
        photo.addEventListener('click', function(e) {
            e.stopPropagation();
            playSound();
            var src = photo.getAttribute('data-src');
            lightboxImg.src = src;
            lightbox.classList.add('active');
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

    var backBtn = document.getElementById('back-btn');
    if (backBtn) { backBtn.addEventListener('click', function() { playSound(); setTimeout(function() { navigateTo('album'); }, 300); }); }
})();
</script>