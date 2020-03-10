import React from 'react';

function AddCard() {

    return (
        <div className="card" style={{width : '18rem',float: 'left', minHeight: '15rem'}}>
            <div className="card-body">
                <div className="form-group">
                    <label for="user-name">Name</label>
                    <input type="text" className="form-control" id="user-name" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="user-email">Email</label>
                    <input type="email" className="form-control" id="user-email" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="user-city">City</label>
                    <input type="text" className="form-control" id="user-city" placeholder="Enter city"/>
                </div>
                <button className="btn btn-primary">Add user</button>
            </div>
        </div>
    );
}

export default AddCard;