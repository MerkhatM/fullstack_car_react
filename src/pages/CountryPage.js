import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function CountryPage() {
    const {id}=useParams()
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        loadCategory()
    },[])
    const loadCategory=async ()=>{
        const result =await axios.get("http://localhost:8090/countries")
        setCountries(result.data)
    }
    const deleteCountry=async(id)=>{
        await axios.delete(`http://localhost:8090/countries/${id}`)
        loadCategory()
    }
    return (
        <div className="mt-4 col-10 mx-auto">
            <table className="table table-stripped" >
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SHORT_NAME</th>
                    <th>DETAILS</th>
                    <th>DELETE</th>
                </thead>
                <tbody >
                    {countries.map((country,index)=>(
                         <tr key={index}>
                             <th scope="row" >{country.id}</th>
                             <td>{country.name}</td>
                             <td>{country.shortName}</td>
                             <td><Link className='btn btn-info' to={`/editCountry/${country.id}`} >EDIT</Link></td>
                             <td><Link className='btn btn-danger' onClick={()=>{deleteCountry(country.id)}} >DELETE</Link></td>
                         </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}