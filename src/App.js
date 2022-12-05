import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Main from "./components/main"
// import About from "./components/pages/about";
// import Portfolio from "./components/pages/portfolio";
// import Resume from "./components/pages/resume";
// import Contact from "./components/pages/contact";
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

{/* <About />
<Portfolio />
<Resume />
<Contact /> */}

export default App;

// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)