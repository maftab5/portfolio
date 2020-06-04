import React, {useState, useEffect, useRef} from "react";
import '../css/About.css';

import {
    FaReact, FaAngular, FaHtml5, FaCss3Alt,
    FaNodeJs, FaGithub, FaPhp, FaWordpress, FaAws, FaLinkedin, FaDownload, FaLinux
} from "react-icons/fa";
import FadeInSection from "./FadeInSection";
import Education from "./Education";
import Experience from "./Experience";


const About = () =>{


    // use of hooks
    // instead of using contructor of class component , we will use useState of hooks

    const [about,setAbout] = useState([]);
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);
    const [exp_lastIndex, setExpIndex] = useState(0);
    const [edu_lastIndex, setEduIndex] = useState(0);

    // // for fade in state
    // const [isVisible, setVisible] = useState(true);
    //
    // const domRef = useRef();

    // for class component
    /*
     constructor (props) {
         super(props);
         this.state = {
             about :[],
             experience:[],
             education :[],
             exp_lastIndex :0,
             edu_lastIndex :0
         }
    } */

    // instead of using componentDidMount, we will use useEffect() of hook
    useEffect(() => {



        fetch('./data.json')
            .then(response => response.json())
            .then(result => {

                //for about data
                const about = result.about.map(item => {
                    return item
                });

                //for const experience
                const experience = result.experience.map(item => {

                    item.expId = exp_lastIndex;
                    //changing the state of exp index
                    setExpIndex(exp_lastIndex +1);

                    return item
                });

                // for education
                const education = result.education.map(item => {
                    item.eduId = edu_lastIndex;
                    setEduIndex(edu_lastIndex +1);
                    return item
                })

                setAbout(about);
                setExperience(experience);
                setEducation(education);

            });


    })

    // // for animation
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => setVisible(entry.isIntersecting));
    // });
    // observer.observe(domRef.current);
    // return () => observer.unobserve(domRef.current);


        return (
            <>
                <div className="container">
                    <div className="row">

                        {
                           about.map(item => (
<FadeInSection>
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
</FadeInSection>
                            ))
                        }


<Experience experience={experience} />




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
                                <FadeInSection>
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
                                </FadeInSection>
                            </div>

                            {/*FRONT-END ENDS*/}

                            {/*BACK-END STARTS*/}
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">
                                <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                                    BACK-END
                                </div>
                            <FadeInSection>
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
                            </FadeInSection>
                            </div>
                            {/*BACK-END ENDS*/}

                            {/*OTHER STARTS*/}
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 ml-auto about_inner_div">
                                <div className="col-lg-12 col-md-12 col-sm-12 section_header">
                                    OTHERS
                                </div>
                                <FadeInSection>
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
                                </FadeInSection>
                            </div>
                            {/*OTHERS ENDS*/}
                        </div>

                        {/*SKILLS SECTION ENDS*/}
<Education education={education}/>

                    </div>
                </div>

            </>
        )

    }


export default About;