import React, {Component} from "react";
import '../css/Portfolio.css';
import {FaGithub, FaExternalLinkAlt, FaEllipsisV, FaWindowClose, FaRegWindowClose, FaTimes} from "react-icons/all";
import {findIndex} from 'lodash';
import {Link} from 'react-router-dom';
class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects : [],
            lastIndex :0
        }
    }



    componentDidMount(){
        fetch('./data.json') // this line process the url
            .then(response => response.json())   // this gets the response and change the response in the json format
            .then(result => {                    // this is the result of json parse
                const projects = result.projects.map(item => {  // iterating the each items in the array from result
                    // to generate the unique id for the items
                    item.prjId = this.state.lastIndex;
                    item.cardDisplay = true;
                    item.detailDisplay = false;
                     this.setState({lastIndex : this.state.lastIndex +1})
                    return item;
                })

                // never change the state directly, rather use setState method to change the state
                this.setState({
                    projects : projects
                })

            })

    }

    // for projects details toggle
    detailsDisplay = (id) => {

        let tempProjects = this.state.projects;

        //using the lodash library's function to find the item from the array of items
        let projectId = findIndex(this.state.projects, {
            prjId : id
        });
        console.log(id + " this is id" +projectId);
        //
        console.log(`temp projs  ${tempProjects[0]}`)
        tempProjects[projectId]['cardDisplay'] = !tempProjects[projectId]['cardDisplay'];
        tempProjects[projectId]['detailDisplay'] = !tempProjects[projectId]['detailDisplay'];

        this.setState({
            projects : tempProjects
        })

    }




    render() {
        // console.log(this.state.cardDisplay, this.state.detailDisplay)
        const {isFetching} = this.state;
        return (
            <>
                {isFetching ? (
                        <div>Loading...</div>
                    ) : (
                <div className="container">
                    <h2>My Recent Projects</h2>
                    <div className="row">
                        {this.state.projects.map((item)=>(
                            <div className="col-lg-4 col-md-6 col-sm-6 portfolioCard mb-2 " key={item.prjId}
                                // onMouseEnter={this.detailsDisplay}
                                // onMouseLeave={this.portfolioDisplay}
                            >
                                {this.state.cardDisplay}
                                <div className="card" style={{width: '90%'}}>
                                    <div className={(item.cardDisplay ? "portfolio" : "noDisplay")}>
                                        <img className="card-img-top" src={"./" + item.image} alt="Card cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {item.name}

                                                <FaEllipsisV className="toggleIcons" size={14} style={{color:'#0D867A'}} onClick={ () =>this.detailsDisplay(item.prjId )} />
                                            </h5>
                                            <p className="card-text">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className={"detailsDiv " + (item.detailDisplay ? "projectDetail" : "noDisplay")}>
                                    <div className="card accomplishments" style={{width: '90%'}}>
                                        <div style={{minHeight :'85%'}}>
                                            <p className="accom_heading">
                                                <span>Accomplishments</span>
                                                <FaTimes className="toggleIcons" size={14} style={{color:'orange'}} onClick={ () =>this.detailsDisplay(item.prjId)} />
                                            </p>
                                            <ul>
                                                {item.accomplishments.map((accom, key) =>(
                                                    <li>{accom}</li>

                                                ))
                                                }


                                            </ul>
                                        </div>


                                        <div className="card-body" style={{borderTop:'1px solid grey',paddingTop:'2%'}}>
                                            <div className="row">
                                                <div className=" projectsLinks mr-2 mb-2">
                                                    <a href={item.github} target="_blank"><FaGithub size={30} title="View Source" style={{color:'#fff'}} /></a>
                                                </div>
                                                <div className=" projectsLinks mr-">
                                                    <a href={item.online} target="_blank"> <FaExternalLinkAlt size={20}  title="View Online" style={{color:'#fff'}} /></a>
                                                </div>


                                            </div>
                                        </div>
                                    </div>


                                </div>


                                <div className="col-lg-4 col-md-4 col-sm-6"></div>
                                <div className="col-lg-4 col-md-4 col-sm-6"></div>

                            </div>
                        ))
                        }

                    </div>
                </div>
                    )}
            </>
        )

    }
}

export default Portfolio;