export interface Movie {
  id: number
  title: string
  genre: string
  rating: number
  type: string
  image: string
  lang: string
  plot: string
}

export const MOVIE_DATA: Movie[] = [
  {
    id: 1,
    title: "Avatar",
    genre: "Action, Adventure, Fantasy",
    rating: 7.9,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English, Spanish",
    plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  },
  {
    id: 3,
    title: "300",
    genre: "Action, Drama, Fantasy",
    rating: 7.7,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
    lang: "English",
    plot: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
  },
  {
    id: 4,
    title: "The Avengers",
    genre: "Action, Sci-Fi, Thriller",
    rating: 8.1,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    lang: "English, Russian",
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
  },
  {
    id: 5,
    title: "The Wolf of Wall Street",
    genre: "Biography, Comedy, Crime",
    rating: 8.2,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English, French",
    plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
  },
  {
    id: 6,
    title: "Interstellar",
    genre: "Adventure, Drama, Sci-Fi",
    rating: 8.6,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 7,
    title: "Game of Thrones",
    genre: "Adventure, Drama, Fantasy",
    rating: 9.5,
    type: "series",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    lang: "English",
    plot: "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
  },
  {
    id: 8,
    title: "Vikings",
    genre: "Action, Drama, History",
    rating: 8.6,
    type: "series",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
    lang: "English, Old English, Norse, Old, Latin",
    plot: "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
  },
  {
    id: 9,
    title: "Gotham",
    genre: "Action, Crime, Drama",
    rating: 8,
    type: "series",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
    lang: "English",
    plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
  },
  {
    id: 11,
    title: "Power",
    genre: "Crime, Drama",
    rating: 8,
    type: "series",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
    lang: "English",
    plot: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
  },
  {
    id: 12,
    title: "Narcos",
    genre: "Biography, Crime, Drama",
    rating: 8.9,
    type: "series",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    lang: "English, Spanish",
    plot: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
  },
  {
    id: 19,
    title: "Breaking Bad",
    genre: "Crime, Drama, Thriller",
    rating: 9.5,
    type: "series",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
    lang: "English, Spanish",
    plot: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
  },
  {
    id: 20,
    title: "Doctor Strange",
    genre: "Action, Adventure, Fantasy",
    rating: 7.3,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
    lang: "English",
    plot: "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
  },
  {
    id: 21,
    title: "Rogue One: A Star Wars Story",
    genre: "Action, Adventure, Sci-Fi",
    rating: 8.1,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
    lang: "English",
    plot: "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
  },
  {
    id: 22,
    title: "Assassin's Creed",
    genre: "Action, Adventure, Fantasy",
    rating: 9.4,
    type: "movie",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
    lang: "English",
    plot: "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
  },
  {
    id: 23,
    title: "Luke Cage",
    genre: "Action, Crime, Drama",
    rating: 6.9,
    type: "series",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
    lang: "English",
    plot: "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
  },
]
