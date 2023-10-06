import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function EditCar() {
    let navigate = useNavigate()
    const {id}=useParams()
    const [countries, setCountries] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        loadCountry();
        loadCategory();
        loadCar();
    }, [])
    const loadCountry = async () => {
        const result = await axios.get("http://localhost:8090/countries")
        setCountries(result.data)
    }
    const loadCategory = async () => {
        const result = await axios.get("http://localhost:8090/categories")
        setCategories(result.data)
    }
    const [car, setCar] = useState({
        mark: "",
        model: "",
        year: "",
        color: "",
        registrationKz: true,
        country: {
            id: ""
        },
        categories:[]
    })
    const {mark, model, year, color, registrationKz} = car

    const loadCar=async ()=>{
        const result=await axios.get(`http://localhost:8090/cars/${id}`)
        setCar(result.data);
    }

    const onInputChang = (e) => {
        const [fieldName, nestedField] = e.target.name.split('.');
        if (nestedField === "id") {
            setCar({
                ...car,
                [fieldName]: {
                    ...car[fieldName],
                    [nestedField]: e.target.value
                }
            });
        } else {
            setCar({ ...car, [fieldName]: e.target.value });

        }
    };
    const [selectedCategoryIds, setSelectedCategoryIds] = useState([]); // New state for selected category IDs

    const handleCategorySelection = (categoryId) => {
        if (selectedCategoryIds.includes(categoryId)) {
            setSelectedCategoryIds(selectedCategoryIds.filter(id => id !== categoryId));
        } else {
            setSelectedCategoryIds([...selectedCategoryIds, categoryId]);
        }
    };

    const setCategoryToCar=(e)=>{
        setCar( {
            ...car,
            categories: selectedCategoryIds.map(id => ({ id })),
        });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8090/cars/${id}`,car)
        navigate("/");
    };



    return (
        <div className="container">
            <div className="row">
                <div className='col-md-6 mx-auto border rounded p-4 mt-2 shadow'>
                    <h2 className="text-center">EDIT CAR</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
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
                            <input className="form-control" name="color" onChange={(e) => onInputChang(e)} value={color} placeholder="Insert color"
                                   type={"text"} />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <select name="country.id"  value={car.country.id} onChange={(e) => onInputChang(e)} className="form-select">
                                {countries.map((country, index) => (
                                    <option key={country.id} value={country.id} selected={country.id === car.country.id}>{country.name + " -- " + country.shortName}</option>
                                ))
                                }
                            </select>

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


                        <button type="button" className="btn btn-primary my-2" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            ВЫБОР КУЗОВА:
                        </button>
                        <br/>
                        <button className="btn btn-success me-3" type={"submit"}>SUBMIT</button>
                        <Link className="btn btn-outline-danger me-3" to="/">CANCEL</Link>


                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table">
                                            <thead>
                                            <th>Выбрать</th>
                                            <th>Кузов</th>
                                            </thead>
                                            <tbody>

                                            {categories.map((category, index) => (
                                                <tr key={category.id}>
                                                    <td><input type="checkbox" name="categories.id" checked={car.categories.some((c) => c.id === category.id)}
                                                               value={category.id}  onChange={() => handleCategorySelection(category.id)}/></td>
                                                    <td>{category.type}</td>
                                                </tr>
                                            ))}

                                            </tbody>
                                        </table>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=>{setCategoryToCar(e)}} >Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}