<style>
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

/* Content area */
#content-area {
    position: absolute;
    left: 50%;
    top: 240px;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
}

#content-single {
    display: block;
    max-height: 800px;
    width: auto;
    border-radius: 4px;
    box-shadow: 2px 3px 12px rgba(0,0,0,0.12);
    cursor: pointer;
    margin: 0 auto;
}

/* Waterfall: JS absolute positioning, 0 gap, centered */
#content-waterfall {
    display: none;
    position: relative;
    top: -50px;
    width: 2520px;
    margin: 0 auto;
    line-height: 0;
    overflow: visible;
}

#content-waterfall.active {
    display: block;
}

.wf-item {
    margin: 0;
    padding: 0;
    line-height: 0;
    z-index: 1;
}

.wf-item:hover {
    z-index: 999;
}

.wf-item img {
    width: 100%;
    height: 100%;
    display: block;
}

.wf-item img:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

/* Fixed tabs wrapper (0039-0044, same as fixed-icons pattern) */
#fixed-tabs {
    position: fixed;
    left: 0;
    top: calc(100vh - 120px);
    z-index: 1997;
    transform-origin: 0 0;
    pointer-events: none;
    width: 2560px;
    height: 136px;
}

/* Tab elements inside fixed-tabs: all same Y, pointer-events auto on interactive ones */
.fixed-tab {
    position: absolute;
    top: 30px;
    cursor: pointer;
    pointer-events: auto;
}

.fixed-tab img {
    display: block;
}

/* 0043 option bar */
#fixed-0043 {
    position: absolute;
    top: 0;
    left: 700px;
    z-index: 10;
}

#fixed-0043 img {
    display: block;
}

/* Tab buttons: z-index 30 > bar(20) > highlight(10) */
#fixed-0042 { left: 819px; z-index: 30; }
#fixed-0041 { left: 1055px; z-index: 30; }
#fixed-0040 { left: 1306px; z-index: 30; }
#fixed-0039 { left: 1564px; z-index: 30; }

/* 0044 selection highlight */
#fixed-0044 {
    position: absolute;
    top: 13px;
    left: 736px;
    z-index: 20;
    transition: left 0.3s ease;
}

#fixed-0044 img {
    display: block;
}

/* Fixed icons wrapper */
#fixed-icons {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1998;
    transform-origin: 0 0;
    pointer-events: none;
    width: 2560px;
    height: 1440px;
}

/* Fixed icons */
.icon-fixed {
    position: absolute;
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
    background: rgba(0,0,0,0.3);
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
    box-shadow: 0 8px 40px rgba(0,0,0,0.4);
    z-index: 10000;
}
</style>

