import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export default function AddCategory() {
    let navigate=useNavigate()
    const [category, setCategory] = useState({
        type:""
    })
    const {type} = category

    const onInputChang = (e) => {
        setCategory({...category, [e.target.name]: e.target.value})
    }

    const onSubmit =async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8090/categories",category)
        navigate("/categoryPage")

    }
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6 mx-auto border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center">ADD CATEGORY</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label className="form-label">TYPE</label>
                            <input className="form-control" name="type" value={type} placeholder="Insert type:"
                                   type={"text"} onChange={(e) => onInputChang(e)}/>
                        </div>

                        <button className="btn btn-success me-3" type={"submit"}>SUBMIT</button>
                        <Link className="btn btn-outline-danger" to="/">CANCEL</Link>
                    </form>



                </div>
            </div>
        </div>
    )
}