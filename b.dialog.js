/**
 * 使用Bootstrap的Modal对话框进行二次封装
 * 
 * @author Terry
 * created : 2012.11.26
 * 窗口拖拽功能依赖jQueryUI的draggable功能库
 * 
 * 
 * 2016.05.12
 * 解决在已经弹出的窗口中，再进行弹出窗口会进行覆盖的问题
 * 2016.05.25
 * 解决使用打开内容为HTML代码段的内容时，窗口关闭后，因为窗口里的所有内容会被移除，所以再打开时，原传递的原型内容则会不存在，即第二次打开后只有空白的窗口
 * 2016.06.22
 * 增加窗口打开后的重定位动画
 * 增加当窗口大小改变后的重定位功能
 * 解决在IE下多次打开弹出窗口后，窗口里的输入框无法获得焦点
 * 2016.08.09
 * 重构代码
 * 使用bootstrap3-3.3.7版本的bootstrap-modal.js的模态窗口代码单独提取出来使用
 * 解决多级弹出的窗口和遮罩的层次显示顺序问题
 * 增加背景遮罩点击后显示窗口抖动的动画效果
 * 2017.01.26
 * 增加fullWidth参数，设置是否为全宽度窗口，默认为false(关闭)
 * 2017.03.27
 * 增加customClass参数，允许使用样式对弹出框整体样式进行定义
 * 2017.06.14
 * 重构bDialog代码
 * 2017.06.20
 * 修复内容区域高度设置误差问题
 * 适配Bootstrap3版本
 * 修复部分参数丢失的问题
 */
/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * 
 * 直接整合bootstrap - v3.3.7的Modal插件
 * ======================================================================== */
+function(d){var b=function(f,e){this.options=e;this.$body=d(document.body);this.$element=d(f);this.$dialog=this.$element.find(".modal-dialog");this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=false;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};b.VERSION="3.3.7";b.TRANSITION_DURATION=300;b.BACKDROP_TRANSITION_DURATION=150;b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)};b.prototype.show=function(h){var f=this;var g=d.Event("show.bs.modal",{relatedTarget:h});this.$element.trigger(g);if(this.isShown||g.isDefaultPrevented()){return}this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass("modal-open");this.escape();this.resize();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));this.$dialog.on("mousedown.dismiss.bs.modal",function(){f.$element.one("mouseup.dismiss.bs.modal",function(i){if(d(i.target).is(f.$element)){f.ignoreBackdropClick=true}})});this.backdrop(function(){var j=d.support.transition&&f.$element.hasClass("fade");if(!f.$element.parent().length){f.$element.appendTo(f.$body)}f.$element.show().scrollTop(0);f.adjustDialog();if(j){f.$element[0].offsetWidth}f.$element.addClass("in");f.enforceFocus();var i=d.Event("shown.bs.modal",{relatedTarget:h});j?f.$dialog.one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(i)}).emulateTransitionEnd(b.TRANSITION_DURATION):f.$element.trigger("focus").trigger(i)})};b.prototype.hide=function(f){if(f){f.preventDefault()}f=d.Event("hide.bs.modal");this.$element.trigger(f);if(!this.isShown||f.isDefaultPrevented()){return}this.isShown=false;this.escape();this.resize();d(document).off("focusin.bs.modal");this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");this.$dialog.off("mousedown.dismiss.bs.modal");d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal()};b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(document!==f.target&&this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")}}};b.prototype.resize=function(){if(this.isShown){d(window).on("resize.bs.modal",d.proxy(this.handleUpdate,this))}else{d(window).off("resize.bs.modal")}};b.prototype.hideModal=function(){var e=this;this.$element.hide();this.backdrop(function(){e.$body.removeClass("modal-open");e.resetAdjustments();e.resetScrollbar();e.$element.trigger("hidden.bs.modal")})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};b.prototype.backdrop=function(i){var h=this;var f=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;this.$backdrop=d(document.createElement("div")).addClass("modal-backdrop "+f).appendTo(this.$body);this.$element.on("click.dismiss.bs.modal",d.proxy(function(j){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;return}if(j.target!==j.currentTarget){return}this.options.backdrop=="static"?this.$element[0].focus():this.hide()},this));if(e){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!i){return}e?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):i()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){h.removeBackdrop();i&&i()};d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()}else{if(i){i()}}}};b.prototype.handleUpdate=function(){this.adjustDialog()};b.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})};b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};b.prototype.checkScrollbar=function(){var f=window.innerWidth;if(!f){var e=document.documentElement.getBoundingClientRect();f=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<f;this.scrollbarWidth=this.measureScrollbar()};b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);this.originalBodyPad=document.body.style.paddingRight||"";if(this.bodyIsOverflowing){this.$body.css("padding-right",e+this.scrollbarWidth)}};b.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};b.prototype.measureScrollbar=function(){var f=document.createElement("div");f.className="modal-scrollbar-measure";this.$body.append(f);var e=f.offsetWidth-f.clientWidth;this.$body[0].removeChild(f);return e};function c(e,f){return this.each(function(){var i=d(this);var h=i.data("bs.modal");var g=d.extend({},b.DEFAULTS,i.data(),typeof e=="object"&&e);if(!h){i.data("bs.modal",(h=new b(this,g)))}if(typeof e=="string"){h[e](f)}else{if(g.show){h.show(f)}}})}var a=d.fn.modal;d.fn.modal=c;d.fn.modal.Constructor=b;d.fn.modal.noConflict=function(){d.fn.modal=a;return this};d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(j){var i=d(this);var g=i.attr("href");var f=d(i.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),i.data());if(i.is("a")){j.preventDefault()}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return}f.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})});c.call(f,h,this)})}(jQuery);

