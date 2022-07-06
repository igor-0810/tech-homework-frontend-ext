import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl';
import CicrcleButton from '../../Atoms/CicrcleButton';
import StyledPopupItem from '../../Atoms/StyledPopup';
import { getCities } from '../../../helpers/getCities';
import './style.css';

// eslint-disable-next-line no-unused-vars
const MyMap = ({ data, zoomIntoview, setZoomIntoview, mapboxToken }) => {
    const [viewState, setViewState] = React.useState({
        longitude: -120,
        latitude: 35,
        zoom: 6,
    });

    const mainPlaces = getCities(data);

    const [selectedStore, setSelectedStore] = useState(null);
    console.log(data);

    useEffect(() => {
        if (zoomIntoview)
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
            mapboxAccessToken={mapboxToken}
        >
            <NavigationControl />

            {viewState.zoom < 8 &&
        mainPlaces.length > 0 &&
        mainPlaces.map((place) => (
            <Marker
                key={place.city}
                longitude={place.longitude}
                latitude={place.latitude}
            >
                <CicrcleButton
                    onClick={() => {
                        setViewState({
                            longitude: place.longitude,
                            latitude: place.latitude,
                            zoom: 10,
                        });
                    }}
                    label={place.numberOfStores}
                />
            </Marker>
        ))}
            {viewState.zoom > 8 &&
        data.map((store) => (
            <Marker
                key={store.city}
                longitude={store.longitude}
                latitude={store.latitude}
            >
                <img
                    onClick={() => setSelectedStore(store)}
                    src="map-marker.svg"
                    style={{ width: '40px', height: '40px' }}
                />
            </Marker>
        ))}
            {selectedStore ? (
                <Popup
                    longitude={selectedStore.longitude}
                    latitude={selectedStore.latitude}
                    closeOnClick={false}
                    onClose={() => setSelectedStore(null)}
                    className="map-box-popup"
                    // style={{maxWidth: 'inherit', padding: '0px !important'}}
                >
                    <StyledPopupItem
                        name={selectedStore.name}
                        address={selectedStore.address}
                    />
                </Popup>
            ) : null}
        </Map>
    );
};

MyMap.propTypes = {
    data: PropTypes.array.isRequired,
    setZoomIntoview: PropTypes.func.isRequired,
    mapboxToken: PropTypes.string.isRequired,
    zoomIntoview: PropTypes.object,
};

MyMap.defaultProps = {
    zoomIntoview: null,
};

export default MyMap;
