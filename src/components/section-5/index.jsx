import trainer from "../img/Rectangle 24.png"



const index = () => {
  return <>
    <div className="container">
      <div className="one_div">
        <div className="row">
          <div className="col-6">
            <img src={trainer} width="100%" alt="" />
          </div>

          <div className="col-6 right">
            <h1>Sign Up to our Newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque <br /> in elementum tempus, vestibulum faucibus tortor odio elit.</p>
            <div className="inputike">
              <input type="email" className="form-control white_input" placeholder="Enter your email address" /><button className="btn white_button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}


export default index