;(function($){
	"use strict";
	//弹出窗口模板
	var _template = '<div class="modal hide bDialog" dialog="bDialog" tabindex="-1" aria-labelledby="bDialogHeaderLabel" role="dialog" aria-hidden="true">' + 
			   '<div class="modal-dialog" role="document">' + 
			   '<div class="modal-content">' + 
			   '<div class="modal-header bDialogHeader">' + 
			   '<button type="button" class="close bDialogCloseButton" data-dismiss="modal" aria-hidden="true">×</button>' + 
			   '<h3 class="bDialogHeaderLabel"></h3>' + 
			   '</div>' + 
			   '<div class="modal-body bDialogBody"></div>' + 
			   '<div class="modal-footer bDialogFooter hide">&nbsp;</div>' + 
			   '</div></div></div>';
	//默认参数
	var _defaults = {
		'backdrop' : 'static', //'static'：静态模式窗口，鼠标点击背景不关闭窗口
							   //false：不显示背景遮罩
							   //true，显示背景遮罩，但鼠标点击遮罩会关闭窗口
		'title' : '对话框',
		'width' : 700,
		'height' : 400,
		'animation' : false,   //动画效果，默认关闭
		'dialogCloseButton' : true,//窗口标题栏的关闭按钮是否显示
		'closeButton' : false, //对话框底部的关闭窗口按钮
		'scroll' : true,       //是否显示滚动条，默认显示
		'drag' : true,         //是否允许窗口进行拖拽
		'url' : false,
		'fullWidth' : false,   //是否展示全宽度窗口
		'customClass' : undefined,//自定义样式，它会添加到弹出窗口的最外层DIV上
		'show' : false,        //初始化时即显示模态对话框
		'onShow' : $.noop,     //显示对话框前执行的回调
		'onShowed' : $.noop,   //显示完成对话框后执行的回调
		'onHide' : $.noop,     //关闭/隐藏对话框前执行的回调
		'onHidden' : $.noop,   //关闭/隐藏对话框后执行的回调
		'callback' : $.noop    //窗口回调函数，参数1：回调后返回的数据(callback(data))
	};
    var _bDialog = {
    	/**
    	 * 合并默认参数与用户传递参数
    	 * @param {object} param - 用户传递参数集
    	 * 
	     * @return {object} 合并后参数集
	     * 
	     * @access private
    	 */
    	setParam : function(param){
    		return $.extend({},_defaults,param);
    	},
    	/**
    	 * 生成窗口对象
    	 * @param {object} p - 插件参数集
    	 * @param {object} obj - 页面对象的html元素或jquery对象，用于将内容直接放入窗口中，若传递空值则使用iframe模式
    	 * 
    	 * @return {object} 生成完成的窗口对象
    	 * 
    	 * @access private
    	 */
    	buildDialog : function(p,obj){
    		var template = _template;
			var dialog = $(template);
			var topBody = window.top.document.body;
			//在浏览器尺寸改变时使用的定时器
			dialog.timeout = null;

			//设置标题
			if(p.title) $("h3.bDialogHeaderLabel",$(dialog)).html(p.title);
			else $('div.bDialogHeader',$(dialog)).hide();
			if(!p.dialogCloseButton)$('button.bDialogCloseButton',$(dialog)).hide();
			if(p.animation) $(dialog).addClass('fade');//设置动画效果
			if(p.closeButton){
				$("div.bDialogFooter",$(dialog)).empty().append('<button class="btn btn-inverse" data-dismiss="modal" aria-hidden="true">关闭</button>');
				$("div.bDialogFooter",$(dialog)).show();
			}
			
			// ****************************处理回调及参数******************
			//对数据传递进行格式封装
			var _callback = null;
			if(p.callback && $.isFunction(p.callback)){
				_callback = function(data){
					if(data){
						if($.isArray(data)){
							p.callback({"results" : data});
							return ;
						}else{
							p.callback({"results" : [data]});
							return ;
						}
					}else{
						p.callback({"results" : null});
						return ;
					}
				};
			}
			//设置回调
			if(p.callback) dialog.callback = _callback;
			//设置参数
			dialog[0].params = p.params ? p.params : {};
			dialog[0].returnData = null;
			
			if(obj){//页面片断模式
				var content = $(obj).clone(true);
				$("div.bDialogBody",$(dialog)).html($(content).show());
				if(p.scroll) $("div.bDialogBody",$(dialog)).css('overflow-y','auto');
			}else if(p.url) {//iframe模式
				var tmp = p.scroll ? 'yes' : 'no';
				var iframe = '<iframe class="bDialogBodyFrame" frameborder="0" scrolling="'+tmp+'" style="width:100%;height:100%;border:0px;" src="'+p.url+'"></iframe>';
				$("div.bDialogBody",$(dialog)).html(iframe);
			}
			//设置全宽度内容
			if(p.fullWidth){
				$("div.bDialogHeader,div.bDialogBody,div.bDialogFooter",$(dialog)).addClass('container');
				$(dialog).addClass('fullWidth');
				p.width = '100%';
			}
			//自定义样式
			if(p.customClass) $(dialog).addClass(p.customClass);
			
			$(topBody).append(dialog);
			return dialog;
    	},
    	/**
    	 * 为窗口对象绑定事件
    	 * @param {object} dialog - 生成后的窗口对象
    	 * @param {object} p - 插件参数集
    	 * 
    	 * @return void
    	 * 
    	 * @access private
    	 */
    	bindEvent : function(dialog,p){
    		var $top = window.top.$;
    		var topBody = window.top.document.body;
			if(p.onShow && $.isFunction(p.onShow)) $top(dialog).off('show.bs.modal').on('show.bs.modal',function(){
				p.onShow(this);
			});
			if(p.onShowed && $.isFunction(p.onShowed)) $top(dialog).off('shown.bs.modal').on('shown.bs.modal',function(){
				p.onShowed(this);
			});
			if(p.onHide && $.isFunction(p.onHide)) $top(dialog).off('hide.bs.modal').on('hide.bs.modal',function(){
				p.onHide(this);
			});
			$top(dialog).off('hidden.bs.modal').on('hidden.bs.modal',function(e){
				// stop the timeout
                clearTimeout(dialog.timeout);
				if(p.onHidden && $.isFunction(p.onHidden)) p.onHidden(this);
				var data = dialog[0].returnData, callback = dialog.callback;
				if(callback && $.isFunction(callback)) callback(data);
				//在移除窗口之前，先把iframe移除，解决在IE下，窗口上的输入控件获得不了焦点的问题
				if($('iframe',$(this)).size() > 0) $('iframe',$(this)).remove();
				$(this).remove();
				if($('[dialog="bDialog"]',$(topBody)).size() > 0) $('[dialog="bDialog"]:last',$(topBody)).addClass('dialogInActive');
			});
			$top('div.bDialog:last',$top(topBody)).off('click.bDialog').on('click.bDialog',function(e){
				var srcEl = e.target || e.srcElement;
				if($(srcEl).is('div.bDialog')){
					var that = $top('div.bDialog:last',$top(topBody));
					$top(that).removeClass('animated').removeClass('shake');
					setTimeout(function () {
						that.addClass('animated').addClass('shake');
					}, 0);
				}
			});
	        //浏览器窗口尺寸变化时，自动对窗口位置进行调整
	        $top(window.top).bind('resize.bDialog', function() {
	            // clear a previously set timeout
	            // this will ensure that the next piece of code will not be executed on every step of the resize event
	            clearTimeout(dialog.timeout);
	            // set a small timeout before doing anything
	            dialog.timeout = setTimeout(function() {
	            	// reposition the dialog box
	            	_bDialog.rePosition(dialog);
	            }, 100);
	        });
    	},
    	/**
    	 * 在页面上弹出窗口
    	 * @param {object} dialog - 生成后的窗口对象
    	 * @param {object} p - 插件参数集
    	 * 
    	 * @return void
    	 * 
    	 * @access private
    	 */
    	openDialog : function(dialog,p){
    		$('div.modal-dialog',$(dialog)).css({
    			'width' : p.width,
				'height' : p.height
    		});
    		window.top.$(dialog).modal({
    			backdrop : p.backdrop
    		}).removeClass('hide');
    		/*
    		window.top.$(dialog).modal({
				backdrop : p.backdrop
			}).css({
				'width' : p.width,
				'height' : p.height/*,
				'margin-left' : function () {
					return -($(this).width() / 2);
				}* /
			}).removeClass('hide');
			*/
    	},
    	/**
    	 * 处理窗口的样式、宽度高度及位置等内容
    	 * @param {object} dialog - 生成后的窗口对象
    	 * @param {object} p - 插件参数集
    	 * @param {object} obj - 页面对象的html元素或jquery对象(用于将内容直接放入窗口中)
    	 * 
    	 * @return void
    	 * 
    	 * @access private
    	 */
    	setCssStyle : function(dialog,p,obj){
			/**
			 * 处理层级顺序及遮罩层级顺序
			 */
    		var topBody = window.top.document.body;
    		var setSize = $('div.modal-backdrop',$(topBody)).size();
			var baseNumber = 1000;
			var stepNumber = (setSize -1) * 20;
			$('div.modal-backdrop:last',$(topBody)).css('z-index', baseNumber + stepNumber + 10 );
			$('div.bDialog:last div.modal-content',$(topBody)).css('z-index', baseNumber + stepNumber + 20 );
			$('div.bDialog:last',$(topBody)).css('z-index', baseNumber + stepNumber + 19 );
			if(setSize > 1) $('div.modal-backdrop:last',$(topBody)).css('opacity','0.1');
			
			/**
			 * 处理样式-----------------------------start
			 */
			var head = $("div.bDialogHeader",$(dialog)).outerHeight(true);
			var footer = p.closeButton ? $("div.bDialogFooter",$(dialog)).outerHeight(true) : 0;
			var bodyPaddingTop = parseFloat($("div.bDialogBody",$(dialog)).css('padding-top'));
			var bodyPaddingBottom = parseFloat($("div.bDialogBody",$(dialog)).css('padding-bottom'));
			var newBodyHeight = $('div.modal-dialog',$(dialog)).innerHeight() - head - footer;// - bodyPaddingTop - bodyPaddingBottom;
			if(newBodyHeight < 400) newBodyHeight = 400;
			var bodyCss = {'height':newBodyHeight,'max-height':newBodyHeight};
			$("div.bDialogBody",$(dialog)).css(bodyCss);
			
			//若是iFrame模式则设置iFrame高度等样式
			if(!obj){
				var newBodyFrameHeight = newBodyHeight - bodyPaddingTop - bodyPaddingBottom;
				if(newBodyHeight < 400) newBodyFrameHeight = 400 - bodyPaddingTop - bodyPaddingBottom;
				var bodyFrameCss = {'height':newBodyFrameHeight,'max-height':newBodyFrameHeight};
				$("iframe.bDialogBodyFrame",$(dialog)).css(bodyFrameCss);
			}
			//清除所有已弹出窗口的当前激活样式
			$('[dialog="bDialog"]',$(topBody)).removeClass('dialogInActive');
			$(dialog).addClass('dialogInActive');
    	},
    	/**
    	 * 最后的一些处理
    	 * @param {object} dialog - 生成后的窗口对象
    	 * @param {object} p - 插件参数集
    	 * 
	     * @return void
	     * 
	     * @access private
    	 */
    	atLast : function(dialog,p){
    		var msie = navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1;
    		//执行一次窗口位置定位
	        _bDialog.rePosition(dialog,0);
			//处理窗口拖拽
			if(p.drag && $.fn.draggable && !msie && !p.fullWidth) $(dialog).draggable({handle:"div.bDialogHeader"});
    	},
		/**
	     * 重新定位窗口位置(主要是处理垂直高度居中)
    	 * @param {object} dialog - 生成后的窗口对象
    	 * @param {number} speed - 动画速度
	     *
	     * @return void
	     * @access private
	     */
		rePosition : function(dialog,speed) {
	        var
	            //获得可视区域的宽度和高度
	            viewport_width = $(window.top).width(),
	            viewport_height = $(window.top).height(),

	            //获得对话框的宽度和高度
	            dialog_width = $('div.modal-dialog',$(dialog)).width(),
	            dialog_height = $('div.modal-dialog',$(dialog)).height(),

	            //计算位置内容
	            values = {
	                'left':     0,
	                'top':      0,
	                'right':    viewport_width - dialog_width,
	                'bottom':   viewport_height - dialog_height,
	                'center':   (viewport_width - dialog_width) / 2,
	                'middle':   (viewport_height - dialog_height) / 2
	            };

	        dialog.dialog_top = values['middle'];
	        
	        // position the dialog box and make it visible
	        /*
	        $(main).css({

	            'top':          main.dialog_top,
	            'visibility':   'visible',
	            'opacity':      0

	        }).animate({'opacity': 1}, 0);
	        */
	        
	        //停止正在执行的动画
	        $('div.modal-dialog',$(dialog)).stop(true);
	        $('div.modal-dialog',$(dialog)).css('visibility', 'visible').animate({
	            'top':  dialog.dialog_top
	        }, (undefined !== $.type(speed) && $.type(speed) == 'number') ? speed : 100);
	    },
	    /**
	     * 获得当前获得焦点的窗口对象
	     * @return {object} 窗口对象
	     * @access private
	     */
    	getDialog : function(){
    		var dlg = $('[dialog="bDialog"].dialogInActive',$(window.top.document.body));
			return (dlg && $(dlg).size() == 1) ? dlg : null;
    	}
    };
	window.bDialog = {
		//打开对话框
		//p:参数集
		//obj:jquery对象，用于网页片断式的显示内容，若设置了URL方式打开窗口，则不需要设置该参数
		open : function(param,obj){
			//合并参数
			var p = _bDialog.setParam(param);
			var dialog = _bDialog.buildDialog(p,obj);
			
			_bDialog.bindEvent(dialog, p);
			_bDialog.openDialog(dialog, p);
			_bDialog.setCssStyle(dialog, p);
			_bDialog.atLast(dialog, p);

			return dialog;
		},
		//关闭当前弹出窗口
		closeCurrent : function(data){
			var dlg = this.getDialog();
			if(dlg && $(dlg).size() == 1){
				//清除参数
				dlg.callback = null;
				dlg[0].selectorparams = null;
				dlg[0].returnData = data;
				$("button.bDialogCloseButton",dlg).click();
			}else console.warn('当前被激活的模态窗口不存在或多于一个，请检查功能是否正常！');
		},
		//获得弹出窗口对象
		getDialog : function(){
			return _bDialog.getDialog();
		},
		// 获得选择器中的传递参数
		getDialogParams : function(){
			var dlg = _bDialog.getDialog();
			return dlg ? dlg[0].params : null;
		},
		// 获得选择器中的回调函数
		getDialogCallback : function(dlg){
			return dlg ? dlg[0].callback : null;
		}
	};
})(window.jQuery);