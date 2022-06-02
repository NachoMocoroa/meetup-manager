import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from './Layout.module.css';

export default function Layout({children}) {
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    if (location !== previousLocation) setPreviousLocation(location);
  }, [location, previousLocation]);

  return (
    <div className={location === previousLocation ? classes.fadeIn : ''}>
      <main className={classes.main}>{children}</main>
    </div>
  );
}
