import logo from "../img/LOGO.png";
import Social from "../img/Group 173.png"



const index = () => {
  return <>
    <div className="container mt-5 pt-5">
      <div className="row mt-5">
        <div className="col-3">
          <img src={logo} alt="logo" className="mb-4" />
          <h4 className="mb-4">10 New Town Street, V2
            5NW, Newstate. USA</h4>
          <h5 className="mb-3">
            mirxojiakbarb2008@gmail.com
          </h5>
          <img src={Social} alt="" />
        </div>
        <div className="col-3 text-center">
          <h4 className="mb-5"><strong>Our services</strong></h4>
          <h4 className="mb-3">About Us</h4>
          <h4 className="mb-3">Feature</h4>
          <h4 className="mb-3">Gallary</h4>
        </div>
        <div className="col-3 text-center">
          <h4 className="mb-5"><strong>Support</strong></h4>
          <h4 className="mb-3">About Us</h4>
          <h4 className="mb-3">Feature</h4>
          <h4 className="mb-3">Gallary</h4>
        </div>
        <div className="col-3">
          <h4 className="mb-5"><strong>Contact Us</strong></h4>
          <h4 className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </div>
      </div>

      <div className="last_thing text-center ">
            Copyright 2022 The PUMA All rights Reserved
      </div>
    </div>




  </>
}


export default index