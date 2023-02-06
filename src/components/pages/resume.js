import respdf from "../../images/ImpellizeriResume.docx.pdf";

const Resume = () => {
  return (
    <section class="resume" id="resume">
      <h2>Resumé</h2>
      <ul>
        <li>
          <h3>Employment</h3>
          <br></br>
          <p id="resTitle">
            Administration Intern; Science Content Team Leader; Earth
            Science/Elective Teacher, August 2012-September 2022<br></br>
          </p>
          <p>
            Bronx Haven High School – Bronx, NY<br></br>
            <br></br>
          </p>
          <p>
            • Administrative Intern through the College of Saint Rose CITE
            School Building and School District Leader programs – APPR
            evaluations; professional development; master schedule creation;
            curriculum design/evaluation<br></br>
          </p>
          <p>
            • Science Content Team Leader – Lead science department in inquiry,
            reflection, unit and lesson plan design, and feedback for
            improvement<br></br>
          </p>
          <p>
            • Co-Leader of New Teacher Academy – Guidance, support, and
            professional development for first year teachers <br></br>
          </p>
          <p>
            • Science, art, and elective classroom teaching <br></br>
          </p>
          <p>
            • Focus on data-driven teaching reflection, critical thinking,
            problem solving, and non-cognitive learning factors <br></br>
          </p>
          <p>
            • Extensive work with students with disabilities,
            over-aged/under-credited students, and at-risk students in an urban
            transfer high school setting
          </p>
          <br></br>
          <br></br>
          <p id="resTitle">
            Teaching Assistant: 1:1, January 2011-August 2012<br></br>
          </p>
          <p>
            Leo F. Giblyn School – Freeport, NY<br></br>
            <br></br>
          </p>
          <p>
            • Experience with students with special needs and school-wide
            student management
          </p>
        </li>
        <br></br>
        <li>
          <h3>Education</h3>
          <br></br>
          <p id="resTitle">Certifications and Licenses:</p>
          <br></br>
          <p>Full-Stack Developer, December 2022</p>
          <p>NYS School District Leader Certification, August 2018</p>
          <p>NYS School Building Leader Certification, May 2018</p>
          <p>
            NYS Professional Certification: Earth Science (7-12), February 2011
          </p>
          <br></br>
          <p id="resTitle">Educational Programs:</p>
          <br></br>
          <p>
            Full-Stack Developer Certificate, December 2022, Columbia University
            - New York City, NY
          </p>
          <p>
            Advanced Certificate School Building Leader, May 2018, College of
            St. Rose – Albany, NY
          </p>
          <p>
            Advanced Certificate School District Leader, August 2018, College of
            St. Rose – Albany, NY
          </p>
          <p>
            M.A. Science Education, GPA 3.9, January 2011, Adelphi University –
            Garden City, NY
          </p>
          <p>
            B.A. Environmental Science, January 2007, SUNY Purchase - Purchase,
            NY
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
