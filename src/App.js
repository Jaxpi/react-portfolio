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

//WHAT I NEED TO DO STILL:

//HAVE LINK TO DEPLOYMENT AND GITHUB REPO FOR EACH PROJECT IN PORTFOLIO (MAYBE A MODAL POPUP ON EACH PIC WITH A BUTTON FOR EACH?)

// WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
// WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address

//MAKE RESUME BUTTON FOR DOWNLOADING PDF VERSION OF RESUME WITH DUMMY PDF FOR UNDER CONSTRUCTION FOR NOW
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies