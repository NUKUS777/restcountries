import { useState ,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './rest.css'
import React from 'react'
import axios  from 'axios';
function Rest() {
    const [data, setData] =useState([])
    const getData = async () =>  {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all')
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    getData();
  return (
    <div className="container ">
        <div className="box row">
            {
            
                data.map((element)=>{
                    console.log(element.currencies);
                    return     <div className="card m-2 col-lg-2 col-md-3 col-sm-4">
                    <img className="card-img-top" src={element.flags.png} alt="Card image cap"/>
                    <div className="card-body">
                      <h5 className="card-title">{element.name.common}</h5>
                      <h3>{element.capital}</h3>
                      <h5>{element.continents}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Read more</a>
                    </div>
                            </div>
                })
            }
     
        </div>
          
        </div>
   
  )
}

export default Rest