$(function(){
  //初始化右侧滚条，这个方法定义在scroll.js中
  resetui()

  //为发送按钮绑定鼠标点击事件
  $('#btnSend').on('click',function(){
    var text=$('#ipt').val().trim()//trim()的功能是去除两端的空格
    if(text.length<=0){
      return $('#ipt').val('')
    }
    //如果用户输入了聊天内容，则将聊天内容追加到页面上
    $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
    $('#ipt').val('')
    // 重置滚动条的位置
    resetui()

    // 发起请求,获得聊天内容
    getMsg(text)

  })

  // 获取聊天机器人发送回来的消息
  function getMsg(text){
    $.ajax({
      method:'GET',
      url:'http://ajax.frontend.itheima.net:3006/api/robot',
      data:{
        spoken:text
      },
      success:function(res){
        if(res.message==='success'){
          //接受聊天信息
          var msg=res.data.info.text
          $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')

          //重置滚动条的位置

          resetui()

          // 调用getVoice函数,把文本转换成语言
          getVoice(msg)
        }
      }
    })
  }

  // 把文字转化为语音播放

  function getVoice(text){
    $.ajax({
      method:'GET',
      url:'http://ajax.frontend.itheima.net:3006/api/synthesize',
      data:{
        text:text
      },
      success:function(res){
        if(res.status===200){
          $('#voice').attr('src',res.voiveUrl)
        }
      }
    })
  }

  // 为文本绑定keyup事件
  $('#ipt').on('keyup',function(e){
    if(e.keyCode===13){
      $('#btnSend').click()
    }
  })
})

