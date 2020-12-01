<template>
  <div id="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="orders-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="envelop-o" to="/xiao">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "Bot",

};
</script>

    <style scoped>
#footer {
  width: 100%;
  background: white;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  z-index: 999;
  bottom: 0;
}
#footer p{
  font-size: 14px;
  line-height: 0px;
}
#footer ul {
  display: flex;
  text-align: center;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer li.active {
  color: #000000;
}
#footer li.router-link-active {
  color: #838383;
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  font-size: 10px;
}
</style>

