import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { NAVIGATION } from "../utils/constants";

export default function NewMeetupsPage() {
  return (
    <section>
      <h1>{NAVIGATION.NEW_MEETUP_PAGE.text}</h1>
      <NewMeetupForm />
    </section>
  );
}
