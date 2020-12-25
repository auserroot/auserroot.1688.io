// 密码登录
$('.m_login').click(function(){
    $('.form1').css('display','block');
    $('.form2').css('display','none');
    $('.m_login').css('border-bottom','2px solid #000');
});
$('.msg_login').click(function(){
    $('.form1').css('display','none');
    $('.form2').css('display','block');
    $('.msgs_login').css('border-bottom','2px solid #000')
});
//下拉菜单（电话国际编号）////
        $('option').click(function () {
            //  txt = '+' + parseInt($('.pho_num').html());
            // console.log(txt);
            // console.log(this);
            $('.pho_n').attr("data-num",$(this).val());
        });
// console.log($('option'));
// console.log($('option').html());
// console.log('+'+parseInt($('option').html()))
// console.log(parseInt("+86 中国大陆"));
// var se = document.querySelector('.pho_num');
// se.onclick = function () {
//     var op = document.querySelectorAll('option');
//     var dt = document.querySelector('.pho_n');
//     for (var i = 0; i < op.length; i++) {
//         op[i].onclick = function () {
//             dt.setAttribute('data-num',this.value);
//         }
//     }
// }