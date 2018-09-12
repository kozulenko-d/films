new Vue ({
	el: '#app',
	data : {
		adminPage: true,
		clientPage: false,
		cartPage: false,
		cart: [],
		goods: [
			{
				name: 'apple',
				code: '1',
				description: 'It\'s apple, what more do you want?',
				price: 5,
				available: 0,
				image: 'https://cdn0.iconfinder.com/data/icons/fruits/512/Apple.png'
			},
			{
				name: 'cherry',
				code: '2',
				description: 'Sour berries. You\'ll gonna love\'em',
				price: 7,
				available: 15,
				image: 'https://cdn0.iconfinder.com/data/icons/fruits/512/Cherry.png'
			},
			{
				name: 'tomato',
				code: '3',
				description: 'Some kind of fruit, actually, too',
				price: 12,
				available: 8,
				image: 'https://cdn0.iconfinder.com/data/icons/fruits/512/Tomato.png'
			},
			{
				name: 'peach',
				code: '4',
				description: 'Oh, that\'s tasty one!',
				price: 25,
				available: 11,
				image: 'https://cdn0.iconfinder.com/data/icons/fruits/512/Peach.png'
			}
		],
		popup: false,
		newGood: {},
		availableNew: false,
		goodAction: '',
		editingGood: null,
		orders: [],
		showOrders: false,
		orderField: false,
		orderName: '',
		orderPhone: '',
		orderText: '',
		orderAddress: '',
		sortDir: true,
		notUnique: false
	},
	methods: {
		workGoods(act) {
			this.popup = true;
			this.goodAction = act;
		},


		editOne() {
			this.goods[this.editingGood] = this.newGood;
			this.newGood.available = +this.newGood.available;
			this.newGood.price = +this.newGood.price;
			this.newGood = {};
			this.popup = false;
			this.editingGood = null;
		},
		editGood(g, i) {
			this.workGoods('edit');
			this.editingGood = i;
			this.newGood = this.goods[i];
			this.popup = true;
		},
		deleteGood(i) {
			this.goods.splice(i,1);
		},
		addGoodToCart(g, n) {
			if (this.cart.some(f => f.code === g.code)) {
				this.cart.forEach(e => {
					if (e.code === g.code) {
					e.quantity += n;
					e.available -= n;
				}
			});
			} else {
				this.cart.push({
					name: g.name,
					quantity: n,
					price: g.price,
					code: g.code,
					image: g.image,
					available: (g.available - n)
				});
			}
			this.goods.forEach(e => {
				if (e.code === g.code) e.available = e.available - n;
		});
		},
		handleCartGoods(c, i, operation) {
			if (operation === 'add') {
				c.available -= 1;
				c.quantity += 1;
				this.goods.forEach(e => {
					if (e.code === c.code) e.available--;
			});
			} else if (operation === 'subtract') {
				c.available += 1;
				c.quantity -= 1;
				this.goods.forEach(e => {
					if (e.code === c.code) e.available++;
			});
			} else if (operation === 'remove') {
				this.goods.forEach(e => {
					if (e.code === c.code) e.available += c.quantity;
			});
				this.cart.splice(i, 1);
			}
		},
		makeOrder() {
			this.orders.push({
				text: this.orderText,
				name: this.orderName,
				address: this.orderAddress,
				phone: this.orderPhone,
				goods: this.cart,
				totalPrice: this.totalPrice
			});
			this.cart = [];
			this.orderPhone = '';
			this.orderAddress = '';
			this.orderName = '';
			this.orderText = '';
			this.orderField = false;
			this.showOrders = false;
		},
		sortMe(arr, k, boo = false) {
			if (boo === true) {
				arr.sort(function(a,b) {
					return a[k] < b[k]
				});
				return arr
			} else {
				arr.sort(function(a,b) {
					return a[k] > b[k]
				});
				return arr
			}
		}
	},
	computed: {
		totalPrice() {
			return this.cart.reduce((sum,cur) => {
				return sum + (cur.quantity * cur.price);
		}, 0);
		}
	}
});