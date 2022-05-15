import Vue from 'vue'
import {createStore} from 'vuex'

const store = createStore({
	
	actions:{
		async fetchSales(ctx){
			const sales = this.state.sales;
			ctx.commit("updateSales", sales);
		},

	},

	mutations:{
		updateSales(state,sales){
			state.sales = sales;
		},
		submiteM(state) {
			state.counts --; 
		},
		submiteP(state) {
			state.counts ++; 
		},
		removeAll(state){
			state.sales = [];
			state.counts = 0; 
		}

	},

	state:{
		PriceAll: 0,
		PriceWithOut:0,
		counts: 4,
		install: 'Нет',
		sales: [
      {
        header: "Вытяжное устройство G2H",
        desc: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        art: "Артикул: G2H1065",
        count: 1,
        price: 12644,
        img: require('@/assets/img/Rectangle 72-1.png')
      },
      {
        header: "Вытяжное устройство BXC",
        desc: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        art: "Артикул: G2H1065",
        count: 2,
        price: 12644,
        img: require('@/assets/img/Rectangle 72.png')
      },
      {
        header: "Вытяжное устройство GHN",
        desc: "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        art: "Артикул: G2H1065",
        count: 1,
        price: 12644,
        img: require('@/assets/img/Rectangle 72-2.png')
      },
      ],
	},
	getters: {
		allSales(state){
			return state.sales
		},
		allCount(state){
			return state.counts	
		},
		allPrice(state){
			state.PriceWithOut = 0;
			state.PriceAll = 0;
			state.sales.forEach( (sale) => {
				state.PriceAll += sale.price * sale.count;
				state.PriceWithOut += sale.price * sale.count;
			});
			if (state.install === "Да") {
				state.PriceAll += (state.PriceAll/10);  
			}
			return state.PriceAll;
		},

	},
	modules:{

	}
})

export default store;