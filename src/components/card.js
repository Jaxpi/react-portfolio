const Card = ({ title, desc, hrefGit, hrefDep, imgsrc, alt }) => {
  return (
    <div>
      <figure>
        <img src={imgsrc} alt={alt} id="projImg" />

        <div className="projInfo">
          <figcaption>{title}</figcaption>
          <p id="desc">{desc}</p>

          <div id="projButtons">
            <a href={hrefGit}>
              <button className="gitButton">Repository</button>
            </a>
            <a href={hrefDep}>
              <button className="depButton">Deployment</button>
            </a>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Card;

// No longer used "show buttons on click" effect:
// import { useState } from "react";

// const Card = ({ title, desc, hrefGit, hrefDep, imgsrc, alt }) => {
//   const [showDetail, setShowDetail] = useState(false);
//   return (
//     <div>
//       <figcaption>{title}</figcaption>
//       <figure>
//         <img
//           src={imgsrc}
//           alt={alt}
//           onClick={() => setShowDetail((prev) => !prev)}
//         />
//         {showDetail && (
//           <div className="projButtons">
//             <a href={hrefGit}>
//               <button className="gitButton">Repository</button>
//             </a>
//             <a href={hrefDep}>
//               <button className="depButton">Deployment</button>
//             </a>
//           </div>
//         )}
//         <p id="desc">{desc}</p>
//       </figure>
//     </div>
//   );
// };

// In CSS:
// .projButtons {
//   position: absolute;
//   top: 10%;
//   align-self: center;
// }
