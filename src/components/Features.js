import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faTools } from '@fortawesome/free-solid-svg-icons';
export default function Features() {
    return (
        <div id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 feature-box">
                        <FontAwesomeIcon icon={faAward} size="4x"/>
                        <h3>Red Seal Certified</h3>
                        <p>Refrigeration & Air Conditioning Technician</p>
                    </div>
                    <div className="col-lg-6 feature-box">
                        <FontAwesomeIcon icon={faTools} size="4x"/>
                        <h3>On Time and Efficient</h3>
                        <p>We take pride in offering you the highest standards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

