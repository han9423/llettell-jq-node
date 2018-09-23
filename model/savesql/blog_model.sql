/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : blog_llettell

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2018-09-23 09:11:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article_table
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article` text NOT NULL,
  `article_title` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `timestmap` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '时间戳',
  `tags` varchar(255) NOT NULL COMMENT '分类',
  `author` varchar(128) NOT NULL COMMENT '作者',
  `path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of article_table
-- ----------------------------
INSERT INTO `article_table` VALUES ('1', '1. 我从网上下载了十几张猫和狗的图片，用于检验我们训练好的模型。 \r\n2. 处理我们下载的图片 3. 加载模型 4. 将图片输入模型进行检验', 'UWP中MarkupExtension的使用', 'update/banners/153468757364.jpg', '2018-09-15 16:20:08', 'c', 'wanghan', '../../www/update/articles/js模拟lock机制.md');
INSERT INTO `article_table` VALUES ('2', 'PS：之前因为需要扩展了微信和QQ的认证，使得网站是可以使用QQ和微信直接登录。github 传送门 。然后有小伙伴问，能否让这个配置信息（appid， appsecret）按需改变，而不是在 ConfigureServices  里面写好。\r\n\r\n先上 官方文档 ：  https://docs.microsoft.com/zh-cn/aspnet/core/security/authentication/social/?view=aspnetcore-2.1 \r\n\r\n官方已经实现了 microsft,facebook,twitter,google 等这几个网站认证。代码可以认证授权库看到找到 https://github.com/aspnet/Security  。\r\n\r\n国内的QQ和微信其实也是基于OAuth来实现的，所以自己集成还是比较容易。\r\n\r\n正常情况下，配置这个外部认证都是在 ConfigureServices 里面配置好，并且使用配置或者是使用机密文件的形式来保存 appid 等信息。\r\n\r\n回到正文，多站点模式，就是一个网站下分为多个子站点，并且不同的子站点可以配置不同的appId 。Asp.net core 默认的配置模式，在这种场景下已经适应不了了。\r\n\r\n先上代码： https://github.com/jxnkwlp/AspNetCore.AuthenticationQQ-WebChat/tree/muti-site', 'asp.net core 外部认证多站点模式实现', 'update/banners/153483908041.jpg', '2018-09-15 17:16:25', 'asp', 'wanghan', '../../www/update/articles/js模拟lock机制.md');
INSERT INTO `article_table` VALUES ('3', 'Android项目刮刮奖详解（三）\r\n\r\n定义我们的画笔Paint,对其进行相关设置\r\n\r\n这里得提一下，我们需要一个Rect矩形来得到文字内容的背景大小，也就是上图中的红色矩形,Paint画笔中提供了一个方法getTextBounds，我们可以通过此方法来获得文字内容的背景大小\r\nmessagePaint.getTextBounds(String text,float start,float end,Rect rect);\r\n\r\n上述代码的意思是，截取text文字中的从start到end的长度，将截取的长度和文字的高度形成一个矩形，rect矩形接收这个矩形\r\n\r\n  Rect mBackground = new Rect();//用来接收getTextBounds返回的矩形      \r\n  Paint messagePaint = new Paint();\r\n  messagePaint.setColor(Color.RED);\r\n  messagePaint.setAntiAlias(true);\r\n  messagePaint.setStyle(Paint.Style.STROKE);\r\n  messagePaint.getTextBounds(message,0,message.length(),mBackground);\r\n  messagePaint.setTextSize(30);\r\n计算x,y坐标，canvas使用drawText写出文字\r\n我们有两种方法来获得之前黑色矩形的长和宽，一种是使用getMeasured,另一种使用mBitmap.get方法来获得长和宽\r\n\r\n  canvas.drawText(message,getMeasuredWidth()/2-mBackground.width()/2,getMeasuredHeight()/2+mBackground.height()/2,me', 'Android项目刮刮奖详解（三）\r\n\r\n', 'update/banners/1534839086183.jpg', '2018-08-21 16:55:57', 'java', 'wanghan', '');
INSERT INTO `article_table` VALUES ('4', '先附上官网：https://cn.vuejs.org/v2/guide/\r\n\r\n2.2.0+版本\r\n\r\n \r\n\r\nv-for\r\n\r\n2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的。\r\n\r\n \r\n\r\n鼠标修饰符\r\n\r\n.left\r\n.right\r\n.middle\r\n这些修饰符会限制处理函数仅响应特定的鼠标按钮。\r\n\r\n \r\n\r\nmodel\r\n\r\n允许一个自定义组件在使用 v-model 时定制 prop 和 event。默认情况下，一个组件上的 v-model 会把 value 用作 prop 且把 input 用作 event，但是一些输入类型比如单选框和复选框按钮可能想使用 value prop 来达到不同的目的。使用 model 选项可以回避这些情况产生的冲突。Vue.component(\'my-checkbox\', {\r\n\r\n复制代码\r\n  model: {\r\n    prop: \'checked\',\r\n    event: \'change\'\r\n  },\r\n  props: {\r\n    // this allows using the `value` prop for a different purpose\r\n    value: String,\r\n    // use `checked` as the prop which take the place of `value`\r\n    checked: {\r\n      type: Number,\r\n      default: 0\r\n    }\r\n  },\r\n  data:function(){\r\n    return{\r\n        _value:this.value\r\n    }\r\n  },\r\n  template:`\r\n   <input \r\n         type=\"checkbox\" \r\n         v-bind:checked=\"checked\"\r\n         v-on:change=\"$emit(\'change\',$event.target.checked)\" \r\n   ></input>`\r\n   \r\n  // ...\r\n})\r\n复制代码\r\n<my-checkbox v-model=\"foo\" value=\"some value\"></my-checkbox>\r\n上述代码相当于：\r\n\r\n<my-checkbox\r\n  :checked=\"foo\"\r\n  @change=\"val => { foo = val }\"\r\n  value=\"some value\">\r\n</my-checkbox>\r\n注：checked属性要声明在props中\r\n\r\n \r\n\r\nprovide/inject\r\n\r\n这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。\r\n\r\nhttps://cn.vuejs.org/v2/api/#provide-inject\r\n\r\n \r\n\r\n2.3.0版本\r\n\r\n \r\n\r\n绑定内联样式\r\n\r\n从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：\r\n\r\n<div :style=\"{ display: [\'-webkit-box\', \'-ms-flexbox\', \'flex\'] }\"></div>\r\n这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex\r\n。\r\n\r\n \r\n\r\n事件修饰符\r\n\r\nVue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符。\r\n\r\n<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->\r\n<!-- 而不会等待 `onScroll` 完成  -->\r\n<!-- 这其中包含 `event.preventDefault()` 的情况 -->\r\n<div v-on:scroll.passive=\"onScroll\">...</div>\r\n这个 .passive 修饰符尤其能够提升移动端的性能。\r\n\r\n注：新标准中addEventListener中的第三个参数不再是true（事件捕获）fasle（事件冒泡）,而是一个对象：\r\n\r\n复制代码\r\ndocument.addEventListener(\'click\',callback,\r\n{\r\n    capture:false,//是否捕获事件\r\n    passive:false,//是否允许默认行为，移动端触屏放大缩小非常有用\r\n    once:false//执行一次就remove掉该事件\r\n})\r\n复制代码\r\n注：不要把.passive 和 .prevent 一起使用，因为 .prevent 将会被忽略\r\n\r\n \r\n\r\nv-bind\r\n\r\n修饰符.sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器\r\n\r\nhttps://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6\r\n\r\n \r\n\r\n2.4.0版本\r\n\r\n \r\n\r\nv-on\r\n\r\n从 2.4.0 开始，v-on 同样支持不带参数绑定一个事件/监听器键值对的对象,如$listeners。注意当使用对象语法时，是不支持任何修饰器的。\r\n\r\n注：v-bind在没有参数时，可以绑定到一个包含键值对的对象。其中class和style不能表示对象和数组。\r\n\r\n \r\n\r\n2.5.0版本\r\n\r\n \r\n\r\n按键修饰符\r\n\r\n你也可直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case（短横线命名） 来作为修饰符：\r\n\r\n<input @keyup.page-down=\"onPageDown\">\r\n有一些按键 (.esc 以及所有的方向键) 在 IE9 中有不同的 key 值, 如果你想支持 IE9，它们的内置别名应该是首选。在上面的例子中，处理函数仅在 $event.key === \'PageDown\' 时被调用。\r\n\r\n \r\n\r\n.exact修饰符（系统修饰按键）\r\n\r\n.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。\r\n\r\n复制代码\r\n<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->\r\n<button @click.ctrl=\"onClick\">A</button>\r\n\r\n<!-- 有且只有 Ctrl 被按下的时候才触发 -->\r\n<button @click.ctrl.exact=\"onCtrlClick\">A</button>\r\n\r\n<!-- 没有任何系统修饰符被按下的时候才触发 -->\r\n<button @click.exact=\"onClick\">A</button>\r\n复制代码\r\n \r\n\r\nslot-scope\r\n\r\n用于将元素或组件表示为作用域插槽。特性的值应该是可以出现在函数签名的参数位置的合法的 JavaScript 表达式。这意味着在支持的环境中，你还可以在表达式中使用 ES2015 解构。它在 2.5.0+ 中替代了 scope。\r\n\r\n在 2.5.0+，slot-scope 不再限制在 <template> 元素上使用，而可以用在插槽内的任何元素或组件上。', 'Vue2.2.0+新特性整理', 'update/banners/1534839143943.jpg', '2018-08-21 19:58:45', 'javascript', 'wanghan', '');
INSERT INTO `article_table` VALUES ('5', '一、前言 开发环境： 部署环境 ASP.NET Core 示例项目 项目创建完成后，需要修改Program.cs文件手动指定启动的Url为：http://*:5000 http://*:5000 可以兼容 http://localhost:5000，http://127.0.0.1:5000，htt ...', 'ASP.NET Core 应用发布', 'update/banners/1534839173630.jpg', '2018-08-21 19:58:51', 'asp', 'wanghan', '');
INSERT INTO `article_table` VALUES ('6', '谈到区块链的存储，我们很容易联想到它的链式存储结构，然而区块链从比特币发展到今日当红的EOS，技术形态已经演化了10年之久。目前的EOS的存储除了确认结构的链式存储以外，在状态存储方面有了很大的进步，尤其是引入了MongoDB plugin以后，可以将功能有限的状态库搭上大数据的班车。本文将全面介绍 ...\r\n区块链 + 大数据：EOS存储', '\r\n区块链 + 大数据：EOS存储', 'update/banners/1534860186478.jpg', '2018-08-21 22:09:12', 'eos', 'wanghan', '');
INSERT INTO `article_table` VALUES ('7', '用于将元素或组件表示为作用域插槽。特性的值应该是可以出现在函数签名的参数位置的合法的 JavaScript 表达式。这意味着在支持的环境中，你还可以在表达式中使用 ES2015 解构。它在 2.5.0+ 中替代了 scope。\r\n\r\n在 2.5.0+，slot-scope 不再限制在 <template> 元素上使用，而可以用在插槽内的任何元素或组件上。', 'slot-scope', 'update/banners/1534839190930.jpg', '2018-08-21 22:09:15', 'java', 'wanghan', '');
INSERT INTO `article_table` VALUES ('8', '方案 日志收集的方案有很多，包括各种日志过滤清洗，分析，统计，而且看起来都很高大上。本文只描述一个打入kafka的功能。 流程：app kafka logstash es kibana 业务应用直接将日志打入kafka，然后由logstash消费，数据进入es。 另一方面，应用在服务器上会打日志文件 ', '我们到底能走多远系列49', 'update/banners/1534839122252.jpg', '2018-08-21 22:08:30', 'img', 'wanghan', '');

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('0', '1', '1');
INSERT INTO `user_table` VALUES ('1', 'wanghan', '1');
INSERT INTO `user_table` VALUES ('2', '1', '11');
INSERT INTO `user_table` VALUES ('3', '11', '1111');
INSERT INTO `user_table` VALUES ('4', '5', '42143132');
INSERT INTO `user_table` VALUES ('5', '1', '1');
INSERT INTO `user_table` VALUES ('6', '11', '11');
INSERT INTO `user_table` VALUES ('7', '111', '1111');
INSERT INTO `user_table` VALUES ('10', '1', '1');
INSERT INTO `user_table` VALUES ('12', '1', '1');
