import React from 'react';
import { Button } from 'primereact/button';
import headerImage from '../res/ahs_van_side.jpeg'
import { useMediaQuery } from 'react-responsive';

export default function Title() {
    const isMediumScreen = useMediaQuery({ maxWidth: 768});

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div>
            {isMediumScreen ? (
                    // Render col-12 content for medium screens
                    <div className="grid grid-nogutter surface-0 text-800">
                        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                            <section>
                                <span className="block text-6xl font-bold mb-1">Antigonish</span>
                                <div className="text-6xl text-primary font-bold ">HVAC Solutions</div>
                                <span className="block text-6xl font-bold mb-1">Inc.</span>
                                <p className="mt-0 mb-4 text-700 line-height-3">Trust the team at Antigonish HVAC Solutions Inc. to provide all of your residential and commercial heat pump needs.</p>

                                <Button label="Our Work" icon="pi pi-arrow-right" iconPos="right" className="mr-3 p-button-raised" onClick={() => scrollToSection('prev-work')}/>
                                <Button label="Get In Touch" icon="pi pi-arrow-right" iconPos="right" className="p-button-outlined" onClick={() => scrollToSection('contact-section')}/>
                            </section>
                        </div>
                    </div>
                ) : (
                    // Render col-6 content for other screens
                    <div className="grid grid-nogutter surface-0 text-800">
                        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                            <section>
                                <span className="block text-6xl font-bold mb-1">Antigonish</span>
                                <div className="text-6xl text-primary font-bold ">HVAC Solutions</div>
                                <span className="block text-6xl font-bold mb-1">Inc.</span>
                                <p className="mt-0 mb-4 text-700 line-height-3">Trust the team at Antigonish HVAC Solutions Inc. to provide all of your residential and commercial heat pump needs.</p>

                                <Button label="Our Work" icon="pi pi-arrow-right" iconPos="right" className="mr-3 p-button-raised" onClick={() => scrollToSection('prev-work')}/>
                                <Button label="Get In Touch" icon="pi pi-arrow-right" iconPos="right" className="p-button-outlined" onClick={() => scrollToSection('contact-section')}/>
                            </section>
                        </div>
                        <div className="col-12 md:col-6 overflow-hidden">
                            <img src={headerImage} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} width="500px" height="568px"/>
                        </div>
                    </div>
                )}
        </div>
    )
}
