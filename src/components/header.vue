<!--
 * @Author: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @Date: 2022-06-14 21:36:13
 * @LastEditors: 嘉嘉 51945758+JiaQin-6@users.noreply.github.com
 * @LastEditTime: 2022-06-15 00:24:09
 * @FilePath: /vue3.0/Users/david/Desktop/Fairview Park/fairviewpark/src/components/header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main">
    <b-navbar toggleable="lg" type="dark" sticky>
      <b-navbar-brand href="#">
        <img src="../assets/image/fairview park logo.png" alt=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse1"></b-navbar-toggle>

      <b-collapse id="nav-collapse1" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">首頁</b-nav-item>
          <b-nav-item-dropdown text="關於我們" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="新買家須知" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="屋邨資料" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="專巴時間表" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="商城資訊" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="常用電話及連接" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="屋邨通知須知" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="lang">
            <span>ENG</span>
            <i></i>
            <span>中文</span>
          </div>
          <div class="line"></div>
          <button class="login">業主登入</button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
.main {
  background: #255534;
  .navbar {
    max-width: 1920px;
    height: 120px;
    left: 0px;
    top: 0px;
    mix-blend-mode: normal;
    opacity: 0.9;
    padding: 0;
    margin: 0 auto;
    text-align: center;
    .navbar-brand {
      margin: auto;
      margin-left: 105px;
      margin-right: 100px;
      padding: 0;
    }
    .ml-auto {
      margin-left: auto;
      .lang {
        width: 120px;
        height: 52px;
        background: #f0ce5f;
        border-radius: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          font-size: 16px;
          line-height: 52px;
        }
        i {
          width: 2px;
          height: 30px;
          background-color: #252525;
          margin:0px 10px 0;
        }
      }
      .line {
      }
      .login{
width: 150px;
height: 52px;
background: #8FBC25;
border-radius: 150px;
border: 0;

font-size: 18px;
color: #fff;
      }
    }
  }
}
</style>
