import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div id="contact">
            <h3 className="contact-header">Contact Us</h3>
            <div className="contact-info">
                <FontAwesomeIcon icon={faPhoneSquare} size="2x" className="phone-icon"/>
                <span className="contact-value"><a href="tel:902-714-0521">(902) 714-0521</a></span><br />
                <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" className="email-icon"/>
                <span className="contact-value"><a href="mailto:antigonishhvac@gmail.com">antigonishhvac@gmail.com</a></span><br />
                <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="location-icon"/>
                <span className="contact-value"><a href="https://maps.google.com/?q=Antigonish, Nova Scotia">Antigonish, NS</a></span>
            </div>
        </div>
    )
}

export default Contact;
