<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-06-14 21:36:13
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-06-15 09:08:21
 * @FilePath: /vue3.0/Users/david/Desktop/Fairview Park/fairviewpark/src/views/index.vue
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
