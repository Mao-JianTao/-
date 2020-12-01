<template>
     <router-link tag="div" to="/sou">
       <van-search
        v-model="value"
        shape="round"
        background="#ffffff"
        input-align="center"
        placeholder="请输入要查找的内容"
      /></router-link>
      
</template>

<script>
export default {
    name:"Top"
}
</script>

<style scoped>

</style>