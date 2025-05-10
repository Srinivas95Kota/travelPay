import './App.scss';
import Tabs from './Tab';
import Footer from './components/Footer';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container-fluid p-0">
          <Header />
          <Tabs />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
