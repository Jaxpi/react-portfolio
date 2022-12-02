import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;