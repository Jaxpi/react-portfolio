import respdf from "../../images/ImpellizeriJResume.docx.pdf";

const Resume = () => {
  return (
    <section class="resume" id="resume">
      <h2>Resumé</h2>
      <ul>
        <h3  class="content">I am a software engineer who actively seeks challenges to grow and expand coding skills with experience in both independent and collaborative team-oriented projects utilizing best practices in development, testing, deploying, and maintaining applications. Prior employment experience allowed me to distinguish myself as an innovative, adaptable, and cooperative team member and a highly organized and reflective leader.</h3><br></br>
        <li>
          <h3>Technical Skills</h3>
          <br></br>
          <p id="resTitle">
            Languages:<br></br>
          </p>
          <p>
            JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, DOM, RESTful API’s, JSON, Java, Python, C#
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
            Git, AJAX, OOP, GraphQL, Sequelize, Agile Development, Jest, AWS
          </p><br></br>

          <h3>Projects</h3>
          <br></br>

          <p id="resTitle">
          Weather Dashboard: github.com/Jaxpi/weather-dashboard | jaxpi-weather-dashboard.herokuapp.com<br></br>
          </p>
          <p class="content">
          • Developed, tested, deployed, and maintained software using best-practices established by team through Agile methodologies for an installable application created for travelers to quickly and easily see current and near-future weather conditions for cities around the world to plan properly for their trip. (React, JS, CSS, HTML)<br></br>
          </p>
          <br></br>

          <p id="resTitle">
          Work Day Scheduler: github.com/Jaxpi/work-day-scheduler | jaxpi.github.io/work-day-scheduler<br></br>
          </p>
          <p class="content">
          • Developed and revised an application which allows users to add important events to a daily planner which color-codes events based on relationship to the current time. (MomentJS, JS, CSS, HTML)<br></br>
          </p>
          <br></br>

          <p id="resTitle">
          Jax Yoga Pop: github.com/Jaxpi/jax-yoga-pop | jaxpi.github.io/jax-yoga-pop<br></br>
          </p>
          <p class="content">
          • Reformatted and designed a bubble shooter game application that utilizes dynamic user interactions and complex logic to create a simple and enjoyable experience. (JS, CSS, HTML)<br></br>
          </p>
          <br></br>
        </li>
        <br></br>
        <li>
          <h3>Employment Experience</h3>
          <br></br>
          <p id="resTitle">Administration Intern; Science Content Team Leader; Science/Elective Teacher, August 2012-September 2023</p>
          <p>Bronx Haven High School – Bronx, NY</p>
          <p class="content">• Conducted annual professional performance review evaluations; created/lead professional development sessions; designed master schedules; developed/assessed curricula</p>
          <p class="content">• Led department and first year teachers in inquiry, reflection, unit/lesson plan design, and feedback for improvement; Led classroom instruction with focus on data-driven teaching reflection, critical thinking, problem solving, and non-cognitive learning factors</p>
          <p class="content">• Accomplishments lead to improved faculty effectiveness and school-wide organization/cooperation</p>
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
