import React from 'react'

export default function ExperianceCard({cardInfo}) {
    // const [colorArrays, setColorArrays] = useState([]);
    // const imgRef = createRef();
  
    // function getColorArrays() {
    //   const colorThief = new ColorThief();
    //   setColorArrays(colorThief.getColor(imgRef.current));
    // }
  
    function rgb(values) {
      return typeof values === "undefined"
        ? null
        : "rgb(" + values.join(", ") + ")";
    }
  
    const GetDescBullets = ({descBullets}) => {
      return descBullets
        ? descBullets.map((item, i) => (
            <li
              key={i}
              className={"subTitle"}
            >
              {item}
            </li>
          ))
        : null;
    };
  
    return (
      <div className={"experience-card"}>
        <div className="experience-banner">
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">{cardInfo.company}</h5>
          </div>
  
          <img
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
          />
        </div>
        <div className="experience-text-details">
          <h5
            className={              
             "experience-text-role"
            }
          >
            {cardInfo.role}
          </h5>
          <h5
            className={              
            "experience-text-date"
            }
          >
            {cardInfo.date}
          </h5>
          <p
            className={             
             "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
          <ul style={{textAlign:"left",fontSize:"1.2em"}}>
            <GetDescBullets descBullets={cardInfo.descBullets} />
          </ul>
        </div>
      </div>
    );
  }