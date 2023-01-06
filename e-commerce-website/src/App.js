import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AllRoutes from './components/Pages/AllRoutes'
function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
