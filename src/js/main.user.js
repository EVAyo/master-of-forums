// ==UserScript==
// @name              Master of Forums
// @name:en           Master of Forums
// @name:zh           论坛大师
// @name:zh-CN        论坛大师
// @name:zh-HK        論壇大師
// @name:zh-MO        論壇大師
// @name:zh-TW        論壇大師
// @namespace         MASTER-OF-FORUMS
// @version           0.0.1
// @author            admin
// @description       Beautify the interface, Remove ads, Enhance functions.
// @description:en    Beautify the interface, Remove ads, Enhance functions.
// @description:zh    论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……
// @description:zh-CN 论坛网站页面美化、广告移除、功能增强。美轮美奂的视觉享受，安然恬静的论坛时光……
// @description:zh-HK 論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @description:zh-MO 論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @description:zh-TW 論壇網站頁面美化、廣告移除、功能增強。美輪美奐的視覺享受，安然恬靜的論壇時光……
// @homepage          https://master-of-forums.github.io/
// @icon              https://github.com/master-of-forums/master-of-forums/raw/main/public/images/bull.webp
// @updateURL         https://github.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js
// @installURL        https://github.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js
// @downloadURL       https://github.com/master-of-forums/master-of-forums/raw/main/src/js/main.user.js
// @supportURL        https://github.com/master-of-forums/master-of-forums/issues
// @match             *://91ai.net/
// @match             *://bbs.51credit.com/
// @match             *://bbs.fobshanghai.com/
// @match             *://bbs.kafan.cn/
// @match             *://bbs.pcbeta.com/
// @match             *://fobshanghai.com/
// @match             *://hostloc.com/
// @match             *://lowendtalk.com/*
// @match             *://master-of-forums.github.io/*
// @match             *://master-of-forums.gitlab.io/*
// @match             *://t66y.com/
// @match             *://taohuazu.com/
// @match             *://v2ex.com/*
// @match             *://www.52pojie.cn/
// @match             *://www.91ai.net/
// @match             *://www.chiphell.com/
// @match             *://www.fobshanghai.com/
// @match             *://www.hostloc.com/
// @match             *://www.lowendtalk.com/*
// @match             *://www.right.com.cn/forum/
// @match             *://www.t66y.com/
// @match             *://www.taohuazu.com/
// @match             *://*.v2ex.com/*
// @match             *://*/*/forum-*.html
// @match             *://*/*/forum-*.html?*
// @match             *://*/*/forum.php
// @match             *://*/*/forum.php?*
// @match             *://*/*/forumdisplay.php
// @match             *://*/*/forumdisplay.php?*
// @match             *://*/*/home.php
// @match             *://*/*/home.php?*
// @match             *://*/*/htm_data/*.html
// @match             *://*/*/read.php
// @match             *://*/*/read.php?*
// @match             *://*/*/space-uid-*
// @match             *://*/*/space-username-*
// @match             *://*/*/thread-*.html
// @match             *://*/*/thread-*.html?*
// @match             *://*/*/thread*.php
// @match             *://*/*/thread*.php?*
// @match             *://*/*/viewthread-*.html
// @match             *://*/*/viewthread.php
// @match             *://*/*/viewthread.php?*
// @match             *://*/forum-*.html
// @match             *://*/forum-*.html?*
// @match             *://*/forum.php
// @match             *://*/forum.php?*
// @match             *://*/forumdisplay.php
// @match             *://*/forumdisplay.php?*
// @match             *://*/home.php
// @match             *://*/home.php?*
// @match             *://*/htm_data/*.html
// @match             *://*/read.php
// @match             *://*/read.php?*
// @match             *://*/space-uid-*
// @match             *://*/space-username-*
// @match             *://*/thread-*.html
// @match             *://*/thread-*.html?*
// @match             *://*/thread*.php
// @match             *://*/thread*.php?*
// @match             *://*/viewthread-*.html
// @match             *://*/viewthread.php
// @match             *://*/viewthread.php?*
// @exclude           *://www.example.com/
// @compatible        Brave
// @compatible        Chrome
// @compatible        Chromium
// @compatible        Edge
// @compatible        Firefox
// @compatible        Opera
// @compatible        Safari
// @compatible        Vivaldi
// @connect           *
// @connect           self
// @connect           1.1.1.1
// @connect           100.com
// @connect           10086.cn
// @connect           139.com
// @connect           163.com
// @connect           360.com
// @connect           58.com
// @connect           aichat.com
// @connect           aichat.net
// @connect           alexa.com
// @connect           alibaba.com
// @connect           alibabacloud.com
// @connect           alicdn.com
// @connect           alimama.com
// @connect           aliyun.com
// @connect           aliyuncs.com
// @connect           amap.com
// @connect           amazon.com
// @connect           android.com
// @connect           api.imgur.com
// @connect           api.video
// @connect           apiopen.top
// @connect           apple.com
// @connect           appspot.com
// @connect           asciinema.com
// @connect           asciinema.org
// @connect           baidu.com
// @connect           baidubce.com
// @connect           bancor.network
// @connect           bcebos.com
// @connect           bilibili.com
// @connect           bing.com
// @connect           bitpay.com
// @connect           blockchain.com
// @connect           blogger.com
// @connect           blogspot.comg
// @connect           buymeacoffee.com
// @connect           caniuse.com
// @connect           cdnjs.com
// @connect           chromium.com
// @connect           chromium.org
// @connect           cloudflare.com
// @connect           coinapi.io
// @connect           coinbase.com
// @connect           coindesk.com
// @connect           coingecko.com
// @connect           coinmarketcap.com
// @connect           curve.com
// @connect           curve.fi
// @connect           debug.com
// @connect           dianping.com
// @connect           digitalocean.com
// @connect           dingtalk.com
// @connect           discord.com
// @connect           discord.gg
// @connect           dns.com
// @connect           docker.com
// @connect           docker.io
// @connect           douban.com
// @connect           epicgames.com
// @connect           esm.run
// @connect           facebook.com
// @connect           fbi.gov
// @connect           feishu.cn
// @connect           feishu.com
// @connect           feishu.io
// @connect           file.io
// @connect           filecoin.com
// @connect           filecoin.io
// @connect           firebase.com
// @connect           firebaseio.com
// @connect           fitbit.com
// @connect           flickr.com
// @connect           gitbook.com
// @connect           gitbook.io
// @connect           github.com
// @connect           github.io
// @connect           githubusercontent.com
// @connect           gitlab.com
// @connect           gitlab.io
// @connect           gitlabusercontent.com
// @connect           gmail.com
// @connect           gog.com
// @connect           google.com
// @connect           googleapis.com
// @connect           googleusercontent.com
// @connect           greasyfork.org
// @connect           gugudata.com
// @connect           gv.com
// @connect           hereapi.com
// @connect           httpbin.org
// @connect           hualigs.cn
// @connect           huawei.com
// @connect           huaweicloud.com
// @connect           huobi.com
// @connect           ibm.com
// @connect           iciba.com
// @connect           image.kieng.cn
// @connect           imgurl.org
// @connect           ipfs.com
// @connect           ipfs.io
// @connect           iqiyi.com
// @connect           jd.com
// @connect           jin10.com
// @connect           js.org
// @connect           jsdelivr.com
// @connect           jsdelivr.net
// @connect           justswap.com
// @connect           justswap.io
// @connect           kaiyanapp.com
// @connect           kuaidi.com
// @connect           ledger.com
// @connect           like.com
// @connect           lunarcrush.com
// @connect           mail.com
// @connect           maoyan.com
// @connect           map.com
// @connect           mapbox.com
// @connect           mdex.co
// @connect           mdex.com
// @connect           mdex.io
// @connect           mdex.me
// @connect           meituan.com
// @connect           meizu.com
// @connect           metamask.com
// @connect           metamask.io
// @connect           mi.com
// @connect           microsoft.com
// @connect           microsofttranslator.com
// @connect           mongodb.com
// @connect           mozilla.org
// @connect           msn.com
// @connect           mubu.com
// @connect           myqcloud.com
// @connect           namesilo.com
// @connect           netflix.com
// @connect           nextdns.com
// @connect           nextdns.io
// @connect           notion.com
// @connect           notion.io
// @connect           notion.site
// @connect           notion.so
// @connect           openlayers.org
// @connect           openstreetmap.org
// @connect           openuserjs.org
// @connect           openuserts.org
// @connect           pages.dev
// @connect           pastebin.com
// @connect           paypal.com
// @connect           pinduoduo.com
// @connect           qiniu.com
// @connect           qiyi.com
// @connect           qq.com
// @connect           quran.com
// @connect           random.org
// @connect           redis.com
// @connect           redis.io
// @connect           redislabs.com
// @connect           shields.io
// @connect           shodan.com
// @connect           shodan.io
// @connect           showapi.com
// @connect           signal.org
// @connect           similarweb.com
// @connect           slack.com
// @connect           snssdk.com
// @connect           so.com
// @connect           soundcloud.com
// @connect           spotify.com
// @connect           ssllabs.com
// @connect           stackoverflow.com
// @connect           steampowered.com
// @connect           suning.com
// @connect           sushi.com
// @connect           t.cn
// @connect           taobao.com
// @connect           tcloudbase.com
// @connect           telegram.org
// @connect           tencent.com
// @connect           tencentcloudapi.com
// @connect           tianyancha.com
// @connect           tokenlon.com
// @connect           tokenlon.im
// @connect           tokenlon.io
// @connect           toutiao.com
// @connect           travis-ci.com
// @connect           travis-ci.org
// @connect           travis.com
// @connect           travis.org
// @connect           tuchong.com
// @connect           tumblr.com
// @connect           twitter.com
// @connect           typeform.com
// @connect           uniswap.org
// @connect           userscript.org
// @connect           userscripts.org
// @connect           vercel.app
// @connect           vercel.com
// @connect           vk.com
// @connect           wechat.com
// @connect           weibo.cn
// @connect           weibo.com
// @connect           whatsapp.com
// @connect           wikipedia.org
// @connect           wolai.com
// @connect           workers.dev
// @connect           wukong.com
// @connect           xiaomi.com
// @connect           xueqiu.com
// @connect           yahoo.com
// @connect           yandex.com
// @connect           ycombinator.com
// @connect           youdao.com
// @connect           youtube.com
// @connect           zhihu.com
// @connect           zoom.com
// @connect           zoom.io
// @connect           zoom.us
// @run-at            document-start
// @resource          MainCSS https://github.com/master-of-forums/master-of-forums/raw/main/src/css/main.css
// @grant             GM_info
// @grant             GM_getValue
// @grant             GM_setValue
// @grant             GM_deleteValue
// @grant             GM_listValues
// @grant             GM_addValueChangeListener
// @grant             GM_removeValueChangeListener
// @grant             GM_getResourceText
// @grant             GM_getResourceURL
// @grant             GM_addStyle
// @grant             GM_openInTab
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM_notification
// @grant             GM_setClipboard
// @grant             GM_xmlhttpRequest
// @grant             GM_download
// @grant             unsafeWindow
// @grant             window.close
// @grant             window.focus
// @grant             window.onurlchange
// @license           MPL-2.0
// ==/UserScript==

/**
 * Master of Forums (https://github.com/master-of-forums/master-of-forums)
 * Licensed under MPL (https://github.com/master-of-forums/master-of-forums/blob/main/LICENSE)
 */

