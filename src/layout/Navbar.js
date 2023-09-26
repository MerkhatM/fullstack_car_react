import React from 'react';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#184927' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a aria-current="page" className="nav-link active" href="/" style={{ color: 'whitesmoke' }}>
                                    All cars
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)" id="registeredInKz" style={{ color: 'whitesmoke' }}>
                                    Registered Cars
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)" id="unRegisteredInKz" style={{ color: 'whitesmoke' }}>
                                    Unregistered Cars
                                </a>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <a className="nav-link ml-2" href="javascript:void(0)" style={{ color: 'whitesmoke' }}>
                                        Year Range:
                                    </a>
                                    <input className="form-control me-2 ml-2" id="startYear" name="startYear" placeholder="startYear:" style={{ width: '100px' }} type="number" />
                                    <input className="form-control me-2" id="endYear" name="endYear" placeholder="endYear:" style={{ width: '100px' }} type="number" />
                                    <button className="btn btn-outline-success" id="filterByRangeYear">
                                        Filter
                                    </button>
                                </div>
                            </li>
                        </ul>

                        <input aria-label="Search" className="form-control me-2" id="search" name="search" placeholder="Search" style={{ width: '150px' }} type="search" />
                        <button className="btn btn-outline-success" id="searchBtn">
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
