<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: #FFD1E0;
  width: 2560px;
  height: 1440px;
  overflow: hidden;
  transform-origin: top left;
  font-family: sans-serif;
}
/* 面板通用 */
.panel {
  position: fixed;
  left: 50px;
  bottom: 10px;
  width: 690px;
  height: 580px;
  background: #FFC6D8;
  overflow-y: auto;
  z-index: 2001;
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 15px;
  border-radius: 12px;
}
.panel.active { display: grid; }
.panel-item {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.panel-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: filter 0.15s;
}
.panel-item.selected img { filter: brightness(0.8); }
.panel-item .frame {
  position: absolute;
  top: -6px; left: -6px; right: -6px; bottom: -6px;
  pointer-events: none;
  display: none;
}

/* qbody */
#qbody {
  position: fixed;
  left: calc(50% + 399px);
  top: calc(50% + 115px);
  transform: translate(-50%, -50%);
  z-index: 1990;
  pointer-events: none;
}

/* 底图 */
#bg-base {
  position: fixed;
  left: calc(50% + 400px);
  top: calc(50% + 70px);
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 0;
  pointer-events: none;
}

/* 首页小猫 */
#cat-bg {
  position: fixed;
  left: calc(50% + 45px);
  top: calc(50% + 360px);
  transform: translate(-50%, -50%) scale(0.2016) rotate(-10deg);
  z-index: -1;
  pointer-events: none;
}

/* bottom panel */
#bottom-panel {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1991;
  transform-origin: 0 100%;
}
#bottom-panel > img { display: block; }

/* fixed icons */
#fixed-icons {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1999;
  transform-origin: 0 0;
  pointer-events: none;
}

/* btn-pair */
.btn-pair { position: relative; display: inline-block; cursor: pointer; }
.btn-pair .normal { display: block; }
.btn-pair .clicked { position: absolute; top: 0; left: 0; visibility: hidden; }
.btn-pair.active .normal { visibility: hidden; }
.btn-pair.active .clicked { visibility: visible; }
</style>

<!-- 背景底图 -->
<img id="bg-base" src="assets/dressup/换装背景底.png" alt="">
<img id="cat-bg" src="assets/dressup/首页小猫.png" alt="">

<!-- qbody 基础身体 -->
<div id="qbody">
  <img src="assets/dressup/q版_0057_身体.png" alt="" style="transform:scale(0.4)">
</div>

<!-- qbody-outfit 服装上身图 (01-05: right对齐) -->
<img id="qbody-outfit-01" src="assets/dressup/qbody/01.png" alt="" style="position:fixed; right:287px; top:calc(50% - 280px); z-index:1992; transform:scale(0.4); transform-origin:100% 50%; pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-02" src="assets/dressup/qbody/02.png" alt="" style="position:fixed; right:205px; top:calc(50% - 449px); z-index:1992; transform:scale(0.36); transform-origin:100% 50%; pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-03" src="assets/dressup/qbody/03.png" alt="" style="position:fixed; right:275px; top:calc(50% - 327px); z-index:1992; transform:scale(0.395); transform-origin:100% 50%; pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-04" src="assets/dressup/qbody/04.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 58px); z-index:1992; transform:translate(-50%, -50%) scale(0.41); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-05" src="assets/dressup/qbody/05.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 60px); z-index:1992; transform:translate(-50%, -50%) scale(0.41); pointer-events:none; display:none; width:auto; height:auto;">

<!-- qbody-outfit (12-54: 居中定位) -->
<img id="qbody-outfit-12" src="assets/dressup/qbody/12.png" alt="" style="position:fixed; left:calc(50% + 409px); top:calc(50% + 228px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-15" src="assets/dressup/qbody/15.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 220px); z-index:1992; transform:translate(-50%, -50%) scale(0.39); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-18" src="assets/dressup/qbody/18.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 232px); z-index:1992; transform:translate(-50%, -50%) scale(0.41); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-21" src="assets/dressup/qbody/21.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 228px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-24" src="assets/dressup/qbody/24.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 157px); z-index:1992; transform:translate(-50%, -50%) scale(0.396); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-27" src="assets/dressup/qbody/27.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 231px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-30" src="assets/dressup/qbody/30.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 220px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-33" src="assets/dressup/qbody/33.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 226px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-36" src="assets/dressup/qbody/36.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 160px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-39" src="assets/dressup/qbody/39.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 230px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-42" src="assets/dressup/qbody/42.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 224px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-45" src="assets/dressup/qbody/45.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 227px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-48" src="assets/dressup/qbody/48.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 225px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-51" src="assets/dressup/qbody/51.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 225px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-54" src="assets/dressup/qbody/54.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 230px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">

