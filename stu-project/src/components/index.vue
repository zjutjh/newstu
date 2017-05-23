<template>
    <div class="cont">
        <div class="logo clear">
          <img src="../assets/logo.png">
        </div>
        <div class="info-from">
            <div class="info-item">
                <label for="name">姓名：</label>
                <input type="text"  class="info-item-input" name="name" id="name" placeholder="请输入姓名" :disabled="disabledTrigger" v-model="name" >
            </div>
            <div class="info-item">
                <label for="id">身份证：</label>
                <input type="text" class="info-item-input" name="id" id="id" placeholder="请输入身份证号码" :disabled="disabledTrigger" v-model="id" >
            </div>
            <button class="button" @click="sendInfo" :disabled="disabledTrigger">{{searchText}}</button>
        </div>
        <p class="cr">©浙江工业大学精弘网络</p>
    </div>

</template>
<script>
  /* eslint-disable indent */

  export default {
       data: function() {
        return {
            name: '',
            id: '',
            disabledTrigger:false,
          searchText:"查询"

        }
       },
       methods: {
        sendInfo () {
//          console.log(1)
            let _this = this;
            // let ad = random(1, 1000);
            let num = 1000;

          this.disabledTrigger = !this.disabledTrigger;
          this.searchText = '查询中...'
            this.$http.post(
              'http://localhost/new-stu/stu-api/test.php',
              {name: _this.name, id: _this.id.toUpperCase(), nu: num},
              {emulateJSON: true}
            ).then(
              function (res) {
                alert(res.body.name + ' ' + res.body.id);
                this.disabledTrigger = !this.disabledTrigger;
                this.searchText = '查询'
              },
              function () {
                alert('error');
                this.disabledTrigger = !this.disabledTrigger;
                this.searchText = '查询'
              });
        }

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
         height: 18px;
         margin: 0 auto 3rem  ;
          line-height: 18px;


    }

    .cont .info-from label{

        float: left;
        color: #faf6f2;
        font-size: 14px;
        height: 18px;
        /*box-sizing: border-box;*/
        padding: 0 0 0 5px;
        /*vertical-align: middle;*/
    }

    .cont .info-from input{
      width: 80%;
        outline: none;
        background: none;
        border: none;
        height: 18px;
        line-height: 18px;
        font-size: 15px;
        color: #faf6f2;
        float: right;
      text-align: center;
      border-bottom: 2px solid #faf6f2;
      transition: .5s border ease;
    }
    .cont .info-from input:focus{
      border-bottom-color: #fff181;
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
    .cr {
      position: fixed;
      bottom: 5px;
      width: 100%;
      text-align: center;
    }

    input::-webkit-input-placeholder {
        color: #fff;
    }


</style>
