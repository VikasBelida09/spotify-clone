import React,{useState} from 'react'
import Navbar from './Navbar'
import Card from './Card'
export default function Showcars() {
    const [cars,setCars]=useState(
        [
            {
                img:"https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                total:10,
                description:" beautiful car with great interior design",
                name:"audi",
                seater:4,
                rent:1500,
            },
            {
                img:"https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                total:10,
                description:" beautiful car with great interior design",
                name:"benz",
                seater:4,
                rent:1200,

            },
            {
                img:"https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                total:10,
                description:" beautiful car with great interior design",
                name:"ferrari",
                seater:4,
                rent:2500,

            },
            {
                img:"https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                total:10,
                description:" beautiful car with great interior design",
                name:"audi q5",
                seater:4,
                rent:4500,

            },
            {
                img:"https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                total:10,
                description:" beautiful car with great interior design",
                name:"ferrari f1",
                seater:4,
                rent:1300,

            },
            {
                img:"https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                total:10,
                description:" beautiful car with great interior design",
                name:"audi r5",
                seater:4,
                rent:1500,

            },
            {
                img:"https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                total:10,
                description:" beautiful car with great interior design",
                name:"toyota",
                seater:4,
                rent:5500,

            },

        ]
    )
    return (
        <div>
             <Navbar/>
             {
                <div className="row">
                        {
                            cars.map((car,i)=>{
                                return(
                                    <div key={i} className="col-4 mb-4">
                                      <Card car={car} />
                                    </div>
                                  );
                            })
                        }
                    </div>
             }
        </div>
    )
}
