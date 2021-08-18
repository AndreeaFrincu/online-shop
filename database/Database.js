const products = [
  {
    id: 1,
    title: "book1",
    author: "auth1",
    price: 27,
    genres: [
      {
        id: 1,
        genre: "Historical Fiction"
      },
      {
        id: 2,
        genre: "Comedy"
      },
      {
        id: 3,
        genre: "Mystery"
      }
    ]
  },
  {
    id: 2,
    title: "book2",
    author: "auth2",
    price: 15,
    genres: [
      {
        id: 3,
        genre: "Mystery"
      },
      {
        id: 4,
        genre: "Supernatural"
      },
      {
        id: 5,
        genre: "Fantasy"
      }
    ]
  },
  {
    id: 3,
    title: "book3",
    author: "auth3",
    price: 10,
    genres: [
      {
        id: 5,
        genre: "Fantasy"
      },
      {
        id: 6,
        genre: "Science Fiction"
      },
      {
        id: 7,
        genre: "Adventure"
      }
    ]
  },
  {
    id: 4,
    title: "book4",
    author: "auth4",
    price: 50,
    genres: [
      {
        id: 7,
        genre: "Adventure"
      },
      {
        id: 8,
        genre: "Dystopian"
      },
      {
        id: 9,
        genre: "History"
      }
    ]
  },
  {
    id: 5,
    title: "book5",
    author: "auth5",
    price: 35,
    genres: [
      {
        id: 9,
        genre: "History"
      },
      {
        id: 10,
        genre: "Thriller"
      },
      {
        id: 1,
        genre: "Historical Fiction"
      }
    ]
  }
]

const genres = [
  {
    id: 1,
    genre: "Historical Fiction"
  },
  {
    id: 2,
    genre: "Comedy"
  },
  {
    id: 3,
    genre: "Mystery"
  },
  {
    id: 4,
    genre: "Supernatural"
  },
  {
    id: 5,
    genre: "Fantasy"
  },
  {
    id: 6,
    genre: "Science Fiction"
  },
  {
    id: 7,
    genre: "Adventure"
  },
  {
    id: 8,
    genre: "Dystopian"
  },
  {
    id: 9,
    genre: "History"
  },
  {
    id: 10,
    genre: "Thriller"
  },
]

export default {
  products: products,
  genres: genres
}
