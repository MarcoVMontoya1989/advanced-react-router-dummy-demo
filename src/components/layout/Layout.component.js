import React, {Fragment} from 'react';
import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

const LayoutComponent = ({children}) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>
        {children}
      </main>
    </Fragment>
  );
};

export default LayoutComponent;