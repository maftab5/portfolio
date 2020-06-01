import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {Modal} from "react-bootstrap";
import Contact from "./components/Contact";
import './css/App.css';
import {PDFViewer,PDFDownloadLink} from "@react-pdf/renderer";
import Resume from "./components/Resume";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            lastIndex: 0

        }
    }

    toggleContact = () => this.setState({
        show: !this.state.show
    });
    handleShow = () => this.setState({
        show: true
    });

    // for contact message
    contactMessage = (message) => {
        // sending data to server
        const result = fetch(`/contact`, {
            method: 'post',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.handleClose();
    }

    // for pdf conversion



    render() {
        console.log(this.state.contactMessage);

        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Aftab</Link>

                    <div className="collapse navbar-collapse pull-right" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About | </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio">Portfolio | </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link" onClick={this.toggleContact}>Contact |</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/resume" >Resume </Link>
                            </li>
                        </ul>

                    </div>
                </nav>


                {/*for contact modal*/}


                <Modal className="modal right fade" show={this.state.show} onHide={this.toggleContact}>
                    <div className="modal-content">
                        <Modal.Header closeButton>

                        </Modal.Header>
                        <Modal.Body><Contact className="modal-body" sendMessage={this.contactMessage}/></Modal.Body>
                        {/*<Modal.Footer>*/}
                        {/*    <Button variant="secondary" onClick={this.handleClose}>*/}
                        {/*        Close*/}
                        {/*    </Button>*/}
                        {/*    <Button variant="primary" onClick={this.handleClose}>*/}
                        {/*        Save Changes*/}
                        {/*    </Button>*/}
                        {/*</Modal.Footer>*/}
                    </div>
                </Modal>

                {/*Contact modal ends*/}
                {/* Resume Component*/}

                {/*Resume component ends*/}

            </>
        )
    }
}

export default Navbar