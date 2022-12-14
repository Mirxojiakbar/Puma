import image1 from "../img/asdad.png"
import image2 from "../img/Group 359.png"
import image3 from "../img/Group (5).png"


const index = () => {
  return <>
    <div className="container mt-5 pt-5">
      <div className="text-center">
        <h1 className=" orange-text mb-1">Feature</h1>
        <h1>We have best feature in Shoes</h1>
      </div>

      <div className="row d-flex justify-content-around mt-5">

        <div className="col-4 three-dives">
          <img src={image1} alt="" />
          <h1 className="mb-4">Quality</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mauris nisl est accumsan quis tempus.</p>
          <h6 className="orange-text">Read More <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon></h6>
        </div>

        <div className="col-4 three-dives">
          <img src={image2} alt="" />
          <h1 className="mb-4">Flexible</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mauris nisl est accumsan quis tempus.</p>
          <h6 className="orange-text">Read More <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon></h6>
        </div>

        <div className="col-4 three-dives">
          <img src={image3} alt="" />
          <h2 className="h2 mb-4">Long Lasting</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mauris nisl est accumsan quis tempus.</p>
          <h6 className="orange-text">Read More <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon></h6>
        </div>

      </div>
    </div>
  </>
}


export default index