<p align="center"><img src="logo/vertical.png" alt="bDialog" height="200px"></p>

# bDialog

基于Boostrap Modal开发的可多层嵌套、定制灵活的模态窗口

## 入门指南、DEMO、文档

更多实例、文档请访问：
- [English official site](https://terryz.github.io/bdialog/index.html)
- [国内站点](https://terryz.gitee.io/bdialog/index.html)

VueJS版本： [v-dialogs](https://github.com/TerryZ/v-dialogs)

## 如果您觉得项目还不错，还请给项目（github/码云）加个Star

## 插件预览

**模态窗口模式**
![bDialog](https://terryz.github.io/image/bDialog.png)
**消息对话框模式**
![bDialogAlert](https://terryz.github.io/image/bDialogAlert.png)
**遮罩模式**
![bDialogMask](https://terryz.github.io/image/bDialogMask.png)
**边角通知窗口模式**
![bDialogToast](https://terryz.github.io/image/bDialogToast.png)

## 主要特性

<ul>
  <li>基于jQuery、bootstrap2,3进行开发</li>
  <li>可多层嵌套，并拥有各自独立的上下文</li>
  <li>灵活的窗口元素定制</li>
  <li>模态窗口模式可载入服务端页面、远程页面、页面静态元素等内容</li>
  <li>消息对话框模式，包含info、warning、error、success、confirm等模式</li>
  <li>遮罩模式，遮挡全部元素，待指定功能完成后，再移除遮罩，满足加载待的需求</li>
  <li>边角通知窗口模式，包含info、warning、error、success等模式，且有六个角落的显示位置</li>
  <li>可在同一页面下展示各种不同样式、风格的窗口皮肤</li>
  <li>浏览器尺寸发生改变时，窗口将自动重新定位到浏览器中心区域</li>
  <li>模态窗口区域外点击、窗口自动定位等场景均有相应的提醒动画效果</li>
  <li>丰富的回调函数</li>
  <li>浏览器支持IE8+,chrome,firefox</li>
</ul>

## 目标用户群体

插件针对在项目中使用了Bootstrap作为基础UI框架，同时更希望使用Bootstrap原生态组件的群体。

bDialog开发之初，目的是为了统一开发团队对于Bootstrap Modal的使用方式，例如统一设置背景点击不关闭窗口，关闭底部按钮区域，统一设置参数接收，回调函数等基础功能；后续更是着重解决了窗口多层嵌套打开的功能需求，尤其是解决了该死的IE8下多层打开会导致浏览器崩溃的问题。

Bootstrap原生提供的功能组件，功能性相对较弱，bDialog并不重新造轮子，而是在原生组件的基础上进行功能加强、扩展，使得更符合开发上的功能需求，通过不断的功能完善和问题修复，bDialog插件就一直更新到了现在。几年来经过多个团队和多个项目的使用，将项目进行开源，希望项目可以让更多的团队，个人受益。


