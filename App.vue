<template>
  <div id="App">
    <header>
      <div class="_container">
      <div class="menu">
        <div class="menu-busket">
          <div class="menu-busket__img">
            <img src="./assets/img/busket.png">
          </div>
          <div class="menu-busket__text">
            <h4 class="menu-busket__header">Ваша корзина</h4>
            <span class="menu-busket__count">{{allCount}} товара</span>
            <span class="menu-busket__price">{{allPrice}} ₽</span>
          </div>
        </div>
      </div>
        <div class="nav">
          <div class="offer">
            <h1 class="offer__header">Ваша корзина</h1>  
            <span class="offer__header-text">{{allCount}} товара</span>
          </div>
          <span class="clear-busket" @click = "removeAll">Очистить корзину</span>
          
        </div>
        </div>
    </header>
    <div class="_container">
      <div class="busket">
        <div class="busket-items">
          <div class="busket-items__item item" v-for = "(sale, index) in allSales" :key = "sale.id">
            <img class="item__img" :src="sale.img" alt="">
            <div class="item-info">
              <h3 class="item-info__header">{{sale.header}}</h3>
              <p class="item-info__text">{{sale.desc}}</p>
              <span class="item-info__art">{{sale.art}}</span>
            </div>
            <div class="counter">
              <span class="counter__do" @click = "if(sale.count > 0){ submiteM(); sale.count--}">-</span><div class="counter__do counter__do_number">{{sale.count}}</div><span class="counter__do" @click = "submiteP(); sale.count++">+</span>
            </div>
            <div class="item__price">
              {{sale.price * sale.count}} ₽
            </div>
            <div class="item__remove" @click = "removeItem(index)">
              <img class="item-remove" src="./assets/img/cherch.png" alt="">
            </div>
          </div>
          <div class="install">
            <input class="install__chekbox" type="checkbox" @change = "ChangeInstall">
            <img class="install__img" src="./assets/img/Unknown-5.png" alt="">
            <div class="install-text">
              <h5 class="install-text__head">Установка</h5>
              <p class="install-text__desctiption">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
            </div>
          </div>
        </div>
        <div class="busket-chek">
          <h3 class="busket-chek__header">Итого</h3>
          <div class="busket-chek__items">
            <div class="chek-item">
              <div class="chek-item__info">
                Сумма заказа
              </div>
              <div class="chek-item__info">
                {{this.$store.state.PriceWithOut}} ₽
              </div>
            </div>
            <div class="chek-item">
              <div class="chek-item__info">
                Количество
              </div>
              <div class="chek-item__info">
                {{allCount}}
              </div>
            </div>
            <div class="chek-item">
              <div class="chek-item__info">
                Установка
              </div>
              <div class="chek-item__info">
                {{this.$store.state.install}}
              </div>
            </div>
          </div>
          <div class="busket-chek__sum chek-sum">
            <div class="chek-sum__head">Стоимость товаров</div>
            <div class="chek-sum__number">{{allPrice}} ₽</div>
          </div> 
          <div class="chek-buttons">
            <a class="btn" >Оформить заказ</a>
            <a class="btn-active btn">Купить в 1 клик</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(['allSales', 'allCount', "allPrice"]),
  methods: {
    ...mapActions(['fetchSales']),
    ...mapMutations(['submiteM', 'submiteP', 'removeAll']),

    ChangeInstall(){
      if (this.$store.state.install == "Да") {
        this.$store.state.install = "Нет"
        return "Нет"
      }else {
        this.$store.state.install = "Да";
        return "Да"
      }
    },

    removeItem(id){
      this.$store.state.counts -= this.$store.state.sales[id].count

      this.$store.state.sales.splice(id, 1);
    }
  },
    async mounted(){
    this.fetchSales();
  },
}
</script>

<style>
#app {
  font-family: 'Lato', Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.menu-busket {
  display: flex;
  align-items: center;
  text-align: left;
  width: 142px;
  height: 51px;
}
.menu-busket__img {
  margin-right: 10px;
}
.menu-busket__text {
  display: flex;
  flex-direction: column;
}

