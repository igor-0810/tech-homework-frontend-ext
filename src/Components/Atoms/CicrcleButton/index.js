import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import './style.css';

const CircleButton = ({  onClick, ...props }) => {
    return (
        <Button
      
            onClick={onClick}
            className="border-circle border-3 bg-white text-color styledButton"
            {...props}
        />
    );
};

CircleButton.propTypes = { 
    onClick: PropTypes.func.isRequired,
};



export default CircleButton;