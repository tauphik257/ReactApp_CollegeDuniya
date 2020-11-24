import College from '../assets/json/colleges.json';
import './component.css';
import collegeImages from '../assets/images/college_02.jpg';


function Component() {
  let collegeArray = College.colleges;
  return (
    <div className="full_width">
      <div className="mainContainer">
        <ul className="d-flex full_width collegeList">
          {
            collegeArray.map((obj)=>{
              return  <li className="collegeWrap">
              <div className="collegeWrapBox">
                <div className="collegeImg">
                  <img src={collegeImages} alt="img" />
                  <div className="collegeImgBottom d-flex">
                    <div className="collegeImgBudg">
                      {
                        obj.tags.map((places)=>{
                        return <span>{places}</span> 
                        })
                      }
                    </div>
                    <div className="collegeImgBottomRight">
                      <p>{obj.ranking}</p>
                    </div>
                  </div>
                  <div className="collegeRating">
                    <h6>{obj.rating}/<span>5</span></h6>
                    <p>{obj.rating_remarks}</p>
                  </div>
                  <div className="promotedLabel">
                    <p>Promoted</p>
                  </div>
                </div>
                <div className="collegeDescription">
                    <h5>{obj.college_name}</h5>
                </div>
              </div>
            </li>
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Component;
