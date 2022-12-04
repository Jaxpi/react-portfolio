const Portfolio = () => {
  return (
    <section class="portfolio" id="portfolio">
      <h2>Portfolio</h2><br></br>
      <div class="portfolioimages">
        <div id="primary">
          <figure>
            <figcaption>Boot Camp Study Guide</figcaption><a href="https://jaxpi.github.io/prework-study-guide/"><img src="./images/PWSG.png" alt="Screenshot of Study Guide" /></a>
          </figure>
        </div>

        <div id="secondary">
          <figure>
            <figcaption>PWA Text Editor App</figcaption><a href="https://jaxpi-pwa-text-editor.herokuapp.com/"><img src="./images/Coming.png" alt="Screenshot of Code Refactor for Horiseon" /></a>
          </figure>

          <figure>
            <figcaption>Weather Dashboard</figcaption><a href="https://jaxpi.github.io/weather-dashboard/"><img src="./images/weathermainscreenshot.jpg" alt="Coming Soon - Stamp" /></a>
          </figure>

          <figure>
            <figcaption>Work Day Scheduler</figcaption><a href="https://jaxpi.github.io/work-day-scheduler/"><img src="./images/workmainscreenshot.jpg" alt="Coming Soon - Construction" /></a>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;