import respdf from "../../images/ResPDF.pdf"

const Resume = () => {
  return (
    <section class="resume" id="resume">
      <h2>Resumé</h2>
      <ul>
        <li>
          <h3>Employment</h3>
          <br></br>
          <p>Employment Experience - Under Construction</p>
        </li>
        <br></br>
        <li>
          <h3>Education</h3>
          <br></br>
          <p>Educational Background - Under Construction</p>
        </li>
        <br></br>
        <li>
          <h3>Licenses</h3>
          <br></br>
          <p>Licenses Held - Under Construction</p>
        </li>
      </ul>
          <a id="respdf" href={respdf} target="_blank">Click Here for a PDF Version</a>
    </section>
  );
};

export default Resume;