<!-- qbody-outfit (57-86: 居中, 各top) -->
<img id="qbody-outfit-57" src="assets/dressup/qbody/57.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 230px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-61" src="assets/dressup/qbody/61.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 225px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-65" src="assets/dressup/qbody/65.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 226px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-68" src="assets/dressup/qbody/68.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 229px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-71" src="assets/dressup/qbody/71.png" alt="" style="position:fixed; left:calc(50% + 359px); top:calc(50% + 100px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-74" src="assets/dressup/qbody/74.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 228px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-77" src="assets/dressup/qbody/77.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 228px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-80" src="assets/dressup/qbody/80.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 224px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-83" src="assets/dressup/qbody/83.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 220px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="qbody-outfit-86" src="assets/dressup/qbody/86.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% + 220px); z-index:1992; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">

<!-- hair-body 图片 -->
<img id="hair-body-00" src="assets/dressup/hair/00.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 172px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-11" src="assets/dressup/hair/11.png" alt="" style="position:fixed; left:calc(50% + 396px); top:calc(50% - 188px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-14" src="assets/dressup/hair/14.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 140px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-17" src="assets/dressup/hair/17.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 123px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-20" src="assets/dressup/hair/20.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 170px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-23" src="assets/dressup/hair/23.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 183px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-26" src="assets/dressup/hair/26.png" alt="" style="position:fixed; left:calc(50% + 394px); top:calc(50% - 185px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-29" src="assets/dressup/hair/29.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 183px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-32" src="assets/dressup/hair/32.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 183px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-35" src="assets/dressup/hair/35.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 196px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-38" src="assets/dressup/hair/38.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 128px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-41" src="assets/dressup/hair/41.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 130px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-44" src="assets/dressup/hair/44.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 180px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-47" src="assets/dressup/hair/47.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 180px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-50" src="assets/dressup/hair/50.png" alt="" style="position:fixed; left:calc(50% + 396px); top:calc(50% - 190px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-53" src="assets/dressup/hair/53.png" alt="" style="position:fixed; left:calc(50% + 385px); top:calc(50% - 169px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-56" src="assets/dressup/hair/56.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 166px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-59" src="assets/dressup/hair/59.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 180px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-60" src="assets/dressup/hair/60.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 155px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-64" src="assets/dressup/hair/64.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 170px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-67" src="assets/dressup/hair/67.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 185px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-70" src="assets/dressup/hair/70.png" alt="" style="position:fixed; left:calc(50% + 404px); top:calc(50% - 188px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-73" src="assets/dressup/hair/73.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 170px); z-index:1991; transform:translate(-50%, -50%) scale(0.32); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-76" src="assets/dressup/hair/76.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 165px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-79" src="assets/dressup/hair/79.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 173px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-82" src="assets/dressup/hair/82.png" alt="" style="position:fixed; left:calc(50% + 399px); top:calc(50% - 135px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">
<img id="hair-body-85" src="assets/dressup/hair/85.png" alt="" style="position:fixed; left:calc(50% + 409px); top:calc(50% - 202px); z-index:1991; transform:translate(-50%, -50%) scale(0.4); pointer-events:none; display:none; width:auto; height:auto;">

