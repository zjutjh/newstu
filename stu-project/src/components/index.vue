<template>
    <div class="cont">  
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
    </div>

</template>
<script>
    export default {
       data: function() {
        return {
            name: '',
            id: '',
            fullscreen: false,
        }
       },
       methods: {
        sendInfo () {
            this.fullscreen = true;
            let _this = this;
            // let ad = random(1, 1000);
            let num = 1000;
            this.$http.post('http://localhost/new-stu/stu-api/test.php',{name: _this.name, id: _this.id, nu: num},
              {emulateJSON: true}
              ).then(function (res){
                this.fullscreen = false;
                alert(res.body.name + ' ' + res.body.id);
            }, function(){
                this.fullscreen = false;
                alert('error');
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
           background: url('../assets/bc.png') no-repeat;
           -webkit-background-size: 100%;
           background-size: 100%;
        }
    .clear{
        overflow: auto;
    }
    .cont .info-from{
        display: block;
        position: relative;
        top: 33%;
        height: auto;
        width: 100%;
    }
    .cont .info-from .info-item{
         width: 85%;
         height: 31px;
         margin: 0 auto;
         margin-bottom: 40px;
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
        background-color: #8cbbb1;
        border: none;
        height: 29px;
        font-size: 15px;
        color: #faf6f2;
        float: left;
    }
    .cont .cr{
        position: relative;
        font-size: 8px;
        color: #5a5a62;
        top: 54%;
        right: 25%
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


</style>