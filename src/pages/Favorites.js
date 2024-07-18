import MeetupItem from "../components/meetups/MeetupItem";
import { useInfo } from "../context/meetupContext";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const {favorites} = useInfo();
  
  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
        <MeetupItem data={favorites} />
      </ul>
    </section>
  );
}
