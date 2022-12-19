;(function(){
  function clear(){
   $('.dialog-wrap').fadeOut(function(){
    $('.form')[0].reset()
    $('.form span').text('')
    // fadeOut括号里的参数是淡出完成后要执行的函数
   })
  }

  let editTr=undefined
// 1.点击弹框
  $('.add').click(function(){
    $('.dialog-wrap h3').text('新增')
    editTr=undefined
    $('.dialog-wrap').fadeIn()
  })

  // 日期选择器
  $('.birthday').datepicker({
    language:'ru-RU',
    autoHide:true,
  })

  // 表单校验

  $('.form').validate({
    sendForm:false,
    description:{
      nickname:{
        required:'姓名不能为空',
      },
      mobile:{
        required:'手机不可以为空',
        pattern:'手机格式有误',
      },
      birthday:{
        required:'生日不能为空!',
      },
    },

    valid(){
      
    }

  })
})