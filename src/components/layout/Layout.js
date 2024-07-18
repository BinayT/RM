
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

export default function Layout({children}) {
  return (
    <div>
      <main className={classes.main}>
      <MainNavigation />
      {children}
      </main>
    </div>
  );
}
