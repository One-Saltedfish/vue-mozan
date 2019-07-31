<template>
  <div class="order">
    <Header />
    <div class="main6">
      <div class="inner">
        <div class="top">
          <div class="title">
            <span></span>
            <h2>填写订单</h2>
          </div>
          <ul class="nav">
            <li>
              <router-link
                to="/ShoppingCart1"
                :class="$route.fullPath==='/ShoppingCart1'?'active':''"
              >购物车</router-link>
            </li>
            <li>
              <router-link to="/order" :class="$route.fullPath==='/order'?'active':''">填写订单</router-link>
            </li>
            <li>
              <router-link
                to="/shouyingtai1"
                :class="$route.fullPath==='/shouyingtai1'||'/shouyingtai2'||'/shouyingtai3'?'active':''"
              >付款，完成订单</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="inner">
      <img src="../assets/images/bgc_03.jpg" alt />
    </div>
    <div class="main7">
      <div class="inner">
        <div class="title">
          <h4>收货地址</h4>
          <div class="right">
            <el-button type="text" @click="dialogFormVisible = true">新增地址</el-button>
            <el-dialog :visible.sync="dialogFormVisible" title="收货地址">
              <div class="title"></div>
              <el-form :model="form">
                <div class="form1">
                  <div class="left">
                    <div class="topp">
                      <p>
                        <span>*</span>收货人
                      </p>
                      <span>请填写收货人</span>
                    </div>
                    <input type="text" class="ren" />
                  </div>
                  <div class="right">
                    <div class="topp">
                      <p>
                        <span>*</span>联系电话
                      </p>
                    </div>
                    <input type="text" class="shouji" />
                  </div>
                </div>
                <div class="form2">
                  <div class="left">
                    <div class="topp">
                      <p>
                        <span>*</span>所在地区
                      </p>
                      <span>请填写完整的所在地区</span>
                    </div>
                    <div class="content">
                      <input type="text" />
                      <!-- <el-select
                        @change="$store.commit('choseProvince',sheng)"
                        placeholder="省级地区"
                        :value="sheng"
                        @input="updateSheng"
                      >
                        <el-option
                          v-for="item in province"
                          :key="item.id"
                          :label="item.value"
                          :value="item.id"
                        ></el-option>
                      </el-select>
                      <el-select
                        @change="$store.commit('choseCity',shi)"
                        placeholder="市级地区"
                        :value="shi"
                        @input="updateShi"
                      >
                        <el-option
                          v-for="item in shi1"
                          :key="item.id"
                          :label="item.value"
                          :value="item.id"
                        ></el-option>
                      </el-select>
                      <el-select
                        @change="$store.commit('choseBlock',qu)"
                        placeholder="区级地区"
                        :value="qu"
                        @input="updateQu"
                      >
                        <el-option
                          v-for="item in qu1"
                          :key="item.id"
                          :label="item.value"
                          :value="item.id"
                        ></el-option>
                      </el-select>-->
                    </div>

                    <div class="topp">
                      <p>
                        <span>*</span>详细地址
                      </p>
                      <span>请填写详细地址</span>
                    </div>
                    <div class="content">
                      <input type="text" placeholder="请填写详细地址" />
                    </div>
                    <div class="topp">
                      <p>
                        <span>*</span>地址别名
                      </p>
                    </div>
                    <div class="content">
                      <input type="text" />
                    </div>
                  </div>
                  <div class="form3">
                    <div class="left">
                      <input
                        type="checkbox"
                        class="checkbox"
                        :checked="checked1"
                        id="xxxx"
                        @click="orderChecked"
                      />
                      <label for="xxxx" class="text">
                        <span>√</span>
                      </label>
                      <span>设为默认地址</span>
                    </div>
                    <div class="right">
                      <button class="restore">保存地址</button>
                    </div>
                  </div>
                </div>
              </el-form>

              <div slot="footer" class="dialog-footer"></div>
            </el-dialog>
          </div>
        </div>
        <ul class="address-list">
          <li v-for="addres in address" :key="addres.id" :class="addres.checked?'active':''">
            <span v-if="addres.checked">√</span>
            <div class="left" @click="$store.commit('changeChecked1',{id:addres.id})">
              <span class="name">{{addres.name}}</span>
              <span class="dizhi">{{addres.text}}</span>
              <span class="phone">{{addres.phoneNum}}</span>
            </div>
            <div class="right">
              <div class="left">
                <button
                  v-if="!addres.isDefault"
                  @click="$store.commit('changeDefault',{id:addres.id})"
                  :class="!addres.isDefault?'':'active'"
                >设为默认</button>
                <button
                  v-else
                  @click="addres.isDefault=false"
                  :class="!addres.isDefault?'':'active'"
                >默认</button>
              </div>
              <div class="center">
                <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
              </div>
              <div class="right">
                <div class="delB">
                  <button @click="$store.commit('tooltipShow1',{id:addres.id})">删除</button>
                  <div class="tooltip" v-if="addres.tooltip">
                    <span @click="$store.commit('del1',{id:addres.id})">确认删除</span>
                    <span @click="addres.tooltip=false">不删除</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="main8">
      <div class="inner">
        <div class="title">
          <h4>商品信息</h4>
          <span>返回购物车修改</span>
        </div>
        <div class="list1">
          <tr
            v-for="product in newProducts"
            :key="product.id"
            class="products-list"
            :class="product.inventory<1?'disabled':''"
          >
            <td>
              <!-- <input
                type="checkbox"
                class="checkbox"
                :id="product.id"
                :disabled="product.inventory<1"
                :checked="product.checked"
                @click="changeChecked(product.id)"
              />
              <label :for="product.id" class="text">
                <span>√</span>
              </label>-->
            </td>
            <td>
              <div class="goods">
                <img src="../assets/images/home_09.jpg" alt />
                <img src="../assets/images/shopping-tip_03.jpg" alt v-if="product.inventory<1" />
                <!-- <img src="../assets/images/shopping-tip_06.jpg" alt /> -->
                <div class="right">
                  <h4>{{product.title}}</h4>
                </div>
              </div>
            </td>
            <td>
              <span>款式：{{product.style}}</span>
            </td>
            <td>
              <span>型号：{{product.size}}</span>
            </td>
            <td>
              <span>￥{{product.price}}</span>
            </td>
            <td>
              <div class="count">
                <!-- <button @click="$store.commit('add',{id:product.id})">+</button> -->
                <span>x{{product.count}}</span>
                <!-- <button @click="$store.commit('sub',{id:product.id})">-</button> -->
              </div>
            </td>
            <td>
              <!-- <span>{{(product.price*product.count).toFixed(2)}}</span> -->
            </td>
            <td>
              <!-- <div class="delB">
                <button @click="$store.commit('tooltipShow',{id:product.id})">x</button>
                <div class="tooltip" v-if="product.tooltip">
                  <span @click="$store.commit('del',{id:product.id})">确认删除</span>
                  <span @click="product.tooltip=false">不删除</span>
                </div>
              </div>-->
            </td>
          </tr>
        </div>
      </div>
    </div>
    <div class="main9">
      <div class="inner">
        <div class="boxx">
          <div class="box">
            <span>支付方式</span>
            <div
              class="box1"
              @click="$store.commit('changeChecked2')"
              :class="checked2?'active':''"
            >
              <span v-if="checked2">√</span>
              在线支付
            </div>
          </div>
          <div class="box">
            <span>物流方式</span>
            <div
              class="box1"
              @click="$store.commit('changeChecked3')"
              :class="checked3?'active':''"
            >
              <span v-if="checked3">√</span>
              普通快递
            </div>
          </div>
          <div class="box">
            <span>发票信息</span>
            <div
              class="box1"
              @click="$store.commit('changeChecked4')"
              :class="checked4?'active':''"
            >
              <span v-if="checked4">√</span>
              不开发票
            </div>
            <div
              class="box1"
              @click="$store.commit('changeChecked4')"
              :class="!checked4?'active':''"
            >
              <span v-if="!checked4">√</span>
              开发票
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main8">
      <div class="inner">
        <div class="title">
          <h4>备注</h4>
          <span>清算</span>
        </div>
        <div class="content1">
          <div></div>
          <div class="box">
            <div class="left">
              <span>
                <span>{{choseNum}}</span>件商品，总金额：
              </span>
              <span>优惠金额：</span>
              <span>运费：</span>
              <span>应付金额</span>
            </div>
            <div class="right">
              <span>￥{{choseTotal}}</span>
              <span>-￥0.00</span>
              <span>￥0.00</span>
              <span>￥{{choseTotal}}</span>
            </div>
          </div>
        </div>
        <div class="foot">
          <div></div>
          <button @click="submit">提交订单</button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "order",
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      address: state => state.address.address,
      sheng: state => state.options.sheng,
      shi: state => state.options.shi,
      qu: state => state.options.qu,
      shi1: state => state.options.shi1,
      qu1: state => state.options.qu1,
      province: state => state.options.province,
      newProducts: state => state.products.newProducts,
      checked2: state => state.products.checked2,
      checked3: state => state.products.checked3,
      checked4: state => state.products.checked4
    }),
    ...mapGetters(["choseNum", "choseTotal", "newAddress"])
  },
  methods: {
    updateSheng(e) {
      this.$store.commit("updateSheng", e.target.value);
    },
    updateShi(e) {
      this.$store.commit("updateShi", e.target.value);
    },
    updateQu(e) {
      this.$store.commit("updateQu", e.target.value);
    },
    orderChecked() {
      this.checked1 = !this.checked1;
    },
    submit() {
      if (this.checked2 === false) {
        alert("请选择支付方式");
      } else if (this.checked3 === false) {
        alert("请选择物流方式");
      } else if (!this.newAddress) {
        alert("请选择地址");
      } else {
        this.$router.push("/shouyingtai1");
      }
    }
  },
  created() {
    this.$store.commit("getCityData");
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      checked1: false
    };
  }
};
</script>

