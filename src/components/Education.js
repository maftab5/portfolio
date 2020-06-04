import React from "react";
import FadeInSection from "./FadeInSection";

const Education = (props) =>{
    return (
        <>
            {/*EDUCATION STARTS*/}
            <div className="container">

                <div className="col-lg-12 about_section">
                    EDUCATION
                </div>

                {
                    props.education.map(item => (
                        <FadeInSection>
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">


                                <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                                    <strong> {item.college_name}</strong>
                                </div>

                                <div className="innerText">
                                    <p>{item.address}</p>

                                    <p>{item.program}</p>


                                </div>

                                <div className="section-footer">
                                    <p>{item.duration} years</p>
                                </div>

                            </div>
                        </FadeInSection>
                    ))
                }

            </div>


            {/*EDUCATION ENDS*/}
    </>
    )
}
export default Education