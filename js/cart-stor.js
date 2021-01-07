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

//main  h_bot
$('.h_bot').children().click(function(){
    $(this).css({'color':'#f27800','border-bottom':'1px solid #f27800'});
    if($(this).css({'color':'#f27800','border-bottom':'1px solid #f27800'})){
        $(this).siblings().css({'color': '#000','border-bottom':'1px solid #eee'})
    }
});




//加入进货单
function getCart(){
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr){

    localStorage.setItem('cart',JSON.stringify(arr))
}
// 1 购物车页面一打开就要展示该用户的购物车商品列表
showList()
function showList(){
    var productList = getCart();
    if(productList.length<1){
        $('#list_2').hide();
        $('#list_1').show();
        return;
    }
    $('.goos_m_c').children().empty();
    $('#list_2').show();
    $('#list_1').hide();
    $.each(productList,function(index,product){
        console.log(product)
        $('.goos_m_c').children().append(`
        <div>
        <input type="checkbox" id="check">
        <img src="${product.img}" alt="">
        <p class="g_p">${product.name}<i class="_icon_main"><img src="https://cbu01.alicdn.com/cms/upload/trade/businessicon/icon_mix.gif" alt=""></i><i><img src="https://cbu01.alicdn.com/cms/upload/2015/111/115/2511111_1964054271.png" alt=""></i></p>

        <table class="goods_info">
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox">
                        <span>${product.id}</span>
                    </td>
                    <td class="clearfix">
                        <i class="del">-</i>
                        <input type="text" placeholder="0" value="${product.num}" class="c_txt">
                        <i class="add">+</i>
                    </td>
                    <td>
                        <span>${product.price}</span>
                    </td>
                    <td>
                        <span>--</span>
                    </td>
                    <td>
                        <span>${parseInt(product.price)*parseInt(product.num) }</span>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        `)
    
    })
}



//save & delete 
$('._icon_r_b1').mouseover(function(){
    $(this).css({'background-positionY':'-75px'});
});
$('._icon_r_b2').mouseover(function(){
    $(this).css({'background-positionY':'-26px'});
});
$('._icon_r_b1').mouseout(function(){
    $(this).css({'background-positionY':'-50px'});
});
$('._icon_r_b2').mouseout(function(){
    $(this).css({'background-positionY':'0px'});
});


//减
$('tr').on('click','.del',function(){
    if($(this).siblings('.c_txt').val()>0){
        var num = parseInt($(this).siblings('.c_txt').val());
        num-=1;
        $(this).parent().parent().children('td:last').children('span').html($(this).parent().next().children('span').html()*num);
        return  $(this).siblings('.c_txt').val(num);
    }else{
        $(this).siblings('.c_txt').val(0);
    }
});
// 加
$('.add').click(function(){
    if($(this).siblings('.c_txt').val()>=0){
        var num = parseInt($(this).siblings('.c_txt').val());;
        num+=1;
        $(this).parent().parent().children('td:last').children('span').html($(this).parent().next().children('span').html()*num);
        return  $(this).siblings('.c_txt').val(num);
    }else{
        $(this).siblings('.c_txt').val(0);
    }
});

//删
function removeCart(){

    localStorage.removeItem('cart');
}
$('.goos_m_c').children().children('#check').click(function(){
    console.log(1)
    $(this).attr("checked",'checked');
});
$('._icon_r_b2').click(function(){
    if($(this).parent().prev().children().children('#check').is(':checked')) {
        $(this).parent().parent().children($('.goos_m_c')).children().remove();
        removeCart();
        location.href='../cart-stor.html';
    }
});


// 添加用户名
$('html,body').ready(function(){
    if(localStorage.getItem("name")){
        $('#login').html(localStorage.getItem("name"));
    }
});


//结算
$('.to_pay').click(function(){
    var str = $(this).parent().prev().children().children().children('.goods_info').children().children().children('td:last').children().html();
    $.each(str,function(i,item){
        var num =0; 
        num += parseInt(item);
        $('.howmuch').html(num);
    })
    
});