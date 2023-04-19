import './App.css';
import CardContainer from './CardContainer/CardContainer.js';
import Portrait from './Portrait/Portrait.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

function App() {

  return (
    <div className="app">
        <Header />
        <div className='app-container'>
          <Portrait />
          <CardContainer />
        </div>
        <Footer />
    </div>
  );
}

export default App;
