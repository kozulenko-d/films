new Vue ({
	el: '#app',
	data : {
		films: [],
		filmId: 0,
		genres: [],
		filterGenres: [],
		popularMoviesOnly: true,
		searchMovie: "",
		singleFilmObj: null,
		portion: 0,
		favs: null,
		showFavs: false
	},
	methods: {
		browseFilms(a) {
			if (a === 'browse') {
				this.popularMoviesOnly = !this.popularMoviesOnly;
			} else if (a === 'main') {
				this.popularMoviesOnly = true;
			}
			this.filterGenres = [];
			this.filmId = 0;
			this.showFavs = false;
			this.singleFilmObj = null;
			this.portion = 0;
			this.searchMovie = '';
		},
		showFavsFilms() {
			this.portion = 0;
			this.popularMoviesOnly = false;
			this.filmId = 0;
			this.showFavs = true;
			this.searchMovie = '';
			this.filterGenres = [];
		},
		pageArrow(side) {
			if (side === 'left') {
				if (this.portion > 0) this.portion -= 6;
			}
			if (side === 'right') {
				let lng = Math.floor(this.filteredMovies.length / 6);
				if (lng * 6 === this.portion) return;
				this.portion +=6;
			}
		},
		singleMovie(id) {
			this.filmId = id;
			this.singleFilmObj = this.films.filter(f => (f.id === id))[0];
			this.searchMovie = '';
			this.portion = 0;
			this.showFavs = false;
		},
		addFav(id) {
			this.favs.push(id);
			localStorage.setItem('favFilms', [...this.favs]);
		},
		removeFav(id) {
			this.favs = this.favs.filter(f => (f !== id));
			localStorage.setItem('favFilms', [...this.favs]);
		},
		pickGenre(g) {
			this.searchMovie = '';
			this.portion = 0;
			this.popularMoviesOnly = false;
			this.filmId = 0;
			if (this.filterGenres.includes(g)) {
				this.filterGenres = this.filterGenres.filter(f => (f !== g));
			} else {
				this.filterGenres.push(g);
			}
		},
		loadGenres() {
			console.log(this.films);
			let arr = this.films.map(m => m.genres);
			let bunch = [];
			console.log(arr);
			console.log(bunch);
			arr.forEach(d => bunch.push(...d));
			this.genres = [...new Set(bunch)];
		},
		checkStorage() {
			if (!localStorage.getItem('favFilms')){
				localStorage.setItem('favFilms', '[]');
				this.favs = [];
			} else {
				let d = localStorage.getItem('favFilms').split(',');
				this.favs = d.map(n => +n);
			}

		}
	},
	computed: {
		filteredMovies() {
			if (!this.films) return;
			let filtered = this.films;

			if (this.showFavs) {
				filtered = filtered.filter(m => this.favs.includes(m.id));
			}

			if (this.filterGenres.length) {
				let arr = [];
				this.filterGenres.forEach(g => {
					arr = arr.concat([...filtered.filter(f => f.genres.includes(g))]);
				});
				filtered = [...new Set(arr)];
			}
			return filtered;
		},
		sortedMovies() {
			let sorted = this.filteredMovies.sort((f, g) => {
				if (f.rating < g.rating) return 1;
				if (f.rating > g.rating) return -1;
				return 0;
			});

			let popular = [];
			for	(let i = 0; i < 6; i++) {
				if (sorted[i]) popular.push(sorted[i]);
			}

			let pagged = [];
			for	(let i = 0; i < 6; i++) {
				if (sorted[i + this.portion]) pagged.push(sorted[i + this.portion]);
			}

			return this.popularMoviesOnly ? popular : pagged;
		},
		relativeFilms() {
			if (this.filmId === 0) return;

			let arr = [];
			let relFilms = [];

			this.singleFilmObj.genres.forEach(g => {
				arr = arr.concat([...this.sortedMovies.filter(f => {
					return (f.genres.includes(g) && (f.id !== this.filmId));
				})]);
			});
			relFilms = [...new Set(arr)];
			return relFilms.length ? relFilms.splice(0, 5) : null;
		},
		seekName() {
			if (!this.searchMovie) return [];
			return this.films.filter(n => n.name.toLowerCase().includes(this.searchMovie.toLowerCase()));
		}
	},
	beforeMount() {
		fetch('films.json').then(res => {
			return res.json()
		}).then(list => {
			console.log(this.films);
			this.films = list;
			console.log(this.films);
			this.loadGenres();
		});
		this.checkStorage();
	}
});