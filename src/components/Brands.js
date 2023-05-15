import React from 'react';
import Napoleon from '../res/NapoleonLogo-compressed.jpg';
import Moovair from '../res/mooveair.webp';
import Fujitsu from '../res/FujitsuLogo-compressed.jpg';
import York from '../res/YorkLogo-compressed.jpg';

function Brands() {
    return (
        <div id="brands">
            <h3 className="text-900 text-3xl font-bold text-center mb-6">Trusted Brands</h3>
                <div className="brands-gallery">

                    {/* <!-- Grid column --> */}
                    <div className="mb-3 col-md-12">
                        <img className="img-fluid brand-logo" src={Napoleon} alt="first brand"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3 col-md-12">
                        <img className="img-fluid brand-logo" src={Moovair} alt="second brand"/>
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