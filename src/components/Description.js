import React from 'react';
import { Button } from 'primereact/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function Description() {
    const handleEmail = () => {
        window.location.href = "mailto:antigonishhvac@gmail.com";
    };

    const handleCall = () => {
        window.location.href = "tel:902-714-0521";
    };

    return (
        <div id="contact-section" className="surface-0 text-700 text-center py-8">
            <div className="text-blue-600 font-bold mb-3"><FontAwesomeIcon icon={faAddressCard}/>&nbsp;GET IN TOUCH</div>
            <div className="text-900 font-bold text-5xl mb-3">Contact Us</div>
            <div className="text-700 text-2xl mb-5">Call today for your no obligation, free estimate.</div>
            <Button label="Call" icon="pi pi-phone" onClick={handleCall} className="font-bold px-5 mr-3 py-3 p-button-raised p-button-rounded white-space-nowrap" />
            <Button label="Email" icon="pi pi-inbox" onClick={handleEmail} className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
        </div>
        // <div id="details">
        //     <h4 className="comp-desc">Trust the team at Antigonish HVAC Solutions Inc. to provide all of your residential and commercial heat pump needs. As a preferred Nova Scotia Efficiency contractor, as well as Mitsubishi Diamond Contractor, Antigonish HVAC Solutions Inc. has experience in installing, servicing and maintaining all brands and types of heat pumps. Providing our customers with fast and reliable service is our top priority. <br />Call today for your no obligation, free estimate.</h4>
        // </div>
    )
}