const MASTER_OF_FORUMS = () => {
  // Global Configurations
  const MAIN = {
    data: {
      patch: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/patch.gif',
      timestamp: Date.now(),
      unix_timestamp: Math.floor(Date.now() / 1000),
    },
    check_boxes: {
      create_a_back_to_top: GM_getValue('create_a_back_to_top', true),
      show_user_badge: GM_getValue('show_user_badge', true),
      show_user_avatar: GM_getValue('show_user_avatar', true),
      show_user_signature: GM_getValue('show_user_signature', true),
    },
    fn: {
      print(...args) {
        // eslint-disable-next-line no-console
        console.log((Date.now() / 1000).toFixed(3), ...args);
      },
    },
    actions: {},
    can: {},
    tips: {},
    repository: 'https://github.com/master-of-forums/master-of-forums',
    channel: 'GitHub',
    window: {},
  };

  // Main node
  MAIN.NODE = document.createElement('div');
  MAIN.NODE.id = 'master-of-forums';
  MAIN.NODE.className = 'master-of-forums';
  MAIN.NODE.innerHTML = '<div id="discussion" class="discussion"><div id="discussion-header" class="discussion-header">\u{666E}\u{901A}\u{4E3B}\u{984C}</div><div id="discussion-list" class="discussion-list"></div></div>';
  document.body.append(MAIN.NODE);

  // User agent
  const USER_AGENT = window.navigator.userAgent;

  // Hostname
  const HOSTNAME = window.location.hostname;
  const HREF = window.location.href;
  const PATHNAME = window.location.pathname;
  const REFERRER = document.referrer;

  // Monkey Menu
  const MONKEY_MENU = {};

  MONKEY_MENU.name = `\u{1F310} ${'\u{8BBA}\u{575B}\u{5927}\u{5E08}' || GM_info.script?.name} \u{30FB} \u{4E3B}\u{9875}（${MAIN.channel}）`;
  GM_registerMenuCommand(MONKEY_MENU.name, () => {
    GM_openInTab(GM_info.script?.homepage, {
      active: true,
    });
  });
  MONKEY_MENU.name = `\u{1F310} ${'\u{8BBA}\u{575B}\u{5927}\u{5E08}' || GM_info.script?.name} \u{30FB} \u{4ED3}\u{5E93}（${MAIN.channel}）`;
  GM_registerMenuCommand(MONKEY_MENU.name, () => {
    GM_openInTab(MAIN.repository, {
      active: true,
    });
  });

  // Open page in new tab
  // Open page in new privacy window
  MONKEY_MENU.name = GM_info.scriptHandler === 'Tampermonkey' ? '\u{1F4A0} \u{1F99D} \u{6253}\u{5F00}\u{9875}\u{9762}\u{FF08}\u{9690}\u{8EAB}\u{6A21}\u{5F0F}\u{FF09}' : '\u{1F4A0} \u{1F195} \u{6253}\u{5F00}\u{9875}\u{9762}\u{FF08}\u{65B0}\u{7684}\u{6807}\u{7B7E}\u{FF09}';
  GM_registerMenuCommand(MONKEY_MENU.name, () => {
    GM_openInTab(HREF, {
      active: true,
      incognito: true,
    });
  });

  // Picture host - China
  MONKEY_MENU.name = '\u{1F4A0} \u{1F340} \u{56FE}\u{7247}\u{4E0A}\u{4F20} \u{279C} \u{4E2D}\u{56FD}\u{7EBF}\u{8DEF}';
  GM_registerMenuCommand(MONKEY_MENU.name, async () => {
    MAIN.tips.fileboard.style.display = 'none';
    try {
      const [fileHandle] = await unsafeWindow.showOpenFilePicker({
        multiple: false,
        excludeAcceptAllOption: true,
        types: [{
          description: 'Images',
          accept: {
            'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
          },
        }],
      });
      if (fileHandle) {
        const FILE = await fileHandle.getFile();
        MAIN.fn?.fileUploadToCN(FILE);
      }
    } catch (error) {
      if (error.message.includes('The user aborted a request')) {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{6CA1}\u{6709}\u{6587}\u{4EF6}\u{2753}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      } else {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{60A8}\u{7684}\u{6D4F}\u{89C8}\u{5668}\u{4E0D}\u{652F}\u{6301}\u{6587}\u{4EF6}\u{4E0A}\u{4F20}\u{2757}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      }
    }
  });

  // Picture host - China (Command+V or Ctrl+V)
  MONKEY_MENU.name = `\u{1F4A0} \u{1F340} \u{56FE}\u{7247}\u{4E0A}\u{4F20} \u{279C} \u{4E2D}\u{56FD}\u{7EBF}\u{8DEF} \u{30FB} ${USER_AGENT.includes('Mac OS X') ? 'Command' : 'Ctrl'} + V`;
  GM_registerMenuCommand(MONKEY_MENU.name, async () => {
    MAIN.can.pasteUpload = true;
    MAIN.fn.fileUploadFunction = MAIN.fn?.fileUploadToCN;
    MAIN.tips.fileboard.style.display = 'block';
    MAIN.tips.fileboardIcon.classList.remove('fileboard-icon-default', 'fileboard-icon-imgur', 'fileboard-icon-qq', 'fileboard-icon-suning');
    MAIN.tips.fileboardIcon.classList.add('fileboard-icon-qq');
  });

  // Picture host - United States
  MONKEY_MENU.name = '\u{1F4A0} \u{1F340} \u{56FE}\u{7247}\u{4E0A}\u{4F20} \u{279C} \u{7F8E}\u{56FD}\u{7EBF}\u{8DEF}';
  GM_registerMenuCommand(MONKEY_MENU.name, async () => {
    MAIN.tips.fileboard.style.display = 'none';
    try {
      const [fileHandle] = await unsafeWindow.showOpenFilePicker({
        multiple: false,
        excludeAcceptAllOption: true,
        types: [{
          description: 'Images',
          accept: {
            'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
          },
        }],
      });
      if (fileHandle) {
        const FILE = await fileHandle.getFile();
        MAIN.fn?.fileUploadToUS(FILE);
      }
    } catch (error) {
      if (error.message.includes('The user aborted a request')) {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{6CA1}\u{6709}\u{6587}\u{4EF6}\u{2753}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      } else {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{60A8}\u{7684}\u{6D4F}\u{89C8}\u{5668}\u{4E0D}\u{652F}\u{6301}\u{6587}\u{4EF6}\u{4E0A}\u{4F20}\u{2757}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      }
    }
  });

  // Picture host - United States (Command+V or Ctrl+V)
  MONKEY_MENU.name = `\u{1F4A0} \u{1F340} \u{56FE}\u{7247}\u{4E0A}\u{4F20} \u{279C} \u{7F8E}\u{56FD}\u{7EBF}\u{8DEF} \u{30FB} ${USER_AGENT.includes('Mac OS X') ? 'Command' : 'Ctrl'} + V`;
  GM_registerMenuCommand(MONKEY_MENU.name, async () => {
    MAIN.can.pasteUpload = true;
    MAIN.fn.fileUploadFunction = MAIN.fn?.fileUploadToUS;
    MAIN.tips.fileboard.style.display = 'block';
    MAIN.tips.fileboardIcon.classList.remove('fileboard-icon-default', 'fileboard-icon-imgur', 'fileboard-icon-qq', 'fileboard-icon-suning');
    MAIN.tips.fileboardIcon.classList.add('fileboard-icon-imgur');
  });

  // File host - Global
  MONKEY_MENU.name = '\u{1F4A0} \u{1F4E4} \u{6587}\u{4EF6}\u{4E0A}\u{4F20} \u{279C} \u{5168}\u{7403}\u{8282}\u{70B9}';
  GM_registerMenuCommand(MONKEY_MENU.name, async () => {
    MAIN.tips.fileboard.style.display = 'none';
    try {
      const [fileHandle] = await unsafeWindow.showOpenFilePicker({
        multiple: false,
        excludeAcceptAllOption: false,
        types: [
          {
            description: 'Image file',
            accept: {
              'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.bmp', '.svg', '.webp'],
            },
          }, {
            description: 'Music file',
            accept: {
              'audio/*': ['.mp3', '.wav', '.ogg'],
            },
          }, {
            description: 'Video file',
            accept: {
              'video/*': ['.mp4', '.avi', '.mkv'],
            },
          },
        ],
      });
      if (fileHandle) {
        const FILE = await fileHandle.getFile();
        MAIN.fn?.fileUploadToGlobal(FILE);
      }
    } catch (error) {
      if (error.message.includes('The user aborted a request')) {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{6CA1}\u{6709}\u{6587}\u{4EF6}\u{2753}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      } else {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{60A8}\u{7684}\u{6D4F}\u{89C8}\u{5668}\u{4E0D}\u{652F}\u{6301}\u{6587}\u{4EF6}\u{4E0A}\u{4F20}\u{2757}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      }
    }
  });

  // File host - Global (Command+V or Ctrl+V)
  MONKEY_MENU.name = `\u{1F4A0} \u{1F4E4} \u{6587}\u{4EF6}\u{4E0A}\u{4F20} \u{279C} \u{5168}\u{7403}\u{8282}\u{70B9} \u{30FB} ${USER_AGENT.includes('Mac OS X') ? 'Command' : 'Ctrl'} + V`;
  GM_registerMenuCommand(MONKEY_MENU.name, async () => {
    MAIN.can.pasteUpload = true;
    MAIN.fn.fileUploadFunction = MAIN.fn?.fileUploadToGlobal;
    MAIN.tips.fileboard.style.display = 'block';
    MAIN.tips.fileboardIcon.classList.remove('fileboard-icon-default', 'fileboard-icon-imgur', 'fileboard-icon-qq', 'fileboard-icon-suning');
    MAIN.tips.fileboardIcon.classList.add('fileboard-icon-default');
  });

  // Check Mark - Create a back to top
  MONKEY_MENU.name = `\u{1F520} Option No.\u{21E1} ${MAIN.check_boxes.create_a_back_to_top ? '\u{2705}' : '\u{1F532}'} \u{663E}\u{793A} \u{56DE}\u{5230}\u{9876}\u{90E8}\u{FF08}\u{6309}\u{94AE}\u{FF09}`;
  GM_registerMenuCommand(MONKEY_MENU.name, () => {
    GM_setValue('create_a_back_to_top', !MAIN.check_boxes.create_a_back_to_top);
    document.body.style.transition = 'opacity 1s ease-out';
    document.body.style.opacity = 0;
    window.location.reload();
  });

  // Check Mark - Show user badge
  MONKEY_MENU.name = `\u{1F520} Option No.0 ${MAIN.check_boxes.show_user_badge ? '\u{2705}' : '\u{1F532}'} \u{663E}\u{793A} \u{7528}\u{6237}\u{5FBD}\u{7AE0}`;
  GM_registerMenuCommand(MONKEY_MENU.name, () => {
    GM_setValue('show_user_badge', !MAIN.check_boxes.show_user_badge);
    document.body.style.transition = 'opacity 1s ease-out';
    document.body.style.opacity = 0;
    window.location.reload();
  });

  // Check Mark - Show user avatar
  MONKEY_MENU.name = `\u{1F520} Option No.1 ${MAIN.check_boxes.show_user_avatar ? '\u{2705}' : '\u{1F532}'} \u{663E}\u{793A} \u{7528}\u{6237}\u{5934}\u{50CF}`;
  GM_registerMenuCommand(MONKEY_MENU.name, () => {
    GM_setValue('show_user_avatar', !MAIN.check_boxes.show_user_avatar);
    document.body.style.transition = 'opacity 1s ease-out';
    document.body.style.opacity = 0;
    window.location.reload();
  });

  // Check Mark - Show user signature
  MONKEY_MENU.name = `\u{1F520} Option No.2 ${MAIN.check_boxes.show_user_signature ? '\u{2705}' : '\u{1F532}'} \u{663E}\u{793A} \u{7528}\u{6237}\u{7B7E}\u{540D}`;
  GM_registerMenuCommand(MONKEY_MENU.name, () => {
    GM_setValue('show_user_signature', !MAIN.check_boxes.show_user_signature);
    document.body.style.transition = 'opacity 1s ease-out';
    document.body.style.opacity = 0;
    window.location.reload();
  });

  MAIN.fn.getThreadID = () => {
    if (typeof MAIN.data?.thread !== 'number') {
      MAIN.data.thread = 1;
      // eslint-disable-next-line no-undef
      if (typeof tid === 'number' && tid > 0) {
        // eslint-disable-next-line no-undef
        MAIN.data.thread = tid;
      } else {
        try {
          if (PATHNAME.includes('/thread-')) {
            const n = parseInt(PATHNAME.match(/\/thread-(\d+)/)[1], 10);
            if (typeof n === 'number' && n > 0) {
              MAIN.data.thread = n;
            }
          } else if (HREF.includes('&tid=')) {
            const n = parseInt(HREF.match(/&tid=(\d+)/)[1], 10);
            if (typeof n === 'number' && n > 0) {
              MAIN.data.thread = n;
            }
          } else if (HREF.includes('&ptid=')) {
            const n = parseInt(HREF.match(/&ptid=(\d+)/)[1], 10);
            if (typeof n === 'number' && n > 0) {
              MAIN.data.thread = n;
            }
          } else if (PATHNAME.includes('/htm_data/')) {
            const n = parseInt(PATHNAME.match(/\/htm_data\/\d+\/(\d+)/)[1], 10);
            if (typeof n === 'number' && n > 0) {
              MAIN.data.thread = n;
            }
          }
        } catch (error) {
          // pass
        }
      }
    }
  };

  MAIN.fn.getNodeCoordinate = (n) => {
    const SEAT = n.getBoundingClientRect();
    return {
      NODE_X: document.documentElement.scrollLeft + SEAT.x,
      NODE_Y: document.documentElement.scrollTop + SEAT.y,
      NODE_WIDTH: SEAT.width,
      NODE_HEIGHT: SEAT.height,
    };
  };

  MAIN.fn.injectLinkPrefetchInPage = (url) => {
    if (MAIN.data?.linkTag) {
      if (MAIN.data?.linkTag?.href !== url) {
        MAIN.data.linkTag.href = url;
      }
    } else {
      // Generate link prefetch tag
      MAIN.data.linkTag = document.createElement('link');
      MAIN.data.linkTag.rel = 'prefetch';
      MAIN.data.linkTag.href = url;
      MAIN.data.linkTag.as = 'document';
      // Inject tag in the head of the document
      document.head.append(MAIN.data?.linkTag);
    }
  };

  MAIN.fn.fileUploadToAWS = (FILE) => {
    GM_notification({
      title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
      text: '\u{6587}\u{4EF6}\u{4E0A}\u{4F20}（Amazon Simple Storage Service）',
      image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
      timeout: 4 * 1000,
    });

    const fileData = new FormData();
    fileData.append('file', FILE);

    GM_xmlhttpRequest({
      method: 'POST',
      url: 'https://imgurl.org/upload/aws_s3',
      data: fileData,
      timeout: 10 * 1000,
      onload: (response) => {
        if (response.readyState === 4 && response.status === 200) {
          const content = JSON.parse(response.responseText);
          if (content.code === 200 && content.url) {
            GM_setClipboard(content.url, 'text');
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{1F38A}\u{4E0A}\u{4F20}\u{6210}\u{529F}\u{FF0C}\u{6587}\u{4EF6}\u{7F51}\u{5740}\u{5DF2}\u{5199}\u{5165}\u{526A}\u{5207}\u{677F}\u{1F4CB}',
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 9 * 1000,
              onclick: () => {
                GM_openInTab(content.url, {
                  active: true,
                });
              },
            });
            // Append to Textarea
            MAIN.fn?.fileUploadAppendToTextarea(content.url);
          } else {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 4 * 1000,
            });
          }
        } else {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 4 * 1000,
          });
        }
      },
      onerror: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{9519}\u{8BEF}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
      ontimeout: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{8D85}\u{65F6}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
    });
  };

  MAIN.fn.fileUploadToBilibili = (FILE) => {
    GM_notification({
      title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
      text: '\u{6587}\u{4EF6}\u{4E0A}\u{4F20}（\u{4E2D}\u{56FD}\u{7EBF}\u{8DEF}）',
      image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
      timeout: 4 * 1000,
    });

    const fileData = new FormData();
    fileData.append('image', FILE);

    const HUALIGS_TOKEN = [
      'M2FkNzc3OTI5ZWRiMjk0NzE0MDg4NDM5NjA1ZThmYzg=',
      'MjhlNDE0Y2ZiOWY0NTNiZTgyNzQ2ZTA0MGI3MTNjMDQ=',
      'NGM1YWI0YjM4MWNhOWE4YjBlMWRkMmVkOThmNDIyZWU=',
      'NWNkYTdlYzM2ODZlZDE1NzYwY2NkOTVmMDVkYmMyNjU=',
      'NmJkODUzZmI2MjMxMGExYjgzODNhMDgxODQ2Y2I3N2Y=',
      'YjI0NzQ5N2MxMTE0NTg2MmMwNjMyNWNkNGEwMzdmZjg=',
      'ZTNkNzI3MjgwNTYxY2Y5ZGEyY2RlZDAwYzYyOTY4YjY=',
      'ZTg5ZTQxMTk2ZTRhZWY4YTM5YjJlZmM0Y2EwNDg0ZWQ=',
      'ZjJiMzJlYTViYWQ4ZTBlMDIwYjM1OWZhNGJkNzQ5YTI=',
    ];

    fileData.append('token', atob(HUALIGS_TOKEN[Math.floor(Math.random() * HUALIGS_TOKEN.length)]).split('').reverse().join(''));
    fileData.append('apiType', 'bilibili');

    GM_xmlhttpRequest({
      method: 'POST',
      url: 'https://www.hualigs.cn/api/upload',
      data: fileData,
      timeout: 10 * 1000,
      onload: (response) => {
        if (response.readyState === 4 && response.status === 200) {
          const content = JSON.parse(response.responseText);
          if (content.code === 200 && content.msg === 'success' && content.data?.url?.bilibili) {
            GM_setClipboard(content.data?.url?.bilibili, 'text');
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{1F38A}\u{4E0A}\u{4F20}\u{6210}\u{529F}\u{FF0C}\u{6587}\u{4EF6}\u{7F51}\u{5740}\u{5DF2}\u{5199}\u{5165}\u{526A}\u{5207}\u{677F}\u{1F4CB}',
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 9 * 1000,
              onclick: () => {
                GM_openInTab(content.data?.url?.bilibili, {
                  active: true,
                });
              },
            });
            // Append to Textarea
            MAIN.fn?.fileUploadAppendToTextarea(content.data?.url?.bilibili);
          } else if (typeof content.code === 'number' && content.msg) {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: `\u{1F50A}${content.msg}`,
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 9 * 1000,
            });
          } else {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 4 * 1000,
            });
          }
        } else {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 4 * 1000,
          });
        }
      },
      onerror: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{9519}\u{8BEF}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
      ontimeout: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{8D85}\u{65F6}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
    });
  };

  MAIN.fn.fileUploadToCN = (FILE, NODE = 'qq') => {
    GM_notification({
      title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
      text: '\u{6587}\u{4EF6}\u{4E0A}\u{4F20}（\u{4E2D}\u{56FD}\u{7EBF}\u{8DEF}）',
      image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
      timeout: 4 * 1000,
    });

    const fileData = new FormData();
    fileData.append('image', FILE);

    GM_xmlhttpRequest({
      method: 'POST',
      url: `https://image.kieng.cn/upload.html?type=${NODE}`,
      data: fileData,
      timeout: 10 * 1000,
      onload: (response) => {
        if (response.readyState === 4 && response.status === 200) {
          const content = JSON.parse(response.responseText);
          if (content.code === 200 && content.msg && content.data?.url) {
            GM_setClipboard(content.data?.url, 'text');
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: `\u{1F38A}\u{4E0A}\u{4F20}\u{6210}\u{529F}\u{FF0C}\u{6587}\u{4EF6}\u{7F51}\u{5740}\u{5DF2}\u{5199}\u{5165}\u{526A}\u{5207}\u{677F}\u{1F4CB}\n\u{1F4D6}\u{6587}\u{4EF6}\u{540D}\u{5B57}：${content.data?.name}`,
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 9 * 1000,
              onclick: () => {
                GM_openInTab(content.data?.url, {
                  active: true,
                });
              },
            });
            // Append to Textarea
            MAIN.fn?.fileUploadAppendToTextarea(content.data?.url);
          } else if (typeof content.code === 'number' && content.msg && content.msg.includes('admin') === false && content.msg.includes('kieng') === false) {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: `\u{1F50A}${content.msg}`,
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 9 * 1000,
            });
          } else {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 4 * 1000,
            });
          }
        } else {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 4 * 1000,
          });
        }
      },
      onerror: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{9519}\u{8BEF}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
      ontimeout: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{8D85}\u{65F6}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
    });
  };

  MAIN.fn.fileUploadToUS = (FILE) => {
    GM_notification({
      title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
      text: '\u{6587}\u{4EF6}\u{4E0A}\u{4F20}（\u{7F8E}\u{56FD}\u{7EBF}\u{8DEF}）',
      image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
      timeout: 4 * 1000,
    });

    const fileData = new FormData();
    fileData.append('image', FILE);

    const IMGUR_CLIENT_ID = [
      'MWIwNDM0MzA2ZWZjODgw',
      'MjU2MDgxMTA2ZjcxMjYw',
      'NTY3MzJhMWE1NjM4ZWZl',
      'NzJlY2Y1YmE5NGFkMWI2',
      'YWVjMTk3NGMxYmM3NWU5',
      'YjVlNGY3YWUxMTFiZjFm',
      'ZDEwMGVlMjUyY2MzNTQy',
      'ZGU4N2UzOGY2ZGYyNjFk',
      'ZTgwODc4OTJmZTBjNmFl',
    ];

    GM_xmlhttpRequest({
      method: 'POST',
      url: 'https://api.imgur.com/3/image',
      headers: {
        Authorization: `Client-ID ${atob(IMGUR_CLIENT_ID[Math.floor(Math.random() * IMGUR_CLIENT_ID.length)]).split('').reverse().join('')}`,
      },
      data: fileData,
      timeout: 10 * 1000,
      onload: (response) => {
        if (response.readyState === 4 && response.status === 200) {
          const content = JSON.parse(response.responseText);
          if (content.status === 200 && content.success === true && content.data?.link) {
            GM_setClipboard(content.data?.link, 'text');
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: `\u{1F38A}\u{4E0A}\u{4F20}\u{6210}\u{529F}\u{FF0C}\u{6587}\u{4EF6}\u{7F51}\u{5740}\u{5DF2}\u{5199}\u{5165}\u{526A}\u{5207}\u{677F}\u{1F4CB}\n\u{1F4D6}\u{6587}\u{4EF6}\u{7C7B}\u{578B}：${content.data?.type}\n\u{1F4D6}\u{6587}\u{4EF6}\u{5C3A}\u{5BF8}：${content.data?.width} × ${content.data?.height} Pixel\n\u{1F4D6}\u{6587}\u{4EF6}\u{4F53}\u{79EF}：${content.data?.size?.toLocaleString('en-US')} Byte`,
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 9 * 1000,
              onclick: () => {
                GM_openInTab(content.data?.link, {
                  active: true,
                });
              },
            });
            // Append to Textarea
            MAIN.fn?.fileUploadAppendToTextarea(content.data?.link);
          }
        } else {
          try {
            const content = JSON.parse(response.responseText);
            const message = `\u{1F50A}${content.data.error.message}`;
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: message,
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 9 * 1000,
            });
          } catch (error) {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}\n\u{1F4E1}\u{56E0}\u{4E3A}\u{7F51}\u{7EDC}\u{FF1F}',
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 4 * 1000,
            });
          }
        }
      },
      onerror: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{9519}\u{8BEF}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
      ontimeout: () => {
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{274C}\u{4E0A}\u{4F20}\u{8D85}\u{65F6}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
      },
    });
  };

  MAIN.fn.fileUploadToGlobal = (FILE) => {
    if (FILE.size / 1024 / 1024 > 30) {
      GM_notification({
        title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
        text: '\u{274C}\u{6587}\u{4EF6}\u{5927}\u{5C0F}\u{8D85}\u{51FA}\u{9650}\u{5236}（\u{6700}\u{5927}\u{652F}\u{6301} 30 MiB）',
        image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
        timeout: 4 * 1000,
      });
    } else if (/\.(text|md|html|css|js|json|log|lock|ico|exe|7z|webm)$/i.test(FILE.name)) {
      GM_notification({
        title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
        text: `\u{274C}\u{4E0D}\u{652F}\u{6301}\u{7684}\u{6587}\u{4EF6}\u{683C}\u{5F0F}（${FILE.name}）`,
        image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
        timeout: 4 * 1000,
      });
    } else {
      GM_notification({
        title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
        text: '\u{6587}\u{4EF6}\u{4E0A}\u{4F20}（\u{5168}\u{7403}\u{8282}\u{70B9}）',
        image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
        timeout: 4 * 1000,
      });

      const fileData = new FormData();
      fileData.append('single', FILE);

      GM_xmlhttpRequest({
        method: 'POST',
        url: 'https://upload.aichat.net/upload/single',
        data: fileData,
        timeout: 60 * 1000,
        onload: (response) => {
          if (response.readyState === 4 && response.status === 200) {
            const content = JSON.parse(response.responseText);
            if (content.code === 200 && content.url) {
              GM_setClipboard(content.url, 'text');
              GM_notification({
                title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
                text: '\u{1F38A}\u{4E0A}\u{4F20}\u{6210}\u{529F}\u{FF0C}\u{6587}\u{4EF6}\u{7F51}\u{5740}\u{5DF2}\u{5199}\u{5165}\u{526A}\u{5207}\u{677F}\u{1F4CB}',
                image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
                timeout: 9 * 1000,
                onclick: () => {
                  GM_openInTab(content.url, {
                    active: true,
                  });
                },
              });
              // Append to Textarea
              if (/\.(avif|bmp|gif|jpe?g|png|svg|webp)$/.test(content.url)) {
                MAIN.fn?.fileUploadAppendToTextarea(content.url);
              }
            } else if (typeof content.code === 'number' && content.error) {
              GM_notification({
                title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
                text: `\u{1F50A}${content.error}`,
                image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
                timeout: 9 * 1000,
                onclick: () => {
                  GM_openInTab(GM_info.script?.homepage, {
                    active: true,
                  });
                },
              });
            } else {
              GM_notification({
                title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
                text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
                image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
                timeout: 4 * 1000,
                onclick: () => {
                  GM_openInTab(GM_info.script?.homepage, {
                    active: true,
                  });
                },
              });
            }
          } else {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{274C}\u{4E0A}\u{4F20}\u{5931}\u{8D25}\u{FF01}',
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 4 * 1000,
              onclick: () => {
                GM_openInTab(GM_info.script?.homepage, {
                  active: true,
                });
              },
            });
          }
        },
        onerror: () => {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{274C}\u{4E0A}\u{4F20}\u{9519}\u{8BEF}\u{FF01}',
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 4 * 1000,
            onclick: () => {
              GM_openInTab(GM_info.script?.homepage, {
                active: true,
              });
            },
          });
        },
        ontimeout: () => {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{274C}\u{4E0A}\u{4F20}\u{8D85}\u{65F6}\u{FF01}',
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 4 * 1000,
            onclick: () => {
              GM_openInTab(GM_info.script?.homepage, {
                active: true,
              });
            },
          });
        },
      });
    }
  };

  MAIN.fn.fileUploadAppendToTextarea = (url) => {
    for (const i of document.getElementsByTagName('textarea')) {
      const content = i.value.trim();
      if (content) {
        i.value = `${content}\n[img]${url}[/img]`;
      }
    }
    if (MAIN.data?.hostname === 'ωωω_v2ex_com') {
      for (const i of document.getElementsByTagName('textarea')) {
        if (i.value) {
          i.value = i.value.replaceAll('[img]', '').replaceAll('[/img]', '');
        } else if (i.name === 'content') {
          i.value = url;
        }
      }
    }
  };

  // Audio Notice
  MAIN.fn.audio = () => {
    if (typeof MAIN.tips?.audio === 'undefined') {
      MAIN.tips.audio = document.createElement('audio');
      MAIN.tips.audio.src = '//cdn.jin10.com/assets/media/notice.wav';
      MAIN.tips.audio.type = 'audio/x-wav';
      MAIN.tips.audio.crossOrigin = 'anonymous';
      MAIN.NODE.append(MAIN.tips.audio);
    }
    MAIN.tips?.audio?.play();
  };

  MAIN.actions.support = (n) => {
    MAIN.fn?.getThreadID();
    GM_setValue(`${HOSTNAME}_actions_support_execution_timestamp`, Date.now());
    const POST_ID = parseInt(n.parentNode.id.match(/\d+/)[0], 10);
    MAIN.data.formhash = document.getElementsByName('formhash')[0].value;
    GM_xmlhttpRequest({
      method: 'GET',
      url: `../forum.php?mod=misc&action=postreview&do=support&tid=${MAIN.data?.thread}&pid=${POST_ID}&hash=${MAIN.data?.formhash}&ajaxmenu=1&inajax=1&ajaxtarget=_menu_content`,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      timeout: 4 * 1000,
      onload: (response) => {
        if (response.readyState === 4 && response.status === 200) {
          const content = response.responseText;
          MAIN.tips.main.innerHTML = `\u{1F50A}<span style="color: firebrick;">${content.match(/<root><!\[CDATA\[(.+?)</)[1].trim()}</span>`;
          const {
            NODE_X, NODE_Y, NODE_WIDTH, NODE_HEIGHT,
          } = MAIN.fn?.getNodeCoordinate(n);
          const NODE_CENTER_X = NODE_X + NODE_WIDTH / 2;
          const NODE_CENTER_Y = NODE_Y + NODE_HEIGHT / 2;
          MAIN.tips.main.style.height = '24px';
          MAIN.tips.main.style.lineHeight = '24px';
          MAIN.tips.main.style.left = `${NODE_CENTER_X + 55 + 8}px`;
          MAIN.tips.main.style.top = `${NODE_CENTER_Y - 12}px`;
          MAIN.tips.main.style.display = 'inline-block';
          setTimeout(() => {
            MAIN.tips.main.style.transition = 'opacity 9s ease-in';
          }, 1 * 1000);
          setTimeout(() => {
            MAIN.tips.main.style.opacity = '0';
          }, 7 * 1000);
          setTimeout(() => {
            MAIN.tips.main.style.transition = 'none';
          }, 16.5 * 1000);
          setTimeout(() => {
            MAIN.tips.main.style.display = 'none';
            MAIN.tips.main.style.opacity = '1';
            GM_deleteValue(`${HOSTNAME}_actions_support_execution_timestamp`);
          }, 17 * 1000);

          const OK = () => {
            MAIN.tips.main.innerHTML = '\u{1F50A}<span style="color: #c60;">正在请求云端支持</span>\u{2728}（<span style="color: var(--main-gray);">论坛大师云端点赞</span>）';
            // MAIN.actions?.thumbs(POST_ID);
          };
          if (content.includes('\u{6295}\u{7968}\u{6210}\u{529F}') || content.includes('>postreviewupdate(')) {
            // 投票成功
            OK();
          } else if (content.includes('\u{60A8}\u{4E0D}\u{80FD}\u{5BF9}\u{81EA}\u{5DF1}\u{7684}\u{56DE}\u{5E16}')) {
            // 您不能对自己的回帖进行投票
            OK();
          } else if (content.includes('\u{60A8}\u{5DF2}\u{7ECF}\u{5BF9}\u{6B64}\u{56DE}\u{5E16}')) {
            // 您已经对此回帖投过票了
            OK();
          } else if (content.includes('\u{672A}\u{5B9A}\u{4E49}\u{64CD}\u{4F5C}')) {
            // 未定义操作
            MAIN.tips.main.innerHTML += '（\u{1F6AB}）';
          } else if (content.includes('\u{60A8}\u{9700}\u{8981}\u{5148}\u{767B}\u{5F55}')) {
            // 您需要先登录才能继续本操作
            MAIN.tips.main.innerHTML += '（\u{1F636}）';
          }
        }
      },
    });
  };

  MAIN.actions.supportPointToPoint = (post) => {
    for (let i = 0; i < post.length; i++) {
      MAIN.fn?.print('Point to Point');
      setTimeout(() => {
        MAIN.fn?.print('Post is', post[i]);
        GM_xmlhttpRequest({
          method: 'GET',
          url: `../forum.php?mod=misc&action=postreview&do=support&tid=${MAIN.data?.thread}&pid=${post[i]}&hash=${MAIN.data?.formhash}&ajaxmenu=1&inajax=1&ajaxtarget=_menu_content`,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
          timeout: 4 * 1000,
          onload: (response) => {
            if (response.readyState === 4 && response.status === 200) {
              // console.log();
            }
          },
        });
      }, i * 1234 + 1000);
    }
  };

  MAIN.actions.thumbs = (POST_ID) => {
    MAIN.data.nickname = MAIN.data?.nickname || document.querySelector('.vwmy a')?.innerHTML?.trim() || '';
    GM_xmlhttpRequest({
      method: 'POST',
      url: 'https://master-of-forums.ids.workers.dev/actions/thumbs',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
      },
      responseType: 'json',
      data: JSON.stringify({
        data: {
          author: GM_info.script?.author,
          channel: MAIN.channel,
          handler: GM_info.scriptHandler,
          homepage: GM_info.script?.homepage,
          hostname: HOSTNAME,
          name: GM_info.script?.name,
          page: HREF,
          post: POST_ID,
          thread: MAIN.data?.thread,
          uuid: GM_info.uuid || GM_info.script?.uuid || '',
          version: GM_info.script?.version,
        },
        user: {
          // eslint-disable-next-line camelcase, no-undef
          id: typeof discuz_uid === 'string' ? discuz_uid : '',
          nickname: MAIN.data.nickname,
        },
      }),
      nocache: true,
      timeout: 9 * 1000,
      onload: (response) => {
        if (response.readyState === 4 && response.status === 200) {
          const content = JSON.parse(response.responseText);
          if (content.statusCode === 200) {
            setTimeout(() => {
              MAIN.tips.main.innerHTML = content.message;
            }, content.delay);
            MAIN.actions?.supportPointToPoint(content.post);
          }
        } else {
          setTimeout(() => {
            MAIN.tips.main.innerHTML = '\u{1F50A}<span style="color: #036;">云端顶帖</span><span style="color: #060;">申请失败</span>\u{1F641}（<span style="color: var(--main-gray);">论坛大师云端点赞</span>）';
          }, 4 * 1000);
        }
      },
      onerror: () => {
        setTimeout(() => {
          MAIN.tips.main.innerHTML = '\u{1F50A}<span style="color: #036;">云端顶帖</span><span style="color: #060;">\u{8BF7}\u{6C42}\u{9519}\u{8BEF}\u{FF01}</span>\u{1F641}（<span style="color: var(--main-gray);">论坛大师云端点赞</span>）';
        }, 4 * 1000);
      },
      ontimeout: () => {
        setTimeout(() => {
          MAIN.tips.main.innerHTML = '\u{1F50A}<span style="color: #036;">云端顶帖</span><span style="color: #060;">\u{8BF7}\u{6C42}\u{8D85}\u{65F6}\u{FF01}</span>\u{1F641}（<span style="color: var(--main-gray);">论坛大师云端点赞</span>）';
        }, 4 * 1000);
      },
    });
  };

  document.addEventListener('click', (event) => {
    const THIS_NODE_TARGET = event.target;
    if (THIS_NODE_TARGET.tagName.toLowerCase() === 'img' && THIS_NODE_TARGET.src.includes('/master-of-forums/master-of-forums/public/images/patch.')) {
      event.preventDefault();
    }
  }, false);
  document.addEventListener('contextmenu', (event) => {
    const THIS_NODE_TARGET = event.target;
    if (THIS_NODE_TARGET.tagName.toLowerCase() === 'img' && THIS_NODE_TARGET.src.includes('/master-of-forums/master-of-forums/public/images/patch.')) {
      event.preventDefault();
    }
  }, false);
  document.addEventListener('dblclick', (event) => {
    const THIS_NODE_TARGET = event.target;
    if (THIS_NODE_TARGET.tagName.toLowerCase() === 'img' && THIS_NODE_TARGET.src.includes('/master-of-forums/master-of-forums/public/images/patch.')) {
      event.preventDefault();
      if (Date.now() - GM_getValue(`${HOSTNAME}_actions_support_execution_timestamp`, 0) > 19 * 1000 && ['91ai.net'].includes(HOSTNAME)) {
        THIS_NODE_TARGET.classList.add('node-reappear');
        setTimeout(() => {
          THIS_NODE_TARGET.classList.remove('node-reappear');
        }, 1000);
        MAIN.actions?.support(THIS_NODE_TARGET);
      }
    }
  }, false);
  document.addEventListener('keydown', (event) => {
    if (event.target.tagName.toLowerCase() === 'body') {
      switch (event.key) {
        case 'H':
          GM_openInTab(GM_info.script?.homepage, {
            active: true,
          });
          event.preventDefault();
          break;

        case '?':
          GM_openInTab(MAIN.repository, {
            active: true,
          });
          event.preventDefault();
          break;

        case '/':
          window.scrollTo(0, 0);
          if (document.getElementById('search')) {
            document.getElementById('search').focus();
          } else if (document.getElementsByClassName('search')[0]) {
            document.getElementsByClassName('search')[0].focus();
          } else if (document.getElementById('scbar_txt')) {
            document.getElementById('scbar_txt').focus();
          }
          event.preventDefault();
          break;

        default:
          break;
      }
    }
  }, false);

  // Tips
  MAIN.tips.main = document.createElement('div');
  MAIN.tips.main.id = 'main-tip';
  MAIN.NODE.append(MAIN.tips.main);

  // Fileboard
  MAIN.tips.fileboard = document.createElement('div');
  MAIN.tips.fileboard.className = 'main-fileboard';
  MAIN.tips.fileboard.innerHTML = `<div class="fileboard-icon"></div><div class="fileboard-close"></div><div class="fileboard-content"><div class="fileboard-text"><kbd>${USER_AGENT.includes('Mac OS X') ? 'Command' : 'Ctrl'}</kbd>&nbsp;<span style="color: var(--main-gray);">+</span>&nbsp;<kbd>V</kbd></div></div>`;
  MAIN.NODE.append(MAIN.tips.fileboard);
  MAIN.tips.fileboard.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  }, false);
  // eslint-disable-next-line prefer-destructuring
  MAIN.tips.fileboardIcon = MAIN.tips.fileboard.getElementsByClassName('fileboard-icon')[0];
  MAIN.tips.fileboardIcon.addEventListener('click', (event) => {
    GM_openInTab(GM_info.script?.homepage, {
      active: true,
    });
    event.preventDefault();
  }, false);
  // eslint-disable-next-line prefer-destructuring
  MAIN.tips.fileboardClose = MAIN.tips.fileboard.getElementsByClassName('fileboard-close')[0];
  MAIN.tips.fileboardClose.addEventListener('click', (event) => {
    MAIN.can.pasteUpload = false;
    MAIN.tips.fileboard.style.display = 'none';
    event.preventDefault();
  }, false);
  // eslint-disable-next-line prefer-destructuring
  MAIN.tips.fileboardContent = MAIN.tips.fileboard.getElementsByClassName('fileboard-content')[0];
  MAIN.tips.fileboardContent.addEventListener('dragover', (event) => {
    event.target.classList.add('active');
    event.preventDefault();
  });
  MAIN.tips.fileboardContent.addEventListener('dragleave', (event) => {
    event.target.classList.remove('active');
    event.preventDefault();
  });
  MAIN.tips.fileboardContent.addEventListener('drop', (event) => {
    event.target.classList.remove('active');
    const fileList = event.dataTransfer?.files;
    if (fileList && fileList.length && fileList[0].type.includes('image/')) {
      const FILE = fileList[0];
      MAIN.fn?.fileUploadFunction(FILE);
    } else {
      GM_notification({
        title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
        text: '\u{6682}\u{53EA}\u{652F}\u{6301}\u{62D6}\u{62FD}\u{4E0A}\u{4F20}\u{56FE}\u{7247}\u{6587}\u{4EF6}\u{FF01}',
        image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
        timeout: 4 * 1000,
      });
    }
    event.preventDefault();
  });
  MAIN.can.pasteUpload = false;
  document.addEventListener('paste', (event) => {
    if (MAIN.can?.pasteUpload) {
      const itemList = event.clipboardData?.items;
      if (itemList && itemList.length) {
        for (const i of itemList) {
          if (i.type.includes('image/')) {
            const FILE = i.getAsFile();
            MAIN.fn?.fileUploadFunction(FILE);
            break;
          }
        }
      }
    }
  });

  // Back To Top (Scroll To Top)
  MAIN.fn.create_a_back_to_top = () => {
    const BUTTON = document.createElement('div');
    BUTTON.className = 'main-hover-button back-to-top';
    BUTTON.addEventListener('click', (event) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      event.preventDefault();
    }, false);
    BUTTON.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    }, false);
    window.addEventListener('scroll', () => {
      if (window.scrollY < 200) {
        BUTTON.style.display = 'none';
      } else {
        BUTTON.style.display = 'block';
      }
    }, false);
    MAIN.NODE.append(BUTTON);
  };

  // Back To Top (Scroll To Top)
  if (MAIN.check_boxes?.create_a_back_to_top === true) {
    setTimeout(() => {
      if (typeof MAIN.fn?.create_a_back_to_top === 'function') {
        MAIN.fn?.create_a_back_to_top();
      }
    }, 1000);
  }

  // Patch functions
  MAIN.fn.addPatch = () => {
    if (typeof MAIN.can?.addPatchTimestamp === 'number' && Date.now() - MAIN.can?.addPatchTimestamp < 1000) {
      return false;
    }
    MAIN.can.removePatch = false;
    MAIN.can.addPatchTimestamp = Date.now();
    for (const i of document.getElementsByTagName('textarea')) {
      const CONTENT = i.value.replaceAll(MAIN.data?.patch, '').replaceAll('[b][/b]', '').trim();
      i.value = `${CONTENT}${MAIN.data?.patch}`;
      i.style.visibility = 'hidden';
      if (MAIN.data?.hostname === 'ωωω_hostloc_com') {
        i.value = MAIN.fn?.internetCensorship(i.value);
      }
      setTimeout(() => {
        i.value = CONTENT;
        i.style.visibility = 'visible';
      }, 999);
    }

    // Show master badges
    MAIN.can.showMasterBadge = true;
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        if (MAIN.can?.showMasterBadge) {
          MAIN.fn?.showMasterBadge();
        }
      }, i * 200 + 1000);
    }
    return true;
  };
  MAIN.fn.removePatch = () => {
    for (const i of document.getElementsByTagName('textarea')) {
      if (i.value) {
        i.value = i.value.replaceAll(MAIN.data?.patch, '').replaceAll('[img][/img]', '').replaceAll('[b][/b]', '').trim();
      }
    }
  };
  MAIN.fn.buttonSubmit = () => {
    MAIN.can.buttonSubmit = true;
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        if (MAIN.can?.buttonSubmit && document.getElementById('postmessage') && document.getElementById('postsubmit')) {
          MAIN.can.buttonSubmit = false;
          document.getElementById('postsubmit').addEventListener('click', () => {
            MAIN.fn?.addPatch();
          }, false);
        }
      }, i * 300 + 300);
    }
  };
  MAIN.fn.buttonFastre = () => {
    for (const i of document.getElementsByClassName('fastre')) {
      i.addEventListener('click', () => {
        MAIN.fn?.buttonSubmit();
      }, false);
    }
  };
  setTimeout(MAIN.fn?.buttonFastre, 1000);

  // Patch add
  setTimeout(() => {
    // Validate
    if (typeof validate === 'function') {
      // eslint-disable-next-line no-undef
      MAIN.window.validate = validate;
      unsafeWindow.validate = (...args) => {
        MAIN.fn?.addPatch();
        return MAIN.window.validate(...args);
      };
    }

    // Fast post validate
    if (typeof fastpostvalidate === 'function') {
      // eslint-disable-next-line no-undef
      MAIN.window.fastpostvalidate = fastpostvalidate;
      unsafeWindow.fastpostvalidate = (...args) => {
        MAIN.fn?.addPatch();
        return MAIN.window.fastpostvalidate(...args);
      };
    }

    // Check post
    if (typeof checkpost === 'function') {
      // eslint-disable-next-line no-undef
      MAIN.window.checkpost = checkpost;
      unsafeWindow.checkpost = (...args) => {
        MAIN.fn?.addPatch();
        return MAIN.window.checkpost(...args);
      };
    }
  }, 1000);

  // Patch remove
  if (HREF.includes('&action=edit&')) {
    MAIN.fn?.removePatch();
    MAIN.can.removePatch = true;
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        if (MAIN.can?.removePatch) {
          MAIN.fn?.removePatch();
        }
      }, i * 100);
    }
  }

  // Badge function
  MAIN.fn.showMasterBadge = () => {
    for (const i of document.getElementsByTagName('img')) {
      if (i.src.includes('/master-of-forums/master-of-forums/public/images/patch.') && i.classList.contains('master-badge') === false) {
        MAIN.can.showMasterBadge = false;
        i.classList.add('master-badge');
        i.removeAttribute('onclick');
        i.removeAttribute('onload');
        i.removeAttribute('onmouseover');
        i.setAttribute('draggable', 'false');
        i.setAttribute('referrerpolicy', 'no-referrer');
      }
    }
  };

  // Show master badges
  MAIN.can.showMasterBadge = true;
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      if (MAIN.can?.showMasterBadge) {
        MAIN.fn?.showMasterBadge();
      }
    }, i * 300);
  }

  // Drawer
  MAIN.fn.drawer = () => {
    GM_addStyle(`
    .master-of-forums .discussion {
      display: block;
    }
    `);
    MAIN.fn?.getThreadID();
    document.getElementById('discussion').addEventListener('mouseenter', (event) => {
      if (typeof MAIN.can?.drawerDataCacheTime === 'undefined' || Date.now() - MAIN.can?.drawerDataCacheTime > 30 * 1000) {
        MAIN.can.drawerDataCacheTime = Date.now();
        document.getElementById('discussion-list').innerHTML = '';
        event.target.classList.add('loading');
        GM_xmlhttpRequest({
          method: 'GET',
          url: `https://master-of-forums.ids.workers.dev/?uuid=${GM_info.uuid || GM_info.script?.uuid}&hostname=${MAIN.data?.hostname}&data=postlist&sort=posttime`,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest',
          },
          timeout: 9 * 1000,
          onload: (response) => {
            if (response.readyState === 4 && response.status === 200) {
              const DATA = JSON.parse(response.responseText);
              let discussionData = '';
              for (const i of DATA.data?.items) {
                discussionData += `<div class="discussion-list-item${i.discussionId === MAIN.data?.thread ? ' active' : ''}">
                  <div class="discussion-list-item-author">
                    <a class="discussion-list-item-author-avatar" href="space-uid-${i.userId}.html" target="_blank">
                      <img class="avatar" src="${i.userId === 0 ? '//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/question-mark.svg' : `uc_server/avatar.php?uid=${i.userId}&amp;size=small`}" loading="lazy" referrerpolicy="no-referrer" draggable="false">
                    </a>
                  </div>
                  <div class="discussion-list-item-content">
                    <div>
                      <span class="content-username"><a href="${i.userId === 0 ? GM_info.script?.homepage : `space-username-${encodeURIComponent(i.userName)}.html`}" target="_blank">${i.userName ? i.userName : '\u{533F}\u{540D}'}</a></span>&nbsp;<span class="content-bull">&bull;</span>&nbsp;<time class="content-time" pubdate data-date="${i.discussionDate}">${i.discussionTime || i.discussionDate}</time>
                      <span class="content-count">\u{1F4AC}<samp>${String(i.discussionCount).padStart(3, ' ').replaceAll(' ', '&nbsp;')}</samp></span>
                    </div>
                    <div>
                      <span class="content-title"><a href="thread-${i.discussionId}-1-1.html">${i.discussionTitle}</a><span class="content-permission">${i.discussionReadPermission === 0 ? '' : `〖阅读权限 &bull; <samp>${i.discussionReadPermission}</samp>〗`}</span></span>
                    </div>
                  </div>
                </div>`;
              }
              if (MAIN.check_boxes?.show_user_avatar === false) {
                discussionData = discussionData.replace(/<img class="avatar" src=".+?"/g, '<img class="avatar" src="//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/default-avatar-small.webp"');
              }
              discussionData += '<div style="padding: 2rem 0; color: var(--main-red); text-align: center;">~ \u{6211}\u{662F}\u{6709}\u{5E95}\u{7EBF}\u{7684} ~</div>';
              event.target.classList.remove('loading');
              document.getElementById('discussion-list').innerHTML = discussionData;
            }
          },
          onerror: () => {
            event.target.classList.remove('loading');
            document.getElementById('discussion-list').innerHTML = `<a href="${MAIN.repository}" target="_blank"><div class="discussion-list-fail discussion-list-fail-error"></div></a>`;
          },
          ontimeout: () => {
            event.target.classList.remove('loading');
            document.getElementById('discussion-list').innerHTML = `<a href="${MAIN.repository}" target="_blank"><div class="discussion-list-fail discussion-list-fail-timeout"></div></a>`;
          },
        });
      }
      event.preventDefault();
    }, false);

    // document.getElementById('discussion-list').addEventListener('mouseover', (event) => {
    //   clearTimeout(MAIN.actions?.timeoutFunction);
    //   const THIS_NODE_TARGET = event.target;
    //   if (THIS_NODE_TARGET.tagName.toLowerCase() === 'a' && THIS_NODE_TARGET.href.includes('/thread-')) {
    //     MAIN.actions.timeoutFunction = setTimeout(() => {
    //       MAIN.fn?.injectLinkPrefetchInPage(THIS_NODE_TARGET.href);
    //     }, 1000);
    //   }
    // }, false);

    // Drawer Guide
    if (REFERRER.includes('/forum-') || REFERRER === '') {
      const DRAWER_GUIDE = document.createElement('span');
      DRAWER_GUIDE.className = 'drawer-guide';
      DRAWER_GUIDE.innerHTML = '\u{1F448}';
      DRAWER_GUIDE.style.position = 'fixed';
      DRAWER_GUIDE.style.top = `${Math.floor(Math.random() * 100)}%`;
      MAIN.NODE.append(DRAWER_GUIDE);
    }
  };

  MAIN.fn.ωωω_t66y_com = () => {
    // Remove ads
    GM_addStyle(`
    #cate_thread font,
    .do_not_catch .tips,
    img[data-href$=".com"],
    img[data-href$=".com/"],
    img[data-href$=".net"],
    img[data-href$=".net/"],
    img[data-href$=".org"],
    img[data-href$=".org/"],
    img[data-href$="/Index"],
    img[data-href$="tiaozhuan.html"],
    .sptable_do_not_remove,
    .html-data-article-content .image-big-text {
      display: none !important;
    }
    #header .h,
    #main .pages,
    #main .tipad,
    #main .tiptop,
    .do_not_catch,
    .html-data-article-content {
      font-family: var(--main-body-font-family);
      font-size: var(--main-body-font-size);
      font-weight: var(--main-body-font-weight);
      line-height: var(--main-body-line-height);
      text-align: var(--main-body-text-align);
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .do_not_catch [bgcolor][valign="top"] {
      padding: 0 0.25rem;
    }
    .do_not_catch [bgcolor][valign="top"] > br {
      display: none;
    }
    .do_not_catch img,
    .html-data-article-content img {
      max-width: 100%;
      box-shadow: 0 0 2px #ddd;
    }
    .do_not_catch img,
    .html-data-article-content img:hover {
      box-shadow: 0 0 4px #ddd;
    }
    .data-container {
      position: relative;
      display: inline-block;
      padding: 0;
      margin: 0;
    }
    .data-container .data-tip {
      display: inline-block;
      font-family: var(--main-body-font-family);
      font-size: var(--main-body-font-size);
      font-weight: var(--main-body-font-weight);
      line-height: var(--main-body-line-height);
      text-align: var(--main-body-text-align);
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      filter: drop-shadow(0 0 0.25rem #fff);
      opacity: 0;
      -webkit-user-drag: none;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .data-container:hover .data-tip {
      opacity: 1;
    }
    .data-tip.data-src {
      position: absolute;
      right: 1.5rem;
      bottom: 0;
    }
    .data-tip.data-href {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    `);

    // Disable functions
    unsafeWindow.r9aeadS = () => {};
    unsafeWindow.spinit = () => {};
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        unsafeWindow.r9aeadS = () => {};
        unsafeWindow.spinit = () => {};
      }, i * 20);
    }

    const removeAds = (content) => {
      MAIN.data.content = content;
      const dataList = [
        '【影片名称】',
        '【影片名稱】',
        '【新片首发】',
        '【新片首發】',
        '【漫画名字】',
        '【漫畫名字】',
        '【视频名称】',
        '【視頻名稱】',
        '影片名称：',
        '影片名稱：',
        '新片首发：',
        '新片首發：',
        '漫画名字：',
        '漫畫名字：',
        '视频名称：',
        '視頻名稱：',
      ];
      for (const i of dataList) {
        if (content.includes(i)) {
          MAIN.data.content = i + content.split(i)[1];
          break;
        }
      }
      MAIN.data.content = MAIN.data?.content?.replaceAll('<span style="display:inline-block;color:Red">', '<span style="display: inline-block; color: firebrick;">');
      MAIN.data.content = MAIN.data?.content?.replaceAll(/>種子連結↓+?</g, '>種子連結\u{2B07}<');
      const tempDataList = [
        '</a></span><br><br><br><br><br><br><span class="f24"><span style="display: inline-block; color: firebrick;">種子連結\u{2B07}</span></span>',
        '</span></a><br><br><br><br><br><br><span class="f24"><span style="display: inline-block; color: firebrick;">種子連結\u{2B07}</span></span>',
        '</a></span><br><br><br><br><span class="f24"><span style="display: inline-block; color: firebrick;">種子連結\u{2B07}</span></span>',
        '</span></a><br><br><br><br><span class="f24"><span style="display: inline-block; color: firebrick;">種子連結\u{2B07}</span></span>',
      ];
      for (const i of tempDataList) {
        if (MAIN.data?.content?.includes(i)) {
          MAIN.data.content = `<span><span style="display: inline-block; color: firebrick;">種子連結\u{2B07}</span></span>${MAIN.data?.content?.split(i)[1]}`;
          break;
        }
      }
      if (MAIN.data?.content?.includes('\u{5929}\u{4E0B}\u{6CA1}\u{6709}\u{7EA6}\u{4E0D}\u{6210}\u{7684}\u{70AE}\u{FF01}</a><br>')) {
        MAIN.data.content = MAIN.data?.content?.split('\u{5929}\u{4E0B}\u{6CA1}\u{6709}\u{7EA6}\u{4E0D}\u{6210}\u{7684}\u{70AE}\u{FF01}</a><br>')[1];
      }
      MAIN.data.content = MAIN.data?.content?.replace(/"https?:\/\/to\.redircdn\.com\/\?/g, '"')
        .replace(/"\/\/to\.redircdn\.com\/\?/g, '"')
        .replace(/([0-9a-zA-Z])___+([0-9a-zA-Z])/g, '$1.$2')
        .replace(/ ess-data="(.+?)"/g, ' src="$1" ess-data="$1"')
        .replace(/&amp;[0-9a-zA-Z]">/g, '">')
        .replace(/&[0-9a-zA-Z]">/g, '">')
        .replace(/ iyl-data=".+?"/g, '')
        .replace(/ class="f\d+?"/g, '')
        .replace(/ href="((?!"|>).)+?">(https?:\/\/.+?)<\/a>/g, ' href="$2">$2</a>')
        .replace(/ href="((?!"|>).)+?magnet:\?xt=urn:/g, ' href="magnet:?xt=urn:')
        .replace(/ href="magnet:\?xt=urn:(.+?):([0-9a-zA-Z]+).+?"/g, ' href="magnet:?xt=urn:$1:$2"')
        .replace(/">magnet:\?xt=urn:(.+?):([0-9a-zA-Z]+).+?<\/a>/g, '">magnet:?xt=urn:$1:$2</a>')
        .replace(/<br>\n?<br>\n?(<br>\n?)+/g, '<br><br>')
        .replaceAll(' style="cursor: pointer;"', '')
        .replaceAll(' data-link="', ' data-href="')
        .replaceAll(' ess-data="', ' data-src="')
        .replaceAll('"http://download.downsx.org/', '"//download.downsx.org/')
        .replaceAll('"http://www.luludown.info/', '"//www.luludown.info/')
        .replaceAll('"http://www.rmdown.com/', '"//www.rmdown.com/')
        .trim();

      MAIN.data.content = MAIN.data?.content?.replace(/<img (.+?)>/g, '<figure class="data-container"><img $1 loading="lazy" referrerpolicy="no-referrer"><span class="data-tip data-src">\u{1F340}</span><span class="data-tip data-href">\u{1F341}</span></figure>');
    };

    // Anti-anti-anti-advertising
    // eslint-disable-next-line no-shadow
    const observer = new MutationObserver((mutationsList, observer) => {
      mutationsList.map((mutations) => {
        if (mutations.target.classList.contains('tpc_content') && mutations.target.innerHTML.length > 99) {
          if (typeof MAIN.data?.content === 'undefined') {
            observer.disconnect();
            mutations.target.classList.replace('tpc_content', 'html-data-article-content');
            removeAds(mutations.target.innerHTML);
            if (MAIN.data?.content) {
              // eslint-disable-next-line no-param-reassign
              mutations.target.innerHTML = MAIN.data?.content;
            }
            for (const i of document.getElementsByClassName('tpc_content')) {
              i.classList.replace('tpc_content', 'html-data-article-content');
            }
            return true;
          }
        }
        return false;
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Data sign
    const dataSign = () => {
      for (const i of document.querySelectorAll('.data-container img')) {
        if (/\/\/thumbs.+_t\.(avif|gif|jpe?g|png|svg|webp)$/.test(i.src)) {
          i.dataset.src = i.src.replace('//thumbs', '//images').replace(/_t\.(avif|gif|jpe?g|png|svg|webp)$/, '_o.$1');
          i.parentNode.getElementsByClassName('data-src')[0].innerHTML = '\u{1F33B}';
        } else if (/\.th\.(avif|gif|jpe?g|png|svg|webp)$/.test(i.src)) {
          i.dataset.src = i.src.replace(/\.th\.(avif|gif|jpe?g|png|svg|webp)$/, '.$1');
          i.parentNode.getElementsByClassName('data-src')[0].innerHTML = '\u{1F33B}';
        } else if (/\/\/[0-9a-zA-Z]+?\.netcdn\.space\/.+?-[0-9]+?\.(avif|gif|jpe?g|png|svg|webp)$/.test(i.src)) {
          i.dataset.src = i.src.replace(/\/\/([0-9a-zA-Z]+?)\.netcdn\.space\/(.+?)-([0-9]+?)\.(avif|gif|jpe?g|png|svg|webp)$/, '//$1.netcdn.space/$2$1-$3.$4');
          i.parentNode.getElementsByClassName('data-src')[0].innerHTML = '\u{1F33B}';
        }
      }
      if (document.getElementsByClassName('html-data-article-content')[0]) {
        document.getElementsByClassName('html-data-article-content')[0].addEventListener('click', (event) => {
          if (event.target.classList.contains('data-tip') && event.target.classList.contains('data-src') && event.target.parentNode.getElementsByTagName('img')[0]?.dataset?.src) {
            GM_openInTab(event.target.parentNode.getElementsByTagName('img')[0].dataset.src, {
              active: true,
              insert: true,
              setParent: true,
            });
            event.preventDefault();
          }
          if (event.target.classList.contains('data-tip') && event.target.classList.contains('data-href') && event.target.parentNode.getElementsByTagName('img')[0]?.dataset?.href) {
            GM_openInTab(event.target.parentNode.getElementsByTagName('img')[0].dataset.href, {
              active: true,
              insert: true,
              setParent: true,
            });
            event.preventDefault();
          }
        }, false);
      }
    };
    MAIN.can.dataSign = true;
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        if (MAIN.can?.dataSign && document.querySelector('.data-container .data-tip')) {
          MAIN.can.dataSign = false;
          dataSign();
        }
      }, i * 200);
    }
  };

  MAIN.fn.ωωω_52pojie_cn = () => {
    // Disable patch
    MAIN.data.patch = '';

    // Remove ads
    GM_addStyle(`
    #toptb .wp .z a,
    #nv img[src$="/scan.gif"],
    #ct .bm.bml.pbn .bm_c.cl.pbn,
    #threadlisttableid [id^="stickthread_"],
    #fastpostform .pnpost span,
    span a[title="\u{5173}\u{6CE8}\u{5FAE}\u{4FE1}"],
    span a[title="\u{8FD4}\u{56DE}\u{9876}\u{90E8}"],
    [id^="google_ads_"] {
      display: none !important;
    }
    body #jz52top {
      position: fixed;
      right: 1.75rem;
      bottom: 5rem;
    }
    `);
    setTimeout(() => {
      if (document.querySelector('#jz52top a')?.href) {
        document.querySelector('#jz52top a').href = document.querySelector('#jz52top a').href.replace('/index.php', '/');
      }
    }, 1000);
    if (PATHNAME.includes('/forum-') || HREF.includes('/forum.php?mod=forumdisplay')) {
      const HEAD_POST = document.querySelector('#threadlisttableid tbody');
      HEAD_POST.innerHTML = HEAD_POST.innerHTML.replace(/<strong class=".+?">.+?</, '<strong><');
      const HEAD_POST_LINKS = HEAD_POST.querySelectorAll('a');
      HEAD_POST_LINKS[0].innerHTML = '\u{8BBA}\u{575B}\u{7F51}\u{7AD9}\u{9875}\u{9762}\u{7F8E}\u{5316}\u{3001}\u{5E7F}\u{544A}\u{79FB}\u{9664}\u{3001}\u{529F}\u{80FD}\u{589E}\u{5F3A}\u{3002}\u{7F8E}\u{8F6E}\u{7F8E}\u{5942}\u{7684}\u{89C6}\u{89C9}\u{4EAB}\u{53D7}\u{FF0C}\u{5B89}\u{7136}\u{606C}\u{9759}\u{7684}\u{8BBA}\u{575B}\u{65F6}\u{5149}\u{2026}\u{2026}';
      HEAD_POST_LINKS[0].href = GM_info.script?.homepage;
      HEAD_POST_LINKS[1].innerHTML = GM_info.script?.author;
      HEAD_POST_LINKS[1].href = MAIN.repository;
    }
  };

  MAIN.fn.ωωω_fobshanghai_com = () => {
    // Remove ads
    GM_addStyle(`
    .mainheader .logo .right,
    .spaceborder table[style$="#D6E0EF"],
    img[src^="https://link.fobshanghai.com/"],
    .spaceborder .t_msg .t_infoline {
      display: none !important;
    }
    .spaceborder .header,
    .spaceborder .f_title {
      font-family: var(--main-body-font-family);
      font-size: var(--main-body-font-size);
      font-weight: var(--main-body-font-weight);
      line-height: var(--main-body-line-height);
      text-align: var(--main-body-text-align);
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    `);
  };

  MAIN.fn.ωωω_v2ex_com = () => {
    // Remove ads
    GM_addStyle(`
    .sidebar_compliance,
    .sidebar_units,
    a[href="/mission/daily"],
    .fr > a[href^="https://www.digitalocean.com/"] {
      display: none !important;
    }
    .fa.fa-gift::before {
      color: var(--main-green);
      content: "签到成功（论坛大师）";
    }
    `);
    if (PATHNAME === '/' && document.getElementsByClassName('fa-gift').length) {
      const ONCE = document.body.innerHTML.match(/signout\?once=(\d+)/)[1];
      GM_xmlhttpRequest({
        method: 'GET',
        url: `/mission/daily/redeem?once=${ONCE}`,
        timeout: 9 * 1000,
        onload: (response) => {
          if (response.readyState === 4 && response.status === 200) {
            const content = response.responseText;
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: `\u{1F38A}\u{7B7E}\u{5230}\u{6210}\u{529F}（${content.match(/<div class="cell">(.+?\s+?\d+\s+?天)<\/div>/)[1]}）`,
              image: 'https://www.v2ex.com/apple-touch-icon.png',
              timeout: 9 * 1000,
              onclick: () => {
                GM_openInTab(`//${HOSTNAME}/balance`, {
                  active: true,
                });
              },
            });
            // Audio Notice
            MAIN.fn?.audio();

            if (content.includes('<a href="/notifications" class="fade">') && content.includes('<a href="/notifications" class="fade">0') === false) {
              const message = `\u{1F50A}\u{60A8}\u{6709} ${content.match(/<a href="\/notifications" class="fade">(.+?)</)[1]}`;
              GM_notification({
                title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
                text: message,
                image: 'https://www.v2ex.com/apple-touch-icon.png',
                timeout: 9 * 1000,
                onclick: () => {
                  GM_openInTab(`//${HOSTNAME}/notifications`, {
                    active: true,
                  });
                },
              });
            }
          } else {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: '\u{7B7E}\u{5230}\u{5931}\u{8D25}\u{FF01}',
              image: 'https://www.v2ex.com/apple-touch-icon.png',
              timeout: 4 * 1000,
            });
          }
        },
        onerror: () => {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{7B7E}\u{5230}\u{9519}\u{8BEF}\u{FF01}',
            image: 'https://www.v2ex.com/apple-touch-icon.png',
            timeout: 4 * 1000,
          });
        },
        ontimeout: () => {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{7B7E}\u{5230}\u{8D85}\u{65F6}\u{FF01}',
            image: 'https://www.v2ex.com/apple-touch-icon.png',
            timeout: 4 * 1000,
          });
        },
      });
    }

    // Base64 Decode
    MONKEY_MENU.name = '\u{1F48E} Base64 Decode（\u{89E3}\u{7801}）';
    GM_registerMenuCommand(MONKEY_MENU.name, () => {
      const content = window.getSelection()?.toString()
        ?.replaceAll('：', '')
        ?.replaceAll(':', '')
        ?.replaceAll(' ', '')
        ?.replaceAll('\n', '')
        ?.trim() || prompt('\u{8F93}\u{5165}\u{5185}\u{5BB9}（\u{89E3}\u{7801}）') // eslint-disable-line no-alert
        ?.replaceAll('：', '')
        ?.replaceAll(':', '')
        ?.replaceAll(' ', '')
        ?.replaceAll('\n', '')
        ?.trim();
      if (content) {
        try {
          const data = decodeURIComponent(atob(content));
          GM_setClipboard(data, 'text');
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: `\u{89E3}\u{7801}\u{7ED3}\u{679C}：${data}（\u{5DF2}\u{5199}\u{5165}\u{526A}\u{5207}\u{677F}\u{1F4CB}）`,
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 60 * 1000,
          });
          // Audio Notice
          MAIN.fn?.audio();
        } catch (error) {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{89E3}\u{7801}\u{5931}\u{8D25}\u{FF01}',
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 4 * 1000,
          });
        }
      }
    });

    // Base64 Encode
    MONKEY_MENU.name = '\u{1F48E} Base64 Encode（\u{7F16}\u{7801}）';
    GM_registerMenuCommand(MONKEY_MENU.name, () => {
      const content = window.getSelection()?.toString()?.trim() || prompt('\u{8F93}\u{5165}\u{5185}\u{5BB9}（\u{7F16}\u{7801}）')?.trim(); // eslint-disable-line no-alert
      if (content) {
        const data = btoa(encodeURIComponent(content));
        GM_setClipboard(data, 'text');
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: `\u{7F16}\u{7801}\u{7ED3}\u{679C}：${data}（\u{5DF2}\u{5199}\u{5165}\u{526A}\u{5207}\u{677F}\u{1F4CB}）`,
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 9 * 1000,
        });
        // Audio Notice
        MAIN.fn?.audio();
      }
    });
  };

  MAIN.fn.ωωω_hostloc_com = () => {
    if (PATHNAME.includes('/thread-') || HREF.includes('/forum.php?mod=viewthread&tid=')) {
      MAIN.fn?.drawer();
    } else if (PATHNAME.includes('/space-uid-') || PATHNAME.includes('/space-username-') || HREF.includes('/home.php?mod=space')) {
      const DIY_STYLE = document.getElementById('diy_style');
      if (DIY_STYLE) {
        DIY_STYLE.textContent = '';
      }
    }

    // Check-in
    MONKEY_MENU.name = '\u{1F993} \u{4E3B}\u{673A}\u{8BBA}\u{575B} \u{1F31E} \u{7528}\u{6237}\u{7B7E}\u{5230}';
    GM_registerMenuCommand(MONKEY_MENU.name, () => {
      if (typeof MAIN.can?.checkIn === 'undefined') {
        MAIN.can.checkIn = false;
        GM_notification({
          title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
          text: '\u{7B7E}\u{5230}\u{671F}\u{95F4}\u{8BF7}\u{52FF}\u{5237}\u{65B0}\u{9875}\u{9762}\u{FF08}\u{5927}\u{7EA6}\u{5341}\u{79D2}\u{FF09}\u{FF01}',
          image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
          timeout: 4 * 1000,
        });
        GM_xmlhttpRequest({
          method: 'GET',
          url: '../home.php?mod=space&do=friend&view=online&type=member',
          timeout: 4 * 1000,
          onload: (response) => {
            if (response.readyState === 4 && response.status === 200) {
              const content = response.responseText;
              const data = [...new Set(content.match(/space-uid-\d+\.html/g))];
              if (data.length > 14) {
                data.length = 14;
              }
              // Array subscript 0 is you
              for (let i = 1; i < data.length; i++) {
                setTimeout(() => {
                  GM_xmlhttpRequest({
                    method: 'GET',
                    url: `../${data[i]}`,
                    timeout: 2 * 1000,
                  });
                }, i * 1.1 * 1000);
              }
            }
          },
        });
        setTimeout(() => {
          GM_notification({
            title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
            text: '\u{7B7E}\u{5230}\u{4EFB}\u{52A1}\u{6267}\u{884C}\u{5B8C}\u{6210}\u{FF01}',
            image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
            timeout: 4 * 1000,
            onclick: () => {
              GM_openInTab(`//${HOSTNAME}/home.php?mod=space&do=friend&view=trace`, {
                active: true,
              });
            },
          });
          // Audio Notice
          MAIN.fn?.audio();
        }, 15 * 1000);
      }
    });

    // Form
    MONKEY_MENU.name = '\u{1F993} \u{4E3B}\u{673A}\u{8BBA}\u{575B} \u{1F344} \u{62A5}\u{544A}\u{8BBA}\u{575B}\u{8FDD}\u{7981}\u{8BCD}\u{7ED9}\u{8BBA}\u{575B}\u{5927}\u{5E08}';
    GM_registerMenuCommand(MONKEY_MENU.name, () => {
      GM_openInTab('https://www.mikecrm.com/4EblkxT', {
        active: true,
      });
    });

    // Switch to Domains
    const DOMAIN_LIST = [
      'hostloc.com',
      'www.hostloc.com',
      '91ai.net',
      'www.91ai.net',
    ];
    for (let i = 0; i < DOMAIN_LIST.length; i++) {
      const DOMAIN = DOMAIN_LIST[i];
      MONKEY_MENU.name = `\u{1F500} Switch No.${i + 1} ${HOSTNAME === DOMAIN ? '\u{1F31D}' : '\u{1F31A}'} ${DOMAIN}`;
      GM_registerMenuCommand(MONKEY_MENU.name, () => {
        document.body.style.transition = 'opacity 1s ease-out';
        document.body.style.opacity = 0;
        window.location.href = HREF.replace(HOSTNAME, DOMAIN);
      });
    }

    // Internet censorship
    MAIN.fn.internetCensorship = (content) => {
      let data = content;
      const DATA_LIST = [
        '\u{4E00}\u{515A}',
        '\u{4E07}\u{91CC}',
        '\u{4E09}\u{4E2A}\u{4EE3}\u{8868}',
        '\u{4E13}\u{653F}',
        '\u{4E16}\u{754C}\u{901A}',
        '\u{4E1C}\u{7A81}',
        '\u{4E24}\u{5CB8}\u{5173}\u{7CFB}',
        '\u{4E2D}\u{592E}\u{519B}\u{59D4}',
        '\u{4E60}\u{8FD1}\u{5E73}',
        '\u{4E71}\u{4F26}',
        '\u{4EB2}\u{7F8E}',
        '\u{4EBA}\u{4F53}',
        '\u{4ED6}\u{5988}\u{7684}',
        '\u{4EE3}\u{529E}',
        '\u{4F0A}\u{65AF}\u{5170}\u{8FD0}\u{52A8}',
        '\u{4FC4}\u{56FD}',
        '\u{505A}\u{7231}',
        '\u{505A}\u{9E21}',
        '\u{505A}\u{9E2D}',
        '\u{5077}\u{62CD}',
        '\u{50AC}\u{6CEA}\u{5F39}',
        '\u{516B}\u{4E5D}',
        '\u{516D}\u{56DB}',
        '\u{5185}\u{5C04}',
        '\u{519B}\u{706B}',
        '\u{5211}\u{8B66}',
        '\u{52A8}\u{4E71}',
        '\u{539F}\u{5B50}\u{5F39}',
        '\u{53CD}\u{4E2D}',
        '\u{53CD}\u{515A}',
        '\u{53CD}\u{653F}\u{5E9C}',
        '\u{53D1}\u{7968}',
        '\u{53E3}\u{4EA4}',
        '\u{56FD}\u{519B}',
        '\u{56FD}\u{5BB6}\u{5B89}\u{5168}',
        '\u{56FD}\u{6C11}\u{515A}',
        '\u{57FA}\u{7763}',
        '\u{5904}\u{5973}',
        '\u{5907}\u{6848}',
        '\u{591A}\u{515A}',
        '\u{5927}\u{6CD5}',
        '\u{5927}\u{9646}\u{5B98}\u{5458}',
        '\u{5993}\u{5973}',
        '\u{5A4A}\u{5B50}',
        '\u{5B59}\u{4E2D}\u{5C71}',
        '\u{5C04}\u{7CBE}',
        '\u{5C41}\u{773C}',
        '\u{5C41}\u{80A1}',
        '\u{5C60}\u{6740}',
        '\u{5F3A}\u{5978}',
        '\u{5F6D}\u{5FB7}\u{6000}',
        '\u{5FAE}\u{535A}',
        '\u{6027}\u{4EA4}',
        '\u{6027}\u{7231}',
        '\u{6027}\u{751F}\u{6D3B}',
        '\u{6050}\u{6016}\u{5206}\u{5B50}',
        '\u{60C5}\u{8272}',
        '\u{6170}\u{5B89}\u{5987}',
        '\u{6210}\u{4EBA}',
        '\u{6211}\u{64CD}',
        '\u{624B}\u{67AA}',
        '\u{62A4}\u{6CD5}',
        '\u{62C9}\u{767B}',
        '\u{64CD}\u{903C}',
        '\u{653F}\u{6CBB}\u{72AF}',
        '\u{6559}\u{517B}\u{9662}',
        '\u{6625}\u{836F}',
        '\u{66B4}\u{52A8}',
        '\u{674E}\u{6D2A}\u{5FD7}',
        '\u{6797}\u{6D77}',
        '\u{67AA}\u{624B}',
        '\u{67AA}\u{652F}',
        '\u{6BDB}\u{6CFD}\u{4E1C}',
        '\u{6C11}\u{4E3B}',
        '\u{6C11}\u{56FD}',
        '\u{6C11}\u{65CF}\u{5206}\u{88C2}',
        '\u{6C11}\u{65CF}\u{95EE}\u{9898}',
        '\u{6C11}\u{8054}',
        '\u{6C11}\u{9635}',
        '\u{6C14}\u{67AA}',
        '\u{6C5F}\u{6CFD}\u{6C11}',
        '\u{6CD5}\u{4F1A}',
        '\u{6CD5}\u{6B63}',
        '\u{6CD5}\u{8BBA}',
        '\u{6CD5}\u{8F6E}',
        '\u{6D41}\u{4EA1}',
        '\u{6DEB}\u{8361}',
        '\u{6E38}\u{884C}',
        '\u{6FC0}\u{60C5}',
        '\u{72EC}\u{88C1}',
        '\u{730E}\u{67AA}',
        '\u{738B}\u{521A}',
        '\u{7586}\u{72EC}',
        '\u{7EF4}\u{6743}\u{4EBA}',
        '\u{7F62}\u{5DE5}',
        '\u{7FA4}\u{53D1}\u{5668}',
        '\u{7FFB}\u{5899}',
        '\u{8001}\u{6BDB}',
        '\u{8089}\u{4F53}',
        '\u{809B}\u{4EA4}',
        '\u{809B}\u{95E8}',
        '\u{80E1}\u{9526}\u{6D9B}',
        '\u{80F8}\u{90E8}',
        '\u{8273}\u{7167}\u{95E8}',
        '\u{85CF}\u{72EC}',
        '\u{86E4}\u{87C6}',
        '\u{897F}\u{85CF}\u{56FD}',
        '\u{8F6E}\u{529F}',
        '\u{8F6E}\u{5927}',
        '\u{8F6E}\u{5978}',
        '\u{8FD1}\u{4EB2}',
        '\u{9020}\u{53CD}',
        '\u{9093}\u{5C0F}\u{5E73}',
        '\u{9634}\u{6BDB}',
        '\u{9634}\u{830E}',
        '\u{9634}\u{9053}',
        '\u{9769}\u{547D}',
        '\u{9886}\u{5BFC}\u{4EBA}',
        '\u{9AD8}\u{5B98}',
        '\u{9ED1}\u{624B}\u{515A}',
        'Facebook',
        'GFW',
        'Twitter',
        'VPN',
        'YouTube',
      ];
      for (const i of DATA_LIST) {
        if (data.includes(i)) {
          data = data.replaceAll(i, i.split('').join('[b][/b]'));
          setTimeout(() => {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: `\u{6210}\u{529F}\u{7A81}\u{7834}\u{8A00}\u{8BBA}\u{5C01}\u{9501}（${i}）`,
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 4 * 1000,
            });
          }, 0);
        }
      }
      const CHAR = new Map([
        ['\u{4E73}', 'Rǔ'],
        ['\u{5AD6}', 'Piáo'],
        ['\u{5C0F}\u{59D0}\u{59D0}', 'XiǎoJiěJiě'],
        ['\u{5C0F}\u{59D0}', 'XiǎoJiě'],
        ['\u{6DEB}', 'Yín'],
      ]);
      for (const [key, value] of CHAR) {
        if (data.includes(key)) {
          data = data.replaceAll(key, value);
          setTimeout(() => {
            GM_notification({
              title: '\u{8BBA}\u{575B}\u{5927}\u{5E08}',
              text: `\u{6210}\u{529F}\u{7A81}\u{7834}\u{8A00}\u{8BBA}\u{5C01}\u{9501}（${key}）\u{279C}（${value}）`,
              image: 'https://cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/bull.webp',
              timeout: 4 * 1000,
            });
          }, 0);
        }
      }
      return data;
    };
  };

  MAIN.fn.ωωω_pcbeta_com = () => {
    // Disable functions
    if (typeof alert === 'function') {
      unsafeWindow.alert = () => {};
    }

    // Main CSS
    setTimeout(() => {
      GM_addStyle(GM_getResourceText('MainCSS'));
    }, 0);
    setTimeout(() => {
      GM_addStyle(GM_getResourceText('MainCSS'));
    }, 1000);
  };

  // Sites that enjoy special treatment
  switch (true) {
    case HOSTNAME === 't66y.com':
    case HOSTNAME.includes('.t66y.com'):
    case PATHNAME.includes('/htm_data/'):
      MAIN.data.hostname = 't66y.com';
      break;

    case HOSTNAME === '52pojie.cn':
    case HOSTNAME.includes('.52pojie.cn'):
      MAIN.data.hostname = '52pojie.cn';
      break;

    case HOSTNAME === 'fobshanghai.com':
    case HOSTNAME.includes('.fobshanghai.com'):
      MAIN.data.hostname = 'fobshanghai.com';
      break;

    case HOSTNAME === 'v2ex.com':
    case HOSTNAME.includes('.v2ex.com'):
      MAIN.data.hostname = 'v2ex.com';
      break;

    case ['hostloc.com', 'www.hostloc.com', '91ai.net', 'www.91ai.net'].includes(HOSTNAME):
      MAIN.data.hostname = 'hostloc.com';
      break;

    case HOSTNAME === 'pcbeta.com':
    case HOSTNAME.includes('.pcbeta.com'):
      MAIN.data.hostname = 'pcbeta.com';
      break;

    default:
      MAIN.data.hostname = HOSTNAME;
      break;
  }
  MAIN.data.hostname = `ωωω_${MAIN.data.hostname.replace(/\./g, '_')}`;
  if (typeof MAIN.fn[MAIN.data?.hostname] === 'function') {
    MAIN.fn[MAIN.data?.hostname]();
  }

  // Show hidden posts
  for (let i = 0; i <= 1; i++) {
    // eslint-disable-next-line no-loop-func
    setTimeout(() => {
      // eslint-disable-next-line camelcase
      if (typeof display_blocked_post === 'function' && document.getElementById('hiddenpoststip')) {
        // eslint-disable-next-line no-undef
        display_blocked_post();
      }
    }, i * 1000);
  }

  // Firefox web browser
  if (USER_AGENT.includes('Firefox')) {
    for (const i of document.getElementsByTagName('img')) {
      if (MAIN.check_boxes?.show_user_avatar === false && i.src.includes('&size=middle')) {
        i.setAttribute('draggable', 'false');
        i.setAttribute('referrerpolicy', 'no-referrer');
        i.src = '//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/default-avatar-middle.webp';
      } else if (MAIN.check_boxes?.show_user_avatar === false && i.src.includes('&size=small')) {
        i.setAttribute('draggable', 'false');
        i.setAttribute('referrerpolicy', 'no-referrer');
        i.src = '//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/default-avatar-small.webp';
      } else if (i.src.includes('/master-of-forums/master-of-forums/public/images/patch.gif')) {
        i.src = '//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/patch.svg';
      }
    }
  }

  // Hotfix
  // eslint-disable-next-line dot-notation
  MAIN['\u{64}\u{61}\u{74}\u{61}']['\u{70}\u{61}\u{74}\u{63}\u{68}'] = '\u{5B}\u{69}\u{6D}\u{67}\u{5D}\u{68}\u{74}\u{74}\u{70}\u{73}\u{3A}\u{2F}\u{2F}\u{63}\u{64}\u{6E}\u{2E}\u{6A}\u{73}\u{64}\u{65}\u{6C}\u{69}\u{76}\u{72}\u{2E}\u{6E}\u{65}\u{74}\u{2F}\u{67}\u{68}\u{2F}\u{6D}\u{61}\u{73}\u{74}\u{65}\u{72}\u{2D}\u{6F}\u{66}\u{2D}\u{66}\u{6F}\u{72}\u{75}\u{6D}\u{73}\u{2F}\u{6D}\u{61}\u{73}\u{74}\u{65}\u{72}\u{2D}\u{6F}\u{66}\u{2D}\u{66}\u{6F}\u{72}\u{75}\u{6D}\u{73}\u{2F}\u{70}\u{75}\u{62}\u{6C}\u{69}\u{63}\u{2F}\u{69}\u{6D}\u{61}\u{67}\u{65}\u{73}\u{2F}\u{70}\u{61}\u{74}\u{63}\u{68}\u{2E}\u{67}\u{69}\u{66}\u{5B}\u{2F}\u{69}\u{6D}\u{67}\u{5D}';
  setTimeout(() => {
    const e = document.createElement('script');
    e.id = 'v';
    e.src = '//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/src/js/main.hook.js';
    e.async = true;
    e.dataset.channel = MAIN.channel;
    // e.dataset.handler = GM_info.scriptHandler;
    e.dataset.version = GM_info.script?.version;
    e.crossOrigin = 'anonymous';
    MAIN.NODE.append(e);
  }, 0);
};

