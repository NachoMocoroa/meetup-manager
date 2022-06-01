import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/action";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { NAVIGATION, TEXTS } from "../utils/constants";

export default function FavoritesPage() {

  const { meetupFavorite } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFavoriteMeetup = (data) => {
    dispatch(removeFavorite(data));
  };

  return (
    <section>
      <h1>{NAVIGATION.FAVORITES_PAGE.text}</h1>
      {meetupFavorite.length === 0 ? (
        <p>{TEXTS.NO_FAVORITES_YET.text}</p>
      ) : (
        <ul className={classes.list}>
          {meetupFavorite.map((item, index) => (
            <MeetupItem 
              key={`meet-${index}`}
              item={item} 
              action="remove" 
              disabled={false}
              handleClick={() =>
                removeFavoriteMeetup(item)
              }
            />
          ))}
        </ul>
      )}
    </section>
  );
}
