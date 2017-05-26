<template>
    <div class="cont">  
        <div class="logo clear">
          <img src="../assets/logo.png">
        </div>
        <div class="info-from">
            <div class="info-item">
                <label for="name">姓名：</label>
                <input type="text" name="name" id="name" placeholder="请输入姓名" v-model="name" >
            </div>
            <div class="info-item">
                <label for="id">身份证：</label>
                <input type="text" name="id" id="id" placeholder="请输入身份证号码" v-model="id" >
            </div>
            <button class="button" v-on:click="sendInfo" v-loading.fullscreen.lock="fullscreen">查询</button>
        </div>
        <p class="cr">©浙江工业大学精弘网络</p>
        <div class="loading" v-if="loading">
          <div class="double">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
          </div>
        </div>
    </div>

</template>
<script>
     import router from '../router/index.js'
    export default {
       data: function() {
        return {
            name: '',
            id: '',
            fullscreen: false,
            loading: false
        }
       },
       methods: {
        sendInfo () {
            this.loading = true;
            let _this = this;
            // let ad = random(1, 1000);
            let num = 1000;
            this.$http.post('http://localhost/new-stu/stu-api/test.php',{name: _this.name, id: _this.id, nu: num},
              {emulateJSON: true}
              ).then(function (res){
                _this.loading = false;
                alert(res.body.name + ' ' + res.body.id);
            }, function(){
                _this.loading = false;
                alert('error');
                router.push('detail');
            });}

        // }
          // sendInfo () {
          //   this.fullscreen = true;
          //   let _this = this;
          //   $.ajax({
          //       type: 'POST',
          //       url: 'http://192.168.88.150/new-stu/stu-api/test.php',
          //       data: {
          //           name: _this.name,
          //           id: _this.id
          //       },
          //       async: true,
          //       dataType: 'html',
          //       success: function(msg){
          //           alert('1');

          //       },
          //       error: function(XMLHttpRequest, textStatus, errorThrown){
          //           _this.fullscreen = false;
          //           alert('2');
          //           alert(XMLHttpRequest.status);  
          //           alert(XMLHttpRequest.readyState);  
          //           alert(textStatus);  
          //           alert(XMLHttpRequest.responseText); 
          //       }

          //   })
          // }
       }
   }
</script>
<style scoped>
    .cont{
           width: 100%;
           height: 100%;
           background-color: #8cbbb1;
           -webkit-background-size: 100%;
           background-size: 100%;
     }

    .clear{
        overflow: auto;
    }
    
    .cont .logo {
         position: relative;
         top: 10%;
    }
    .cont .info-from{
        display: block;
        position: relative;
        top: 15%;
        height: auto;
        width: 100%;
    }

    .cont .info-from .info-item{
         width: 85%;
         height: 31px;
         margin: 0 auto;
         margin-bottom: 3rem;
         border-bottom: 2px solid #faf6f2;
    }

    .cont .info-from label{
        float: left;
        color: #faf6f2;
        font-size: 15px;
        box-sizing: border-box;
        padding: 5px 6px 5px 0;
        vertical-align: middle;
    }

    .cont .info-from input{
        outline: none;
        background: none;
        border: none;
        height: 29px;
        font-size: 15px;
        color: #faf6f2;
        float: left;
    }

    .cont .cr{
        position: absolute;
        font-size: 0.8rem;
        color: #fff;
        bottom: 1%;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .cont .button{
        background-color: #8cbbb1;
        border: none;
        padding: 8px 40px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border: 1px solid #faf6f2;
        color: #faf6f2;
    }
    
    input::-webkit-input-placeholder {
        color: #fff;
        font-size: 13px;
    }

    .loading {
      position: absolute;
      z-index: 1000;
      margin: 0;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, .9);

    }

    .double {
      height: 10%;
      width: 10%;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #8cbbb1;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-animation: bounce 2.0s infinite ease-in-out;
        animation: bounce 2.0s infinite ease-in-out;
      }
 
.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
@-webkit-keyframes bounce {
  0%, 100% { -webkit-transform: scale(0.0) ;
             }

  50% { -webkit-transform: scale(1.0) ;
       }
}
 
@keyframes bounce {
  0%, 100% {
    transform: scale(0.0) ;
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0) ;
    -webkit-transform: scale(1.0);
  }
}

</style>
