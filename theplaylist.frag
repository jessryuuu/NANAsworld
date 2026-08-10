<style>
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #FFD1E0;
}
</style>

<div id="fixed-rabbit" style="position:fixed; right:0; bottom:-150px; z-index:0; pointer-events:none; transform:scale(0.6) rotate(10deg); transform-origin:right bottom;">
    <img src="assets/music/首页_0005_首页兔子.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<div id="fixed-bg-pattern" style="position:fixed; left:-10px; top:150px; z-index:0; pointer-events:none; transform:scale(0.6); transform-origin:left top;">
    <img src="assets/music/音乐板块_0010_图案.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<div id="fixed-chain" style="position:fixed; right:0; top:200px; z-index:0; pointer-events:none; transform:scale(0.6); transform-origin:right top;">
    <img src="assets/music/音乐板块_0008_挂链.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<div id="fixed-cat" style="position:fixed; left:150px; bottom:-10px; z-index:0; pointer-events:none; transform:scale(0.4) rotate(-10deg); transform-origin:left bottom;">
    <img src="assets/music/首页_0006_首页小猫.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; z-index:2000;">
        <img src="assets/music/音乐板块_0000_nana图标.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
    <div style="position:absolute; left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center;">
        <img src="assets/music/音乐板块_0001_顶层白边.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<div id="fixed-mp3" style="position:fixed; bottom:0; left:calc(50% - 100px); transform:translateX(-50%) scale(0.5); transform-origin:bottom center; pointer-events:none;">
    <img src="assets/music/音乐板块_0009_mp3.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<div id="now-playing" style="position:fixed; bottom:320px; left:50%; transform:translateX(calc(-50% + 70px)) rotate(4deg); z-index:2002; color:#493434; font-size:30px; font-family:'ZCOOL KuaiLe', sans-serif; text-align:center; pointer-events:none; white-space:nowrap;">
    正在播放：<br>likewejustmet（inst.）
</div>

<div id="btn-prev" style="position:fixed; left:calc(50% - 172px); bottom:85px; z-index:2001; transform:scale(0.5); transform-origin:center; cursor:pointer; pointer-events:auto;">
    <img id="btn-prev-default" src="assets/music/音乐板块_0005_上一首.png" alt="" style="display:block; width:auto; height:auto;">
    <img id="btn-prev-click" src="assets/music/音乐板块_0004_上一首（点击）.png" alt="" style="display:block; width:auto; height:auto; position:absolute; top:0; left:0; visibility:hidden;">
</div>

<div id="btn-play" style="position:fixed; left:calc(50% - 50px); bottom:30px; z-index:2001; transform:scale(0.5); transform-origin:center; cursor:pointer; pointer-events:auto;">
    <img id="btn-play-on" src="assets/music/音乐板块_0006_播放键（关）.png" alt="" style="display:block; width:auto; height:auto;">
    <img id="btn-play-off" src="assets/music/音乐板块_0007_播放键（开）.png" alt="" style="display:block; width:auto; height:auto; position:absolute; top:0; left:0; visibility:hidden;">
</div>

<div id="btn-next" style="position:fixed; left:calc(50% + 110px); bottom:65px; z-index:2001; transform:scale(0.5); transform-origin:center; cursor:pointer; pointer-events:auto;">
    <img id="btn-next-default" src="assets/music/音乐板块_0003_下一首.png" alt="" style="display:block; width:auto; height:auto;">
    <img id="btn-next-click" src="assets/music/音乐板块_0002_下一首（点击）.png" alt="" style="display:block; width:auto; height:auto; position:absolute; top:0; left:0; visibility:hidden;">
</div>

<div id="back-btn" style="position:fixed; right:0px; bottom:0px; transform:scale(0.6); transform-origin:right bottom; z-index:2000; cursor:pointer;">
    <img src="assets/返回按钮.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<script>
(function() {
    var DESIGN_W = 2560;
    var playOn = document.getElementById('btn-play-on');
    var playOff = document.getElementById('btn-play-off');
    var prevDef = document.getElementById('btn-prev-default');
    var prevClick = document.getElementById('btn-prev-click');
    var nextDef = document.getElementById('btn-next-default');
    var nextClick = document.getElementById('btn-next-click');

    var nowPlaying = document.getElementById('now-playing');

    function syncPlayUI() {
        if (MusicBridge.isPlaying()) {
            playOn.style.visibility = 'visible';
            playOff.style.visibility = 'hidden';
        } else {
            playOn.style.visibility = 'hidden';
            playOff.style.visibility = 'visible';
        }
        nowPlaying.innerHTML = '正在播放：<br>' + MusicBridge.getTrackName();
    }

    syncPlayUI();

    // Play/Pause toggle — no stopPropagation so click bubbles to recover autoplay
    document.getElementById('btn-play').addEventListener('click', function() {
        MusicBridge.toggle();
        syncPlayUI();
    });

    // Prev with click-state flash
    document.getElementById('btn-prev').addEventListener('click', function() {
        prevDef.style.visibility = 'hidden';
        prevClick.style.visibility = 'visible';
        MusicBridge.prev();
        syncPlayUI();
        setTimeout(function() {
            prevClick.style.visibility = 'hidden';
            prevDef.style.visibility = 'visible';
        }, 300);
    });

    // Next with click-state flash
    document.getElementById('btn-next').addEventListener('click', function() {
        nextDef.style.visibility = 'hidden';
        nextClick.style.visibility = 'visible';
        MusicBridge.next();
        syncPlayUI();
        setTimeout(function() {
            nextClick.style.visibility = 'hidden';
            nextDef.style.visibility = 'visible';
        }, 300);
    });

    MusicBridge.onTrackChange = function() {
        syncPlayUI();
    };

    function resize() {
        var vw = window.innerWidth;
        var scale = vw / DESIGN_W;
        document.getElementById('fixed-icons').style.transform = 'scale(' + scale + ')';
    }

    resize();
    window.addEventListener('resize', resize);

    document.getElementById('back-btn').addEventListener('click', function() {
        var snd = new Audio('assets/点击音效.mp3');
        snd.volume = 1; snd.currentTime = 0; snd.play().catch(function(){});
        setTimeout(function() { navigateTo('main'); }, 300);
    });
})();
</script>