import { useFetch } from "./../util-hooks/useFetch";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {

  const { data } = useFetch({
    url: "/data.json",
  });
  console.log('data: ', data);

  const addMeetup = (data) => {
    console.log('addMeetup - data: ', data);
  };

  return (
    <section>
      <h1>All Meetups</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <ul className={classes.list}>
          {data.map((item, index) => (
            <MeetupItem 
              key={`meet-${index}`}
              item={item} 
              handleClick={() =>
                addMeetup(item)
              }
            />
          ))}
        </ul>
      )}
    </section>
  );
}
