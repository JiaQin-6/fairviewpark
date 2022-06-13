<!--
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-06-13 15:08:30
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-06-13 16:47:23
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\Fairview Park\fairviewpark\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
