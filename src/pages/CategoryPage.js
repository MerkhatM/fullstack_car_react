import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function CategoryPage() {
    const {id}=useParams()
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        loadCategory()
    },[])
    const loadCategory=async ()=>{
        const result =await axios.get("http://localhost:8090/categories")
        setCategories(result.data)
    }
    const deleteCar=async(id)=>{
        await axios.delete(`http://localhost:8090/categories/${id}`)
        loadCategory()
    }
    return (
        <div className="mt-4 col-10 mx-auto">
            <table className="table table-stripped" id="academyTable">
                <thead>
                    <th>ID</th>
                    <th>TYPE</th>
                    <th>DETAILS</th>
                    <th>DELETE</th>
                </thead>
                <tbody >
                    {categories.map((category,index)=>(
                         <tr key={index}>
                             <th scope="row" >{category.id}</th>
                             <td>{category.type}</td>
                             <td><Link className='btn btn-info' to={`/editCategory/${category.id}`} >EDIT</Link></td>
                             <td><Link className='btn btn-danger' onClick={()=>{deleteCar(category.id)}} >DELETE</Link></td>
                         </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}