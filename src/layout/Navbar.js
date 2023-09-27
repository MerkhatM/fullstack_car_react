import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleStartYearChange = (e) => {
        setStartYear(e.target.value);
    };

    const handleEndYearChange = (e) => {
        setEndYear(e.target.value);
    };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/searchAndFilterByRange/${startYear}/${endYear}/${searchText}`);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#184927' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><Link className="btn btn-outline-secondary" to="/addCar">Add Car</Link></li>
                            <li className="nav-item">
                                <a aria-current="page" className="nav-link active" href="/" style={{ color: 'whitesmoke' }}>
                                    All cars
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/registeredCars" id="registeredInKz" style={{ color: 'whitesmoke' }}>
                                    Registered Cars
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/unRegisteredCars" id="unRegisteredInKz" style={{ color: 'whitesmoke' }}>
                                    Unregistered Cars
                                </a>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <a className="nav-link ml-2" href="javascript:void(0)" style={{ color: 'whitesmoke' }}>
                                        Year Range:
                                    </a>
                                    <input className="form-control me-2 ml-2" id="startYear" defaultValue={1920} name="startYear" placeholder="startYear:" style={{ width: '100px' }} type="number" value={startYear} onChange={handleStartYearChange} />
                                    <input className="form-control me-2" id="endYear" defaultValue={2023} name="endYear" placeholder="endYear:" style={{ width: '100px' }} type="number" value={endYear} onChange={handleEndYearChange} />
                                    <button onClick={handleClick} className="btn btn-outline-success" id="filterByRangeYear">
                                        Filter
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <input aria-label="Search" className="form-control me-2" id="search" name="search" placeholder="Search" style={{ width: '150px' }} type="search" value={searchText} onChange={handleSearchTextChange} />
                        <button onClick={handleClick} className="btn btn-outline-success" id="searchBtn">
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
