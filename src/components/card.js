import { useState } from "react";

const Card = ({ title, hrefGit, hrefDep, imgsrc, alt }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <figure>
      <figcaption>{title}</figcaption>
      <img src={imgsrc} alt={alt} onClick={() => setShowDetail(prev => !prev)}/>
      {showDetail && (
        <div>
          <a href={hrefGit}>
            <button>GitHub Repo</button>
          </a>
          <a href={hrefDep}>
            <button>Deployed App</button>
          </a>
        </div>
      )}
    </figure>
  );
};

export default Card;
