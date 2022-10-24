import React from 'react';
import Header from '../Header/Header';
import classes from './Layout.module.scss';

const Layout: React.FC<{children: React.ReactNode}> = (props) => {
  return (
    <div>
      <Header />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;