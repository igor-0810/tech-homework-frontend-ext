import React from 'react';
import PropTypes from 'prop-types';

const Template = ({ sideBar, children }) => {
    return (
        <div className="grid">
            <div className="col-3 h-screen p-0">{sideBar}</div>
            <div className="col-9 p-0">
     
                {children}</div>
        </div>
    );
};

Template.propTypes = {
    sideBar: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
};

export default Template;