<!-- 服装面板 -->
<div id="clothing-panel" class="panel">
<div class="panel-item" data-id="0001"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0001_%E7%BB%83%E4%B9%A0%E5%AE%A4.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0002"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0002_%E9%A6%96%E8%89%BA%E6%A0%A1%E6%9C%8D%E6%AF%9B%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0003"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0003_%E9%A6%96%E8%89%BA%E6%A0%A1%E6%9C%8D%E5%A4%96%E5%A5%97.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0004"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0004_%E5%A4%A7%E8%9D%B4%E8%9D%B6%E7%BB%93%E5%85%94.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0005"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0005_%E5%85%94%E5%AD%90%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0012"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0012_rk%E5%92%86%E5%93%AE%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0015"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0015_rk%E7%B1%B3%E5%A5%87%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0018"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0018_%E5%87%BA%E9%81%93%E7%81%B0%E8%A1%AC%E8%A1%AB.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0021"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0021_%E5%87%BA%E9%81%93%E6%9D%A1%E7%BA%B9%E8%A1%AB.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0024"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0024_go%E7%99%BD%E5%A4%96%E5%A5%97.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0027"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0027_wgu%E6%A0%A1%E6%9C%8D.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0030"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0030_ateen%E6%A0%A1%E6%9C%8D.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0033"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0033_%E7%B2%89%E9%9F%A9%E6%9C%8D%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0036"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0036_%E6%80%AA%E7%9B%97%E5%9F%BA%E5%BE%B7%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0039"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0039_%E7%BA%A2%E9%9F%A9%E6%9C%8D%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0042"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0042_boom%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0045"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0045_ridin%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0048"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0048_maw%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0051"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0051_hs%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0054"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0054_hf%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0057"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0057_un%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0061"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0061_gm%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0065"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0065_beatbox%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0068"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0068_tds2%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0071"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0071_candy%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0074"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0074_bm%E6%AF%9B%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0077"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0077_smoothie%E7%BB%B6%E5%B8%A6%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0080"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0080_tds3%E8%93%9D%E7%9D%A1%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0083"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0083_windup%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0086"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0086_bothsides%E7%9A%AE%E8%8D%89%E8%A1%A3.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
</div>

<!-- 发型面板 -->
<div id="hair-panel" class="panel">
<div class="panel-item" data-id="0000"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0000_%E6%99%AE%E9%80%9A%E9%BB%91%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0011"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0011_rk%E5%92%86%E5%93%AE%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0014"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0014_rk%E7%B1%B3%E5%A5%87%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0017"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0017_%E5%87%BA%E9%81%93%E6%A0%97%E5%AD%90%E5%A4%B4.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0020"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0020_%E5%87%BA%E9%81%93%E8%83%8C%E5%A4%B4.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0023"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0023_go%E8%83%8C%E5%A4%B4.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0026"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0026_wgu%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0029"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0029_ateen%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0032"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0032_%E7%B2%89%E9%9F%A9%E6%9C%8D%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0035"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0035_%E6%80%AA%E7%9B%97%E5%9F%BA%E5%BE%B7%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0038"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0038_%E7%BA%A2%E9%9F%A9%E6%9C%8D%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0041"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0041_boom%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0044"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0044_ridin%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0047"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0047_maw%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0050"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0050_hs%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0053"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0053_hf%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0056"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0056_un%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0059"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0059_gm%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0060"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0060_gm%E5%A4%B4%E7%9B%94.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0064"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0064_beatbox%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0067"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0067_tds2%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0070"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0070_candy%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0073"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0073_bm%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0076"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0076_smoothie%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0079"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0079_tds3%E7%B4%AB%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0082"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0082_windup%E5%8F%91.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0085"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0085_bothsides%E7%9A%AE%E8%8D%89%E5%B8%BD.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
</div>

