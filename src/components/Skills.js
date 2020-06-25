import React from "react";
import FadeInSection from "./FadeInSection";
import {
    FaReact, FaAngular, FaHtml5, FaCss3Alt,
    FaNodeJs, FaGithub, FaPhp, FaWordpress, FaAws, FaLinux
} from "react-icons/fa";

const Skills = () => {
    return (
        <>
            {/*SKILLS SECTION STARTS*/}
            <div className="container">
                <div className="col-lg-12 about_section">
                    SKILLS
                </div>

                <FadeInSection>
                    {/*FRONT-END STARTS*/}

                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">

                        <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                            FRONT-END
                        </div>
                        <FadeInSection>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                    <FaReact size={80} style={{color: '#5ed4f4'}}/>
                                    <p>React Js</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                    <FaAngular size={80} style={{color: 'red'}}/>
                                    <p>Angular</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                    <FaHtml5 size={80} style={{color: 'orange'}}/>
                                    <p>Html5</p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                    <FaCss3Alt size={80} style={{color: 'lightblue'}}/>
                                    <p>CSS3</p>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>


                    {/*FRONT-END ENDS*/}
                </FadeInSection>
                <FadeInSection>
                    {/*BACK-END STARTS*/}
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">
                        <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                            BACK-END
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                <FaNodeJs size={80} style={{color: 'darkgreen'}}/>
                                <p>Node Js</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                <FaPhp size={80} style={{color: 'steelblue'}}/>
                                <p>PHP</p>
                            </div>

                        </div>

                    </div>
                    {/*BACK-END ENDS*/}
                </FadeInSection>
                <FadeInSection>
                    {/*OTHER STARTS*/}
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">
                        <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                            OTHERS
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                <FaWordpress size={80} style={{color: '#207297'}}/>
                                <p>Wordpress</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                <FaGithub size={80} style={{color: 'white'}}/>
                                <p>GitHub</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                <FaAws size={80} style={{color: 'orange'}}/>
                                <p>AWS</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                <FaLinux size={80} style={{color: 'white'}}/>
                                <p>Linux</p>
                            </div>

                        </div>

                    </div>
                    {/*OTHERS ENDS*/}
                </FadeInSection>
            </div>

            {/*SKILLS SECTION ENDS*/}
        </>
    )
}
export default Skills