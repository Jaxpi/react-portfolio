import respdf from "../../images/ImpellizeriJResume.docx.pdf";

const Resume = () => {
  return (
    <section class="resume" id="resume">
      <h2>Resumé</h2>
      <ul>
        <li>
          <h3>Technical Skills</h3>
          <br></br>
          <p id="resTitle">
            Languages:<br></br>
          </p>
          <p>
            JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, DOM, RESTful API’s, JSON
          </p><br></br>
          <p id="resTitle">
            Applications:<br></br>
          </p>
          <p>
            GitHub, MongoDB, MySQL
          </p><br></br>
          <p id="resTitle">
            Tools:<br></br>
          </p>
          <p>
            Express, React, Node, Handlebars, JQuery, Bootstrap, Progressive Web
            Apps, Webpacks, Vite, Apollo Client/Server, Insomnia Core, VS Code,
            Git, AJAX, OOP, GraphQL, Sequelize, Agile Development, Jest
          </p><br></br>

          <h3>Projects</h3>
          <br></br>

          <p id="resTitle">
          Weather Dashboard: github.com/Jaxpi/weather-dashboard | jaxpi-weather-dashboard.herokuapp.com<br></br>
          </p>
          <p>
          • Application created for travelers to quickly and easily see current and near-future weather conditions for cities around the world to plan properly for their trip. Users can submit a city name to bring up the current temperature, weather, wind speed, and humidity of the location as well as the same conditions for the following 5 days. This app is also installable as a PWA.<br></br>
          </p>
          <p>
          • React, JS, CSS, HTML<br></br>
          </p>
          <br></br>

          <p id="resTitle">
          Work Day Scheduler: github.com/Jaxpi/work-day-scheduler | jaxpi.github.io/work-day-scheduler<br></br>
          </p>
          <p>
          • Application allows users to add important events to a daily planner. Events in the current hour will display red, past events are grayed-out, and future events display green for time management ease.<br></br>
          </p>
          <p>
          • MomentJS, JS, CSS, HTML<br></br>
          </p>
          <br></br>

          <p id="resTitle">
          Jax Yoga Pop: github.com/Jaxpi/jax-yoga-pop | jaxpi.github.io/jax-yoga-pop<br></br>
          </p>
          <p>
          • Bubble shooter game application that utilizes dynamic user interactions and complex logic to create a simple and enjoyable experience.<br></br>
          </p>
          <p>
          • JS, CSS, HTML<br></br>
          </p>
          <br></br>
        </li>
        <br></br>
        <li>
          <h3>Employment Experience</h3>
          <br></br>
          <p id="resTitle">Administration Intern; Science Content Team Leader; Science/Elective Teacher, August 2012-September 2023</p>
          <p>Bronx Haven High School – Bronx, NY</p><br></br>
          <p>• Administrative Intern – APPR evaluations; professional development; master schedule; curriculum design/evaluation</p>
          <p>• Science Content Team Leader/Co-Leader of New Teacher Academy – Lead department and first year teachers in inquiry, reflection, unit/lesson plan design, and feedback for improvement</p>
          <p>• Classroom teaching with focus on data-driven teaching reflection, critical thinking, problem solving, and non-cognitive learning factors with extensive work with students with disabilities, over-aged/under-credited students, and at-risk students in an urban transfer high school setting</p>
          <br></br>

          <h3>Education</h3>
          <br></br>
          <p id="resTitle">Full-Stack Coding Certificate Program, Columbia University, New York, NY</p>
          <p id="resTitle">Advanced Certificate School District Leader, College of St. Rose – Albany, NY</p>
          <p id="resTitle">Advanced Certificate School Building Leader, College of St. Rose – Albany, NY</p>
          <p id="resTitle">M.A. Science Education, Adelphi University – Garden City, NY</p>
          <p id="resTitle">B.A. Environmental Science, SUNY Purchase, Purchase, NY</p><br></br>

          <p id="resTitle">Other and Related Skills:</p>
          <br></br>
          <p>
          School District Administrator Certification, School Building Administrator Certification, Science Educator Professional Certification
          </p>
        </li>
        <br></br>
      </ul>
      <a id="respdf" href={respdf} target="_blank">
        Click Here for a PDF Version
      </a>
    </section>
  );
};

export default Resume;
