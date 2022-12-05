import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Main from "./components/main"
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;