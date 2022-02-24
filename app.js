//console.log('hello, vue')

const app = Vue.createApp({
  data(){
  return {
    url:"http://www.thenetninja.co.uk",
    showBooks: true,
    books:[
      { title: 'name of the wind', author: 'patrick roth', img: 'asset/1.jpg', isFav: true },
      { title: 'the way of the kings', author: 'patrick sander', img: 'asset/2.jpg', isFav: false },
      ]
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    toggleFav(book){
      book.isFav = !book.isFav
    }
  },
    computed: {
      filteredBooks(){
        return this.books.filter((book) => book.isFav)
      }
    }
  },
})

app.mount('app');
