//头部 
//箭头方向
$('.t').mouseover(function () {
    $(this).css('background-positionY','-28px')
})
$('.t').mouseout(function () {
    $('.t').css('background-positionY','12px')
})
//请登录 鼠标移入移出 事件
//鼠标移入a标签显示div
$('.redbg').mouseover(function () { 
    $('.list1').css('display','block');
});
//鼠标移出div隐藏
$('.redbg').mouseout(function(){
    $('.list1').css('display','none');
});
//点击关闭div
$('.close').click(function () {
    $('.list1').css('display','none');
});
//我的阿里 鼠标移入移出 事件
$('.myali').mouseover(function () { 
    $('.list2').css('display','block');
});
//鼠标移出div隐藏
$('.myali').mouseleave(function () { 
    $('.list2').css('display','none');
});
//进货单 
$('.buy').mouseover(function(){
    $('.list3').css('display','block');
});
$('.buy').mouseout(function(){
    $('.list3').css('display','none');
})
//我的收藏
$('.seave').mouseover(function(){
    $('.list4').css('display','block');
});
$('.seave').mouseout(function(){
    $('.list4').css('display','none');
})
//入驻诚信通
$('.join').mouseover(function(){
    $('.list5').css('display','block');
});
$('.join').mouseout(function(){
    $('.list5').css('display','none');
})
//实力商家
$('.pow').mouseover(function(){
    $('.list6').css('display','block');
});
$('.pow').mouseout(function(){
    $('.list6').css('display','none');
})
//工业品牌
$('.gro').mouseover(function(){
    $('.list7').css('display','block');
});
$('.gro').mouseout(function(){
    $('.list7').css('display','none');
})
// 我是供应商
$('.sto').mouseover(function(){
    $('.list8').css('display','block');
});
$('.sto').mouseout(function(){
    $('.list8').css('display','none');
})
// 客服中心
$('.sev').mouseover(function(){
    $('.list9').css('display','block');
});
$('.sev').mouseout(function(){
    $('.list9').css('display','none');
})
// 网站导航
$('.h_nav').mouseover(function(){
    $('.list10').css('display','block');
});
$('.h_nav').mouseout(function(){
    $('.list10').css('display','none');
})

// 注册
$('.header_bot a').click(function () {
    $(this).css({'color':'#f27800','border-bottom':'1px solid #f27800'})
    if($(this).css({'color':'#f27800','border-bottom':'1px solid #f27800'})){
        $(this).siblings().css({'color': '#000','border-bottom':'1px solid #eee'})
    }
  });
$('.header_bot a:nth-child(1)').click(function () {
    $('.main_txt').html('有企业营业执照（含个体工商户）的用户请注册。权益如下：做企业实名认证；作为卖家身份开店；作为买家身份采购。');
    var t=true;
    if(t){
        var str = " <div> <label for='name'>联系人姓名:</label><input type='text' id='name' placeholder='请输入真实姓名'></div><div> <label for='cpname'>企业名称:</label><input type='text' id='cpname' placeholder='营业执照上的公司名称'></div><div> <label>贸易身份:</label><input type='radio'>我要销售 <input type='radio'>我要采购 <input type='radio'>两者都是</div>"
        $('.f_p_box').after(str);
        return t=false;    
    }else{
        
    }
});

//下拉菜单（电话国际编号）////
$('.p_num').click(function(){
    $('.pho_num').css('display','block');
})
$('.pho_num').mousemove(function(){
    $('.pho_num').css('display','block');
})
$('.pho_num').mouseout(function(){
    $('.pho_num').css('display','none');
})
$('.pho_num li').click(function(){
    $('.p_n_num').html('+' + $(this).val());
    $('.p_n_txt').html($(this).html().match(/[\u4e00-\u9fa5]{2,}/g))
    $('.pho_num').css('display','none');
})

//验证
$(function(){
    $('.sliding > em').on('mousedown',function(ev){
      //获取鼠标摁下的位置
      var down_X=ev.clientX;
      //获取em,span的宽度
      var span_W=$('.sliding > span').width();
      var em_X=$('.sliding > em').get(0).offsetLeft;
      $('.sliding > em').mousemove(function(ev){
        //获取鼠标移动的位置
        var move_X=ev.clientX;
        //用移动过后的位置减去鼠标摁下的位置加上p的宽度或者 em 的left 值 因为俩者是同步的 所以 减去 其中一个就好
        var size = move_X - down_X + span_W;              
        if(size>0){// 移动的时候判断size>0的时候执行，Math.min选取最小值，让拖动过程中不至于超出
          size=Math.min(($('.sliding').get(0).offsetWidth - $('.sliding > em').width()),size);
        }else{
          //小于0的时候 size =0； 防止有无聊的用户拖回 超出边界
          size=0;
        }
        $('.sliding > span').css('width', size + 'px');
        $('.sliding > em').css('left', size + 'px');
        //防止拖拽过程中选中文字
        return false;
      });
      $(document).mouseup(function(){
        //鼠标松开执行,判段span到达边界时候执行
        if(($('.sliding > em').get(0).offsetLeft) >= ($('.sliding').get(0).offsetWidth - $('.sliding > em').get(0).offsetWidth)){
          //更改div的背景
          $('.sliding').css({'background':'#7AC23C'});
          //去除span背景
          $('.sliding > span').removeClass('huakuai');
          $('.sliding > span').css({'width':'282px','height':'36px','color':'#fff'});
          //更改标签中的内容
          $('.sliding > span').text('验证通过');
          //删除鼠标摁下方法防止用户 无聊往回 推拽
          $('.sliding > em').off('mousedown');
        }else{
          //判断没到达边界让它再回到起点
          //利用jquery让em 和 span 回到起始状态
          $('.sliding > em').animate({left:'0px'},282);
          $('.sliding > span').animate({width:'0px'},282);
        }
        $(document).get(0).onmouseup=null;
      });
    });
  });
//模态框
//打开页面加载模态框
$('#myModal').modal();
