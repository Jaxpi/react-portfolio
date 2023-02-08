import Card from "../card";

const projectData = [
  {
    title: "Weather Dashboard",
    desc: "This application was created for travelers to use in order to quickly and easily see the current and near-future weather conditions for cities around the world so they can plan properly for their trip. Users can type in a city name and submit which will bring up the current temperature, weather, wind speed, and humidity of the location as well as the same conditions for the following 5 days. This app is also installable as a PWA for use on mobile devices.",
    hrefDep: "https://jaxpi-weather-dashboard.herokuapp.com/",
    hrefGit: "https://github.com/Jaxpi/weather-dashboard",
    imgsrc: require("../../images/weathermainscreenshot.jpg"),
    alt: "Screenshot of Weather Dashboard",
  },
  {
    title: "Work Day Scheduler",
    desc: "This application allows users with busy schedules to add important events to a daily planner to manage their time more effectively. Events in the current hour will display red to alert the user that they are happening/due now. Past events are grayed-out to show that they are over. Future events display green so the user know they still have time for them.",
    hrefDep: "https://jaxpi.github.io/work-day-scheduler/",
    hrefGit: "https://github.com/Jaxpi/work-day-scheduler",
    imgsrc: require("../../images/workmainscreenshot.jpg"),
    alt: "Screenshot of Work Day Scheduler",
  },
  {
    title: "Jax Match 3",
    desc: "This a very simple match-3 game created with only HTML and JavaScript. It allows users to try to make rows or columns of 3 or more tiles of the same color. Those tiles will then clear and shift to fill the game board with new tiles. Any newly rendered tiles that are already matches will automatically clear and be added to the point total. The user can see their score and see available moves if they are stuck. If no further moves can be made the game ends. The user can begin a new game at any time.",
    hrefDep: "https://jaxpi.github.io/jax-match-3/",
    hrefGit: "https://github.com/Jaxpi/jax-match-3",
    imgsrc: require("../../images/match3mainscreenshot.jpg"),
    alt: "Screenshot of Jax Match 3",
  },
  {
    title: "Gift Guide",
    desc: "Gift Guide is an app that allows users to create a wishlist of gifts they would like to receive from loved ones. Users can create multiple wishlists and even invite friends to assign themselves a gift to give while still keeping the gifts a surprise for the wishlist owner. The app makes it easy to keep track of the gifts the user would like and ensures that the user gets exactly what they want. The functionality of the app allows users to change themes of their wishlists based on the event. The goal was to make gift sharing less awkward in one fun and user friendly app.",
    hrefDep: "https://group2-gift-guide.herokuapp.com/",
    hrefGit: "https://github.com/Jaxpi/gift-guide-project",
    imgsrc: require("../../images/mainscreenshotfriend.jpg"),
    alt: "Gift Guide",
  },
  {
    title: "My Contacts - Contact Directory",
    desc: "This contact directory app helps users organize the information of their contacts. They can store the name, home phone number, mobile phone number, and email address of their contacts. This app is also installable as a PWA for use on mobile devices.",
    hrefDep: "https://jaxpi-contact-directory.herokuapp.com/",
    hrefGit: "https://github.com/Jaxpi/contact-directory",
    imgsrc: require("../../images/contactmainscreenshot.jpg"),
    alt: "My Contacts Contact Directory",
  },
  {
    title: "PWA Text Editor App",
    desc: "This application is a text editor that runs in a browser, but is also installable as a PWA for use on desktop and/or mobile devices. It will allow users to store entered text and retrieve it again upon re-opening the app. It utilizes IndexedDB, babel, and webpack.",
    hrefDep: "https://jaxpi-pwa-text-editor.herokuapp.com/",
    hrefGit: "https://github.com/Jaxpi/PWA-text-editor",
    imgsrc: require("../../images/jateinstappopen.jpg"),
    alt: "Screenshot of PWA Text Editor App",
  },
  {
    title: "Boot Camp Study Guide",
    desc: "This application was my first coding project through the Columbia University Boot Camp program. It is a simple study guide for the basics of HTML, CSS, Git, and JavaScript made with HTML, CSS, and JavaScript - the latter of which is used to make a suggestion in the console of which topic to study (this changes upon refreshing the page). It serves as a good reminder of how far I have come.",
    hrefDep: "https://jaxpi.github.io/prework-study-guide/",
    hrefGit: "https://github.com/Jaxpi/prework-study-guide",
    imgsrc: require("../../images/PWSG.png"),
    alt: "Screenshot of Boot Camp Study Guide",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <br></br>
      <div className="portfolioimages">
        <div id="projects">
          {projectData.map((project) => (
            <Card
              title={project.title}
              desc={project.desc}
              hrefGit={project.hrefGit}
              hrefDep={project.hrefDep}
              imgsrc={project.imgsrc}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
