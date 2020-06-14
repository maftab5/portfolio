import React from "react";
import {Animate, AnimateGroup} from "react-simple-animate/dist/index.es";
import FadeInSection from "./FadeInSection";



const Details = ({about}) => {

    return(
        <>
            {
                about.map(item => (


                    <div className="row" key={item.abtId}>
                        <div className="col-lg-12 about_image_div flex-center" style={{paddingLeft:'0 !important',paddingRight:'0 !important'}}>
                            <div className="row about_text">

                                <AnimateGroup
                                    play={true}
                                >
                                    {item.recommendation.split(' ').map((item, index) => {
                                        return (
                                            <Animate
                                                key={index}
                                                sequenceIndex={index}
                                                end={{ opacity: 1, transform: 'translateY(0)'}}
                                                start={{ opacity: 0, transform: 'translateY(-10px)'}}
                                            >
                                                {item} &nbsp;
                                            </Animate>

                                        )
                                    })
                                    }
                                </AnimateGroup>


                            </div>
                        </div>


                    </div>
                )


                )
            }
            <div className="col-lg-12 mainServiceDiv" style={{}}>

                <FadeInSection>
                    <div className="row ">

                        <div className="col-lg-3 col-md-3 col-sm-8 col-xs-8 m-auto services">
                            <h3>CREATIVITY</h3>
                            <p>User Experience</p>
                            <p>UX/UI</p>
                        </div><br/><br/><br/>
                        <div className="col-lg-3 col-md-3 col-sm-8 col-xs-8 m-auto services">
                            <h3>TECHNOLOGY</h3>
                            <p>Backend</p>
                            <p>Frontend</p>
                        </div><br/><br/><br/>
                        <div className="col-lg-3 col-md-3 col-sm-8 col-xs-8 m-auto services">
                            <h3>INNOVATION</h3>
                            <p>Web & Mobile Design</p>
                            <p>Interaction Design</p>
                        </div>
                    </div>
                </FadeInSection>
            </div>


        </>
    )}
export  default Details