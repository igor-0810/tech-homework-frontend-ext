import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'primereact/avatar';
import './style.css';

const StyledPopupItem = ({avatar, name, address }) => {
    const [isChecked, setIsChecked] = React.useState(false);
    const generatedName = (storeName) => {        

        if (storeName.split(' ').includes('-')){
            let separatedName = storeName.split(' ');
            return (
                separatedName[separatedName.length - 2].substring(0, 1) +
                separatedName[separatedName.length - 1].substring(0, 1)
            );
        } 
        else if (
            storeName.split(' ').length > 3 
        ) {
            return (
                storeName.split(' ')[4].substring(0, 1) +
              storeName.split(' ')[5].substring(0, 1)
            );
            
        } 

        return (
            storeName.split(' ')[0].substring(0, 1) +
          storeName.split(' ')[1].substring(0, 1)
        );
       
       
    };

    

    return (
        <div className="styled-popup">
            <div>
                <Avatar
                    label={!avatar && generatedName(name)}
                    image={avatar && avatar}
                    className="p-avatar-circle styled-avatar"
                />
            </div>

            <div>
                <h4 style={{ fontSize: '18px' }}>{name}</h4>
                <span style={{ fontSize: '14px' }}>{address}</span>
            </div>
            <i className="pi pi-check mr-2 check-icon" onClick={() => setIsChecked(!isChecked)} style={{color: `${isChecked ? 'blue': 'lightblue'}`}}></i>
        </div>
    );
};

StyledPopupItem.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired ,
    country:PropTypes.string.isRequired,
    avatar: PropTypes.string
};



export default StyledPopupItem;
