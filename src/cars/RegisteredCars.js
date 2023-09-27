import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function RegisteredCars() {
    const {id}=useParams()
    const [cars,setCars]=useState([])
    useEffect(()=>{
        loadCars()
    },[])
    const loadCars=async ()=>{
        const result =await axios.get("http://localhost:8090/cars/registeredInKz")
        setCars(result.data)
    }
    const deleteCar=async(id)=>{
        await axios.delete(`http://localhost:8090/cars/${id}`)
        loadCars()
    }
    return (
        <div className="mt-4 col-10 mx-auto">
            <table className="table table-stripped" id="academyTable">
                <thead>
                    <th>ID</th>
                    <th>MARK</th>
                    <th>MODEL</th>
                    <th>YEAR</th>
                    <th>COLOR</th>
                    <th>REGISTERED IN KZ</th>
                    <th>DETAILS</th>
                    <th>DELETE</th>
                </thead>
                <tbody id="allCars">
                    {cars.map((car,index)=>(
                         <tr>
                             <th scope="row" key={index}>{car.id}</th>
                             <td>{car.mark} </td>
                             <td>{car.model} </td>
                             <td> {car.year} </td>
                             <td> {car.color} </td>
                             <td> {car.registrationKz? 'Registered' : 'Unregistered'} </td>
                             <td><Link className='btn btn-info' to={`/editCar/${car.id}`} >EDIT</Link></td>
                             <td><Link className='btn btn-danger' onClick={()=>{deleteCar(car.id)}} >DELETE</Link></td>
                         </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}