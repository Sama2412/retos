// Placeholder to host a component
import React from 'react';

const Hours = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();

    return (
        <div>
            <h2>Current Hour</h2>
            <p>The current hour is: {hours}</p>
        </div>
    );
};

export default Hours;
