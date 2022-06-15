<!--
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-06-13 17:23:18
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-06-15 09:08:49
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\github_fairviewpart\fairviewpark\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 轮播图 -->
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls
        :indicators="true"
        img-width="1024"
        img-height="480"
        label-prev=""
        label-next=""
      >
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- 业主专区 -->
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col lg="5" md="6" sm="12" style="height:100px;background-color:#000000">1</b-col>
          <b-col lg="7" md="6" sm="12" style="height:100px;background-color:#ccc">2</b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
