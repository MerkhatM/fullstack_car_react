    import React, {useEffect, useState} from 'react';
    import {Link, useNavigate, useParams} from "react-router-dom";
    import axios from "axios";

    export default function EditCountry() {

        let navigate=useNavigate()
        const {id}=useParams()
        const [country, setCar] = useState({
            name:"",
            shortName:""
        })
        const {name,shortName} = country

        const onInputChang = (e) => {
            setCar({...country, [e.target.name]: e.target.value})
        }
        useEffect(()=>{
            loadCountry()
        },[])
        const onSubmit =async (e) => {
            e.preventDefault()
            await axios.put(`http://localhost:8090/countries/${id}`,country)
            navigate("/countryPage")
        }

        const loadCountry=async ()=>{
            const result=await axios.get(`http://localhost:8090/countries/${id}`)
            setCar(result.data);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-6 mx-auto border rounded p-4 mt-2 shadow'>
                        <h2 className="text-center">EDIT COUNTRY</h2>
                        <form onSubmit={(e)=>onSubmit(e)}>

                            <div className="mb-3">
                                <label className="form-label">NAME</label>
                                <input className="form-control" name="name" value={name} placeholder="Insert name"
                                       type={"text"} onChange={(e) => onInputChang(e)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">SHORT NAME</label>
                                <input className="form-control" name="shortName" maxLength={3} minLength={2} value={shortName} placeholder="Insert shortName"
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