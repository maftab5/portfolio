import React from "react";
import FadeInSection from "./FadeInSection";

const Education = ({education}) => {
    return (
        <>
            {/*EDUCATION STARTS*/}
            <div className="container">
                <FadeInSection>
                <div className="col-lg-12 about_section">
                    EDUCATION
                </div>

                {
                    education.map(item => (

                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div"
                                 key={item.eduId}>
                                <div className="section_header">
                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 col-sm-12 company_name">
                                            <strong> {item.college_name}</strong>
                                        </div>
                                    </div>
                                </div>
                                        <div className="innerText">
                                            <p>{item.address}</p>

                                            <p>{item.program}</p>


                                        </div>

                                        <div className="section-footer">
                                            <p>{item.duration} </p>
                                        </div>

                            </div>

                    ))
                }
                </FadeInSection>
            </div>


            {/*EDUCATION ENDS*/}
        </>
    )
}
export default Education