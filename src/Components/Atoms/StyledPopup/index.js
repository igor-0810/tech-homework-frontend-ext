import React from 'react';
import PropTypes from 'prop-types';


const StyledPopupItem = ({ name, address, city, country }) => {
    return (
        <div className="p-1">
            <h4>{name}</h4>
            <span className="text-xs">{address}</span>
            <br />
            <span className="text-xs">{city}</span>
            <br />
            <span className="text-xs">{country}</span>
        </div>
    );
};

StyledPopupItem.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired ,
    country:PropTypes.string.isRequired,
};

export default StyledPopupItem;
