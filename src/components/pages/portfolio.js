const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2><br></br>
      <div className="portfolioimages">
        <div id="projects">
          <figure>
            <figcaption>Boot Camp Study Guide</figcaption><a href="https://jaxpi.github.io/prework-study-guide/"><img src="./images/PWSG.png" alt="Screenshot of Boot Camp Study Guide" /></a>
          </figure>

          <figure>
            <figcaption>PWA Text Editor App</figcaption><a href="https://jaxpi-pwa-text-editor.herokuapp.com/"><img src="./images/jateinstappopen.jpg" alt="Screenshot of PWA Text Editor App" /></a>
          </figure>

          <figure>
            <figcaption>Weather Dashboard</figcaption><a href="https://jaxpi.github.io/weather-dashboard/"><img src="./images/weathermainscreenshot.jpg" alt="Screenshot of Weather Dashboard" /></a>
          </figure>

          <figure>
            <figcaption>Work Day Scheduler</figcaption><a href="https://jaxpi.github.io/work-day-scheduler/"><img src="./images/workmainscreenshot.jpg" alt="Screenshot of Work Day Scheduler" /></a>
          </figure>

          <figure>
            <figcaption>Under Construction</figcaption><a href="#portfolio"><img src="./images/Construction.png" alt="Unnder Construction" /></a>
          </figure>

          <figure>
            <figcaption>Coming Soon</figcaption><a href="#portfolio"><img src="./images/Coming.png" alt="Coming Soon" /></a>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;