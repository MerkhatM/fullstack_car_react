import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function AddCar() {
    let navigate=useNavigate()
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

    const onSubmit =async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8090/cars",car)
        navigate("/")

    }
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6 mx-auto border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center">ADD CAR</h2>
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
                            <input className="form-control" name="year" value={year} min={1920} max={2023}
                                   placeholder="Insert year" type={"number"} onChange={(e) => onInputChang(e)}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Color</label>
                            <input className="form-control" name="color" value={color} placeholder="Insert color"
                                   type={"text"} onChange={(e) => onInputChang(e)}/>

                        </div>
                        <div className="mb-3">
                            <label className="form-label me-2">РАСТАМОЖЕН В КАЗАХСТАНЕ</label>
                            <input id="registrationKz1" name="registrationKz" type={"radio"} value="true"
                                   onChange={(e) => onInputChang(e)}   />
                            <label className="me-2" htmlFor="registrationKz1">YES</label>
                            <input id="registrationKz2" name="registrationKz" type={"radio"} value="false"
                                   onChange={(e) => onInputChang(e)}  />
                            <label htmlFor="registrationKz2">NO</label>

                        </div>
                        <button className="btn btn-success me-3" type={"submit"}>SUBMIT</button>
                        <Link className="btn btn-outline-danger" to="/">CANCEL</Link>
                    </form>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Назначить категории:
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label className="form-label">TYPE</label>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}