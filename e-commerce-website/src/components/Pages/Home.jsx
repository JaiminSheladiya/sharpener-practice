import React from 'react'
import Container from '../Container';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div>
      <Cart/>
      <Container />
      <Footer />
    </div>
  );
}

export default Home