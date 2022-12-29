import Card from "../card";

const projectData = [{
  title: 'Boot Camp Study Guide',
  hrefDep: "https://jaxpi.github.io/prework-study-guide/",
  hrefGit: "https://github.com/Jaxpi/prework-study-guide",
  imgsrc: require("../../images/PWSG.png"),
  alt:"Screenshot of Boot Camp Study Guide"
},
{
  title: 'PWA Text Editor App',
  hrefDep: "https://jaxpi-pwa-text-editor.herokuapp.com/",
  hrefGit: "https://github.com/Jaxpi/PWA-text-editor",
  imgsrc: require("../../images/jateinstappopen.jpg"),
  alt:"Screenshot of PWA Text Editor App"
},
{
  title: 'Weather Dashboard',
  hrefDep: "https://jaxpi-weather-dashboard.herokuapp.com/",
  hrefGit: "https://github.com/Jaxpi/weather-dashboard",
  imgsrc: require("../../images/weathermainscreenshot.jpg"),
  alt:"Screenshot of Weather Dashboard"
},
{
  title: 'Work Day Scheduler',
  hrefDep: "https://jaxpi.github.io/work-day-scheduler/",
  hrefGit: "https://github.com/Jaxpi/work-day-scheduler",
  imgsrc: require("../../images/workmainscreenshot.jpg"),
  alt:"Screenshot of Work Day Scheduler"
},
{
  title: 'Gift Guide',
  hrefDep: "https://group2-gift-guide.herokuapp.com/",
  hrefGit: "https://github.com/Jaxpi/gift-guide-project",
  imgsrc: require("../../images/mainscreenshotfriend.jpg"),
  alt:"Gift Guide"
},
{
  title: 'Coming Soon',
  hrefDep: "#portfolio",
  hrefGit: "#portfolio",
  imgsrc: require("../../images/Coming.png"),
  alt:"Coming Soon"
}]

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2><br></br>
      <div className="portfolioimages">
        <div id="projects">
          {projectData.map(project => <Card title={project.title} hrefGit={project.hrefGit} hrefDep={project.hrefDep} imgsrc={project.imgsrc} alt={project.alt}/>)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;