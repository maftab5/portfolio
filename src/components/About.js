import React, {Component} from "react";
import '../css/About.css';

import Details from "./Details";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            about: [],
            experience: [],
            education: [],
            abt_lastIndex: 0,
            exp_lastIndex: 0,
            edu_lastIndex: 0
        }
    }

    componentDidMount() {
        fetch('./data.json')
            .then(response => response.json())
            .then(result => {
                // for about
                const about = result.about.map(item => {
                    item.abtId = this.state.abt_lastIndex;
                    this.setState({
                        abt_lastIndex: this.state.abt_lastIndex + 1
                    })

                    return item;
                })


                // for expereiences list
                const experienceLists = result.experience.map(item => {
                    item.expId = this.state.exp_lastIndex;
                    this.setState({
                        exp_lastIndex: this.state.exp_lastIndex + 1
                    })
                    return item;
                })

                //for education lists
                const education_lists = result.education.map(item => {
                    item.eduId = this.state.edu_lastIndex;

                    this.setState({
                        edu_lastIndex: this.state.edu_lastIndex + 1
                    })
                    return item;
                })

                this.setState({
                    about: about,
                    experience: experienceLists,
                    education: education_lists
                })
            })
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-12" style={{paddingLeft:'0 !important',paddingRight:'0 !important'}}>

                        <Details about={this.state.about}/>

                        <Experience experience={this.state.experience}/>

                        <Skills/>

                        <Education education={this.state.education}/>

                    </div>
                    </div>

            </>
        )

    }
}

export default About;