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
  $('.p_num').click(function(){
      $('.pho_num').css('display','block');
  })
  $('.pho_num li').click(function(){
      $('.p_num').html('+' + $(this).val());
      $('.pho_num').css('display','none');
  })
  //iconfont点击
  $('.pc_e').click(function(){
      $('.bottom2').css('display','block');
      $('.bottom').css('display','none');
  })
  $('.pc_c').click(function(){
    $('.bottom').css('display','block');
    $('.bottom2').css('display','none');
})
//点击登录跳转页面
$('#login').click(function(){
    $.ajax({
        url:"../json/login.json",
        data:{
            username:$('#username').val(),
            password:$('#password').val()
        },
        dataType:"json",
        success:function(res){
            if(res.code==1){
                // 登录成功，信息添加到本地存储
                localStorage.setItem('name',$('#uesrname').val());
                localStorage.setItem('password',$('#password').val());
                location.href = "../index.html"
            }
        }
    });
});