<!-- 套装面板 -->
<div id="suit-panel" class="panel">
<div class="panel-item" data-id="0006"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0006_%E7%BB%83%E4%B9%A0%E5%AE%A4%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0007"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0007_%E9%A6%96%E8%89%BA%E6%A0%A1%E6%9C%8D%E6%AF%9B%E8%A1%A3%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0008"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0008_%E9%A6%96%E8%89%BA%E6%A0%A1%E6%9C%8D%E5%A4%96%E5%A5%97%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0009"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0009_%E5%A4%A7%E8%9D%B4%E8%9D%B6%E7%BB%93%E5%85%94%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0010"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0010_%E5%85%94%E5%AD%90%E8%A3%85%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0013"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0013_rk%E5%92%86%E5%93%AE%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0016"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0016_rk%E7%B1%B3%E5%A5%87%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0019"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0019_%E5%87%BA%E9%81%93%E7%81%B0%E8%A1%AC%E8%A1%AB%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0022"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0022_%E5%87%BA%E9%81%93%E6%9D%A1%E7%BA%B9%E8%A1%AB%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0025"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0025_go%E7%99%BD%E5%A4%96%E5%A5%97%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0028"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0028_wgu%E6%A0%A1%E6%9C%8D%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0031"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0031_ateen%E6%A0%A1%E6%9C%8D%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0034"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0034_%E7%B2%89%E9%9F%A9%E6%9C%8D%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0037"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0037_%E6%80%AA%E7%9B%97%E5%9F%BA%E5%BE%B7%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0040"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0040_%E7%BA%A2%E9%9F%A9%E6%9C%8D%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0043"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0043_boom%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0046"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0046_ridin%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0049"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0049_maw%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0052"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0052_hs%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0055"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0055_hf%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0058"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0058_un%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0062"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0062_gm%E5%A5%97%E8%A3%852.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0063"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0063_gm%E5%A5%97%E8%A3%851.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0066"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0066_beatbox%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0069"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0069_tds2%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0072"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0072_candy%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0075"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0075_bm%E6%AF%9B%E8%A1%A3%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0078"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0078_smoothie%E7%BB%B6%E5%B8%A6%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0081"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0081_tds3%E8%93%9D%E7%9D%A1%E8%A1%A3%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0084"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0084_windup%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
<div class="panel-item" data-id="0087"><img src="assets/dressup/%E6%8D%A2%E8%A3%85%E9%80%89%E9%A1%B9_0087_bothsides%E7%9A%AE%E8%8D%89%E5%A5%97%E8%A3%85.png" alt=""><img class="frame" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt=""></div>
</div>

<!-- 顶层固定图标 (与polaroid一致) -->
<div id="fixed-icons" style="position:fixed; left:0; top:0; z-index:1999; transform-origin:0 0; pointer-events:none;">
    <div style="position:absolute; left:15px; top:15px; z-index:2000;">
        <img src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0000_nana%E5%9B%BE%E6%A0%87.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
    <div style="position:absolute; left:-160px; top:0px; transform:scale(0.8893); transform-origin:top center;">
        <img src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0001_%E9%A1%B6%E5%B1%82%E7%99%BD%E8%BE%B9.png" alt="" style="display:block; width:auto; height:auto;">
    </div>
</div>

<!-- 底部面板 -->
<div id="bottom-panel">

  <!-- 服装键按钮对 -->
  <div class="btn-pair" data-type="clothes" style="position:absolute; left:310px; bottom:628px; z-index:4; transform:scale(0.6); transform-origin:left bottom;">
    <img class="normal" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0005_%E6%9C%8D%E8%A3%85%E9%94%AE.png" alt="">
    <img class="clicked" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0004_%E6%9C%8D%E8%A3%85%E9%94%AE%EF%BC%88%E7%82%B9%E5%87%BB%EF%BC%89.png" alt="">
  </div>
  <!-- 发型键按钮对 -->
  <div class="btn-pair" data-type="hair" style="position:absolute; left:60px; bottom:628px; z-index:4; transform:scale(0.6); transform-origin:left bottom;">
    <img class="normal" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0007_%E5%8F%91%E5%9E%8B%E9%94%AE.png" alt="">
    <img class="clicked" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0006_%E5%8F%91%E5%9E%8B%E9%94%AE%EF%BC%88%E7%82%B9%E5%87%BB%EF%BC%89.png" alt="">
  </div>
  <!-- 套装键按钮对 -->
  <div class="btn-pair" data-type="suit" style="position:absolute; left:560px; bottom:628px; z-index:4; transform:scale(0.6); transform-origin:left bottom;">
    <img class="normal" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0003_%E5%A5%97%E8%A3%85%E9%94%AE.png" alt="">
    <img class="clicked" src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0002_%E5%A5%97%E8%A3%85%E9%94%AE%EF%BC%88%E7%82%B9%E5%87%BB%EF%BC%89.png" alt="">
  </div>
  <!-- 0008 选择框 (左下角边缘) -->
  <img src="assets/dressup/%E6%8D%A2%E8%A3%85%E6%9D%BF%E5%9D%97_0008_%E9%80%89%E9%A1%B9%E6%A1%86.png" alt="" style="position:absolute; left:0; bottom:0; z-index:3; transform:scale(0.532); transform-origin:left bottom; pointer-events:none;">
