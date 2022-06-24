import React from 'react';
import PropTypes from 'prop-types';


const SideBarBox = ({ name, city, iconColor, iconBackground, onClick  }) => {
    return (
        <div
            className="flex align-items-center mb-5 justify-content-start "
            onClick={onClick}
        >
            <div>
                <i
                    className="pi pi-briefcase cursor-pointer"
                    style={{
                        fontSize: '1rem',
                        padding: '10px',
                        borderRadius: '4px',
                        color: `${iconColor}`,
                        backgroundColor: `${iconBackground}`,
                    }}
                ></i>
            </div>
            <div className="flex flex-column ml-3 cursor-pointer">
                <span className="font-medium text-sm mb-1">{name}</span>
                <span className="font-light text-sm">{city}</span>
            </div>
        </div>
    );
};

SideBarBox.propTypes = {
    name: PropTypes.string,
    city: PropTypes.string,
    iconColor: PropTypes.string,
    iconBackground: PropTypes.string,
    onClick: PropTypes.func,
};

SideBarBox.defaultProps = {
    name: '',
    city: '',
    iconColor: '',
    iconBackground: '',
    onClick: () => {},
};

export default SideBarBox;
