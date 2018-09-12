new Vue ({
	el: '#app',
	data : {
		adminPage: true,
		cart: [],
		goods: [],
		popup: false,
		newGood: {},
		availableNew: false,
		goodAction: '',
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