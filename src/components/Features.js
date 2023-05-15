import React from 'react';

export default function Features() {
    return (
        <div id="features" className="py-6">
            <div className="text-center">
                <div className="mb-3 font-bold text-3xl">
                    <span className="text-900">One Company, </span>
                    <span className="text-blue-600">Many Solutions</span>
                </div>
                <div className="text-700 mb-6">Providing our customers with fast and reliable service is our top priority.</div>
                <div className="grid">
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="surface-0 p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-power-off text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Energy Efficient</div>
                        <span className="text-700 line-height-3">At Antigonish HVAC Solutions Inc., we're committed to helping you save energy and reduce your utility bills. We offer a variety of energy-efficient HVAC solutions, including high-efficiency heating and cooling systems, programmable thermostats, and duct sealing and insulation.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="surface-0 p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-cog text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Ducted System Installation</div>
                        <span className="text-700 line-height-3">Upgrade your home's heating and cooling system with a new ducted heat pump installation. We will help you choose the right system for your needs and install it quickly and professionally, so you can enjoy reliable and efficient comfort all year round.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="surface-0 p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-cog text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Ductless System Installation</div>
                        <span className="text-700 line-height-3">Consider a ductless heat pump installation for an energy-efficient and cost-effective way to heat and cool your home.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="surface-0 p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-cog text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Floor Mounted Heat Pump Installation</div>
                        <span className="text-700 line-height-3">For when wall space is limited, we install floor mounted units to provide reliable heating and cooling in a compact package, perfect for smaller homes or apartments. Let us help you find the right floor model for your needs.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="surface-0 p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-wrench text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Preventative Maintenance</div>
                        <span className="text-700 line-height-3">We offer comprehensive preventative maintenance services, including heat pump cleanings and inspections to ensure your heat pump operates at peak efficiency. </span>
                    </div>
                    <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                        <span className="surface-0 p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-cog text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Commercial Chillers</div>
                        <span className="text-700 line-height-3">Keep your business running smoothly with reliable and efficient commercial chiller services from Antigonish HVAC Solutions Inc. We install, maintain, and repair all types of chillers, so you can be sure your facility stays cool and comfortable year-round.</span>
                    </div>
                </div>
            </div>
        {/* <div id="features">
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
        </div> */}
        </div>
    )
}

