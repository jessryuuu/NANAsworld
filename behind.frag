<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    background-color: #FFD1E0;
}

#content-area {
    width: 900px;
    max-width: 90vw;
    margin: 80px auto 120px;
    padding: 0 20px;
    font-family: 'Georgia', 'Noto Serif SC', serif;
    font-size: 19px;
    line-height: 2.2;
    color: #493434;
    text-align: justify;
}

#content-area p {
    margin-bottom: 32px;
    text-indent: 2em;
}
</style>

<div id="content-area">
    <p>首先，祝jaemin生日快乐！！&gt;&lt;</p>
    <p>很感谢进入这个网站的所有人，老实说，制作这个关于jaemin的网站是我的一时兴起，大概在jaemin生日前不到一个月我才萌生了制作这个网站的念头。大部分要归功于jnjm这次的fm活动，让我感受到了对jaemin前所未有的热情！！同时我想到作为00年出生的jaemin在过完今年的生日后就要从25岁步入26岁了，在他长达十年的偶像生涯中，也是很值得去纪念的。</p>
    <p>我收集了jaemin的童年照片'child'、作为smrookies其中一员时期的照片'rookies'、2016年出道至今以粉丝视角感受到对jaemin重要事件与回归的照片'journey'、每年sm官方发布的生日贺图以及零零散散的记录着现货jaemin的拍立得'polaroid'。在收集完照片后，我对整个网站进行了设计，纠结再三还是将它命名为NANA's World，加入了历次造型的小换装、电子拍照亭和留言板，网站所播放的歌曲除likewejustmet和bothsides外都是jaemin在兔子猫咪广播上推荐过的歌~在希望所有喜欢jaemin的人们在进入这个关于娜娜的小世界后，无论点开哪个界面都只能看到和jaemin有关的一切。</p>
    <p>收集照片的过程中，我就像是重新回到了2014年，一点一点地回顾jaemin这些年来所经历的一切。透过照片与网络讯息，我可以看到2017年以前孩子气的他，可以看到在2017年依然有很多粉丝在用爱等待着他，2018年后突然长大的、越来越游刃有余、风格百变的他。看着早期的照片，再看看现在的jaemin，制作的时候我总在感叹时间与成长真的很奇妙，每个时期的jaemin的长相并未相差很大，却能感知到时间与成长带来的变化。jaemin总担心自己的年龄问题，但是对于我们粉丝来说，只要是jaemin，无论他是多少岁都是最美好的存在，他对自己的严格要求和努力粉丝全都看在眼里，无论是舞蹈、声乐还是身体方面。</p>
    <p>我不是一个善于表达的人，但我想说整个网站的制作也没有非常专业，只是因为jaemin，所以我就想这么去尝试一下。我也很幸福能借这个机会好好考古以前的物料，除了有点后悔怎么没有早点喜欢上jaemin外就都是幸福了！</p>
    <p>我有很多事情都是在粉上jaemin后才慢慢去做的，他很像一个我青少年与青年时期的精神指引和老师，他的温柔善良和各种美好的品质总激励着我去做各种事情，真的非常非常感谢遇见了jaemin！因为jaemin我尝试了很多从未做过的事情，去了很多没去过的地方，认识很多很多和jaemin一样美好的同担朋友……</p>
    <p>感谢jaemin出现在了我的人生中，我爱你❤</p>
    <p>再次的，祝jaemin生日快乐！</p>
</div>

<div id="back-btn" style="position:fixed; right:0px; bottom:0px; transform:scale(0.6); transform-origin:right bottom; z-index:2000; cursor:pointer;">
    <img src="assets/返回按钮.png" alt="返回" style="display:block; width:auto; height:auto;">
</div>

<script>
(function() {
    var backBtn = document.getElementById('back-btn');
    var clickSound = new Audio('assets/点击音效.mp3');

    function playSound() {
        clickSound.volume = 1;
        clickSound.currentTime = 0;
        clickSound.play().catch(function(){});
    }

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            playSound();
            setTimeout(function() { navigateTo('main'); }, 300);
        });
    }

    document.getElementById('page-content').style.overflow = 'auto';
})();
</script>
