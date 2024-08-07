import React from 'react';

const Headers = () => {
    return (
        <div>
            <header className="header">
            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>
            <div className="profile">
                <img src="profile-pic-url" alt="Profile" />
            </div>
        </header>
        </div>
    );
};

export default Headers;