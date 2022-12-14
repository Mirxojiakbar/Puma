import Krosi from "../img/krosovka.png"







const index = () => {
  return <>
    <header>
      <div className="container">
        <div className="header">
          <div className="row">
            <div className="col-6">
              <h1>
                Life is better in <br /> running <br />
                shoes.
              </h1>
              <h4 className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Eu eu ultrices ut </h4>
            </div>
            <div className="col-6">
              <img src={Krosi} alt="" />
            </div>
          </div>

          <div className="absolute_div">
            <h3 className='iconca'>Puma <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded"></iconify-icon></h3>

            <h3 className='iconca'>man <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded"></iconify-icon></h3>

            <h3 className='iconca'>large <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded"></iconify-icon></h3>

            <h3 className='iconca'>$150 <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded"></iconify-icon></h3>

          <button className="btn btn_orange">Buy Now</button>

          </div>
        </div>
      </div>
    </header>
  </>
}


export default index;