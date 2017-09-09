# bDialog

> A can be multi-layer nested, highly customizable modal dialog, alert dialog, mask layer

[简体中文文档](README-CN.md)

## plugin preview

*Modal Mode*

![bDialogModal](https://terryz.github.io/image/bDialog.png)

*Alert Mode*

![bDialogAlert](https://terryz.github.io/image/bDialogAlert.png)

*Mask Mode*

![bDialogMask](https://terryz.github.io/image/bDialogMask.png)

## Guide、Demo、Docs

Explorer on <a href="https://terryz.github.io/bdialog/index.html" target="_blank">https://terryz.github.io/bdialog/index.html</a>

## What is bDialog



### Key Features

- jQuery plugin, on Bootstrap Modal plugin basis to extend
- can open multi-layer Nested modal dialog
- can open info、warning、error、success、confirm types of alert dialog
- can open mask layer block all element when data loading
- flexible style setting
- When the browser size changes, the window is automatically repositioned to the center of the browser
- dialog area outside the click, the window automatically positioning and other scenes have a corresponding reminder animation
- rich callback function
- brower supper IE8+,chrome,firefox


## Options


- **backdrop** `string | boolean`  
  default : 'static'  
  窗口背景遮罩设置
  - 'static' : 静态模式窗口，鼠标点击背景不关闭窗口  
  - false : 不显示背景遮罩  
  - true : 显示背景遮罩，但鼠标点击遮罩会关闭窗口  

- **title** `string | boolean`  
  default : '对话框'  
  标题栏显示文本，设置为false则关闭标题栏

- **language** `string`  
  default : 'cn'  
  使用的语言

- **width** `number`  
  default : 700  
  窗口宽度

- **height** `number`  
  default : 400  
  窗口高度

- **animation** `boolean`  
  default : true  
  窗口打开时的动画效果

- **dialogCloseButton** `boolean`  
  default : true  
  窗口标题栏的关闭按钮是否启用

- **dialogMaxButton** `boolean`  
  default : true  
  窗口标题栏的最大化按钮是否启用

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
  setup alert dialog type, the full type is
    - info(default)
    - warning
    - error
    - success
    - confirm
  
  the different type will show different icon

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