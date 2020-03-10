import React from 'react';

function Card({user, deleteCardFunc, toggleCardFunc}) {

    const deleteCard = (usedId, e) => {
        deleteCardFunc(usedId);
    };

    const toggleCard = (cardId, e) => {
        toggleCardFunc(cardId);
    };

    return (
        <div key = {user.id} className="card" style={{width : '18rem',float: 'left',height: '17rem'}}>
            {
                !user.isHidden && <div className="card-body">
                    <h3 className="card-title">{user.name}</h3>
                    <h5 className="card-title">{user.email}</h5>
                    <h5 className="card-title">{user.address.city}</h5>
                    <button className="btn btn-primary" onClick={deleteCard}>Delete user</button>
                    </div>
            }
            <button className="btn btn-primary" onClick={toggleCard}>Toggle card</button>
        </div>
    );
}

export default Card;