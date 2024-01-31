import 'bootstrap/dist/css/bootstrap.min.css'; 
import img from '../assets/images/bbs1.jpeg'
import '../assets/css/detail.css'

function Details() {
    return ( 
        <div className="container mt-5"> {/* Add Bootstrap container class */}
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Baby Shower Fest</h5>
                    <p className="card-text">Package: Basic</p>
                    <p className="card-text">Place: Trichy</p>
                    <a href="#" className="btn btn-primary">Book Now</a>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Baby Shower Fest</h5>
                    <p className="card-text">Package: Basic</p>
                    <p className="card-text">Place: Trichy</p>
                    <a href="#" className="btn btn-primary">Book Now</a>
                </div>
            </div>
        </div>
    );
}

export default Details;
