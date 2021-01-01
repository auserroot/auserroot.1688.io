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
//banner .swiper-button-next .swiper-button-prev
$('.banner').mouseover(function(){
    $('.b_next').css('right','10px');
    $('.b_prev').css('left','10px');
});
$('.banner').mouseout(function(){
    $('.b_next').css('right','-100px');
    $('.b_prev').css('left','-100px');
});
// 二级菜单
$('.menu_list').children().mouseover(function(){
    $(this).children('.menu_list_two').css('display', 'block');
    $(this).children('.menu_list_two').animate({width:'972px'},300);
})
$('.menu_list').children().mouseout(function(){
    $(this).children('.menu_list_two').css('display', 'none');
})


//goods_list
$('.box_list').mouseover(function () {
    $.ajax({
        type: "get",
        url: "../json/1688.json",
        dataType: "json",
        success: function (data) {

            data.forEach(function (item) {
                $('.box_list').append(`
                    <div class="top_l clearfix _b_l">
                    </div>
                `);
                for (var i = 0; i < 5; i++) {
                    $('._b_l').append(`
                    <div class="b_l_things">
                        <a href="#">
                            <img src="${item.pic}" alt="">
                        </a>
                        <p><span>￥ ${item.pric}</span><span>${item.offerdeal}</span></p>
                        <a href="#" class="b_l_t_a">${item.title}</a>
                    </div>
                `)
                }
                
            });
        }
    });
});



// //3 页面滚动到距离底部300px的时候再加载(10个)商品
// window.onscroll = function(){
// 	var height = getScroll();
// 	// console.log(document.body.offsetHeight-window.innerHeight-height)

// 	if(document.body.offsetHeight-windowHeight()-height<=300){
// 		//如果还有商品,则显示
// 		var next = current + 10>=json.length?json.length:current + 10;
// 		for(var i=current;i<next;i++){
// 			itemArr[i].className = "item";//显示
// 			var img = itemArr[i].getElementsByTagName('img')[0];
// 			img.src = img.getAttribute('data-src');

// 			// h5自定义属性写法
// 			// img.src = img.dataset.src;
// 		}
// 		current = next;
// 		if(current>=json.length){
// 			window.onscroll = null;
// 		}
// 	}
// }


// function getScroll(){
// 	return document.body.scrollTop+document.documentElement.scrollTop;
// }

// function windowHeight(){
// 	if (document.compatMode=="CSS1Compat") {
// 		return document.documentElement.clientHeight;
// 	}else{
// 		return document.body.clientHeight;
// 	}
// }