// Main CSS
GM_addStyle(GM_getResourceText('MainCSS'));

// User badge
if (GM_getValue('show_user_badge', true) === false) {
  GM_addStyle(`
  img[file$="//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/patch.gif"],
  img[file$="//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/patch.svg"],
  img[src$="//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/patch.gif"],
  img[src$="//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/patch.svg"],
  img.master-badge,
  #postlist .master-badge {
    display: none;
  }
  `);
}

// User avatar
if (GM_getValue('show_user_avatar', true) === false) {
  GM_addStyle(`
  img[src$="&size=big"]  {
    content: url(//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/default-avatar-big.webp);
  }
  .pls .avatar img,
  .personinformaion .person-imgs img,
  .do_not_catch table .tac img,
  .t_user .avatar img,
  img[src$="&size=middle"] {
    content: url(//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/default-avatar-middle.webp);
  }
  #um .avt a img,
  .rate a img,
  .cm .vm a img,
  .post_comm .fl img.post_comm_face,
  .turing_postlist .turing_listtx a img,
  img[src$="&size=small"] {
    content: url(//cdn.jsdelivr.net/gh/master-of-forums/master-of-forums/public/images/default-avatar-small.webp);
  }
  #content img.ProfilePhoto.ProfilePhotoMedium {
    content: url(//ui-avatars.com/api/?size=40&name);
  }
  `);
}

// User signature
if (GM_getValue('show_user_signature', true) === false) {
  GM_addStyle(`
  .wp .pls .md_ctrl,
  .wp .sign,
  .tr1 [style^="vertical-align"] div:not([class]),
  #main .signature,
  .Signature,
  .UserSignature {
    display: none;
  }
  `);
}

(() => {
  // Execution status
  const EXECUTION = {
    can: true,
  };

  if (document.body) {
    EXECUTION.can = false;
    MASTER_OF_FORUMS();
  } else {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        if (EXECUTION.can && document.body) {
          EXECUTION.can = false;
          MASTER_OF_FORUMS();
        }
      }, i * 50);
    }
  }
  window.addEventListener('load', () => {
    if (EXECUTION.can) {
      EXECUTION.can = false;
      MASTER_OF_FORUMS();
    }
  });
})();
