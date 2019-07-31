<template>
  <div>
    <div class="header1">
      <div class="inner">
        <div class="back" @click="$router.back(-1)">
          <img src="../assets/images/shoppingcart_05.jpg" alt />
        </div>
        <div class="logo">
          <img src="../assets/images/home_02.jpg" alt />
        </div>
        <div class="right">
          <div class="search">
            <a href>
              <img src="../assets/images/shoppingcart_02.jpg" alt />
            </a>
          </div>
          <div class="message">
            <a href>
              <img src="../assets/images/home_04.jpg" alt />
            </a>
          </div>
          <div class="denglu">
            <ul>
              <li>
                <a href>登录</a>
              </li>
              <li>/</li>
              <li>
                <a href>注册</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tou"
};
</script>

<style lang="scss">
.header1 {
  width: 100%;
  background-color: #2b2e33;
}
.header1 .inner {
  position: relative;
  .back {
    position: absolute;
    left: 50px;
    top: 33px;
    img {
      height: 25px;
      display: block;
    }
  }
  .logo {
    width: 190px;
    margin: 0 auto;
    img {
      display: block;
    }
  }
  .right {
    position: absolute;
    top: 0;
    right: 40px;
    display: flex;
    img {
      height: 90px;
      display: block;
    }
    .denglu {
      display: flex;
      align-items: center;
      ul {
        display: flex;
      }
      li {
        margin-right: 5px;
        color: #707479;
        font-size: 10px;
      }
      a {
        color: #707479;
        font-size: 10px;
      }
    }
  }
}
</style>
