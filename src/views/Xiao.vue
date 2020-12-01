<template>
  <div id="app">
    <Bot></Bot>
    <div id="top">
      <van-nav-bar title="消息">
        <template #right>
          <van-icon name="plus" size="18" />
        </template>
      </van-nav-bar>
    </div>
        <van-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
    <div id="cent">
        
      <van-swipe-cell>
       <div class="cent1">
           <img src="../assets/xiao1.png" width="40%"  alt="">
           <p class="cent1-1"><span>教育热点</span> <br> <span>暂时没有新消息</span></p>
           <p class="cent1-2">11/25</p>
       </div>
        <template #right>
          <van-button square type="danger" text="删除" />
          <van-button square type="primary" text="置顶" />
        </template>
      </van-swipe-cell>
    </div>
    <div id="cent">
      <van-swipe-cell>
       <div class="cent1">
           <img src="../assets/xiao2.png" width="40%"  alt="">
           <p class="cent1-1"><span>安全资讯</span> <br> <span>吓人！一觉醒来小伙突然面摊！夏天开空调千........</span></p>
           <p class="cent1-2">11/25</p>
       </div>
        <template #right>
          <van-button square type="danger" text="删除" />
          <van-button square type="primary" text="置顶" />
        </template>
      </van-swipe-cell>
    </div>
    <div id="cent">
      <van-swipe-cell>
       <div class="cent1">
           <img src="../assets/xiao1.png" width="40%"  alt="">
           <p class="cent1-1"><span>教育热点</span> <br> <span>暂时没有新消息</span></p>
           <p class="cent1-2">11/25</p>
       </div>
        <template #right>
          <van-button square type="danger" text="删除" />
          <van-button square type="primary" text="置顶" />
        </template>
      </van-swipe-cell>
    </div>
    <div id="cent">
      <van-swipe-cell>
       <div class="cent1">
           <img src="../assets/xiao2.png" width="40%"  alt="">
           <p class="cent1-1"><span>安全资讯</span> <br> <span>吓人！一觉醒来小伙突然面摊！夏天开空调千........</span></p>
           <p class="cent1-2">11/25</p>
       </div>
        <template #right>
          <van-button square type="danger" text="删除" />
          <van-button square type="primary" text="置顶" />
        </template>
      </van-swipe-cell>
    </div>
    </van-pull-refresh>
  </div>
</template>

<style>
.cent1{
    font-size: 12px;
    height: 45px;
}
.cent1 img{
   width: 35px;
    float: left;
    margin-top: 6px;
    margin-left: 10px;
}
.cent1-1{
    float: left;
    margin-left: 5px;
}
.cent1-1 span{
    
    line-height: 0px;
}
.cent1-1 span:nth-of-type(1){
    letter-spacing:1px;
    font-size: 14px;
}
.cent1-1 span:nth-of-type(2){
    letter-spacing:1px;   
    font-size: 11px;
    color: silver;
}
.cent1-2{
    float: right;
    margin-right: 10px;
    color: silver;
}
</style>


<script>
import { Toast } from 'vant';
import Bot from "../components/Bot";
export default {
  name: "xiao",
  components: {
    Bot,
  },
  data() {
      return {
           count: 0,
      isLoading: false,
      }
  },
   methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>