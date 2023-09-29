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

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false" style={{ color: '#c7c124' }}>
                                    Car
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a aria-current="page" className="dropdown-item" href="/" style={{ color: '#c7c124' }}>All cars</a></li>
                                    <li><a className="dropdown-item" href="/registeredCars" id="registeredInKz" style={{ color: '#c7c124' }}>Registered Cars</a></li>
                                    <li><a className="dropdown-item" href="/unRegisteredCars" id="unRegisteredInKz" style={{ color: '#c7c124' }}>Unregistered Cars</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="bg-body-secondary dropdown-item" to="/addCar" style={{ color: '#c7c124' }}>Add Car</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/categoryPage" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false" style={{ color: '#c7c124' }}>
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a aria-current="page" className="dropdown-item" href="/categoryPage" style={{ color: '#c7c124' }}>All categories</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="bg-body-secondary dropdown-item" to="/addCategory" style={{ color: '#c7c124' }}>Add category</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false" style={{ color: '#c7c124' }}>
                                    Country
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a aria-current="page" className="dropdown-item" href="/countryPage" style={{ color: '#c7c124' }}>All countries</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="bg-body-secondary dropdown-item" to="/addCountry" style={{ color: '#c7c124' }}>Add country</Link></li>
                                </ul>
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
