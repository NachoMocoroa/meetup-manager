import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ item, action, disabled, handleClick }) {

  const addFavoriteText = "Add to favorites";
  const removeFavoriteText = "Remove from favorites";

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleClick} disabled={disabled}>
            {action === 'add' ? addFavoriteText : removeFavoriteText}
          </button>
        </div>
      </Card>
    </li>
  );
}
