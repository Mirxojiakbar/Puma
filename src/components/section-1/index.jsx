import Video from "../img/video.png";


const index =()=>{
    return <>
    <div className="container">
        <div className="row section1">
          <div className="col-6">
              <p className="orange-text">
                VIDEO
              </p>
              <h1>
                Desire the feel of <br/> satisfaction.
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Neque auctor proin amet sagittis semper ipsum at <br /> lectus. At </p>
          </div>
          <div className="col-5 mt-5 pt-5">
              <img src={Video} alt="video" />
          </div>
        </div>
    </div>
    
    </>
  }
  

export default index