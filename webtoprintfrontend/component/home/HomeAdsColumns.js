import React from 'react';
import { connect } from 'react-redux';
import Promotion from '../elements/media/Promotion';


const HomeAdsColumns = (props) => {

    return (
        <div className="ps-home-ads">
            <div className="ps-container">
                <div className="row">
                    {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion
                            
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion link="/" image=""/>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                        <Promotion 
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HomeAdsColumns;
