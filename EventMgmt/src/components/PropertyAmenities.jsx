import React from 'react';
import property from "./propertydata";
import Property from "./Property";
import { Link } from "react-router-dom";

const PropertyAmenities = () => {
    const flexContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '1rem',
        marginRight: '1rem',
        flexWrap: 'wrap',
        
        
    };

    const headerStyle = {
        textAlign: 'center',
        fontSize: '3rem', 
        marginBottom: '2rem', 
        backgroundColor: '#167AA5',
        color: '#fff',
        padding: '1rem',
        width: '100%',
        position:'relative',
        zIndex: 1,
        top: 0,
        left: 0,

    };

    const footerStyle = {
        textAlign: 'center',
        marginTop: '3rem', 
        fontSize: '2rem', 
        color: '#333', 
        backgroundColor: '#167AA5',
        // position: 'absolute',
        left: 0,
        bottom:0, 
        width: '100%',
        padding: '1rem',
        color: '#fff'
    };

    return (
        <div className="bg-gray-100 text-gray-700 py-32">
            <header style={headerStyle}>
                <h2>NEXUS EVENTS</h2>
            </header>

            <div style={flexContainerStyle} className="flex justify-around mx-24 flex-wrap">
                {property.map((value, index) => (
                    <Link key={index} to={value.slug}>
                        <Property nameofproperty={value.nameofproperty} Icon={value.Icon} />
                    </Link>
                ))}
            </div>

            <footer style={footerStyle}>
                <h1>"Some people look for a beautiful place. Others make a place beautiful.” NEXUS</h1>
                <p>Made by NEXUS Groups</p>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default PropertyAmenities;
