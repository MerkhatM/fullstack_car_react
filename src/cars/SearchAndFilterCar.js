import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useLocation, useParams} from "react-router-dom";

export default function SearchAndFilterCar() {

    const { startYear, endYear, search } = useParams();
    const defaultValueStartYear = startYear || '1920';
    const defaultValueEndYear = endYear || '2023';
    const defaultValueSearch = search || '';
    const {id}=useParams()
    const [cars,setCars]=useState([])
    useEffect(()=>{
        loadCars()
    },[defaultValueStartYear, defaultValueEndYear, defaultValueSearch])
    const loadCars=async ()=>{
        const result =await axios.get(`http://localhost:8090/cars/search?startYear=${defaultValueStartYear}&endYear=${defaultValueEndYear}&search=${defaultValueSearch}`)
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
                         <tr key={car.id}>
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