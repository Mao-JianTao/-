<template>
    <div id="footer">
        <van-tabbar v-model="active">
  <van-tabbar-item badge="3">
    <span>自定义</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
    </div>

    
</template>
<script>
        export default{
            name:"Bot"
        }

    </script>

    <style scoped>
        #footer{
            width: 100%;
            height: 50p7x;
            background: white;
            border-top: 2px solid #ebe8e3;
            position: fixed;
            left: 0;
            bottom: 0;
        }
        #footer ul{
            display: flex;
            text-align: center;
            height: 50px;
            align-items: center;
        }
        #footer ul li{
            flex: 1;
            height: 40px;
        }
        #footer li.active{
            color: #000000;
        }
        #footer li.router-link-active{
            color: #838383;
        }
        #footer ul i{
            font-size: 20px;
        }
        #footer ul p{
            font-size: 12px;
            line-height: 0px;
        }
    </style>

