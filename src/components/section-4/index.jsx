import img1 from "../img/Rectangle 22.png"
import women from "../img/Ellipse 4.png"
import left from "../img/left (1).png"
import right from "../img/next.png"

const index = () => {
  return <>
    <div className="container mt-5 pt-5 ">
        <h1 className="text-center orange-text">Testimonials</h1>



        <div className="row top_much">
            <div className="col-6">
              <img src={img1} alt="grou ohryetiurjtnklwme" />
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6"><img src={women} alt="" /></div>
                    <div className="col-6"><img src={left} alt="" /><img className="ms-5" src={right} alt="" /></div>
                </div>
                <h3 className="mt-2"><strong>Their services was best and friendly</strong></h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipis cing elit. Eleifend </h4>
                <h3 className="mt-2"><strong>Anna Paulwer</strong></h3>
                <h4>Athletic</h4>
            </div>
        </div>
    </div>

  </>
}


export default index