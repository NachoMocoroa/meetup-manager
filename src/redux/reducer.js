import MEETUP from "./constants";

const initalState = {
    meetupData: [],
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
        default:
            return state;
    }
};

export default reducer;
