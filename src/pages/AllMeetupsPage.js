import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../redux/action";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {

  const { meetupData, meetupFavorite } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addFavoriteMeetup = (data) => {
    dispatch(addFavorite(data));
  };

  const isFavoriteYet = (item) => {
    const isFavorite = meetupFavorite.findIndex(({ id }) => id === item.id);
    const disable = isFavorite === -1 ? false : true;
    return disable;
  };

  return (
    <section>
      <h1>All Meetups</h1>
      {!meetupData ? (
        <p>Loading...</p>
      ) : (
        <ul className={classes.list}>
          {meetupData.map((item, index) => (
            <MeetupItem 
              key={`meet-${index}`}
              item={item} 
              action="add"
              disabled={isFavoriteYet(item)}
              handleClick={() =>
                addFavoriteMeetup(item)
              }
            />
          ))}
        </ul>
      )}
    </section>
  );
}
