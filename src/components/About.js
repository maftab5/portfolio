import React, {Component} from "react";
import '../css/About.css';

import {
    FaReact, FaAngular, FaHtml5, FaCss3Alt,
    FaNodeJs, FaGithub, FaPhp, FaWordpress, FaAws, FaLinkedin, FaDownload, FaLinux
} from "react-icons/fa";


class About extends Component {

    constructor (props) {
        super(props);
        this.state = {
            about :[],
            experience:[],
            education :[],
            exp_lastIndex :0,
            edu_lastIndex :0
        }
    }

    componentDidMount() {
        fetch('./data.json')
            .then(response => response.json())
            .then(result => {
                // for about
                const about =  result.about.map(item =>{
                    return item;
                })


                // for expereiences list
                const experienceLists = result.experience.map(item =>{
                    item.expId = this.state.exp_lastIndex;
                    this.setState({
                        exp_lastIndex : this.state.exp_lastIndex +1
                    })
                    return item;
                })

                //for education lists
                const education_lists = result.education.map(item =>{
                    item.eduId = this.state.edu_lastIndex;

                    this.setState({
                        edu_lastIndex : this.state.edu_lastIndex +1
                    })
                    return item;
                })

                this.setState({
                    about :about,
                    experience : experienceLists,
                    education : education_lists
                })
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">

                        {
                            this.state.about.map(item => (
                                <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 about_image_div">
                                    <img src={"./" + item.image} className="about_image" alt="About"
                                         width={450}
                                         height={450}
                                    />
                                    <br/><br/><br/>
                                </div>

                                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                                {item.details}

                            <section className="mb-2">
                            <button className="btn btn-success mr-2 mt-4"><FaLinkedin
                            style={{color: 'white'}}/> Let's Connect
                            </button>
                            <button className="btn btn-success mr-2 mt-4"><FaDownload
                            style={{color: 'orange'}}/> Download Resume
                            </button>
                            </section>


                            </div>
                                </div>
                            ))
                        }





                        {/*EXPERIENCE SECTION STARTS*/}
                        <div className="container">
                            <div className="col-lg-12 about_section">
                                Experience
                            </div>

                            {
                                this.state.experience.map(item => (
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">

                                        <div className="section_header">
                                            <div className="row">
                                                <div className="col-lg-2 col-md-2 col-sm-2 d-none d-sm-block  company_logo">
                                                    <img src={"./" + item.logo} alt="about"/>
                                                </div>

                                                <div className="col-lg-7 col-md-6 col-sm-5 col-xs-2 company_name">
                                                    {item.company_name}
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-5 col-xs-9 company_position">
                                                    {item.position}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="innerText">
                                            <p>{item.details}</p>

                                            <p>DEVELOPED PROJECTS</p>
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
                                ))
                            }

                        </div>
                        {/*EXPERIENCE SECTION ENDS*/}

                        {/*SKILLS SECTION STARTS*/}
                        <div className="container">
                            <div className="col-lg-12 about_section">
                                SKILLS
                            </div>


                            {/*FRONT-END STARTS*/}
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">
                                <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                                    FRONT-END
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                        <FaReact size={80} style={{color: 'blue'}}/>
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
                            </div>
                            {/*FRONT-END ENDS*/}

                            {/*BACK-END STARTS*/}
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">
                                <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                                    BACK-END
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                        <FaNodeJs size={80} style={{color: 'blue'}}/>
                                        <p>Node Js</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                        <FaPhp size={80} style={{color: 'red'}}/>
                                        <p>PHP</p>
                                    </div>

                                </div>
                            </div>
                            {/*BACK-END ENDS*/}

                            {/*OTHER STARTS*/}
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">
                                <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                                    OTHERS
                                </div>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                        <FaWordpress size={80} style={{color: 'blue'}}/>
                                        <p>Wordpress</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                        <FaGithub size={80} style={{color: 'black'}}/>
                                        <p>GitHub</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                        <FaAws size={80} style={{color: 'orange'}}/>
                                        <p>AWS</p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 technologiesIcon">
                                        <FaLinux size={80} style={{color: 'black'}}/>
                                        <p>Linux</p>
                                    </div>

                                </div>
                            </div>
                            {/*OTHERS ENDS*/}
                        </div>

                        {/*SKILLS SECTION ENDS*/}

                        {/*EDUCATION STARTS*/}
                        <div className="container">

                            <div className="col-lg-12 about_section">
                                EDUCATION
                            </div>

                            {
                                this.state.education.map(item => (
                                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">


                                        <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                                            <strong> {item.college_name}</strong>
                                        </div>

                                        <div className="innerText">
                                            <p>{item.address}</p>

                                            <p>{item.program}</p>


                                        </div>

                                        <div className="section-footer">
                                            <p>{item.duration}</p>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>


                        {/*EDUCATION ENDS*/}

                    </div>
                </div>

            </>
        )

    }
}

export default About;