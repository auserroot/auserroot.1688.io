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
// showList()
// function showList(){
//     var productList = getCart();
//     if(productList.length<1){
//         $('#list_2').hide();
//         $('#list_1').show();
//         return;
//     }
//     $('.goods_list').empty();
//     $('#list_2').show();
//     $('#list_1').hide();
//     $.each(productList,function(index,product){
//         console.log(product)
//         $('tbody').append(`<tr>
//         <td>${product.product_id}</td>
//         <td>${product.product_name}</td>
//         <td>
//             <img src="${product.product_img}" alt="">
//         </td>
//         <td>${product.product_price}</td>
//         <td>
//             <span class="add">+</span>
//             <span>${product.product_num}</span>
//             <span class="cut">-</span>
//         </td>
//         <td>
//             <button class="del">删除</button>
//         </td>
//     </tr>`)
    
//     })
// }
