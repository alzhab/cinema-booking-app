const initialState = {
  infoList: [
    {
      id: "1",
      image: require("assets/images/cinema.png"),
      title: "enjoy your movie",
      text:
        "Use filler text thot Aos been edited for lenqth on,d formot to m,atch the chororteristics of reol content os closely"
    },
    {
      id: "2",
      image: require("assets/images/cinema2.png"),
      title: "there always room for a transport people to another world",
      button: {
        title: "Create An Account"
      }
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
