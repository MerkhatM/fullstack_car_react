import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function AddCountry() {
    let navigate=useNavigate()
    const [country, setCar] = useState({
        name: "",
        shortName: "",

    })
    const {name,shortName} = country

    const onInputChang = (e) => {
        setCar({...country, [e.target.name]: e.target.value})
    }

    const onSubmit =async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8090/countrys",country)
        navigate("/countryPage")

    }
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6 mx-auto border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center">ADD COUNTRY</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">Mark</label>
                            <input className="form-control" name="name" value={name} placeholder="Insert name"
                                   type={"text"} onChange={(e) => onInputChang(e)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Model</label>
                            <input className="form-control" name="shortName" value={shortName} placeholder="Insert shortName"
                                   type={"text"} onChange={(e) => onInputChang(e)}/>
                        </div>

                        <button className="btn btn-success me-3" type={"submit"}>SUBMIT</button>
                        <Link className="btn btn-outline-danger" to="/countryPage">CANCEL</Link>
                    </form>



                </div>
            </div>
        </div>
    )
}