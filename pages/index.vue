<template>
  <div class="client-model fixed-page-header" id="content">
    <section class="container">
      <div>
        <div class="page-header">
          <div id="header" class="header">
            <div class="wrapper">
              <a class="logo" href="/views/home/g3_yh/home.html">
                <img src="/logo-demo.svg" alt="银河游戏" title="银河游戏">
              </a>
              <div class="main-menu">
                <ul>
                  <li class="item">
                    <a class="header-title active" data-command="index">首页</a>
                  </li>
                  <li class="item">
                    <a class="header-title" data-command="live-games">真人</a>
                  </li>
                  <li class="item">
                    <a class="header-title" data-command="slot-machine">电子</a>
                  </li>
                  <li class="item">
                    <a class="header-title" data-command="lottery">彩票</a>
                  </li>
                  <li class="item">
                    <a class="header-title" data-command="sport-games">体育</a>
                  </li>
                  <li class="item">
                    <a class="header-title" data-command="chess-games">棋牌</a>
                  </li>
                  <li class="item last">
                    <a class="header-title" data-command="activity">优惠</a>
                  </li>
                  <li class="item last hide">
                    <a class="header-title" data-command="usertry_game">免费试玩</a>
                  </li>
                  <li class="item last">
                    <a class="header-title" data-command="about">关于银河</a>
                  </li>
                  <li class="item">
                    <a class="header-title vip-privilege" data-command="vip-privileges">
                      <img src="/nav-vip.gif">
                    </a>
                  </li>
                </ul>
              </div>
              <div class="lottery-menu">
                <div class="list" data-lotterygroup="1">
                  <div class="title">时时彩</div>
                </div>
                <div class="list" data-lotterygroup="2">
                  <div class="title">全天彩</div>
                </div>
                <div class="list" data-lotterygroup="3">
                  <div class="title">11选5</div>
                </div>
                <div class="list" data-lotterygroup="4">
                  <div class="title">快3</div>
                </div>
                <div class="list" data-lotterygroup="5">
                  <div class="title">其他彩种</div>
                </div>
                <div class="list" data-lotterygroup="6">
                  <div class="title">双面盘</div>
                </div>
              </div>
              <div class="login-info">
                <div class="register-login">
                  <span class="register-btn" data-nav="register">注册</span>
                  <span class="login-btn active" data-command="loginBtn">登录</span>
                  <span class="usertry_game" data-command="usertry_game">试玩</span>
                </div>
                <div class="login-logined hide">
                  <div class="logined">
                    <span class="amount">
                      ￥
                      <span data-global="lotteryBalance"></span>
                    </span>
                    <span
                      class="active"
                      data-fund="href"
                      data-command="deposit"
                      data-user="deposit"
                    >存款</span>
                    <a
                      class="active none register_active"
                      data-test="register"
                      href="/views/regist/g3_yh/register.html"
                    >正式开户</a>
                  </div>
                  <div class="user-oper">
                    <div class="ivu-dropdown">
                      <div class="ivu-dropdown-rel">
                        <a data-command="vipcare" data-fund="href">
                          <span class="icon-user">个人中心</span>
                        </a>
                      </div>
                      <div class="ivu-select-dropdown-box">
                        <div class="ivu-select-dropdown">
                          <i class="glyphicon glyphicon-triangle-top"></i>
                          <ul class="ivu-dropdown-menu">
                            <li class="ivu-dropdown-item" data-command="deposit">存款专区</li>
                            <li class="ivu-dropdown-item" data-command="withdraw">提款专区</li>
                            <li class="ivu-dropdown-item" data-command="fund">游戏转账</li>
                            <li class="ivu-dropdown-item" data-command="fundrecord">帐变记录</li>
                            <li class="ivu-dropdown-item" data-command="moneyrecord">资金明细</li>
                            <li class="line-w ivu-dropdown-item" data-command="notice">
                              消息(
                              <span data-global="msgCount"></span>)
                            </li>
                            <li class="last ivu-dropdown-item" data-command="logout">退出</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
    <div class="noticehome" style>
      <div class="notice-txt">
        <span class="icon-notice icon-gonggaof6317e6"></span>
        <div class="notice-txt-content">
          <span class="f-left">最新公告:</span>
          <div id="nitoceContent">
            <div
              class="items cursor"
              data-isfull="undefined"
              time="1555671200"
              content="PT老虎机PT老虎机"
              style="margin-top: 0px;"
            >PT老虎机</div>
          </div>
        </div>
        <span class="notice-more">查看更多&gt;</span>
      </div>
    </div>
    <div class="content">
      <div class="plate2">
        <div class="main-header">
          <div class="line-l"></div>
          <span class="title">真人娱乐</span>
          <span class="subTitle">汇聚全球顶级真人娱乐平台</span>
          <span class="more">
            <a href="/views/game/lives.html">
              查看更多
              <span class="icon-more icon-kuozhan38561911"></span>
            </a>
          </span>
        </div>
        <div class="plate">
          <div class="plate-content clearfix">
            <div class="plate-left">
              <div v-swiper:mySwiper2="swiperOption2">
                <div class="swiper-wrapper swiper-wrapper2">
                  <div class="swiper-slide" v-for="(banner, index) in banners2" :key="index">
                    <img :src="banner">
                  </div>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
              </div>
            </div>
            <div class="plate-right">
              <div class="plate-item">
                <div class="plate-item-img cursor">
                  <div class="live_bg live_bg_0">
                    <img src="/yinhe89cc44.png">
                  </div>
                  <div class="abs">
                    <div class="txt">
                      <div class="txt1">AG真人</div>
                      <div class="txt2">美女主播 热线传情</div>
                    </div>
                    <div class="txt3 my_animated">
                      <div class="txt4">美女主播 热线传情</div>
                      <div class="txt5">全球首创6张牌先发，美女主播热线传情，赢钱机会绝不错过</div>
                      <div class="button" style="width: 100%;">
                        <div class="line-btn">
                          <span
                            class="btn"
                            data-gamein="slot-machine"
                            data-pid="67"
                            title="AG/XIN/AG捕鱼/YOPLAY"
                            content-href="?pid=67&amp;gametype=0"
                          >进入游戏</span>
                          <span
                            class="btn empty"
                            data-tryplay="slot-machine"
                            data-pid="67"
                            data-trypgametype="0"
                          >免费试玩</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plate-item" style="margin-left: 5px;">
                <div class="plate-item-img cursor">
                  <div class="live_bg live_bg_0">
                    <img src="/yinhe-3065b3.png">
                  </div>
                  <div class="abs">
                    <div class="txt">
                      <div class="txt1">BBIN真人</div>
                      <div class="txt2">老牌博彩平台，占有率最高</div>
                    </div>
                    <div class="txt3 my_animated">
                      <div class="txt4">老牌游戏平台，占有率最高</div>
                      <div class="txt5">专属品牌百家乐 创新极限由你定义</div>
                      <div class="button" style="width: 100%;">
                        <div class="line-btn">
                          <span
                            class="btn"
                            data-gamein="slot-machine"
                            data-pid="39"
                            title="BBIN真人/体育"
                            content-href="?pid=39&amp;gametype=0"
                          >进入游戏</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plate-item" style="margin-top: 6px;">
                <div class="plate-item-img cursor">
                  <div class="live_bg live_bg_0">
                    <img src="/yh-mg-179.png">
                  </div>
                  <div class="abs">
                    <div class="txt">
                      <div class="txt1">BG真人</div>
                      <div class="txt2">老牌游戏平台，占有率最高</div>
                    </div>
                    <div class="txt3 my_animated">
                      <div class="txt4">老牌游戏平台，占有率最高</div>
                      <div class="txt5">专属品牌百家乐 创新极限由你定义</div>
                      <div class="button" style="width: 100%;">
                        <div class="line-btn">
                          <span
                            class="btn"
                            data-gamein="slot-machine"
                            data-pid="43"
                            title="BG真人"
                            content-href="?pid=43&amp;gametype=0"
                          >进入游戏</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="plate-item" style="margin-top: 6px;margin-left: 5px">
                <div class="plate-item-img cursor">
                  <div class="live_bg live_bg_0">
                    <img src="/log－sa.png">
                  </div>
                  <div class="abs">
                    <div class="txt">
                      <div class="txt1">SA真人</div>
                      <div class="txt2">贵族式的博弈体验</div>
                    </div>
                    <div class="txt3 my_animated">
                      <div class="txt4">贵族式的博弈体验</div>
                      <div class="txt5">优于普通会员至高无上的尊贵体验和优势,丰厚优惠独擅其享,贵族式博弈体验。</div>
                      <div class="button" style="width: 100%;">
                        <div class="line-btn">
                          <span
                            class="btn"
                            data-gamein="slot-machine"
                            data-pid="38"
                            title="SA真人"
                            content-href="?pid=38&amp;gametype=0"
                          >进入游戏</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="plate3 clearfix">
        <div class="plate-left">
          <div class="main-header">
            <div class="line-l"></div>
            <span class="title">热门游戏</span>
            <span class="subTitle">多款游戏高额奖金</span>
            <span class="more">
              <a href="/views/game/slot.html">
                查看更多
                <span class="icon-more icon-kuozhan38561911"></span>
              </a>
            </span>
          </div>
          <div class="hotGame">
            <div class="clearfix mt10">
              <div class="item">
                <div class="item-img cursor hoverToBig">
                  <div
                    style="width: 100%;"
                    data-gamein="slot-machine"
                    title="AG/XIN/AG捕鱼/YOPLAY"
                    data-pid="69"
                    content-href="?pid=69&amp;gametype=6"
                  >
                    <img class="cursor" src="/yinheda86d.jpg">
                  </div>
                  <span
                    class="btn empty hide"
                    data-tryplay="slot-machine"
                    data-pid="69"
                    data-trypgametype="6"
                  >免费试玩</span>
                </div>
              </div>
              <div class="item ml5">
                <div
                  class="item-img1 cursor hoverToBig"
                  data-gamein="slot-machine"
                  title="BBIN"
                  data-pid="39"
                  content-href="?pid=39&amp;gametype=0"
                >
                  <div style="width: 100%;">
                    <img class="cursor" src="/yinhe-51b256.jpg">
                  </div>
                </div>
                <div
                  class="item-img1 cursor hoverToBig"
                  data-gamein="slot-machine"
                  title="BBIN"
                  data-pid="39"
                  content-href="?pid=39&amp;gametype=0"
                >
                  <div style="width: 100%;">
                    <img class="cursor" src="/yinhe-dcb1c.jpg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="plate-down">
          <div class="main-header">
            <div class="line-l"></div>
            <span class="title">中奖瞬间</span>
            <span class="subTitle">惊喜连连 好运连连</span>
          </div>
          <div class="inform mt10">
            <div class="win-info main">
              <span class="win-txt">游戏名称</span>
              <span class="win-txt win-txt1">帐号</span>
              <span class="win-txt win-txt2">中奖金额</span>
            </div>
            <div id="marquee" class="plate-down-content home_marquee">
              <ul>
                <li style="margin-top: -38px;">
                  <div class="win-info">
                    <span class="win-txt">泡泡矿坑</span>
                    <span class="win-txt win-txt1">6***p</span>
                    <span class="win-txt win-txt2">￥740.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">彩色三角</span>
                    <span class="win-txt win-txt1">m***l</span>
                    <span class="win-txt win-txt2">￥505.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">彩色蜂窝</span>
                    <span class="win-txt win-txt1">m***y</span>
                    <span class="win-txt win-txt2">￥505.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">水果派对</span>
                    <span class="win-txt win-txt1">w***s</span>
                    <span class="win-txt win-txt2">￥555.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">超级8</span>
                    <span class="win-txt win-txt1">q***i</span>
                    <span class="win-txt win-txt2">￥795.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">埃斯梅拉达</span>
                    <span class="win-txt win-txt1">r***d</span>
                    <span class="win-txt win-txt2">￥880.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">泡泡矿坑</span>
                    <span class="win-txt win-txt1">6***a</span>
                    <span class="win-txt win-txt2">￥745.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">飞龙在天</span>
                    <span class="win-txt win-txt1">u***k</span>
                    <span class="win-txt win-txt2">￥810.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">金牌欧洲连赢21点</span>
                    <span class="win-txt win-txt1">u***a</span>
                    <span class="win-txt win-txt2">￥650.0</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">沙漠财宝</span>
                    <span class="win-txt win-txt1">f***5</span>
                    <span class="win-txt win-txt2">￥665.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">上海百乐门</span>
                    <span class="win-txt win-txt1">7***w</span>
                    <span class="win-txt win-txt2">￥745.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">超级8</span>
                    <span class="win-txt win-txt1">f***3</span>
                    <span class="win-txt win-txt2">￥510.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">超级完美对碰21点(多组牌)</span>
                    <span class="win-txt win-txt1">q***i</span>
                    <span class="win-txt win-txt2">￥500</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">惊喜复活节</span>
                    <span class="win-txt win-txt1">n***t</span>
                    <span class="win-txt win-txt2">￥730.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">飞龙在天</span>
                    <span class="win-txt win-txt1">i***o</span>
                    <span class="win-txt win-txt2">￥665.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">冰河世界</span>
                    <span class="win-txt win-txt1">d***n</span>
                    <span class="win-txt win-txt2">￥750.0</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">百人牛牛</span>
                    <span class="win-txt win-txt1">v***b</span>
                    <span class="win-txt win-txt2">￥935.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">水果派对</span>
                    <span class="win-txt win-txt1">1***t</span>
                    <span class="win-txt win-txt2">￥845.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">超级8</span>
                    <span class="win-txt win-txt1">q***o</span>
                    <span class="win-txt win-txt2">￥780.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">奇妙马戏团</span>
                    <span class="win-txt win-txt1">w***6</span>
                    <span class="win-txt win-txt2">￥600.0</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">泡泡矿坑</span>
                    <span class="win-txt win-txt1">e***e</span>
                    <span class="win-txt win-txt2">￥545.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">沙漠财宝</span>
                    <span class="win-txt win-txt1">c***e</span>
                    <span class="win-txt win-txt2">￥610.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">奇妙马戏团</span>
                    <span class="win-txt win-txt1">x***m</span>
                    <span class="win-txt win-txt2">￥505.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">樱花之恋</span>
                    <span class="win-txt win-txt1">x***a</span>
                    <span class="win-txt win-txt2">￥860.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">彩色三角</span>
                    <span class="win-txt win-txt1">0***m</span>
                    <span class="win-txt win-txt2">￥770.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">惊喜复活节</span>
                    <span class="win-txt win-txt1">6***s</span>
                    <span class="win-txt win-txt2">￥655.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">沙漠财宝</span>
                    <span class="win-txt win-txt1">0***9</span>
                    <span class="win-txt win-txt2">￥820.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">疯狂之七</span>
                    <span class="win-txt win-txt1">w***w</span>
                    <span class="win-txt win-txt2">￥835.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">财富联盟</span>
                    <span class="win-txt win-txt1">y***m</span>
                    <span class="win-txt win-txt2">￥930.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">沙漠财宝</span>
                    <span class="win-txt win-txt1">0***p</span>
                    <span class="win-txt win-txt2">￥775.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">水果派对</span>
                    <span class="win-txt win-txt1">1***h</span>
                    <span class="win-txt win-txt2">￥880.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">财富联盟</span>
                    <span class="win-txt win-txt1">l***m</span>
                    <span class="win-txt win-txt2">￥665.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">泡泡矿坑</span>
                    <span class="win-txt win-txt1">e***f</span>
                    <span class="win-txt win-txt2">￥705.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">樱花之恋</span>
                    <span class="win-txt win-txt1">i***h</span>
                    <span class="win-txt win-txt2">￥750.0</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">埃斯梅拉达</span>
                    <span class="win-txt win-txt1">2***7</span>
                    <span class="win-txt win-txt2">￥810.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">上海百乐门</span>
                    <span class="win-txt win-txt1">0***r</span>
                    <span class="win-txt win-txt2">￥815.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">樱花之恋</span>
                    <span class="win-txt win-txt1">c***l</span>
                    <span class="win-txt win-txt2">￥865.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">冰河世界</span>
                    <span class="win-txt win-txt1">3***w</span>
                    <span class="win-txt win-txt2">￥940.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">上海百乐门</span>
                    <span class="win-txt win-txt1">k***j</span>
                    <span class="win-txt win-txt2">￥590.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">埃斯梅拉达</span>
                    <span class="win-txt win-txt1">u***n</span>
                    <span class="win-txt win-txt2">￥825.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">疯狂之七</span>
                    <span class="win-txt win-txt1">t***l</span>
                    <span class="win-txt win-txt2">￥630.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">彩色三角</span>
                    <span class="win-txt win-txt1">1***c</span>
                    <span class="win-txt win-txt2">￥535.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">埃斯梅拉达</span>
                    <span class="win-txt win-txt1">m***s</span>
                    <span class="win-txt win-txt2">￥910.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">酷炫水果</span>
                    <span class="win-txt win-txt1">3***p</span>
                    <span class="win-txt win-txt2">￥535.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">樱花之恋</span>
                    <span class="win-txt win-txt1">3***s</span>
                    <span class="win-txt win-txt2">￥610.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">上海百乐门</span>
                    <span class="win-txt win-txt1">h***f</span>
                    <span class="win-txt win-txt2">￥930.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">酷炫水果</span>
                    <span class="win-txt win-txt1">s***p</span>
                    <span class="win-txt win-txt2">￥700.0</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">飞禽走兽多人版</span>
                    <span class="win-txt win-txt1">t***y</span>
                    <span class="win-txt win-txt2">￥575.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">泡泡矿坑</span>
                    <span class="win-txt win-txt1">n***7</span>
                    <span class="win-txt win-txt2">￥745.00</span>
                  </div>
                </li>
                <li style="margin-top: 0px;">
                  <div class="win-info">
                    <span class="win-txt">彩色蜂窝</span>
                    <span class="win-txt win-txt1">4***7</span>
                    <span class="win-txt win-txt2">￥650.0</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="hotGame">
          <div class="line-left"></div>
          <span class="_left unbind icon-left-btn" data-slot="leftClick" data-id="1"></span>
          <span class="_right unbind icon-right-btn" data-slot="leftClick" data-id="2"></span>
          <div id="hotSwiper">
            <ul>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/titimama.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="跳跳猫猫">跳跳猫猫</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=titimama"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="titimama"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/fday.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="幸运日">幸运日</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=fday"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="fday"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/MissFortune.png">
                </div>
                <div class="txt">
                  <div class="title" title="财富小姐">财富小姐</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=mfrt"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="mfrt"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Ri_Ri_Sheng_Cai_138x125.png">
                </div>
                <div class="txt">
                  <div class="title" title="日日生财">日日生财</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=ririshc"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="ririshc"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Adventures_in_Wonderland_Deluxe.png">
                </div>
                <div class="txt">
                  <div
                    class="title"
                    title="Adventures in Wonderland Deluxe"
                  >Adventures in Wonderland Deluxe</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=ashadv"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="ashadv"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/silver_bullet.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="银子弹">银子弹</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=sib"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="sib"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/french_roulette.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="真人法式轮盘">真人法式轮盘</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=rofl"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="rofl"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Age_of_the_Gods_King_of_Olympus_138x125.png">
                </div>
                <div class="txt">
                  <div class="title" title="神的时代：奥林匹斯">神的时代：奥林匹斯</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=hrcls"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="hrcls"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Age_of_the_Gods_King_of_Olympus_138x125.png">
                </div>
                <div class="txt">
                  <div class="title" title="神的时代：奥王宙斯">神的时代：奥王宙斯</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=zeus"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="zeus"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/long_long_long.png">
                </div>
                <div class="txt">
                  <div class="title" title="龙龙龙">龙龙龙</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=longlong"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="longlong"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Gem_Queen_138x125.png">
                </div>
                <div class="txt">
                  <div class="title" title="宝石女王">宝石女王</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=gemq"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="gemq"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Silent Samurai_191x181.png">
                </div>
                <div class="txt">
                  <div class="title" title="沉默的武士彩池游戏">沉默的武士彩池游戏</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=sisjp"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="sisjp"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Dolphin_Reef_138x125.png">
                </div>
                <div class="txt">
                  <div class="title" title="海豚礁">海豚礁</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=dnr"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="dnr"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/sweet_party.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="甜蜜派对">甜蜜派对</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=cnpr"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="cnpr"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/easter_surprise.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="惊喜复活节">惊喜复活节</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=eas"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="eas"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/santa_surprise.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="圣诞奇迹">圣诞奇迹</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=ssp"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="ssp"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/crazy7.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="疯狂之七">疯狂之七</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=c7"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="c7"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/captain_treasure.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="船长的宝藏">船长的宝藏</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=ct"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="ct"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/highway_kings2.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="高速公路之王">高速公路之王</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=hk"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="hk"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/great_blue.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="湛蓝深海">湛蓝深海</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=bib"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="bib"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/funky_monkey.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="古怪猴子">古怪猴子</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=fm"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="fm"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/penguin_vacation.png">
                </div>
                <div class="txt">
                  <div class="title" title="企鹅假期">企鹅假期</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=pgv"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="pgv"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/streak_of_luck.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="好运连胜">好运连胜</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=sol"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="sol"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/jackpot_giant.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="奖金巨人">奖金巨人</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=jpgt"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="jpgt"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Esmeralda_138x125.png">
                </div>
                <div class="txt">
                  <div class="title" title="埃斯梅拉达">埃斯梅拉达</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=esmk"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="esmk"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/cowboy_alien.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="牛仔和外星人">牛仔和外星人</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=gtscbl"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="gtscbl"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/love_boat.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="爱之船">爱之船</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=lvb"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="lvb"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/Ugga-Bugga.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="丛林巫师">丛林巫师</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=ub"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="ub"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/treasq.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="八宝一后">八宝一后</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=treasq"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="treasq"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="downItem2" style="margin-left: 0px;">
                <div class="img">
                  <img src="/sugla.jpg">
                </div>
                <div class="txt">
                  <div class="title" title="糖果大陆">糖果大陆</div>
                  <div class="txt1" title="PT老虎机">PT老虎机</div>
                  <div class="txt2">
                    <div class="line-btn">
                      <span
                        class="btn"
                        data-gamein="slot-machine"
                        content-href="?pid=66&amp;gametype=sugla"
                        title="PT老虎机"
                        data-pid="66"
                      >进入游戏</span>
                      <span
                        class="btn empty"
                        data-tryplay="slot-machine"
                        data-trypgametype="sugla"
                        title="PT老虎机"
                        data-pid="66"
                      >免费试玩</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div class="plate1" style="overflow:hidden;">
        <div class="main-header">
          <div class="line-l"></div>
          <span class="title">精选大促</span>
          <span class="subTitle">各种优惠为您撑腰</span>
          <span class="more">
            <a href="/views/promotion/yinhe/list.html">
              查看更多
              <span class="icon-more icon-kuozhan38561911"></span>
            </a>
          </span>
        </div>
        <div class="plate">
          <div class="plate-content clearfix">
            <div class="plate-left">
              <div v-swiper:mySwiper3="swiperOption3">
                <div class="swiper-wrapper swiper-wrapper2">
                  <div class="swiper-slide" v-for="(banner, index) in banners3" :key="index">
                    <img :src="banner.img">
                    <div class="bottom">
                      <div class="lname">{{banner.text}}</div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
              </div>
            </div>
            <div class="plate-right">
              <div class="plate-item">
                <div class="plate-item-img cursor hoverToBig">
                  <a class="discountItem" data-activityid="14">
                    <img src="/yinhe-59597.jpg">
                  </a>
                </div>
              </div>
              <div class="plate-item" style="margin-left: 5px;">
                <div class="plate-item-img cursor hoverToBig">
                  <a class="discountItem" data-activityid="15">
                    <img src="/yinhe-38aea7.jpg">
                  </a>
                </div>
              </div>
              <div class="plate-item" style="margin-top: 6px;">
                <div class="plate-item-img cursor hoverToBig">
                  <a class="discountItem" data-activityid="9">
                    <img src="/yinhe-7098.png">
                  </a>
                </div>
              </div>
              <div class="plate-item" style="margin-left: 5px;margin-top: 6px;">
                <div class="plate-item-img cursor hoverToBig">
                  <a class="discountItem" data-activityid="0">
                    <img src="/yinhe-23456g.jpg">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="plate4">
        <div class="main-header">
          <div class="line-l"></div>
          <span class="title">关于银河游戏</span>
          <span class="subTitle"></span>
        </div>
        <div class="aboutAs">
          <div class="clearfix">
            <div class="f-left">
              <div class="txt">
                <a>
                  <span class="txt1">银河游戏游戏委员会推荐</span>
                </a>
                <p>
                  「银河游戏」是世界级亚洲特色的五星级综合渡假城. 第一期于2011年5月15日正式开业，投资额达165亿港元，渡假城内提供超过2,200间客房及套房。 第二期于2015年5月27日，「银河游戏」「澳门百老汇™」的开幕，将原来版图双倍扩展至超过110万平方米，总投资额超过430亿港元，并进一步向集团的1,000亿港元投资承诺迈进。
                  <br>银河游戏全资线上责任游戏58yh.com，持澳门合法线上责任游戏牌照，受银河游戏监察协调局监督。
                </p>
              </div>
            </div>
            <div class="f-left joinAs">
              <div class="rel">
                <div class="daili">
                  <a href="javascript:void(0);" data-href="agent" target="_blank" style>
                    <img src="/yinhe-c3317.jpg">
                  </a>
                  <img class="porxyAgentImg" style="display:none;" src="/index-agent-proxy.png">
                </div>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="cooperative">
            <div class="coop-title">合作伙伴</div>
            <div class="coop-div clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer">
      <div class="footer footers">
        <div class="footer-content">
          <div class="footer-logo"></div>
          <div class="txt">
            <div class="txt1">
              <a href="/views/help/index.html#/register">用户协议</a>
              <span class="txt3">|</span>
              <a href="/views/promotion/yinhe/about.html">关于我们</a>
              <span class="txt3">|</span>
              <a href="/views/help/index.html#/responsibility">博彩责任</a>
              <span class="txt3">|</span>
              <a href="/views/help/index.html#/clause">免责条款</a>
              <span class="txt3">|</span>
              <a href="/views/help/index.html#/userPrivacy">用户隐私</a>
              <span class="txt3">|</span>
              <a href="/views/help/index.html#/register">帮助中心</a>
              <span class="txt3">|</span>
              <a data-command="service" style="color: rgb(200, 166, 117);">在线客服</a>
            </div>

            <div class="mt10">Copyright © 2017 银河游戏Galaxy Macau All Rights Reserved</div>
          </div>
          <div class="footer-icon">
            <div>
              <span class="txt4"></span>
              <span class="txt5"></span>
            </div>

            <div class="txt6">友情提示：游戏有风险，量力乐其中</div>
          </div>
        </div>
      </div>
      <div class="easy_domain">
        银河地址：
        <span>www.12yyhh.com</span>
      </div>
    </div>
  </div>
