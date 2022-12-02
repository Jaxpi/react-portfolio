import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;