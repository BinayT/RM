import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {isAlreadyFavorite, addToFavorites} from '../../helpers/favoritesHelper'
import { useInfo } from "../../context/meetupContext";

export default function MeetupItem({data}) {
  const {favorites, setFavorites} = useInfo();
  if (!data) return <p>Loading...</p>;
  return (
    <li className={classes.item} data-test='meet-up-item'>
      {data.map((el, i) => (
        <Card key={i}>
          <div className={classes.image}>
            <img src={el.image} alt={el.title} />
          </div>
          <div className={classes.content}>
            <h3>{el.title}</h3>
            <address>{el.address}</address>
            <p>{el.description}</p>
          </div>
          <div className={classes.actions} onClick={()=> addToFavorites({favoriteList: favorites, meetUp: el, hook: setFavorites})}>
            <button>{isAlreadyFavorite({favoriteList: favorites, meetUp: el}) ? 'Remove from favorites' : 'Add to favorites'}</button>
          </div>
        </Card>
      ))}
    </li>
  );
}
