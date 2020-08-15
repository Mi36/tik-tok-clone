const INITIAL_STATE = {
  playing: true,
  videos: [
    {
      id: 0,
      video: require("../assets/videos/first.mp4"),
      comments: [],
    },
    {
      id: 1,
      video: require("../assets/videos/second.mp4"),
      comments: [],
    },
    {
      id: 2,
      video: require("../assets/videos/third.mp4"),
      comments: [],
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id === action.payload.itemid) {
            return {
              ...video,
              comments: [...video.comments, action.payload.text].reverse(),
            };
          }
          return video;
        }),
      };
    case "PLAYING":
      return {
        ...state,
        playing: action.payload.playing,
      };
    default:
      return state;
  }
};
