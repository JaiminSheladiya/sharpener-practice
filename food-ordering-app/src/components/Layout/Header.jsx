import React from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Happy Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://b.zmtcdn.com/data/pictures/chains/1/10571/63a2a5e555a05d2d52457435352038cc.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
          alt="Meals image"
        />
      </div>
    </>
  );
};

export default Header