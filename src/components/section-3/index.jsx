import img1 from "../img/Rectangle 9.png"
import img2 from "../img/Rectangle 10.png"
import img3 from "../img/Rectangle 11.png"
import img4 from "../img/Rectangle 12.png"
import left from "../img/left (1).png"
import right from "../img/next.png"

const index = () => {
  return <>
    <div className="container mt-5 pt-5">
      <div>
        <p className="orange-text mt-5 pt-2">GALLARY</p>
        <h1>40+YEARS’ EXPRERIENCE</h1>
        <h2 className="mt-5 row position-relative">
          <div className="col-8">
            <strong className="">Categories:</strong>
            <strong className="categories">All</strong>
            <strong className="categories">Male</strong>
            <strong className="categories">Female</strong>
            <strong className="categories">Kids</strong>
          </div>
          <div className="col-4">
            <div className="right-0">
              <img src={left} alt="left" />
              <img src={right} alt="right" className="ms-4" />
            </div>
          </div>
        </h2>
      </div>
      <div className="row">
        <div className="col-3 trainers">
          <img src={img1} alt="" />
          <h2 className="ms-5 ">Puma RS-X Bold </h2>
          <h4 className="d-inline ms-5 ">Size:<p className="ms-3 mb-5 d-inline">Dubble-XL</p></h4><br /><br />
          <h4 className="d-inline ms-5 mb-3">Price:<p className="ms-3 d-inline">200$</p></h4><br /><br />
          <button className="btn ms-5 btn_orange">Buy Now</button>
        </div>
        <div className="col-3 trainers">
          <img src={img2} alt="" />
          <h2 className="ms-5 ">Puma Sneakers </h2>
          <h4 className="d-inline ms-5 ">Size:<p className="ms-3 mb-5 d-inline">Dubble-XL</p></h4><br /><br />
          <h4 className="d-inline ms-5 mb-3">Price:<p className="ms-3 d-inline">180$</p></h4><br /><br />
          <button className="btn ms-5 btn_orange">Buy Now</button>
        </div>
        <div className="col-3 trainers">
          <img src={img3} alt="" />
          <h2 className="ms-5 ">Puma Ferrari</h2>
          <h4 className="d-inline ms-5 ">Size:<p className="ms-3 mb-5 d-inline">Dubble-XL</p></h4><br /><br />
          <h4 className="d-inline ms-5 mb-3">Price:<p className="ms-3 d-inline">190$</p></h4><br /><br />
          <button className="btn ms-5 btn_orange">Buy Now</button>
        </div>
        <div className="col-3 trainers">
          <img src={img4} alt="" />
          <h2 className="ms-5 ">Puma Running</h2>
          <h4 className="d-inline ms-5 ">Size:<p className="ms-3 mb-5 d-inline">Dubble-XL</p></h4><br /><br />
          <h4 className="d-inline ms-5 mb-3">Price:<p className="ms-3 d-inline">200$</p></h4><br /><br />
          <button className="btn ms-5 btn_orange">Buy Now</button>
        </div>
      </div>
    </div>
  </>
}


export default index