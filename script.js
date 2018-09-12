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
	},
	beforeMount() {
		console.log(2);
		let promise = fetch('./films.json');
		promise.then(resp => {
			console.log(resp.data);
		})
	}
});