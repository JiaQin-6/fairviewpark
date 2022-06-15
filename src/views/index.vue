<!--
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-06-13 16:58:09
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-06-13 17:19:18
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\github_fairviewpart\fairviewpark\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>
