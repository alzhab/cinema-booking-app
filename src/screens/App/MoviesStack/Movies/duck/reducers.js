const initialState = {
  moviesList: [
    {
      id: "1",
      image: require("assets/images/poster.jpg"),
      rating: 8.9,
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      aliquam provident amet, vero dolorum sequi!`,
      tags: ["action", "crime", "thriller"]
    },
    {
      id: "2",
      image: require("assets/images/poster.jpg"),
      rating: 8.9,
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      aliquam provident amet, vero dolorum sequi!`,
      tags: ["action", "crime", "thriller"]
    },
    {
      id: "3",
      image: require("assets/images/poster.jpg"),
      rating: 8.9,
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      aliquam provident amet, vero dolorum sequi!`,
      tags: ["action", "crime", "thriller"]
    }
  ],
  thrailersList: [{}, {}, {}]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