</template>


<script>
// import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      banners3: [
        {
          img: "/banner_017.jpg",
          text: "男模全国伴你游"
        },
        {
          img: "/banner_010.png",
          text: "新开户首存大礼"
        },
        {
          img: "/banner_011.jpg",
          text: "全民洗码"
        },
        {
          img: "/banner_009.jpg",
          text: "美女全国伴你游"
        },
        {
          img: "/banner_008.jpg",
          text: "星级酒店天天住"
        },
        {
          img: "/banner_012.jpg",
          text: "全球机票免费送"
        }
      ],
      banners2: [
        "/banner_BG.jpg",
        "/banner_013.jpg",
        "/banner_014.jpg",
        "/banner_sl.jpg"
      ],
      banners: [
        "/banner_003.jpg",
        "/banner_016.jpg",
        "/banner_020.png",
        "/banner-checkin.png"
      ],
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true
        },
        on: {
          slideChange() {},
          tap() {}
        }
      },
      swiperOption2: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true
        },
        on: {
          slideChange() {},
          tap() {}
        }
      },
      swiperOption3: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: false,
          clickable: true
        },
        on: {
          slideChange() {},
          tap() {}
        }
      },
      list: []
    };
  },
  async asyncData(context) {
    
  },
  mounted() {
    // this.$axios.post('https://www.easy-mock.com/mock/5caefeabdc560b32b35a74dc/reactLearn/textList').then(res => {
    //   this.list = res.data
    // })

    // this.$axios.get('https://www.easy-mock.com/mock/5caefeabdc560b32b35a74dc/reactLearn/todolist',(res) => {
    //   console.log(res)
    // })
  }
};
</script>

<style lang="scss">
@import url("./index.css");
@import "~assets/css/home.scss";
</style>