const initialState = {
  movies: [
    {
      id: "1",
      image: require("assets/images/poster.jpg"),
      title: `Avengers`,
      tags: ["action", "crime", "thriller"],
      rating: 8.9,
      director: "Dean DeBlois",
      stars: ["Jay Brauchel", "America", "Austria"]
    },
    {
      id: "2",
      image: require("assets/images/poster.jpg"),
      title: `Black Pantera`,
      tags: ["action", "crime", "thriller"],
      rating: 8.9,
      director: "Dean DeBlois",
      stars: ["Jay Brauchel", "America", "Austria"]
    },
    {
      id: "3",
      image: require("assets/images/poster.jpg"),
      title: `From Snow`,
      tags: ["action", "crime", "thriller"],
      rating: 8.9,
      director: "Dean DeBlois",
      stars: ["Jay Brauchel", "America", "Austria"]
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
