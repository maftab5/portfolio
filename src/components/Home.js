import React, {Component} from "react";
import '../css/App.css'
import '../css/Home.css'
import {Link} from 'react-router-dom'
import { TravelerEffect, MosaicGroundEffect, OceanEffect,
    RainEffect, SeaWaveEffect, SnowFallEffect, SnowFallSlowEffect,
    SpacingEffect, CloudWaveEffect
} from 'react-background-animation'


class Home extends Component{
    render() {
        return (
            <>


                <div className="container" style={{marginTop: '4%'}}>
                    <div className="row">
                        <div className="col-lg-8 col-md-12  flex-column flex-center nameDiv">
                            <h1>Aftab</h1><br/>
                            <span className="highlight-word">
                                <span className="highlight-inner">
                                    <h1>
                                    Mohammad
                                </h1></span>

                            </span>
                            <span className="jobText">
                                Full Stack Developer
                            </span>

                    </div>
                        <div className="col-lg-4">
                            <TravelerEffect/>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 socialLinks">

                            <span className="col-lg-3 col-md-3 col-sm-3 col-xs-3"> <Link to="#">Facebook |</Link></span>
                            <span className="col-lg-3 col-md-3 col-sm-3 col-xs-3"><Link to="#">LinkedIn |</Link></span>
                            <span className="col-lg-3 col-md-3 col-sm-3 col-xs-3"><Link to="#">Instagram </Link></span>

                        </div>

                </div>
                </div>
            </>
            )

    }
}
export default Home;