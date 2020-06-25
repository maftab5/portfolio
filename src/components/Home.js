import React, {Component} from "react";
import '../css/App.css'
import '../css/Home.css'
import { TravelerEffect} from 'react-background-animation'


class Home extends Component{
    render() {
        return (
            <>
                <div className="container" style={{marginTop: '4%'}}>
                    <div className="row">
                        <div className="col-lg-8 col-md-12  flex-column flex-center nameDiv">
                            <h1>Aftab</h1><br/>
                            <span className="">
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

                            <span className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <a href="https://www.facebook.com/profile.php?id=100003252414672" target="_blank"  without rel="noopener noreferrer" >Facebook |</a>
                            </span>
                            <span className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <a href="https://www.linkedin.com/in/mohammad-aftab-91240a115/" target="_blank"  without rel="noopener noreferrer" >LinkedIn |</a>
                            </span>
                            <span className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                <a href="https://github.com/maftab5" target="_blank"  without rel="noopener noreferrer" >GitHub </a>
                            </span>

                        </div>

                </div>
                </div>
            </>
            )

    }
}
export default Home;