</div>

<div id="back-btn" style="position:fixed; right:0px; bottom:0px; transform:scale(0.6); transform-origin:right bottom; z-index:2000; cursor:pointer;">
    <img src="assets/返回按钮.png" alt="" style="display:block; width:auto; height:auto;">
</div>

<!-- 音效 -->
<audio id="click-sound" src="assets/dressup/%E7%82%B9%E5%87%BB%E9%9F%B3%E6%95%88.mp3" preload="auto"></audio>

<script>
// 音效
function playSound() {
  var s = document.getElementById('click-sound');
  if (s) { s.currentTime = 0; s.play().catch(function(){}); }
}

// 面板引用
var clothingPanel = document.getElementById('clothing-panel');
var hairPanel = document.getElementById('hair-panel');
var suitPanel = document.getElementById('suit-panel');
var panels = [clothingPanel, hairPanel, suitPanel];
var btnPairs = document.querySelectorAll('.btn-pair');

// 重置所有按钮对
function resetAllPairs() {
  btnPairs.forEach(function(bp) { bp.classList.remove('active'); });
}

// 按钮对点击——互斥切换面板
btnPairs.forEach(function(bp) {
  bp.addEventListener('click', function(e) {
    e.stopPropagation();
    playSound();
    var type = this.getAttribute('data-type');
    resetAllPairs();
    this.classList.add('active');
    panels.forEach(function(p) { p.classList.remove('active'); });
    if (type === 'clothes') {
      clothingPanel.classList.add('active');
    } else if (type === 'hair') {
      hairPanel.classList.add('active');
    } else if (type === 'suit') {
      suitPanel.classList.add('active');
    }
  });
});

// ====== compoundMap ======
var compoundMap = {
  6:[0,1],7:[0,2],8:[0,3],9:[0,4],10:[0,5],
  13:[11,12],16:[14,15],19:[17,18],22:[20,21],25:[23,24],
  28:[26,27],31:[29,30],34:[32,33],37:[35,36],40:[38,39],
  43:[41,42],46:[44,45],49:[47,48],52:[50,51],55:[53,54],
  58:[56,57],62:[60,61],63:[59,61],66:[64,65],69:[67,68],
  72:[70,71],75:[73,74],78:[76,77],81:[79,80],84:[82,83],87:[85,86]
};

// 通过 hairNum/outfitNum 查找对应的 suit key
function findSuitByMapping(hairNum, outfitNum) {
  for (var key in compoundMap) {
    var m = compoundMap[key];
    if (m[0] === hairNum && m[1] === outfitNum) return parseInt(key);
  }
  return null;
}

// activateCompound: 同时激活 hair-body + qbody-outfit，并高亮对应套装选项
function activateCompound(num) {
  var m = compoundMap[num];
  if (!m) return;
  // 隐藏所有
  hideAll('hair-body');
  hideAll('qbody-outfit');
  // 显示对应
  var hairEl = document.getElementById('hair-body-' + (m[0] < 10 ? '0' + m[0] : m[0]));
  var outfitEl = document.getElementById('qbody-outfit-' + (m[1] < 10 ? '0' + m[1] : m[1]));
  if (hairEl) hairEl.style.display = 'block';
  if (outfitEl) outfitEl.style.display = 'block';
  // 暗化套装面板对应项
  selectPanelItem(suitPanel, num.toString().padStart(4, '0'));
  // 暗化服装面板对应项
  selectPanelItem(clothingPanel, m[1].toString().padStart(4, '0'));
  // 暗化发型面板对应项
  selectPanelItem(hairPanel, m[0].toString().padStart(4, '0'));
}

// 隐藏所有指定前缀的元素
function hideAll(prefix) {
  var els = document.querySelectorAll('[id^="' + prefix + '-"]');
  for (var i = 0; i < els.length; i++) {
    els[i].style.display = 'none';
  }
}

