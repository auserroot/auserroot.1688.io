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
});

// _l_bar
// stor_info ul
$('.stor_info ul').mouseover(function(){
    $('._l_bar').css({'display':'block'});
});
$('.stor_info ul').mouseout(function(){
    $('._l_bar').css({'display':'none'});
});

// ew
$('.ew').mouseover(function(){
    $('._ew_').css({'display':'block'});
});
$('.ew').mouseout(function(){
    $('._ew_').css({'display':'none'});
});


//search
$('._form input').mouseover(function () {
    $(this).focus();
    $(this).css({ 'border': '2px solid #fe7400' });
});


// <!-- nav -->
$('.l_s').mouseover(function(){
    $('.selact').css({'display':'block'});
});
$('.l_s').mouseout(function(){
    $('.selact').css({'display':'none'});
});



// 放大镜
$(function() {
    var a = $('#demo4carousel').elastislide({
        start: 1,
        minItems: 4,
        onClick: function(c, d, e) {
            c.siblings().removeClass("active");
            c.addClass("active");
            a.setCurrent(d);
            e.preventDefault();
            var f = $('#demo4').data('imagezoom');
            f.changeImage(c.find('img').attr('src'), c.find('img').data('largeimg'))
        },
        onReady: function() {
            $('#demo4').ImageZoom({
                type: 'standard',
                zoomSize: [480, 300],
                bigImageSrc: 'demo_assets/large/2.jpg',
                offset: [10, -4],
                zoomViewerClass: 'standardViewer',
                onShow: function(c) {
                    c.$viewer.hide().fadeIn(500)
                },
                onHide: function(c) {
                    c.$viewer.show().fadeOut(500)
                }
            });
            $('#demo4carousel li:eq(1)').addClass('active');
            $(window).resize(function() {
                var c = $('#demo4').data('imagezoom');
                winWidth = $(window).width();
                if (winWidth > 900) {
                    c.changeZoomSize(480, 300)
                } else {
                    c.changeZoomSize(winWidth * 0.4, winWidth * 0.4 * 0.625)
                }
            })
        }
    });
});



// center 数据添加
$('tr').on('click','.del',function(){
    if($(this).siblings('.c_txt').val()>0){
        var num = parseInt($(this).siblings('.c_txt').val());
        num-=1;
        return  $(this).siblings('.c_txt').val(num);
    }else{
        $(this).siblings('.c_txt').val(0);
    }
});
$('.add').click(function(){
    if($(this).siblings('.c_txt').val()>=0){
        var num = parseInt($(this).siblings('.c_txt').val());;
        num+=1;
        return  $(this).siblings('.c_txt').val(num);
    }else{
        $(this).siblings('.c_txt').val(0);
    }
});


// 加入进货单
function getCart(){
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr){

    localStorage.setItem('cart',JSON.stringify(arr))
}

// 点击加入进货单
$('.add').click(function(){
    var newProduct = {
        id:$(this).data('id'),
        name:$(this).data('name'),
        img:$(this).data('img'),
        price:$(this).data('price'),
        num:$(this).data('num')
    };
    
    // 先获取原来的商品列表数组
    var productList = getCart();
    // 把新商品添加进去
    productList.push(newProduct);//如果有同id商品，不能直接push，要把num增加
    // 存回本地存储
    setCart(productList);
});

//点击进入进货单
$('.add_tocart').click(function(){
    location.href='../cart-stor.html';
})



// 支付方式
// $('.l_p_li').mouseover(function(){
//     $('.stop').css({'transform':'rotate(180deg)'});
//     $('._last').css({'display':'block'});
// });
// $('.l_p_li').mouseout(function(){
//     $('.stop').css({'transform':'rotate(0)'});
//     $('._last').css({'display':'none'});
// });

// 详情图
$(window).ready(function () {
    $.ajax({
        type: "get",
        url: "../json/pic.json",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                $('._i_r_bot').append(`
                <img src="${item.url}" alt="${item.tit}">
                <br>
            `);
            });
        }
    });
});

// 侧边组件
// 左边
// 右边
$('.icon').mouseover(function(){
    $(this).children('a').children('img').css({'background':'#ff7300'});
    $(this).children('a').children('p').css({'display':'block','color':'#ff73000'});
});
$('.icon').mouseout(function(){
    $(this).children('a').children('img').css({'background':'none'});
    $(this).children('a').children('p').css({'display':'none'});
});


$('.gotop').click(function(){
    $('html,body').animate({scrollTop:0},500);
});