import React, {Component} from "react";
import '../css/Portfolio.css';
import {FaGithub, FaExternalLinkAlt, FaEllipsisV, FaTimes} from "react-icons/all";
import {findIndex} from 'lodash';
import FadeInSection from "./FadeInSection";

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            lastIndex: 0,
            imageDiv: "pull-right",
            detailDiv: "pull-left",
            queryText: ""
        }
    }


    componentDidMount() {
        fetch('./data.json') // this line process the url
            .then(response => response.json())   // this gets the response and change the response in the json format
            .then(result => {                    // this is the result of json parse
                const projects = result.projects.map(item => {  // iterating the each items in the array from result
                    // to generate the unique id for the items
                    item.prjId = this.state.lastIndex;
                    item.cardDisplay = true;
                    item.detailDisplay = false;
                    this.setState({lastIndex: this.state.lastIndex + 1})
                    return item;
                })

                // never change the state directly, rather use setState method to change the state
                this.setState({
                    projects: projects
                })

            })

    }

    // for projects details toggle
    detailsDisplay = (id) => {

        let tempProjects = this.state.projects;

        //using the lodash library's function to find the item from the array of items
        let projectId = findIndex(this.state.projects, {
            prjId: id
        });
        console.log(id + " this is id" + projectId);
        //
        console.log(`temp projs  ${tempProjects[0]}`)
        tempProjects[projectId]['cardDisplay'] = !tempProjects[projectId]['cardDisplay'];
        tempProjects[projectId]['detailDisplay'] = !tempProjects[projectId]['detailDisplay'];

        this.setState({
            projects: tempProjects
        })

    }


    // for search projects in the search box
    searchProjs = (query) => {
        this.setState({
            queryText: query
        })
    }


    render() {
        // console.log(this.state.cardDisplay, this.state.detailDisplay)
        const {isFetching} = this.state;

        let filteredProjs = this.state.projects;

        filteredProjs = filteredProjs.filter(eachItem => {
            return (
                eachItem['name'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
                eachItem['technologies'].toLowerCase().includes(this.state.queryText.toLowerCase())
            )
        })

        return (
            <>

                {isFetching ? (
                    <div>Loading...</div>
                ) : (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="col-lg-10 col-md-10 pr">
                                    <div className="col-lg-6 col-md-8 col-sm-8 projectsList ">
                                    <h3 className="">Projects</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 SearchPrjs">

                                    {/*<input id="SearchPrjs" placeholder="Search Projects" type="text" className="form-control "*/}
                                    {/*       name ="serachinput"   aria-label="Search Projects"*/}
                                    {/*       onChange={ e => this.searchProjs(e.target.value)}*/}

                                    {/*/>*/}
                                </div>

                            </div>


                        </div>


                        <br/><br/>

                        {filteredProjs.map((item) => (
                            <div className="row mainPrj" style={{marginBottom: '3%'}}>
                                <FadeInSection>
                                    <div className="row projectDivs">
                                        <div className="col-lg-6 projectImageDiv"
                                        >
                                            <img src={item.image} className="img-responsive" />
                                        </div>

                                        <div className="col-lg-5 projectDetailsDiv">
                                            <div className="tech">

                                                <span>{item.technologies} </span>

                                            </div>
                                            <div className="flex-row flex-center prjName"><h3>{item.name}</h3></div>
                                            <div className="tech"><p>{item.desc}</p></div>
                                            <div className="" style={{width: '90%'}}>

                                                <div className="row flex-row flex-center">
                                                    <div className="projectsLinks mr-2 mb-2">
                                                        <a href={item.github ? item.github : "#"}
                                                           target="_blank"
                                                           rel="noopener noreferrer"><FaGithub size={30}
                                                                                               title={item.github ? "View Source" : "No Link available"}
                                                                                               style={{color: '#fff'}}/></a>
                                                    </div>
                                                    <div className=" projectsLinks mr-2 ml-2">
                                                        <a href={item.online ? item.online : "#"}
                                                           target="_blank"
                                                           rel="noopener noreferrer"> <FaExternalLinkAlt
                                                            size={20}
                                                            title={item.online ? "View Online" : "No Link available"}
                                                            style={{color: '#fff'}}/></a>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>

                                    </div>
                                </FadeInSection>

                            </div>


                        ))}
                    </div>
                )
                }
            </>
        )
    }
}

export default Portfolio;