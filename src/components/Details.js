import React,{useEffect,Component} from "react";
import {FaDownload, FaLinkedin} from "react-icons/all";
import AnimateWord from "./$AnimateWords";
import {Animate, AnimateGroup,useAnimateGroup,useAnimate} from "react-simple-animate/dist/index.es";
import FadeInSection from "./FadeInSection";



const Details = ({about}) => {
const recBy = () =>{
    var reccBy;
    about.map(item => {
         reccBy = item.recby;
        return(
        <p style={{fontSize:50}}>{item}</p>
        )
    })
    console.log(`this is rec ${reccBy}`);
    return (

        <p>
            {about.by}
        </p>
    )
}
    return(
        <>
            {
                about.map(item => (
//<FadeInSection>

                    <div className="row" key={item.abtId}>
                        <div className="col-lg-12 about_image_div flex-center">
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
            <div className="col-lg-12" style={{position:'relative',zIndex:'2',top:'-100px'}}>

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