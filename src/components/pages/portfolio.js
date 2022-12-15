import Card from "../card";

const projectData = [{
  title: 'Boot Camp Study Guide',
  hrefDep: "https://jaxpi.github.io/prework-study-guide/",
  hrefGit: "https://github.com/Jaxpi/prework-study-guide",
  imgsrc: "./images/PWSG.png",
  alt:"Screenshot of Boot Camp Study Guide"
},
{
  title: 'PWA Text Editor App',
  hrefDep: "https://jaxpi-pwa-text-editor.herokuapp.com/",
  hrefGit: "https://github.com/Jaxpi/PWA-text-editor",
  imgsrc: "./images/jateinstappopen.jpg",
  alt:"Screenshot of PWA Text Editor App"
},
{
  title: 'Weather Dashboard',
  hrefDep: "https://jaxpi.github.io/weather-dashboard/",
  hrefGit: "https://github.com/Jaxpi/weather-dashboard",
  imgsrc: "./images/weathermainscreenshot.jpg",
  alt:"Screenshot of Weather Dashboard"
},
{
  title: 'Work Day Scheduler',
  hrefDep: "https://jaxpi.github.io/work-day-scheduler/",
  hrefGit: "https://github.com/Jaxpi/work-day-scheduler",
  imgsrc: "./images/workmainscreenshot.jpg",
  alt:"Screenshot of Work Day Scheduler"
},
{
  title: 'Gift Guide',
  hrefDep: "https://group2-gift-guide.herokuapp.com/",
  hrefGit: "https://github.com/Jaxpi/gift-guide-project",
  imgsrc: "./images/mainscreenshotfriend",
  alt:"Gift Guide"
},
{
  title: 'Coming Soon',
  hrefDep: "#portfolio",
  hrefGit: "#portfolio",
  imgsrc: "./images/Coming.png",
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