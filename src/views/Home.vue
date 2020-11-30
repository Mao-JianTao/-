<template>
  <div id="app">
    <Top></Top>
    <Bot></Bot>
    <div id="cent">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/lun1.png" width="100%" height="150px" alt="" />
        </van-swipe-item>
        <van-swipe-item
          ><img src="../assets/lun2.png" width="100%" height="150px" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/lun3.png" width="100%" height="150px" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/lun4.png" width="100%" height="150px" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/lun5.png" width="100%" height="150px" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../assets/lun6.png" width="100%" height="150px" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div id="cent1">
      <van-grid :border="false" :column-num="5">
        <van-grid-item>
          <p><img src="../assets/cent1.png" width="50%" /></p>
          <p>安全教育</p>
        </van-grid-item>
        <van-grid-item>
          <p><img src="../assets/cent2.png" width="50%" /></p>
          <p>安全提醒</p>
        </van-grid-item>
        <van-grid-item>
          <p><img src="../assets/cent3.png" width="50%" /></p>
          <p>安心陪伴</p>
        </van-grid-item>
        <van-grid-item>
          <p><img src="../assets/cent4.png" width="50%" /></p>
          <p>话题</p>
        </van-grid-item>
        <van-grid-item>
          <p><img src="../assets/cent5.png" width="50%" /></p>
          <p>热电资讯</p>
        </van-grid-item>
      </van-grid>
    </div>

    <div id="cent2">
      <van-tabs v-model="active" swipeable animated>
        <van-tab title="热点" name="a">
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p>老百姓如何做好冬季新冠肺炎疫情防护 </p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 老百姓如何做好冬季新冠肺炎疫情防护</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div>
         
        </van-tab>
        <van-tab title="安全健康" name="b">
          <div class="cent2-1">
            <div class="cent2-text">
             <p>老百姓如何做好冬季新冠肺炎疫情防护 </p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div>
        </van-tab>
        <van-tab title="亲子" name="c">
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p>老百姓如何做好冬季新冠肺炎疫情防护 </p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div>
        </van-tab>
        <van-tab title="人文" name="d">
           <div class="cent2-1">
            <div class="cent2-text">
             <p>老百姓如何做好冬季新冠肺炎疫情防护 </p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div>
        </van-tab>
        <van-tab title="科学素养" name="e">
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p>老百姓如何做好冬季新冠肺炎疫情防护 </p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div>
        </van-tab>
        <van-tab title="学习力" name="f">
          <div class="cent2-1">
            <div class="cent2-text">
             <p>老百姓如何做好冬季新冠肺炎疫情防护 </p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div></van-tab>
        <van-tab title="艺术" name="g">
          <div class="cent2-1">
            <div class="cent2-text">
             <p> 43车连撞，已致3死六伤！冬天一定要小心这个“杀手”</p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-1.png" width="90%" alt=""> </div>
          </div>
          <div class="cent2-1">
            <div class="cent2-text">
             <p>老百姓如何做好冬季新冠肺炎疫情防护 </p>
             <p>安全资讯 <span class="an">安全</span> </p>
            </div>
            <div class="cent2-img"> <img src="../assets/cent2-2.png" width="90%" alt=""> </div>
          </div> 
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Top from "../components/Top";
import Bot from "../components/Bot";
export default {
  name: "home",
  components: {
    Top,
    Bot,
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.my-swipe .van-swipe-item {
  line-height: 20px;
  text-align: center;
}

#cent1 p {
  font-size: 14px;
  text-align: center;
}

.cent2-1{
  border-bottom: 1px solid rgb(196, 196, 196);
  height: 85px;
}
.cent2-text{
  float: left;
  width: 200px;
  margin-left: 10px;
  margin-top: 10px;
}
.cent2-text p:nth-of-type(1){
   font-weight: bold;
  font-size: 15px;
}
.cent2-text p:nth-of-type(2){
  font-size: 12px;
  color: rgb(170, 170, 170);
  margin-top: 10px;
}
.an{
  margin-left: 10px;
  border-radius:2px ;
  padding: 0px 5px;
  color: rgb(39, 42, 247);
  border: 1px solid rgb(39, 42, 247);
}
.cent2-img{
  width: 120px;
  float: right;
  margin-left: 30px;
  margin-top: 2px;
  margin-right: 10px;
}
.cent2-img img{
  float: right;
}
</style>
