import React from 'react';

function PrevWork() {
    return (
        <div id="prev-work">
            <h3 className="prev-work-header">Our Work</h3>
            {/* <!-- Grid row --> */}
            <div className="row">
                <div className="gallery">

                    {/* <!-- Grid column --> */}
                    <div className="mb-3">
                        <img className="img-fluid" src={require("../res/floorModel.jpeg")} alt="first"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3">
                        <img className="img-fluid" src={require("../res/bethany_compressed.jpg")} alt="second"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3">
                        <img className="img-fluid" src={require("../res/seventh_card-compressed.jpg")} alt="third"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3">
                        <img className="img-fluid" src={require("../res/OutdoorUnit.jpeg")} alt="fourth"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3">
                        <img className="img-fluid" src={require("../res/MarangoniOutdoorUnit.jpeg")} alt="fifth"/>
                    </div>

                    {/* <!-- Grid column --> */}
                    <div className="mb-3">
                        <img className="img-fluid" src={require("../res/goodmanOutdoorUnit.jpeg")} alt="sixth"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PrevWork;