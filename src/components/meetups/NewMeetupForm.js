import { useState } from "react";
import { useInfo } from "../../context/meetupContext";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const {setCurrentData, currentData} = useInfo();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  function submitHandler(event) {
    event.preventDefault();
    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    setCurrentData((prevData) => [...prevData, newMeetup]);
    setTitle('');
    setImage('');
    setAddress('');
    setDescription('');
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" value={image} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
