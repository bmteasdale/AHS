import React from 'react';
import Napoleon from '../res/NapoleonLogo-compressed.jpg';
import Mitsubishi from '../res/MitsubishiLogo.jpg';
import Fujitsu from '../res/FujitsuLogo-compressed.jpg';
import York from '../res/YorkLogo-compressed.jpg';

function Brands() {
    return (
        <div id="brands">
            <h3 className="brands-header">Trusted Brands</h3>
                <div className="brands-gallery">

                    {/* <!-- Grid column --> */}
                    <div className="mb-3 col-md-12">
                        <img className="img-fluid brand-logo" src={Napoleon} alt="first brand"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3 col-md-12">
                        <img className="img-fluid brand-logo" src={Mitsubishi} alt="second brand"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3 col-md-12">
                        <img className="img-fluid brand-logo" src={Fujitsu} alt="third brand"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3 col-md-12">
                        <img className="img-fluid brand-logo" src={York} alt="fourth brand"/>
                    </div>
                </div>
            </div>
    )
}

export default Brands;