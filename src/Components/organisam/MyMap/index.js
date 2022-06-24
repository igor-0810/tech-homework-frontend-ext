import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import CicrcleButton from '../../Atoms/CicrcleButton';
import StyledPopupItem from '../../Atoms/StyledPopup';


const MyMap = ({ data, zoomIntoview }) => {
    const [viewState, setViewState] = React.useState({
        longitude: -120,
        latitude: 35,
        zoom: 6,
    });

    const [selectedStore, setSelectedStore] = useState(null);
    

    useEffect(() => {
        if(zoomIntoview)
            setViewState({
                longitude: zoomIntoview.longitude,
                latitude: zoomIntoview.latitude,
                zoom: 15,
            });

    }, [zoomIntoview]);

    return (
        <Map
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1IjoiaWdvcml2YW5vdiIsImEiOiJjbDRteDlseHcxOXlyM2NtaDFqYm1zajBzIn0.Ih1dDKmkuHaXZpLKUaR0Iw"
        >
            <NavigationControl />
            {data.map((place, index) => (
                <Marker
                    key={place.name}
                    latitude={place.latitude}
                    longitude={place.longitude}
                >
                    <CicrcleButton
                        onClick={() => {
                            setSelectedStore(place);
                        }}
                        label={index + 1}
                    />
                </Marker>
            ))}
            {selectedStore ? (
                <Popup
                    longitude={selectedStore.longitude}
                    latitude={selectedStore.latitude}
                    anchor="top"
                    closeOnClick={false}
                    onClose={() => setSelectedStore(null)}
                >
                    <StyledPopupItem
                        name={selectedStore.name}
                        address={selectedStore.address}
                        city={selectedStore.city}
                        country={selectedStore.country}
                    />
                </Popup>
            ) : null}
        </Map>
    );
};

MyMap.propTypes = {
    data: PropTypes.array.isRequired,
    zoomIntoview: PropTypes.object,
};

MyMap.defaultProps = {
    zoomIntoview: null
};

export default MyMap;