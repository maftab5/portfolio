import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import Contact from "./components/Contact";
import './css/App.css';
import {FaBars, FaTimes} from "react-icons/all";


class Navbars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            lastIndex: 0,
            isOpen: false
        }
    }

    toggleContact = () => this.setState({
        show: !this.state.show
    });

    // for contact message
    contactMessage = (message) => {
        // sending data to server
        fetch(`/contact`, {
            method: 'post',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // for navbar close
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <>

                <nav className="navbar navbar-dark">
                    <a className="navbar-brand" href="/">

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation"
                            onClick={this.toggle}
                    >
                        <span className="">
                            {this.state.isOpen ?
                                <FaTimes className="fas fa-times"
                                         style={{color: "#ffffff", fontSize: "28px"}}></FaTimes>
                                :
                                <FaBars className="fas fa-bars" style={{color: "#fff", fontSize: "28px"}}></FaBars>}

   </span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsingNavbar">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="/about">About <span
                                    className="sr-only">(current)</span></a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Portfolio</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.toggleContact}>Contact</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/resume">Resume</a>
                            </li>
                        </ul>

                    </div>

                </nav>

                {/*for contact modal*/}

                <Modal className="modal right fade" show={this.state.show} onHide={this.toggleContact}>
                    <div className="modal-content">
                        <Modal.Header closeButton>
                            <h3 style={{color: '#16ADE3'}}>Let's Talk</h3>
                        </Modal.Header>
                        <Modal.Body>
                            <Contact className="modal-body" sendMessage={this.contactMessage}/>
                        </Modal.Body>

                    </div>
                </Modal>

                {/*Contact modal ends*/}

            </>
        )
    }
}

export default Navbars