.menu-busket__header {
  font-weight: 400;
  font-size: 14px;
  color: #1F2432;
  margin-bottom: 2px;
}
.menu-busket__count {
  font-weight: 400;
  font-size: 12px;
  color: #797B86;

}
.menu-busket__price {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #1F2432;
  margin-top: 3px;
}



.nav{
  display: flex;
  justify-content: space-between;
  width: 700px;
  align-items: baseline;

}
.offer{
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.offer__header {
  font-weight: 700;
  font-size: 44px;
  line-height: 120.52%;
  color: #1F2432;
  margin-right: 22px;

}
.offer__header-text {
  font-weight: 400;
  font-size: 18px;
  color: #797B86;
  margin-top: 28px;
}
.clear-busket {
  font-weight: 400;
  font-size: 14px;
  text-decoration-line: underline;
  color: #797B86;
  cursor: pointer;
}
._container {
  max-width: 1200px;
  margin: 0 auto;
}
.busket {
  display: flex;
  justify-content: space-between;
}
.busket-items {
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
}
.busket-items__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 29px;
  position: relative;
}
.busket-items__item:after{
  content: "";
  width: 100%;
  height: 1px;
  background: #C4C4C4;
  position: absolute;
  bottom: -23px;
}
.item__img {
  width: 100px;
  height: 100px;
}
.item-info {
  max-width: 263px;
}
.item-info__header {
  font-weight: 600;
  font-size: 16px;
  color: #1F2432;


}
.item-info__text {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #2C3242;
}
.item-info__art {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797B86;
}
.counter {
  width: 102px;
  display: flex;
}
.counter__do {
  padding: 10px 12px;
  background-color: #fafafa;
  text-align: center;
  margin: 0 2px;
  cursor: pointer;
}
.counter__do_number {
  cursor: context-menu;
}
.item__price {
  width: 100px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  color: #1F2432;
}
.install {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 102px;
  background: #F6F8FA;
  border-radius: 5px;
  align-items: center;
}
.install__img{
  width: 30px;
  height: 30px;
}
.install-text {
  max-width: 522px;
  text-align: left;
}
.install-text__head {
  margin-bottom: 0px;
  font-weight: 600;
  font-size: 16px;
  color: #1F2432;
}
.install-text__desctiption {
  margin-top: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797B86;
}
.install__chekbox{
  border: 1px solid #797B86;
  box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  height: 20px;
  width: 20px;
  cursor: pointer;
}
.busket-chek {
  width: 425px;
  height: max-content;
  background: #F6F8FA;
  border-radius: 5px;
  padding:35px 30px 30px 30px;
  box-sizing: border-box;
}
.busket-chek__header {
  font-weight: 600;
  font-size: 24px;
  color: #1F2432;
  margin-top: 0;
  text-align: left;  
  margin-bottom: 31px;

}
.busket-chek__items {
  display: flex;
  flex-direction: column;
}
.chek-item {
  display: flex;
  justify-content: space-between;
  color: #1F2432;
  font-size: 16px;
  margin-bottom: 18px;
}
.chek-item__info {
  font-weight: 500;
}
.busket-chek__sum {
  font-weight: 400;
}
.chek-sum {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 25px;
}

.chek-sum:before{
  content: '';
  display: block;
  background: #AEB0B6;
  width: 365px;
  z-index: 10;
  height: 1px;
  position: absolute;
  top: -16px;
  
}

.chek-sum__head {
  font-weight: 600;
  font-size: 18px;
}
.chek-sum__number {
  letter-spacing: 0.005em;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 26px;
}
.chek-buttons {
  display: flex;
  flex-direction:column;
  width: 365px;
  margin: 0 auto;
}
.btn {
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  background: #0069B4;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 14px 0;
  text-decoration: none;
  margin-bottom: 12px;
}
.btn-active {
  font-family: 'Lato';
  font-weight: 600;
  font-size: 18px;
  background-color: white;
  color: #0069B4;
}
.item-remove{
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 10px;
}
</style>
