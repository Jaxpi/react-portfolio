import { useState } from "react";

const Card = ({ title, hrefGit, hrefDep, imgsrc, alt }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <figure>
      <figcaption>{title}</figcaption>
      <img src={imgsrc} alt={alt} onClick={() => setShowDetail(prev => !prev)}/>
      {showDetail && (
        <div className="projButtons">
          <a href={hrefGit}>
            <button className="gitButton">GitHub Repo</button>
          </a>
          <a href={hrefDep}>
            <button className="depButton">Deployed App</button>
          </a>
        </div>
      )}
    </figure>
  );
};

export default Card;
