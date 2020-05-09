import React from 'react'
import { Link } from 'react-router-dom'

const Card=({car})=> {
    return (
       <div>
           <div class="card" style={{width: "18rem", marginLeft:"10%"}}>
            <img class="card-img-top" src={car.img} alt="Card image cap" height="250px"/>
            <div class="card-body">
            <h5 class="card-title">Brand:{car.name}</h5>
            <h5 class="card-title">Available: {car.total}</h5>
            <h5 class="card-title">Seater: {car.seater}</h5>
            <h5 class="card-title">RentPerDay: {car.rent}Rs/-</h5>
            <p class="card-text">{car.description}</p>
             <Link to="/booking"><button className="btn btn-primary">Book this car</button></Link>
             <Link 
                to={{
                    pathname: `/${car.name}`,
                    state: {
                      data: car,
                    },
                  }}
             ><button className="btn btn-info" style={{marginLeft:"30px"}}>Details</button></Link> 
            </div>
            </div>
       </div>
    )
}
export default Card