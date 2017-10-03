# bDialog

> A can be multi-layer nested, highly customizable powerful dialog plugin, dialog type including modal dialog, alert dialog, mask layer, toast dialog

[简体中文文档](README-CN.md)

## Plugin Preview

*Modal Mode*

![bDialogModal](https://terryz.github.io/image/bDialog.png)

*Alert Mode*

![bDialogAlert](https://terryz.github.io/image/bDialogAlert.png)

*Mask Mode*

![bDialogMask](https://terryz.github.io/image/bDialogMask.png)

*Toast Mode*
![bDialogToast](https://terryz.github.io/image/bDialogToast.png)

## Guide、Demo、Docs

Explorer on 
- [English site](https://terryz.github.io/bdialog/en/index.html)
- [简体中文站点](https://terryz.github.io/bdialog/index.html)

### If you think the project is also good, please add a Star to the project to support the work of the author, Thank you

<br><br>

## What is bDialog

bDialog can be multi-layer nested, highly customizable powerful dialog plugin, dialog type including modal dialog, alert dialog, mask layer, toast dialog. bDialog is basis on Boostrap Modal plugin

### Key Features

- jQuery plugin, on Bootstrap Modal plugin basis to extend
- can open multi-layer Nested modal dialog
- can open info、warning、error、success、confirm types of alert dialog
- can open mask layer block all element when data loading
- can open toast dialog, have info、warning、error、success type and 6 corner position
- flexible style setting
- When the browser size changes, the window is automatically repositioned to the center of the browser
- dialog area outside the click, the window automatically positioning and other scenes have a corresponding reminder animation
- rich callback function
- brower supper IE8+,chrome,firefox

### The Alert Dialog Icon

the icons in alert dialog used are made by [Elegant Themes](http://www.elegantthemes.com/blog/freebie-of-the-week/beautiful-flat-icons-for-free)

### License

MIT

<br><br><br><br>
## Why

bDialog development at the beginning, the purpose is to unify the development team for **Bootstrap Modal** use, such as a unified set of background click does not close the window, close the bottom button area, unified set parameters to receive, callback function and other basic functions; follow-up is to focus on the window Multi-layer nested open functional requirements, in particular, to solve the damn **IE8** multi-level nested open will lead to the collapse of the browser.

bDialog for the use of **Bootstrap** as a base UI framework in the project, while more want to use Bootstrap original ecological components of the group.

bootstrap native modal function components, the function is relatively weak, bDialog does not remake the wheels, on the basis of **Bootstrap Modal** make it more powerful, more useful, more customizable, making it more in line with the development of functional requirements, through continuous functional improvement and problems Repair, bDialog plugin has been updated to the present. Over the past few years through a number of teams and the use of multiple projects, hope bDialog can make more teams, individuals benefit.

<br><br><br><br>
## How to use bDialog

### Install

download bDialog plugin zip file by last release, or [Click me](https://github.com/TerryZ/bDialog/archive/master.zip) to download bDialog

### Usage

As you can see in the [Demo page](https://terryz.github.io/bdialog/demo.html), you will need to include:

- [jQuery library](http://jquery.com) (1.6.0+), untest on jquery2.x & 3.x
- The JavaScript file b.dialog.js (or its minified version b.dialog.min.js)
- The css file b.dialog.bootstrap3.css for bootstrap3.x , b.dialog.css for bootstrap2.x

#### Including files

```html
<!-- include for Bootstrap2.x -->
<link rel="stylesheet" href="b.dialog.css" type="text/css">
<!-- include for Bootstrap3.x -->
<link rel="stylesheet" href="b.dialog.bootstrap3.css" type="text/css">
<!-- Above the css file under your css framework choose one of them to include -->
 
 
<!-- jquery-ui draggable liabrary if you need dialog drag function -->
<script type="text/javascript" src="jquery-ui.min.js" >< /script>

<script type="text/javascript" src="b.dialog.js" >< /script>
```

#### Javascript init plugin

```js
bDialog.open({
    title : 'User Info Modify',
    width : 500,
    height : 450,
    url : 'http://aa.com/load',
    params : {
        'userName' : 'Bryant'
    },
    callback:function(data){
        if(data && data.results && data.results.length > 0 ){
            bDialog.alert('已完成弹出窗口操作！<br>接收到弹出窗口传回的 userName 参数，值为：<b>' + 
            data.results[0].userName + '</b>');
        }else{
            bDialog.alert('弹出窗口未回传参数',$.noop,{
              messageType : 'error'
            });
        }
    }
});
```

#### Quick Demo
```js
//Modal :
bDialog.open({
  url : 'http://some url'
});
bDialog.open({
  dom : $('#some element').html()
});

//Alert :
bDialog.alert('your message');
bDialog.alert('your message',function(){
  //your callback
});

//Mask :
bDialog.mask();

//Toast :
bDialog.toast('your message');
bDialog.toast('your message',{
  //toast dialog type
  messageType : 'warning',
  //show dialog in topleft position
  position : 'topLeft',
  //don't show close button
  dialogCloseButton : false,
  //auto close dialog time(second),default 3s
  closeTime : 0
});
```

<br><br>

## Options


- **backdrop** `string | boolean`  
  default : 'static'  
  the dialog backdrop layer set
  - 'static' : click the backdrop can not close the dialog
  - false : do not show backdrop
  - true : show backdrop, but click the backdrop will close dialog

- **title** `string | boolean`  
  default : '对话框'  
  set text to show in title bar,set `false` to close the title bar

- **language** `string`  
  default : 'cn'  
  dialog using language

| Code | Language |
| ------ | ------ |
| cn | chinese |
| en | english |
| jp | japanse |

- **width** `number`  
  default : 700  
  dialog width, only work on modal dialog mode

- **height** `number`  
  default : 400  
  dialog height, only work on modal dialog mode

- **animation** `boolean`  
  default : true  
  whether show animation when dialog open

- **dialogCloseButton** `boolean`  
  default : true  
  whether show the 'X' close button

- **dialogMaxButton** `boolean`  
  default : true  
  whether show maximize button

- **closeButton** `boolean`  
  default : false  
  whether to close dialog bottom bar, only work in Modal dialog mode

- **scroll** `boolean`  
  default : true  
  whether to display the scroll bar

- **drag** `boolean`  
  default : true  
  whether to allow the window to be dragged
  
  > the drag function is depend on jquery-ui draggable liabrary,if not include it, drag function will auto close

- **url** `string`  
  default : false  
  the remote page url open in modal dialog

- **params** `object`  
  default : undefined  
  pass the parameters to the new open modal dialog, in the new modal dialog you can get parameters like this
  ```js
  var params = bDialog.getDialogParams();
  ```
  **example**
  ```js
  params : {
    name : 'Michael',
    num : 23
  }
  ```

- **dom** `object`  
  default : undefined  
  the html element or javascript object or jquery object to show in modal dialog

- **fullWidth** `boolean`  
  default : false  
  whether to show full width modal dialog

- **customClass** `string`  
  default : undefined  
  specify custom style class name

- **show** `boolean`  
  default : false
  whether show dialog when dialog init finish

- **onShow** `function`  
  default : undefined  
  before dialog show callback

- **onShowed** `function`  
  default : undefined  
  when the dialog has been made visible to call this callback

- **onHide** `function`  
  default : undefined  
  before dialog close callback

- **onHidden** `function`  
  default : undefined  
  when dialog completely close callback

- **callback** `function`  
  default : undefined  
  when dialog close callback, this callback different from others callback its can be return data to caller.   
  **param**  
  *data* `object` return to caller data  
  **example**
  ```js
  {
    callback : function(data){
      if(data && data.results && data.results.length > 0 ){
        $('#input').val(data.results[0]);
      }
    }
  }
  //the param data is come from 
  bDialog.close('i am return data');
  ```

- **messageType** `string`  
  default : 'info'  
  setup alert dialog, toast dialog type, the full type is
    - info(default)
    - warning
    - error
    - success
    - confirm(only work on alert dialog)
  
  the different type will show different icon
  
- **position** `string`  
  default : 'bottomRight'  
  toast dialog display position, the full position is  
    - topLeft
    - topCenter
    - topRight
    - bottomLeft
    - bottomCenter
    - bottomRight(default)

- **closeTime** `number`  
  default : 3(second)  
  auto close toast dialog time, set 0 to disabled auto close dialog

- **cancel** `function`  
  default : undefined  
  when alert dialog mode, and alert type is confirm, this callback is used to the cancel button callback  
  **example**
  ```js
  cancel : function(dialog){
    bDialog.alert('The deal was canceled');
  }
  ```

## API

- **open**  
  open a modal dialog  
  *param*
  - params
  *example*
  ```js
  bDialog.open({
    url : 'http://someurl'
  });
  //so simple to open a remote page in modal dialog
  ```
- **close**  
  close opened dialog (modal, alert, mask)  
  *param*
  - data `object` return to caller data
  - [dialog] `object` optional to set, if you have a opened dialog object,you can directly to it. if no setup this param, plugin will close the last open dialog
  *example*
  ```js
  bDialog.close({name:'Michael',num:23});//close and return data(last open dialog)

  var dlg = bDialog.open({...});
  $('#theBtn').click(function(){
    bDialog.close({name:'Michael',num:23},dlg);
  });
  ```
- **getDialog**  
  get last opened dialog (modal, alert, mask)
  ```js
  var dlg = bDialog.getDialog();
  ```
- **getDialogParams**  
  get params data from open dialog params
  ```js
  bDialog.open({
    params : {
      name : 'Michael',
      num : 23
    }
  });
  ```
  in the opened modal dialog, you can get params like this
  ```js
  var params = bDialog.getDialogParams();
  $('#name').val(params.name);
  ```
- **alert**  
  open a message alert dialog, the alert dialog can be info, warning, error, success, confirm types
  *param*
  - message `string` the message show in alert dialog
  - callback `function` close alert dialog callback
  - params `object` setup alert dialog params
  ```js
  bDialog.alert('a am info message');//just show message

  bDialog.alert('a am info message',function(){
    $('#name').val('');
  });//show message and do something when alert dialog close

  bDialog.alert('a am info message',function(){
    $('#name').val('');
  },{
    messageType : 'confirm',//open confirm alert dialog
    cancel : function(){
      $('#name').val('my default name');
    }
  });//show message, callback,and setup init params
  ```
- **mask**  
  *param*  
  - message
  - params
  ```js
  bDialog.mask();//show a block every element layer and default prompt message

  bDialog.mark('please wait for a moment...');//show a mask and custom text
  ```
- **toast**  
  *param*  
  - message
  - params
  ```js
  //show a corner toast dialog, default position on bottomRight
  bDialog.toast('your message');
  bDialog.toast('your message',{
    //toast dialog type
    messageType : 'warning',
    //show dialog in topleft position
    position : 'topLeft',
    //don't show close button
    dialogCloseButton : false,
    //auto close dialog time(second),default 3s
    closeTime : 0
  });
  ```

