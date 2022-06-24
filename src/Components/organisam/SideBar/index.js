import React from 'react';
import PropTypes from 'prop-types';
// import { Sidebar } from "primereact/sidebar";
import SideBarBox from '../../Atoms/SideBarBox';
import { getColors } from '../../../helpers/getColors';

const SideBar = ({ data, setZoomIntoview }) => {

    const myColors = React.useMemo(() => getColors(data), [data]);

    return (
        <div className="h-full overflow-y-scroll p-5">
            {myColors &&
        data.map((item, index) => (
            <SideBarBox
                onClick={() => setZoomIntoview(item)}
                key={item.name}
                name={item.name}
                city={item.city}
                iconColor={myColors[index].color}
                iconBackground={myColors[index].background}
            />
        ))}
        </div>
    );
};

SideBar.propTypes = {
    data: PropTypes.array.isRequired,
    setZoomIntoview: PropTypes.func.isRequired,
  
};



export default SideBar;