<div class="canvas-wrapper" id="canvas">

    <div style="position:absolute; left:0; top:0; z-index:1; pointer-events:none; transform:rotate(-5deg); transform-origin:top left;"><img src="assets/首页_0005_首页兔子.png" alt=""></div>
    <div style="position:absolute; right:0; bottom:1500px; z-index:1; pointer-events:none; transform:rotate(5deg); transform-origin:bottom right;"><img src="assets/首页_0006_首页小猫.png" alt=""></div>

    <div id="content-area">
        <img id="content-single" src="assets/2014pic入社照.jpg" alt="">
        <div id="content-waterfall">

            <div class="wf-item" style="position:absolute; left:0px; top:0px; width:210px; height:280px;">
                <img src="assets/2014pic-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:0px; width:210px; height:223px;">
                <img src="assets/2014pic-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:0px; width:210px; height:157px;">
                <img src="assets/2014pic-补3.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:0px; width:210px; height:262px;">
                <img src="assets/2014pic-补4.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:0px; width:210px; height:118px;">
                <img src="assets/2014pic1017-1（first）.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:0px; width:210px; height:140px;">
                <img src="assets/2014pic1022-2（上海）.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:0px; width:210px; height:236px;">
                <img src="assets/2014pic1031-3.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:0px; width:210px; height:299px;">
                <img src="assets/2014pic1031-6.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:0px; width:210px; height:315px;">
                <img src="assets/2014pic1204-4.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:0px; width:210px; height:299px;">
                <img src="assets/2014pic1225-5.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:0px; width:210px; height:210px;">
                <img src="assets/2015pic-2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:0px; width:210px; height:140px;">
                <img src="assets/2015pic0213-1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:280px; width:210px; height:140px;">
                <img src="assets/2015pic0321-5.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:223px; width:210px; height:262px;">
                <img src="assets/2015pic0422-6（公式照）.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:157px; width:210px; height:118px;">
                <img src="assets/2015pic0618-7.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:262px; width:210px; height:210px;">
                <img src="assets/2015pic0623-8.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:118px; width:210px; height:274px;">
                <img src="assets/2015pic0709-9.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:140px; width:210px; height:118px;">
                <img src="assets/2015pic0710-10.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:236px; width:210px; height:118px;">
                <img src="assets/2015pic0710-11.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:299px; width:210px; height:135px;">
                <img src="assets/2015pic0716-12.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:315px; width:210px; height:297px;">
                <img src="assets/2015pic0716-13.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:299px; width:210px; height:295px;">
                <img src="assets/2015pic0716-14.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:210px; width:210px; height:294px;">
                <img src="assets/2015pic0716-15.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:140px; width:210px; height:295px;">
                <img src="assets/2015pic0716-16.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:420px; width:210px; height:301px;">
                <img src="assets/2015pic0729-17.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:485px; width:210px; height:280px;">
                <img src="assets/2015pic0809-18.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:275px; width:210px; height:280px;">
                <img src="assets/2015pic0813-19.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:472px; width:210px; height:280px;">
                <img src="assets/2015pic0813-20.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:392px; width:210px; height:280px;">
                <img src="assets/2015pic0813-21.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:258px; width:210px; height:279px;">
                <img src="assets/2015pic0905-22.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:354px; width:210px; height:280px;">
                <img src="assets/2015pic0905-23.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:434px; width:210px; height:140px;">
                <img src="assets/2015pic0915-24.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:612px; width:210px; height:118px;">
                <img src="assets/2015pic0915-25.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:594px; width:210px; height:157px;">
                <img src="assets/2015pic0918-26.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:504px; width:210px; height:280px;">
                <img src="assets/2015pic0918-27.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:435px; width:210px; height:280px;">
                <img src="assets/2015pic0918-28.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:721px; width:210px; height:157px;">
                <img src="assets/2015pic0927-29.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:765px; width:210px; height:280px;">
                <img src="assets/2015pic1005-30.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:555px; width:210px; height:280px;">
                <img src="assets/2015pic1005-31.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:752px; width:210px; height:140px;">
                <img src="assets/2015pic1016-32.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:672px; width:210px; height:140px;">
                <img src="assets/2015pic1016-33.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:537px; width:210px; height:140px;">
                <img src="assets/2015pic1016-34.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:634px; width:210px; height:140px;">
                <img src="assets/2015pic1016-35.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:574px; width:210px; height:315px;">
                <img src="assets/2015pic1119-36.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:730px; width:210px; height:280px;">
                <img src="assets/2015pic1120-37.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:751px; width:210px; height:143px;">
                <img src="assets/2015pic1120-38.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:784px; width:210px; height:157px;">
                <img src="assets/2015pic1121-39.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:715px; width:210px; height:157px;">
                <img src="assets/2015pic1122-39.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:878px; width:210px; height:255px;">
                <img src="assets/2015pic1122-40.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:1045px; width:210px; height:157px;">
                <img src="assets/2015pic1122-41.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:835px; width:210px; height:140px;">
                <img src="assets/2015pic1203-42.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:892px; width:210px; height:157px;">
                <img src="assets/2015pic1203-43.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:812px; width:210px; height:139px;">
                <img src="assets/2015pic1210-44.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:677px; width:210px; height:157px;">
                <img src="assets/2015pic1217-45.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:774px; width:210px; height:190px;">
                <img src="assets/2015pic1220-46.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:889px; width:210px; height:168px;">
                <img src="assets/2015pic1225-47.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:1010px; width:210px; height:118px;">
                <img src="assets/2015pic1231-48.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:894px; width:210px; height:118px;">
                <img src="assets/2015pic1231-49.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:941px; width:210px; height:140px;">
                <img src="assets/2015pic1231-50.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:872px; width:210px; height:110px;">
                <img src="assets/2016pic-317.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:1133px; width:210px; height:276px;">
                <img src="assets/2016pic-318.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:1202px; width:210px; height:373px;">
                <img src="assets/2016pic-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:975px; width:210px; height:140px;">
                <img src="assets/2016pic-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:1049px; width:210px; height:83px;">
                <img src="assets/2016pic-补3.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:951px; width:210px; height:245px;">
                <img src="assets/2016pic-补4.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:834px; width:210px; height:210px;">
                <img src="assets/2016pic-补5.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:964px; width:210px; height:210px;">
                <img src="assets/2016pic-补6.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:1057px; width:210px; height:210px;">
                <img src="assets/2016pic-补7.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:1128px; width:210px; height:299px;">
                <img src="assets/2016pic0126app-1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:1012px; width:210px; height:139px;">
                <img src="assets/2016pic0126app-10.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:1081px; width:210px; height:315px;">
                <img src="assets/2016pic0126app-11.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:982px; width:210px; height:315px;">
                <img src="assets/2016pic0126app-12.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:1409px; width:210px; height:280px;">
                <img src="assets/2016pic0126app-13.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:1575px; width:210px; height:117px;">
                <img src="assets/2016pic0126app-14.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:1115px; width:210px; height:117px;">
                <img src="assets/2016pic0126app-15.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:1132px; width:210px; height:316px;">
                <img src="assets/2016pic0126app-16.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:1196px; width:210px; height:138px;">
                <img src="assets/2016pic0126app-17.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:1044px; width:210px; height:118px;">
                <img src="assets/2016pic0126app-18.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:1174px; width:210px; height:157px;">
                <img src="assets/2016pic0126app-19.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:1267px; width:210px; height:296px;">
                <img src="assets/2016pic0126app-2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:1427px; width:210px; height:125px;">
                <img src="assets/2016pic0126app-20.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:1151px; width:210px; height:117px;">
                <img src="assets/2016pic0126app-21.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:1396px; width:210px; height:117px;">
                <img src="assets/2016pic0126app-22.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:1297px; width:210px; height:280px;">
                <img src="assets/2016pic0126app-23.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:1689px; width:210px; height:273px;">
                <img src="assets/2016pic0126app-24.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:1692px; width:210px; height:280px;">
                <img src="assets/2016pic0126app-25.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:1232px; width:210px; height:157px;">
                <img src="assets/2016pic0126app-26.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:1448px; width:210px; height:157px;">
                <img src="assets/2016pic0126app-27.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:1334px; width:210px; height:117px;">
                <img src="assets/2016pic0126app-3.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:1162px; width:210px; height:294px;">
                <img src="assets/2016pic0126app-4.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:1331px; width:210px; height:117px;">
                <img src="assets/2016pic0126app-5.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:1563px; width:210px; height:157px;">
                <img src="assets/2016pic0126app-6.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:1552px; width:210px; height:279px;">
                <img src="assets/2016pic0126app-7.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:1268px; width:210px; height:157px;">
                <img src="assets/2016pic0126app-8.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:1513px; width:210px; height:315px;">
                <img src="assets/2016pic0126app-9.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:1577px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-28.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:1962px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-29.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:1972px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-30.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:1389px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-31.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:1605px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-32.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:1451px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-33.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:1456px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-34.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:1448px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-35.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:1720px; width:210px; height:115px;">
                <img src="assets/2016pic0127app-36.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:1831px; width:210px; height:116px;">
                <img src="assets/2016pic0127app-37.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:1425px; width:210px; height:315px;">
                <img src="assets/2016pic0127app-38.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:1828px; width:210px; height:139px;">
                <img src="assets/2016pic0127app-39.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:1693px; width:210px; height:280px;">
                <img src="assets/2016pic0127app-40.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:2078px; width:210px; height:280px;">
                <img src="assets/2016pic0127app-41.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:2088px; width:210px; height:280px;">
                <img src="assets/2016pic0127app-42.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:1505px; width:210px; height:280px;">
                <img src="assets/2016pic0128app-43.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:1721px; width:210px; height:280px;">
                <img src="assets/2016pic0128app-44.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:1567px; width:210px; height:280px;">
                <img src="assets/2016pic0128app-45.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:1572px; width:210px; height:280px;">
                <img src="assets/2016pic0129app-46.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:1564px; width:210px; height:280px;">
                <img src="assets/2016pic0130app-47.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:1835px; width:210px; height:325px;">
                <img src="assets/2016pic0130app-48.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:1947px; width:210px; height:322px;">
                <img src="assets/2016pic0131app-49.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:1740px; width:210px; height:369px;">
                <img src="assets/2016pic0131app-50.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:1967px; width:210px; height:166px;">
                <img src="assets/2016pic0201app-51.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:1973px; width:210px; height:324px;">
                <img src="assets/2016pic0201app-52.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:2358px; width:210px; height:145px;">
                <img src="assets/2016pic0202app-53.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:2368px; width:210px; height:145px;">
                <img src="assets/2016pic0203app-54.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:1785px; width:210px; height:280px;">
                <img src="assets/2016pic0204app-55.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:2001px; width:210px; height:272px;">
                <img src="assets/2016pic0204app-56.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:1847px; width:210px; height:280px;">
                <img src="assets/2016pic0204app-57.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:1852px; width:210px; height:146px;">
                <img src="assets/2016pic0205app-58.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:1844px; width:210px; height:146px;">
                <img src="assets/2016pic0205app-59.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:2160px; width:210px; height:135px;">
                <img src="assets/2016pic0205app-60.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:2269px; width:210px; height:154px;">
                <img src="assets/2016pic0205app-61.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:2109px; width:210px; height:157px;">
                <img src="assets/2016pic0206app-62.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:2133px; width:210px; height:280px;">
                <img src="assets/2016pic0206app-63.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:2297px; width:210px; height:280px;">
                <img src="assets/2016pic0206app-64.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:2503px; width:210px; height:157px;">
                <img src="assets/2016pic0209app-65.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:2513px; width:210px; height:157px;">
                <img src="assets/2016pic0210app-66.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:2065px; width:210px; height:280px;">
                <img src="assets/2016pic0211app-67.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:2273px; width:210px; height:280px;">
                <img src="assets/2016pic0211app-68.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:2127px; width:210px; height:280px;">
                <img src="assets/2016pic0212app-69.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:1998px; width:210px; height:280px;">
                <img src="assets/2016pic0212app-70.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:1990px; width:210px; height:276px;">
                <img src="assets/2016pic0213app-71.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:2295px; width:210px; height:280px;">
                <img src="assets/2016pic0213app-72.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:2423px; width:210px; height:210px;">
                <img src="assets/2016pic0213ss-73.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:2266px; width:210px; height:301px;">
                <img src="assets/2016pic0213ss-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:2413px; width:210px; height:315px;">
                <img src="assets/2016pic0213ss-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:2577px; width:210px; height:140px;">
                <img src="assets/2016pic0213ss-补3.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:2660px; width:210px; height:140px;">
                <img src="assets/2016pic0213ss-补4.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:2670px; width:210px; height:280px;">
                <img src="assets/2016pic0214app-74.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:2345px; width:210px; height:280px;">
                <img src="assets/2016pic0214app-75.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:2553px; width:210px; height:157px;">
                <img src="assets/2016pic0214ss-76.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:2407px; width:210px; height:232px;">
                <img src="assets/2016pic0215app-77.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:2278px; width:210px; height:203px;">
                <img src="assets/2016pic0215app-78.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:2266px; width:210px; height:176px;">
                <img src="assets/2016pic0215app-79.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:2575px; width:210px; height:280px;">
                <img src="assets/2016pic0215app-80.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:2633px; width:210px; height:174px;">
                <img src="assets/2016pic0215app-81.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:2567px; width:210px; height:150px;">
                <img src="assets/2016pic0215app-82.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:2728px; width:210px; height:133px;">
                <img src="assets/2016pic0216app-83.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:2717px; width:210px; height:167px;">
                <img src="assets/2016pic0216app-84.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:2800px; width:210px; height:210px;">
                <img src="assets/2016pic0216app-85.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:2950px; width:210px; height:157px;">
                <img src="assets/2016pic0216app-86.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:2625px; width:210px; height:157px;">
                <img src="assets/2016pic0216app-87.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:2710px; width:210px; height:157px;">
                <img src="assets/2016pic0216app-88.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:2639px; width:210px; height:364px;">
                <img src="assets/2016pic0217app-89.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:2481px; width:210px; height:157px;">
                <img src="assets/2016pic0217app-90.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:2442px; width:210px; height:157px;">
                <img src="assets/2016pic0217app-91.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:2855px; width:210px; height:157px;">
                <img src="assets/2016pic0217app-92.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:2807px; width:210px; height:232px;">
                <img src="assets/2016pic0217app-93.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:2717px; width:210px; height:190px;">
                <img src="assets/2016pic0218app-94.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:2861px; width:210px; height:157px;">
                <img src="assets/2016pic0218app-95.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:2884px; width:210px; height:157px;">
                <img src="assets/2016pic0219app-96.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:3010px; width:210px; height:164px;">
                <img src="assets/2016pic0219app-97.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:3107px; width:210px; height:357px;">
                <img src="assets/2016pic0219app-98.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:2782px; width:210px; height:196px;">
                <img src="assets/2016pic0220app-100.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:2867px; width:210px; height:157px;">
                <img src="assets/2016pic0220app-99.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:3003px; width:210px; height:280px;">
                <img src="assets/2016pic0221app-101.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:2638px; width:210px; height:280px;">
                <img src="assets/2016pic0221app-102.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:2599px; width:210px; height:167px;">
                <img src="assets/2016pic0222app-103.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:3012px; width:210px; height:177px;">
                <img src="assets/2016pic0222app-104.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:3039px; width:210px; height:280px;">
                <img src="assets/2016pic0222app-105.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:2907px; width:210px; height:335px;">
                <img src="assets/2016pic0222app-106.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:3018px; width:210px; height:163px;">
                <img src="assets/2016pic0222app-107.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:3041px; width:210px; height:280px;">
                <img src="assets/2016pic0223app-108.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:3174px; width:210px; height:360px;">
                <img src="assets/2016pic0223app-109.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:3464px; width:210px; height:280px;">
                <img src="assets/2016pic0224app-110.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:2978px; width:210px; height:200px;">
                <img src="assets/2016pic0224app-111.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:3024px; width:210px; height:283px;">
                <img src="assets/2016pic0225app-112.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:3283px; width:210px; height:298px;">
                <img src="assets/2016pic0225app-113.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:2918px; width:210px; height:317px;">
                <img src="assets/2016pic0226app-114.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:2766px; width:210px; height:280px;">
                <img src="assets/2016pic0227app-115.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:3189px; width:210px; height:216px;">
                <img src="assets/2016pic0228app-116.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:3319px; width:210px; height:223px;">
                <img src="assets/2016pic0228app-117.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:3242px; width:210px; height:310px;">
                <img src="assets/2016pic0229app-118.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:3181px; width:210px; height:315px;">
                <img src="assets/2016pic0301app-119.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:3321px; width:210px; height:280px;">
                <img src="assets/2016pic0302app-122.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:3534px; width:210px; height:157px;">
                <img src="assets/2016pic0302app-123.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:3744px; width:210px; height:315px;">
                <img src="assets/2016pic0302app-124.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:3178px; width:210px; height:315px;">
                <img src="assets/2016pic0302app-125.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:3307px; width:210px; height:140px;">
                <img src="assets/2016pic0302app-126.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:3581px; width:210px; height:140px;">
                <img src="assets/2016pic0302app-127.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:3235px; width:210px; height:315px;">
                <img src="assets/2016pic0302app-128.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:3046px; width:210px; height:315px;">
                <img src="assets/2016pic0302app-129.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:3405px; width:210px; height:140px;">
                <img src="assets/2016pic0302app-130.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:3542px; width:210px; height:241px;">
                <img src="assets/2016pic0302app-131.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:3552px; width:210px; height:310px;">
                <img src="assets/2016pic0302app-132.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:3496px; width:210px; height:140px;">
                <img src="assets/2016pic0302app-133.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:3601px; width:210px; height:315px;">
                <img src="assets/2016pic0302app-134.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:3691px; width:210px; height:315px;">
                <img src="assets/2016pic0302sch-120.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:4059px; width:210px; height:299px;">
                <img src="assets/2016pic0302sch-121.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:3493px; width:210px; height:233px;">
                <img src="assets/2016pic0304app-135.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:3447px; width:210px; height:280px;">
                <img src="assets/2016pic0304app-136.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:3721px; width:210px; height:280px;">
                <img src="assets/2016pic0304app-137.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:3550px; width:210px; height:157px;">
                <img src="assets/2016pic0305app-138.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:3361px; width:210px; height:280px;">
                <img src="assets/2016pic0305app-139.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:3545px; width:210px; height:261px;">
                <img src="assets/2016pic0306app-140.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:3783px; width:210px; height:279px;">
                <img src="assets/2016pic0306app-141.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:3862px; width:210px; height:219px;">
                <img src="assets/2016pic0307app-142.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:3636px; width:210px; height:383px;">
                <img src="assets/2016pic0307app-143.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:3916px; width:210px; height:395px;">
                <img src="assets/2016pic0307app-144.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:4006px; width:210px; height:286px;">
                <img src="assets/2016pic0308app-145.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:4358px; width:210px; height:156px;">
                <img src="assets/2016pic0308app-146.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:3726px; width:210px; height:317px;">
                <img src="assets/2016pic0309app-147.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:3727px; width:210px; height:280px;">
                <img src="assets/2016pic0309app-148.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:4001px; width:210px; height:280px;">
                <img src="assets/2016pic0309app-149.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:3707px; width:210px; height:280px;">
                <img src="assets/2016pic0309app-150.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:3641px; width:210px; height:272px;">
                <img src="assets/2016pic0309app-151.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:3806px; width:210px; height:164px;">
                <img src="assets/2016pic0310app-152.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:4062px; width:210px; height:274px;">
                <img src="assets/2016pic0310app-153.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:4081px; width:210px; height:260px;">
                <img src="assets/2016pic0311app-154.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:4019px; width:210px; height:234px;">
                <img src="assets/2016pic0311app-155.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:4311px; width:210px; height:118px;">
                <img src="assets/2016pic0311app-156.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:4292px; width:210px; height:175px;">
                <img src="assets/2016pic0312app-157.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:4514px; width:210px; height:157px;">
                <img src="assets/2016pic0312app-158.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:4043px; width:210px; height:315px;">
                <img src="assets/2016pic0312app-159.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:4007px; width:210px; height:257px;">
                <img src="assets/2016pic0312app-160.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:4281px; width:210px; height:280px;">
                <img src="assets/2016pic0313app-161.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:3987px; width:210px; height:280px;">
                <img src="assets/2016pic0313app-162.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:3913px; width:210px; height:240px;">
                <img src="assets/2016pic0313app-163.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:3970px; width:210px; height:181px;">
                <img src="assets/2016pic0313app-164.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:4336px; width:210px; height:157px;">
                <img src="assets/2016pic0314app-165.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:4341px; width:210px; height:151px;">
                <img src="assets/2016pic0314app-166.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:4253px; width:210px; height:157px;">
                <img src="assets/2016pic0314app-167.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:4429px; width:210px; height:311px;">
                <img src="assets/2016pic0315app-168.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:4467px; width:210px; height:280px;">
                <img src="assets/2016pic0315app-169.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:4671px; width:210px; height:280px;">
                <img src="assets/2016pic0315app-170.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:4358px; width:210px; height:280px;">
                <img src="assets/2016pic0315app-171.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:4264px; width:210px; height:299px;">
                <img src="assets/2016pic0315app-172.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:4561px; width:210px; height:190px;">
                <img src="assets/2016pic0315app-173.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:4267px; width:210px; height:253px;">
                <img src="assets/2016pic0315app-174.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:4153px; width:210px; height:145px;">
                <img src="assets/2016pic0315app-175.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:4151px; width:210px; height:218px;">
                <img src="assets/2016pic0315app-176.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:4493px; width:210px; height:189px;">
                <img src="assets/2016pic0315app-177.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:4492px; width:210px; height:144px;">
                <img src="assets/2016pic0316app-178.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:4410px; width:210px; height:131px;">
                <img src="assets/2016pic0316app-179.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:4740px; width:210px; height:145px;">
                <img src="assets/2016pic0316app-180.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:4747px; width:210px; height:136px;">
                <img src="assets/2016pic0316app-181.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:4951px; width:210px; height:154px;">
                <img src="assets/2016pic0316app-182.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:4638px; width:210px; height:151px;">
                <img src="assets/2016pic0316app-183.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:4563px; width:210px; height:154px;">
                <img src="assets/2016pic0316app-184.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:4751px; width:210px; height:159px;">
                <img src="assets/2016pic0316app-185.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:4520px; width:210px; height:157px;">
                <img src="assets/2016pic0316app-186.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:4298px; width:210px; height:140px;">
                <img src="assets/2016pic0316app-187.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:4369px; width:210px; height:146px;">
                <img src="assets/2016pic0317app-188.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:4682px; width:210px; height:140px;">
                <img src="assets/2016pic0317app-189.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:4636px; width:210px; height:298px;">
                <img src="assets/2016pic0317app-190.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:4541px; width:210px; height:162px;">
                <img src="assets/2016pic0317app-191.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:4885px; width:210px; height:280px;">
                <img src="assets/2016pic0318app-192.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:4883px; width:210px; height:297px;">
                <img src="assets/2016pic0318app-193.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:5105px; width:210px; height:280px;">
                <img src="assets/2016pic0318app-194.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:4789px; width:210px; height:140px;">
                <img src="assets/2016pic0320app-195.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:4717px; width:210px; height:272px;">
                <img src="assets/2016pic0320app-196.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:4910px; width:210px; height:157px;">
                <img src="assets/2016pic0321app-197.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:4677px; width:210px; height:157px;">
                <img src="assets/2016pic0321app-198.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:4438px; width:210px; height:259px;">
                <img src="assets/2016pic0321app-199.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:4515px; width:210px; height:180px;">
                <img src="assets/2016pic0321app-200.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:4822px; width:210px; height:280px;">
                <img src="assets/2016pic0322app-201.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:4934px; width:210px; height:280px;">
                <img src="assets/2016pic0322app-202.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:4703px; width:210px; height:280px;">
                <img src="assets/2016pic0322app-203.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:5165px; width:210px; height:373px;">
                <img src="assets/2016pic0322app-204.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:5180px; width:210px; height:292px;">
                <img src="assets/2016pic0323app-205.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:5385px; width:210px; height:222px;">
                <img src="assets/2016pic0324app-206.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:4929px; width:210px; height:157px;">
                <img src="assets/2016pic0324app-207.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:4989px; width:210px; height:139px;">
                <img src="assets/2016pic0324app-208.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:5067px; width:210px; height:169px;">
                <img src="assets/2016pic0325app-209.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:4834px; width:210px; height:139px;">
                <img src="assets/2016pic0326app-210.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:4697px; width:210px; height:139px;">
                <img src="assets/2016pic0326app-211.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:4695px; width:210px; height:315px;">
                <img src="assets/2016pic0327app-212.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:5102px; width:210px; height:139px;">
                <img src="assets/2016pic0328app-213.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:5214px; width:210px; height:315px;">
                <img src="assets/2016pic0329app-214.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:4983px; width:210px; height:315px;">
                <img src="assets/2016pic0329app-215.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:5538px; width:210px; height:140px;">
                <img src="assets/2016pic0329app-216.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:5472px; width:210px; height:315px;">
                <img src="assets/2016pic0329app-217.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:5607px; width:210px; height:280px;">
                <img src="assets/2016pic0330app-218.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:5086px; width:210px; height:280px;">
                <img src="assets/2016pic0330app-219.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:5128px; width:210px; height:139px;">
                <img src="assets/2016pic0330app-220.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:5236px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-221.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:4973px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-222.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:4836px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-223.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:5010px; width:210px; height:313px;">
                <img src="assets/2016pic0330app-224.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:5241px; width:210px; height:314px;">
                <img src="assets/2016pic0330app-225.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:5529px; width:210px; height:323px;">
                <img src="assets/2016pic0330app-226.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:5298px; width:210px; height:315px;">
                <img src="assets/2016pic0330app-227.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:5678px; width:210px; height:315px;">
                <img src="assets/2016pic0330app-228.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:5787px; width:210px; height:315px;">
                <img src="assets/2016pic0330app-229.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:5887px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-230.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:5366px; width:210px; height:315px;">
                <img src="assets/2016pic0330app-231.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:5267px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-232.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:5376px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-233.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:5113px; width:210px; height:315px;">
                <img src="assets/2016pic0330app-234.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:4976px; width:210px; height:183px;">
                <img src="assets/2016pic0330app-235.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:5323px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-236.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:5555px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-237.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:5852px; width:210px; height:160px;">
                <img src="assets/2016pic0330app-238.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:5613px; width:210px; height:269px;">
                <img src="assets/2016pic0330app-239.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:5993px; width:210px; height:288px;">
                <img src="assets/2016pic0330app-240.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:6102px; width:210px; height:277px;">
                <img src="assets/2016pic0330app-241.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:6027px; width:210px; height:248px;">
                <img src="assets/2016pic0330app-242.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:5681px; width:210px; height:140px;">
                <img src="assets/2016pic0330app-243.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:5407px; width:210px; height:144px;">
                <img src="assets/2016pic0330app-244.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:5516px; width:210px; height:152px;">
                <img src="assets/2016pic0330app-245.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:5428px; width:210px; height:315px;">
                <img src="assets/2016pic0331app-246.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:5159px; width:210px; height:315px;">
                <img src="assets/2016pic0331app-247.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:5463px; width:210px; height:166px;">
                <img src="assets/2016pic0401app-248.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:5695px; width:210px; height:315px;">
                <img src="assets/2016pic0402app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:6012px; width:210px; height:328px;">
                <img src="assets/2016pic0405app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:5882px; width:210px; height:157px;">
                <img src="assets/2016pic0406app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:6281px; width:210px; height:280px;">
                <img src="assets/2016pic0407app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:6379px; width:210px; height:342px;">
                <img src="assets/2016pic0408app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:6275px; width:210px; height:280px;">
                <img src="assets/2016pic0409app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:5821px; width:210px; height:280px;">
                <img src="assets/2016pic0410app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:5551px; width:210px; height:157px;">
                <img src="assets/2016pic0411app-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:5668px; width:210px; height:165px;">
                <img src="assets/2016pic0411app-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:5743px; width:210px; height:174px;">
                <img src="assets/2016pic0411app-补3.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:5474px; width:210px; height:280px;">
                <img src="assets/2016pic0412app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:5629px; width:210px; height:280px;">
                <img src="assets/2016pic0413app-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:6010px; width:210px; height:298px;">
                <img src="assets/2016pic0413app-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:6340px; width:210px; height:281px;">
                <img src="assets/2016pic0420app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:6039px; width:210px; height:352px;">
                <img src="assets/2016pic0421app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:6561px; width:210px; height:280px;">
                <img src="assets/2016pic0422app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:6721px; width:210px; height:202px;">
                <img src="assets/2016pic0423app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:6555px; width:210px; height:157px;">
                <img src="assets/2016pic0424app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:6101px; width:210px; height:157px;">
                <img src="assets/2016pic0426app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:5708px; width:210px; height:157px;">
                <img src="assets/2016pic0429app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:5833px; width:210px; height:157px;">
                <img src="assets/2016pic0430app-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:5917px; width:210px; height:157px;">
                <img src="assets/2016pic0430app-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:5754px; width:210px; height:157px;">
                <img src="assets/2016pic0502app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:5909px; width:210px; height:157px;">
                <img src="assets/2016pic0503app-249.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:6308px; width:210px; height:157px;">
                <img src="assets/2016pic0504app-250.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:6621px; width:210px; height:216px;">
                <img src="assets/2016pic0505app-251.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:6391px; width:210px; height:163px;">
                <img src="assets/2016pic0505app-252.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:6841px; width:210px; height:210px;">
                <img src="assets/2016pic0505app-253.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:6923px; width:210px; height:237px;">
                <img src="assets/2016pic0505app-254.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:6712px; width:210px; height:196px;">
                <img src="assets/2016pic0505app-255.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:6258px; width:210px; height:150px;">
                <img src="assets/2016pic0505app-256.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:5865px; width:210px; height:140px;">
                <img src="assets/2016pic0505app-257.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:5990px; width:210px; height:139px;">
                <img src="assets/2016pic0505app-258.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:6074px; width:210px; height:140px;">
                <img src="assets/2016pic0505app-259.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:5911px; width:210px; height:140px;">
                <img src="assets/2016pic0505app-260.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:6066px; width:210px; height:141px;">
                <img src="assets/2016pic0505app-261.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:6465px; width:210px; height:291px;">
                <img src="assets/2016pic0505app-262.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:6837px; width:210px; height:314px;">
                <img src="assets/2016pic0505app-263.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:6554px; width:210px; height:149px;">
                <img src="assets/2016pic0505app-264.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:7051px; width:210px; height:314px;">
                <img src="assets/2016pic0505app-265.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:7160px; width:210px; height:314px;">
                <img src="assets/2016pic0505app-266.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:6908px; width:210px; height:164px;">
                <img src="assets/2016pic0505app-267.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:6408px; width:210px; height:168px;">
                <img src="assets/2016pic0505app-268.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:6005px; width:210px; height:150px;">
                <img src="assets/2016pic0505app-269.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:6129px; width:210px; height:155px;">
                <img src="assets/2016pic0505app-270.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:6214px; width:210px; height:168px;">
                <img src="assets/2016pic0505app-271.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:6051px; width:210px; height:145px;">
                <img src="assets/2016pic0505app-272.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:6207px; width:210px; height:313px;">
                <img src="assets/2016pic0505app-273.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:6756px; width:210px; height:314px;">
                <img src="assets/2016pic0505app-274.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:7151px; width:210px; height:152px;">
                <img src="assets/2016pic0505app-275.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:6703px; width:210px; height:137px;">
                <img src="assets/2016pic0505app-276.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:7365px; width:210px; height:162px;">
                <img src="assets/2016pic0505app-277.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:7474px; width:210px; height:162px;">
                <img src="assets/2016pic0505app-278.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:7072px; width:210px; height:166px;">
                <img src="assets/2016pic0505app-279.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:6576px; width:210px; height:155px;">
                <img src="assets/2016pic0505app-280.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:6155px; width:210px; height:159px;">
                <img src="assets/2016pic0505app-281.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:6284px; width:210px; height:315px;">
                <img src="assets/2016pic0506app-282.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:6382px; width:210px; height:315px;">
                <img src="assets/2016pic0507app-283.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:6196px; width:210px; height:140px;">
                <img src="assets/2016pic0508app-284.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:6520px; width:210px; height:315px;">
                <img src="assets/2016pic0509app-285.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:7070px; width:210px; height:315px;">
                <img src="assets/2016pic0510app-286.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:7303px; width:210px; height:160px;">
                <img src="assets/2016pic0510app-287.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:6840px; width:210px; height:141px;">
                <img src="assets/2016pic0510app-288.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:7527px; width:210px; height:154px;">
                <img src="assets/2016pic0510app-289.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:7636px; width:210px; height:145px;">
                <img src="assets/2016pic0510app-290.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:7238px; width:210px; height:155px;">
                <img src="assets/2016pic0510app-291.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:6731px; width:210px; height:143px;">
                <img src="assets/2016pic0510app-292.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:6314px; width:210px; height:149px;">
                <img src="assets/2016pic0510app-293.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:6599px; width:210px; height:151px;">
                <img src="assets/2016pic0510app-294.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:6697px; width:210px; height:183px;">
                <img src="assets/2016pic0510app-295.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:6336px; width:210px; height:315px;">
                <img src="assets/2016pic0510app-296.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:6835px; width:210px; height:140px;">
                <img src="assets/2016pic0513app-297.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:7385px; width:210px; height:140px;">
                <img src="assets/2016pic0514app-298.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:7463px; width:210px; height:315px;">
                <img src="assets/2016pic0515app-299.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:6981px; width:210px; height:276px;">
                <img src="assets/2016pic0516app-300.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:7681px; width:210px; height:140px;">
                <img src="assets/2016pic0518app-301.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:7781px; width:210px; height:140px;">
                <img src="assets/2016pic0519app-302.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:7393px; width:210px; height:315px;">
                <img src="assets/2016pic0519app-303.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:6874px; width:210px; height:314px;">
                <img src="assets/2016pic0520app-304.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:6463px; width:210px; height:140px;">
                <img src="assets/2016pic0520app-305.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:6750px; width:210px; height:248px;">
                <img src="assets/2016pic0521app-306.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:6880px; width:210px; height:140px;">
                <img src="assets/2016pic0524app-307.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:6651px; width:210px; height:140px;">
                <img src="assets/2016pic0524app-308.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:6975px; width:210px; height:141px;">
                <img src="assets/2016pic0524app-309.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:7525px; width:210px; height:315px;">
                <img src="assets/2016pic0524app-310.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:7778px; width:210px; height:157px;">
                <img src="assets/2016pic0528app-311.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:7257px; width:210px; height:280px;">
                <img src="assets/2016pic0529app-312.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2310px; top:7821px; width:210px; height:138px;">
                <img src="assets/2016pic0531app-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:0px; top:7921px; width:210px; height:155px;">
                <img src="assets/2016pic0701app-313.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:210px; top:7708px; width:210px; height:293px;">
                <img src="assets/2016pic0701app-314.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:420px; top:7188px; width:210px; height:210px;">
                <img src="assets/2016pic0701app-315.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:630px; top:6603px; width:210px; height:209px;">
                <img src="assets/2016pic0701app-316.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:840px; top:6998px; width:210px; height:157px;">
                <img src="assets/2016picapp0415-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1050px; top:7020px; width:210px; height:155px;">
                <img src="assets/2016picapp0415-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1260px; top:6791px; width:210px; height:280px;">
                <img src="assets/2016picapp0416-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1470px; top:7116px; width:210px; height:280px;">
                <img src="assets/2016picapp0417-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1680px; top:7840px; width:210px; height:157px;">
                <img src="assets/2016picapp0418-补.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:1890px; top:7935px; width:210px; height:328px;">
                <img src="assets/2016picapp0419-补1.jpg" style="width:100%; height:100%; display:block;">
            </div>
            <div class="wf-item" style="position:absolute; left:2100px; top:7537px; width:210px; height:282px;">
                <img src="assets/2016picapp0419-补2.jpg" style="width:100%; height:100%; display:block;">
            </div>

        </div>
    </div>