// 面板选项暗化/高亮
function selectPanelItem(panel, dataId) {
  var items = panel.querySelectorAll('.panel-item');
  for (var i = 0; i < items.length; i++) {
    if (items[i].getAttribute('data-id') === dataId) {
      items[i].classList.add('selected');
    } else {
      items[i].classList.remove('selected');
    }
  }
}

// 清除面板选中状态
function clearPanelSelection(panel) {
  var items = panel.querySelectorAll('.panel-item');
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('selected');
  }
}

// ====== 服装面板点击 ======
clothingPanel.addEventListener('click', function(e) {
  var item = e.target.closest('.panel-item');
  if (!item) return;
  playSound();
  var dataId = item.getAttribute('data-id');
  var src = item.querySelector('img').getAttribute('src');
  var match = src.match(/_(\d{4})_/);
  if (!match) return;
  var clothNum = parseInt(match[1]);
  var outfitId = clothNum < 10 ? '0' + clothNum : '' + clothNum;

  // 仅暗化服装面板选中项
  clearPanelSelection(clothingPanel);
  selectPanelItem(clothingPanel, dataId);
  // 仅控制服装上身组
  hideAll('qbody-outfit');
  var outfitEl = document.getElementById('qbody-outfit-' + outfitId);
  if (outfitEl) outfitEl.style.display = 'block';
});

// ====== 发型面板点击 ======
hairPanel.addEventListener('click', function(e) {
  var item = e.target.closest('.panel-item');
  if (!item) return;
  playSound();
  var dataId = item.getAttribute('data-id');
  var src = item.querySelector('img').getAttribute('src');
  var match = src.match(/_(\d{4})_/);
  if (!match) return;
  var hairNum = parseInt(match[1]);
  var hairId = hairNum < 10 ? '0' + hairNum : '' + hairNum;

  // 仅暗化发型面板选中项，不影响服装和套装
  clearPanelSelection(hairPanel);
  selectPanelItem(hairPanel, dataId);
  // 仅隐藏发型上身组
  hideAll('hair-body');
  var hairEl = document.getElementById('hair-body-' + hairId);
  if (hairEl) hairEl.style.display = 'block';
});

// ====== 套装面板点击 ======
suitPanel.addEventListener('click', function(e) {
  var item = e.target.closest('.panel-item');
  if (!item) return;
  playSound();
  var dataId = item.getAttribute('data-id');
  var suitNum = parseInt(dataId);

  if (compoundMap[suitNum]) {
    activateCompound(suitNum);
  } else {
    // 没有 compound 映射的套装 → 仅暗化选中
    clearPanelSelection(clothingPanel);
    clearPanelSelection(hairPanel);
    selectPanelItem(suitPanel, dataId);
  }
});

// ====== initDefault ======
function initDefault() {
  // 激活发型键
  resetAllPairs();
  var hairBtn = document.querySelector('.btn-pair[data-type="hair"]');
  if (hairBtn) hairBtn.classList.add('active');
  // 显示发型面板
  panels.forEach(function(p) { p.classList.remove('active'); });
  if (hairPanel) hairPanel.classList.add('active');

  // 显示 hair-body-00
  hideAll('hair-body');
  var hair00 = document.getElementById('hair-body-00');
  if (hair00) hair00.style.display = 'block';

  // 暗化 0000_普通黑发
  selectPanelItem(hairPanel, '0000');

  // 显示 qbody-outfit-01
  hideAll('qbody-outfit');
  var outfit01 = document.getElementById('qbody-outfit-01');
  if (outfit01) outfit01.style.display = 'block';

  // 暗化 0001_练习室
  selectPanelItem(clothingPanel, '0001');
}

// fixed-icons 视口缩放（仅影响nana图标和顶层白边）
(function() {
  var DESIGN_W = 2560;
  function resizeIcons() {
    document.getElementById('fixed-icons').style.transform = 'scale(' + (window.innerWidth / DESIGN_W) + ')';
  }
  window.addEventListener('resize', resizeIcons);
  resizeIcons();  // SPA: 直接执行，DOM 已就绪
})();

// SPA: 直接初始化，DOMContentLoaded 已在 index.html 加载时触发
initDefault();

document.getElementById('back-btn').addEventListener('click', function() {
    playSound();
    setTimeout(function() { navigateTo('main'); }, 300);
});
</script>