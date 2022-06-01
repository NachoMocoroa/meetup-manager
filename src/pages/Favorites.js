import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/action";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {

  const { meetupFavorite } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFavoriteMeetup = (data) => {
    dispatch(removeFavorite(data));
  };

  return (
    <section>
      <h1>Favorites Page</h1>
      {meetupFavorite.length === 0 ? (
        <p>NO FAVORITES YET</p>
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
