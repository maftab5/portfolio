import React from "react";
import FadeInSection from "./FadeInSection";

const Experience = ({experience}) =>{
    return (
        <>
            {/*EXPERIENCE SECTION STARTS*/}
            <div className="container">
                <div className="col-lg-12 col-md-12 about_section">
                    Experience
                </div>

                {
                    experience.map(item => (
<FadeInSection>
                            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 ml-auto about_inner_div" key={item.expId}>

                                <div className="section_header">
                                    <div className="row">
                                        {/*<div className="col-lg-2 col-md-2 col-sm-2 d-none d-sm-block  company_logo">*/}
                                        {/*    <img src={"./" + item.logo} alt="about"/>*/}
                                        {/*</div>*/}

                                        <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 company_name">
                                            <strong> {item.company_name}</strong>
                                        </div>
                                        <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 company_position">
                                            {item.position}
                                        </div>
                                    </div>
                                </div>

                                <div className="innerText">
                                    <p>{item.details}</p>

                                    <p>PROJECTS</p>
                                    <ul>
                                        { item.developed_projects.map(item => (
                                            <li>
                                                {item.name} : {item.desc}
                                            </li>
                                        ))
                                        }

                                    </ul>

                                    <p>ACCOMPLISHMENTS</p>
                                    <ul>
                                        { item.company_accomplishments.map(item => (
                                            <li>
                                                {item}
                                            </li>
                                        ))
                                        }
                                    </ul>

                                </div>

                                <div className="section-footer">
                                    <p>{item.job_duration} | {item.location}</p>
                                </div>

                            </div>
</FadeInSection>
                    ))
                }

            </div>
            {/*EXPERIENCE SECTION ENDS*/}
        </>
    )
}
export default Experience