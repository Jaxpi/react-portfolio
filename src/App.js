import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/navigation';
// import Project from './components/project';

function App() {
  return (
    <div className="App">
      <Header />;
      <Navigation />;
      {/* <Project />; */}
      <Footer />;
    </div>
  );
}

export default App;