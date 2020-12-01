<template>
  <div id="app">
    <div id="top1">
      <form action="/">
        <van-search
          v-model="value"
          shape="round"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    

    <div id="cent">
      <p class="cent1">安全健康</p>
      <p class="cent2">
        <span>安全</span>
        <span>健康常识</span>
      </p>
    </div>

    <div id="cent">
      <p class="cent1 one">亲子</p>
      <p class="cent2">
        <span>育儿</span>
        <span>父母成长</span>
      </p>
    </div>
    
    <div id="cent">
      <p class="cent1 two">人文</p>
      <p class="cent2">
        <span>历史</span>
        <span>哲学</span>
        <span>国学</span>
        <span>文学</span>
      </p>
      <p class="cent2">
        <span>动漫卡通</span>
        <span>名人名家</span>
        <span>儿歌</span>
        <span>绘本</span>
      </p>
    </div>

    <div id="cent">
      <p class="cent1 three">科学素养</p>
      <p class="cent2">
        <span>科学知识</span>
        <span>科学实践</span>
      </p>
    </div>

    <div id="cent">
      <p class="cent1 for">学习力</p>
      <p class="cent2">
        <span>记忆力</span>
        <span>专注力</span>
        <span>想象力</span>
        <span>逻辑力</span>
      </p>
      <p class="cent2">
        <span>演讲口才</span>
        <span>时间管理</span>
        <span>自我管理</span>
      </p>
      <p class="cent2">
        <span>学习方法</span>
      </p>
    </div>
    
    <div id="cent">
      <p class="cent1 wu">艺术</p>
      <p class="cent2">
        <span>音乐</span>
        <span>美学</span>
        <span>表演</span>
        <span>棋艺</span>
      </p>
      <p class="cent2">
        <span>手工</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
#cent {
  margin-bottom: 20px;
}
.cent1 {
  margin-left: 10px;
  border-left: 1.5px solid rgb(146, 29, 255);
  padding: 0px 10px;
  font-size: 14px;
  font-weight: bold;
}
.one{
    border-left: 1.5px solid rgb(41, 159, 228);
}
.two{
    border-left: 1.5px solid rgb(232, 235, 53);
}
.three{
    border-left: 1.5px solid rgb(53, 229, 235);
}
.for{
    border-left: 1.5px solid rgb(108, 53, 235);
}
.wu{
    border-left: 1.5px solid rgb(53, 138, 235);
}
.cent2 {
  margin-left: 10px;
  font-size: 13px;
}
.cent2 span {
  border: 1px solid rgb(175, 175, 175);
  border-radius: 15px;
  padding: 5px 10px;
  line-height: 20px;
  margin: 0px 10px;
}
</style>

<script>
import { Toast } from "vant";
export default {
  name: "Sou",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>