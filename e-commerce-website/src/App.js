import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import HeadText from './components/Header/HeadText';
import Container from './components/Container';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
