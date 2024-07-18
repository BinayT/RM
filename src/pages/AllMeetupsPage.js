import MeetupItem from "../components/meetups/MeetupItem";
import { useInfo } from "../context/meetupContext";
import classes from "./../components/meetups/MeetupList.module.css";


export default function AllMeetupsPage() {
  const {currentData} = useInfo();
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        <MeetupItem data={currentData} />
      </ul>
    </section>
  );
}
