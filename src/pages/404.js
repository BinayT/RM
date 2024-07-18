import {Link} from 'react-router-dom'
import classes from "./../components/meetups/MeetupList.module.css";

const ErrorPage = () => {
  return (
    <div className={classes.errorpage}>
        <span>404, Not found</span>
        <Link to="/">
            Go To Home
        </Link>
    </div>
  )
}

export default ErrorPage