new Vue ({
	el: '#app',
	data : {
		films: [
			{
				"id" : 1,
				"name": "Shawshank Redemption",
				"genres": ["drama"],
				"year": 1994,
				"rating": 9.3,
				"director": ["Frank Darabont"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 2,
				"name" : "Matrix",
				"genres": ["action", "sci-fi"],
				"year": 1999,
				"rating": 8.7,
				"director": ["Lana Wachowski", "Lilly Wachowski"],
				"img" : "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 3,
				"name": "Schindler's list",
				"genres": ["drama", "history", "biography"],
				"year": 1993,
				"rating": 8.9,
				"director": ["Steven Spielberg"],
				"img" : "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 4,
				"name": "Pulp Fiction",
				"genres": ["drama", "crime"],
				"year": 1994,
				"rating": 8.9,
				"director": ["Quentin Tarantino"],
				"img" : "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg"
			},
			{
				"id" : 5,
				"name": "The Godfather",
				"genres": ["drama", "crime"],
				"year": 1972,
				"rating": 9.2,
				"director": ["Francis Ford Coppola"],
				"img" : "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"
			},
			{
				"id" : 6,
				"name": "Forrest Gump",
				"genres": ["drama", "romance"],
				"year": 1994,
				"rating": 8.8,
				"director": ["Robert Zemeckis"],
				"img" : "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg"
			},
			{
				"id" : 7,
				"name": "The Silence of the lambs",
				"genres": ["drama", "crime", "thriller"],
				"year": 1991,
				"rating": 8.6,
				"director": ["Jonathan Demme"],
				"img" : "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 8,
				"name": "Fight Club",
				"genres": ["drama"],
				"year": 1999,
				"rating": 8.9,
				"director": ["David Fincher"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 9,
				"name": "One flew over the Cuckoo's nest",
				"genres": ["drama"],
				"year": 1975,
				"rating": 8.7,
				"director": ["Milos Forman"],
				"img" : "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 10,
				"name": "The Usual Suspects",
				"genres": ["thriller", "crime", "mystery"],
				"year": 1995,
				"rating": 8.6,
				"director": ["Bryan Singer"],
				"img" : "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 11,
				"name": "Spirited away",
				"genres": ["animation", "adventure", "family"],
				"year": 2001,
				"rating": 8.6,
				"director": ["Hayao Miyazaki", "Kirk Wise"],
				"img" : "https://m.media-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 12,
				"name": "Interstellar",
				"genres": ["drama", "adventure", "sci-fi"],
				"year": 2014,
				"rating": 8.6,
				"director": ["Christopher Nolan"],
				"img" : "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 13,
				"name": "American history X",
				"genres": ["drama", "crime"],
				"year": 1998,
				"rating": 8.5,
				"director": ["Tony Kaye"],
				"img" : "https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 14,
				"name": "Departed",
				"genres": ["drama", "crime", "thriller"],
				"year": 2006,
				"rating": 8.5,
				"director": ["Martin Scorsese"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 15,
				"name": "Terminator 2: Judgement Day",
				"genres": ["action", "sci-fi"],
				"year": 1991,
				"rating": 8.5,
				"director": ["James Cameron"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 16,
				"name": "Gladiator",
				"genres": ["drama", "action", "adventure"],
				"year": 2000,
				"rating": 8.5,
				"director": ["Ridley Scott"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 17,
				"name": "The Prestige",
				"genres": ["drama", "mystery", "sci-fi"],
				"year": 2006,
				"rating": 8.5,
				"director": ["Christopher Nolan"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 18,
				"name": "Apocalypse now",
				"genres": ["drama", "war"],
				"year": 1979,
				"rating": 8.5,
				"director": ["Francis Ford Coppola"],
				"img" : "https://m.media-amazon.com/images/M/MV5BZTNkZmU0ZWQtZjQzMy00YTNmLWFmN2MtZGNkMmU1OThmMGYwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 19,
				"name": "The Shining",
				"genres": ["drama", "horror"],
				"year": 1980,
				"rating": 8.4,
				"director": ["Stanley Kubrick"],
				"img" : "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 20,
				"name": "Django unchained",
				"genres": ["drama", "western"],
				"year": 2012,
				"rating": 8.4,
				"director": ["Quentin Tarantino"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 21,
				"name": "Princess Mononoke",
				"genres": ["animation", "adventure", "fantasy"],
				"year": 1997,
				"rating": 8.4,
				"director": ["Hayao Miyazaki"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR4,0,182,268_AL_.jpg"
			},
			{
				"id" : 22,
				"name": "American beauty",
				"genres": ["drama"],
				"year": 1999,
				"rating": 8.4,
				"director": ["Sam Mendes"],
				"img" : "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 23,
				"name": "Reservoir Dogs",
				"genres": ["drama", "crime", "thriller"],
				"year": 1992,
				"rating": 8.3,
				"director": ["Quentin Tarantino"],
				"img" : "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 24,
				"name": "Braveheart",
				"genres": ["drama", "history", "biography"],
				"year": 1995,
				"rating": 8.4,
				"director": ["Mel Gibson"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
			},
			{
				"id" : 25,
				"name": "Snatch",
				"genres": ["comedy", "history", "crime"],
				"year": 2000,
				"rating": 8.3,
				"director": ["Guy Ritchie"],
				"img" : "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY268_CR0,0,182,268_AL_.jpg"
			}
		],
		// films: [],
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
			let arr = this.films.map(m => m.genres);
			console.log(arr);
			let bunch = [];
			arr.forEach(d => bunch.push(...d));
			console.log(bunch);
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
			this.films = list;
		}).then(
			this.loadGenres()
		);
		this.checkStorage();
	}
});