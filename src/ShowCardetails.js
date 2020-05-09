import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";
export default class ShowCardetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { data } = this.props.location.state;
    return (
      <div>
        <Navbar/> 
        <h1 className="text-center">Here are the details of the car which you have clicked to view!</h1>
        <div className="card" style={{width:"300px",marginLeft:"40%",marginTop:"50px"}} >
          <img className="card-img-top" src={data.img} alt="Card image cap" height="300" width="300px"/>
          <div className="card-body">
            <h5 className="card-title">Name:{data.name}</h5>
            <h5 className="card-title">total:{data.total}</h5>
            <h5 className="card-title">Seater:{data.seater}</h5>
            <h5 class="card-title">RentPerDay: {data.rent}Rs/-</h5>
            <p className="card-text">
              Description: {data.description}
            </p>
            <Link to ="/showcars"><button className="btn btn-primary">Go back to Rent Section</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