<style lang="scss">
.foot {
  display: flex;
  margin-top: 20px;
  div {
    flex-grow: 1;
  }
  button {
    width: 220px;
    line-height: 60px;
    font-size: 24px;
    color: #2b2e33;
    background-color: #fdd901;
    border: 0;
  }
}
.main9 .inner {
  background-color: #fff;
  padding: 0 50px;

  .boxx {
    display: flex;
    padding: 30px 0;
    border-bottom: 2px solid #b8beca;
  }
  .box {
    display: flex;
    margin-right: 50px;
    align-items: center;
    span {
      font-size: 18px;
      color: #2b2e33;
      margin-right: 20px;
    }
    .box1 {
      padding: 13px 34px;
      font-size: 14px;
      border: 3px solid #b8beca;
      margin-right: 10px;
      position: relative;
      > span {
        position: absolute;
        left: 0;
        bottom: 0;
        color: #fff;
        text-align: center;
        width: 18px;
        line-height: 18px;
        font-size: 10px;
        background-color: #fdd901;
      }
    }
    .box1.active {
      border: 3px solid #fdd900;
    }
  }
}
.main8 {
  .content1 {
    display: flex;
    div:first-child {
      flex-grow: 1;
    }
    .box {
      display: flex;
      .left {
        text-align: right;
        margin-right: 55px;
      }
      span {
        font-size: 12px;
        line-height: 33px;
        color: #5a5a5c;
        display: flex;
        > span {
          color: red;
        }
      }
      .right {
        text-align: right;
        span:last-child {
          font-size: 20px;
          color: #ef0100;
        }
      }
    }
  }
}
.order tr {
  padding: 20px;
}
.form3 {
  display: flex;
  .left {
    display: flex;
    align-items: center;
    flex-grow: 1;
    span {
    }
  }
  .right {
    flex-shrink: 0;
  }
}
.el-dialog .el-dialog__body .form3 span {
  font-size: 12px;
  color: #2d2e32;
}
.el-dialog .el-dialog__body .form3 button {
  width: 210px;
  border: 0;
  line-height: 52px;
  color: #2d2e32;
  font-size: 20px;
  background-color: #fdd900;
}
.el-dialog {
  input {
    padding: 10px;
    color: #2b2e33;
    line-height: 24px;
    font-size: 14px;
    border: 1px solid #babec9;
    margin-top: 6px;
    margin-bottom: 20px;
  }
  .el-dialog__body {
    p {
      font-size: 12px;
      color: #45464a;
      flex-grow: 1;
      display: flex;
      > span {
      }
    }
    span {
      color: #f40100;
      font-size: 12px;
    }
  }
}
.topp {
  display: flex;
}
.form1 {
  margin: 20px 0;
  display: flex;
  .left {
    margin-right: 8px;
    .topp {
      display: flex;
    }
    input {
      width: 208px;
    }
  }
  .right {
    input {
      width: 432px;
    }
  }
}
.form2 .content {
  input {
    width: 100%;
  }
}
.order {
  background-image: url("../assets/images/main-bg_21.jpg");
  width: 100%;
  user-select: none;
}
.main8 .inner {
  padding: 50px;
  background-color: #fff;
  color: #2b2e33;
  .title {
    display: flex;
    border-bottom: 1px solid #2b2e33;
    h4 {
      flex-grow: 1;
      font-size: 18px;
      margin-bottom: 15px;
      color: #2b2e33;
    }
  }
}
.main7 .inner {
  padding: 50px;
  background-color: #fff;
  color: #2b2e33;
  .title {
    display: flex;
    border-bottom: 1px solid #2b2e33;
    h4 {
      flex-grow: 1;
      font-size: 18px;
      margin-bottom: 15px;
      color: #2b2e33;
    }
    .el-button {
      padding-left: 27px;
      background-image: url("../assets/images/orser_03.jpg");
      background-repeat: no-repeat;
      background-position: 0 12px;
    }
  }
}
span.name {
  background-image: url("../assets/images/orser_07.jpg");
}
span.text {
  background-image: url("../assets/images/orser_11.jpg");
}
span.phone {
  background-image: url("../assets/images/orser_20.jpg");
}
ul.address-list {
  li.active {
    border: 1px solid #fdd901;
  }
  li {
    padding: 20px 24px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    > span {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #fff;
      text-align: center;
      width: 18px;
      line-height: 18px;
      font-size: 10px;
      background-color: #fdd901;
    }
    > .left {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      span {
        font-size: 12px;
        line-height: 20px;
        padding-left: 20px;
        background-position: 0 0;
        background-repeat: no-repeat;
        color: #2b2f32;
      }
    }
    > .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      .left {
        width: 96px;
        margin-right: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        button {
          width: 96px;
          background-color: #fff;
          border: 0;
          font-size: 12px;
          &:focus {
            outline: none;
          }
        }
        button.active {
          width: 96px;
          background-color: #2b2e33;
          border: 0;
          color: #fff;
          line-height: 36px;
          font-size: 12px;
        }
      }
      .center {
        display: flex;
        align-items: center;
        margin-right: 30px;
        .el-button {
          background-image: url("../assets/images/orser_13.jpg");
          background-repeat: no-repeat;
          padding-left: 18px;
          background-position: 0 11px;
        }
      }
      .right .delB {
        position: relative;
        height: 65px;
        button {
          background-color: #fff;
          border: 0;
          background-image: url("../assets/images/orser_15.jpg");
          background-position: 0 0;
          background-repeat: no-repeat;
          padding-left: 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .tooltip {
          top: -10px;
          right: 50px;
          span {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
