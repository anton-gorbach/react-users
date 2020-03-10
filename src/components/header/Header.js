import React from 'react';

function Header({sortName, sortCity}) {

    const sortByName = () => {
        sortName();
    };

    const sortByCity = () => {
        sortCity();
    };

    return (
        <nav className="navbar navbar-dark bg-primary">
            <h1>Header</h1>
            <a href="#" className="btn btn-primary" onClick={sortByName}>Sort by name</a>
            <a href="#" className="btn btn-primary" onClick={sortByCity}>Sort by city</a>
        </nav>
    );
}

export default Header;