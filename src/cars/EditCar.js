    import React, {useEffect, useState} from 'react';
    import {Link, useNavigate, useParams} from "react-router-dom";
    import axios from "axios";

    export default function EditCar() {

        let navigate=useNavigate()
        const {id}=useParams()
        const [car, setCar] = useState({
            mark: "",
            model: "",
            year: "",
            color: "",
            registrationKz: true
        })
        const {mark, model, year, color, registrationKz} = car

        const onInputChang = (e) => {
            setCar({...car, [e.target.name]: e.target.value})
        }
        useEffect(()=>{
            loadUser()
        },[])
        const onSubmit =async (e) => {
            e.preventDefault()
            await axios.put(`http://localhost:8090/cars/${id}`,car)
            navigate("/")
        }

        const loadUser=async ()=>{
            const result=await axios.get(`http://localhost:8090/cars/${id}`)
            setCar(result.data);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-6 mx-auto border rounded p-4 mt-2 shadow'>
                        <h2 className="text-center">EDIT CAR</h2>
                        <form onSubmit={(e)=>onSubmit(e)}>

                            <div className="mb-3">
                                <label className="form-label">Mark</label>
                                <input className="form-control" name="mark" value={mark} placeholder="Insert mark"
                                       type={"text"} onChange={(e) => onInputChang(e)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Model</label>
                                <input className="form-control" name="model" value={model} placeholder="Insert model"
                                       type={"text"} onChange={(e) => onInputChang(e)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Year</label>
                                <input className="form-control" name="year" value={year} min="1920"
                                       placeholder="Insert year" type={"number"} onChange={(e) => onInputChang(e)}/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Color</label>
                                <input className="form-control" name="color" value={color} placeholder="Insert color"
                                       type={"text"} onChange={(e) => onInputChang(e)}/>

                            </div>
                            <div className="mb-3">
                                <label className="form-label me-2">РАСТАМОЖЕН В КАЗАХСТАНЕ</label>
                                <input id="registrationKz1" name="registrationKz" type={"radio"} value={true}
                                       onChange={(e) => onInputChang(e)}  checked={registrationKz === true}/>
                                <label className="me-2" htmlFor="registrationKz1">YES</label>
                                <input id="registrationKz2" name="registrationKz" type={"radio"} value={false}
                                       onChange={(e) => onInputChang(e)}  checked={registrationKz === false} />
                                <label htmlFor="registrationKz2">NO</label>


                            </div>
                            <button className="btn btn-success me-3" type={"submit"}>SUBMIT</button>
                            <Link className="btn btn-outline-danger" to="/">CANCEL</Link>
                        </form>



                    </div>
                </div>
            </div>
        )
    }