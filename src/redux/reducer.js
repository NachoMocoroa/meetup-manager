import MEETUP from "./constants";

const initalState = {
    meetupData: [],
    meetupFavorite: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case MEETUP.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case MEETUP.LOAD_SUCCESS:
            return {
                ...state,
                meetupData: action.meetupData,
                isLoading: false,
            };
        case MEETUP.SAVE_MEETUP: {
            const { content } = action.payload;
            content.id = `m${state.meetupData.length + 1}`;
            return {
                ...state,
                meetupData: [...state.meetupData, content],
            };
        }
        case MEETUP.GET_FAVORITE:
            return {
                ...state,
                meetupFavorite: action.meetupFavorite,
            };
        case MEETUP.ADD_FAVORITE: {
            const { content } = action.payload;
            return {
                ...state,
                meetupFavorite: [...state.meetupFavorite, content],
            };
        }
        case MEETUP.REMOVE_FAVORITE: {
            const { content } = action.payload;
            const favorites = state.meetupFavorite.filter(({ id }) => id !== content.id);
            return {
                ...state,
                meetupFavorite: favorites,
            };
        }
        default:
            return state;
    }
};

export default reducer;