</div>

<!-- Fixed tabs (0039-0044) -->
<div id="fixed-tabs">
    <div id="fixed-0043"><img src="assets/出道前照片_0045_选项条.png" alt=""></div>
    <div class="fixed-tab" id="fixed-0042" data-src="assets/2014pic入社照.jpg"><img src="assets/出道前照片_0042_入社.png" alt=""></div>
    <div class="fixed-tab" id="fixed-0041" data-src="assets/2015pic0422-6（公式照）.jpg"><img src="assets/出道前照片_0041_公开.png" alt=""></div>
    <div class="fixed-tab" id="fixed-0040" data-src="assets/chewinggum0821-1.jpg"><img src="assets/出道前照片_0040_出道.png" alt=""></div>
    <div class="fixed-tab" id="fixed-0039"><img src="assets/出道前照片_0039_全部.png" alt=""></div>
    <div id="fixed-0044"><img src="assets/出道前照片_0044_选择底.png" alt=""></div>
</div>

<!-- Fixed icons -->
<div id="fixed-icons">
    <div class="icon-fixed" style="left:15px; top:15px; z-index:2000;"><img src="assets/出道前照片_0000_nana图标.png" alt=""></div>
    <div class="icon-fixed" style="left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center; z-index:1999;"><img src="assets/出道前照片_0001_顶层白边.png" alt=""></div>
