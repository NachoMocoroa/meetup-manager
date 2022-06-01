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
