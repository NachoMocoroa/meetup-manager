import axios from "axios";
import MEETUP from "./constants";

export const requestMeetup = (data) => async (dispatch) => {
    dispatch({
        type: MEETUP.LOAD,
    });
    try {
        const json = await axios.get(data);
        dispatch({
            type: MEETUP.LOAD_SUCCESS,
            meetupData: json.data,
            isError: false,
        });
    } catch (e) {
        dispatch({
            type: MEETUP.LOAD_SUCCESS,
            meetupData: [],
            isError: true,
        });
    }
};

export const addFavorite = content => ({
    type: MEETUP.ADD_FAVORITE,
    payload: {
        content
    }
});

export const removeFavorite = content => ({
    type: MEETUP.REMOVE_FAVORITE,
    payload: {
        content
    }
});