</div>

<div class="lightbox-overlay" id="lightbox">
    <img id="lightbox-img" src="" alt="">
</div>

<div id="back-btn" style="position:fixed; right:0px; bottom:0px; transform:scale(0.6); transform-origin:right bottom; z-index:2000; cursor:pointer;"><img src="assets/返回按钮.png" alt="" style="display:block;"></div>

<script>
(function() {
    // Prevent browser from restoring scroll position on refresh
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    var canvas = document.getElementById('canvas');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var contentSingle = document.getElementById('content-single');
    var contentWaterfall = document.getElementById('content-waterfall');
    var selHighlight = document.getElementById('fixed-0044');
    var fixedTabs = document.getElementById('fixed-tabs');
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
        fixedTabs.style.transform = 'scale(' + scale + ')';
        var canvasHeight = parseInt(canvas.style.height) || 2800;
        // Negative margin compensates: transform scale() is visual-only, layout still full size
        canvas.style.marginBottom = -(canvasHeight * (1 - scale)) + 'px';
        document.body.style.minHeight = (canvasHeight * scale) + 'px';
        document.getElementById('page-content').style.overflow = 'auto';
    }

    canvas.style.height = '2800px';
    selHighlight.style.left = '736px';
    window.scrollTo(0, 0);
    resize();
    window.addEventListener('resize', resize);

    var tabPositions = {
        '0042': 736,
        '0041': 980,
        '0040': 1234,
        '0039': 1512
    };

    // Tab click handler
    var tabs = document.querySelectorAll('.fixed-tab');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.stopPropagation();
            window.scrollTo(0, 0);
            playSound();

            var tabId = tab.id.replace('fixed-', '');

            selHighlight.style.left = tabPositions[tabId] + 'px';

            if (tabId === '0039') {
                contentSingle.style.display = 'none';
                contentWaterfall.classList.add('active');
                // Dynamic: compute actual waterfall bottom + 50px whitespace
                var wfItems = contentWaterfall.querySelectorAll('.wf-item');
                var maxBottom = 0;
                wfItems.forEach(function(item) {
                    var b = parseInt(item.style.top) + parseInt(item.style.height);
                    if (b > maxBottom) maxBottom = b;
                });
                // 240 = content-area top, -50 = waterfall relative offset, no extra whitespace
                var h = 240 - 50 + maxBottom;
                canvas.style.minHeight = h + 'px';
                canvas.style.height = h + 'px';
                setTimeout(function() {
                    resize();
                    window.scrollTo(0, 0);
                }, 150);
            } else {
                contentWaterfall.classList.remove('active');
                contentSingle.style.display = 'block';
                contentSingle.src = tab.getAttribute('data-src');
                canvas.style.minHeight = '2800px';
                canvas.style.height = '2800px';
                resize();
                window.scrollTo(0, 0);
            }
        });
    });

    // Content single photo lightbox
    contentSingle.addEventListener('click', function(e) {
        e.stopPropagation();
        playSound();
        lightboxImg.src = contentSingle.src;
        lightbox.classList.add('active');
    });

    // Waterfall photo lightbox
    contentWaterfall.addEventListener('click', function(e) {
        var img = e.target;
        if (img.tagName === 'IMG') {
            playSound();
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        }
    });

    // Lightbox close
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

    window.addEventListener('load', function() {
        resize();
    });

    var backBtn = document.getElementById('back-btn');
    if (backBtn) { backBtn.addEventListener('click', function() { playSound(); setTimeout(function() { navigateTo('album'); }, 300); }); }
})();
</script>