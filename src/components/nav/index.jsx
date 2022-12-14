import logo from "../img/LOGO.png";

const index = () => {
  return <>
    <nav>
      <div className="container-lg">
        <div className="nav">
          <img src={logo} alt="logo" />
          <h2>Menu</h2>
          <h2>About</h2>
          <h2>Feature</h2>
          <h2>Gallary</h2>
          <button className="btn btn_orange">Buy Now</button>
        </div>
      </div>
    </nav>
    </>
}


export default index;