import React, {Component} from "react";
import '../css/Contact.css';
import {FaEnvelope, FaPhone} from "react-icons/all";
import ContactFormsErrors from "./ContactFormErrors";
import {FlashMessage} from "react-flash-message";
import CMessage from "./ContactFlashMessage";
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            formErrors :{
                first_name: '',
                last_name: '',
                email: '',
                message: ''
            },
            emailValid : false,
            firstNameValid : false,
            lastNameValid : false,
            messageValid : false,
            successMsg: false
        }
    }

    //on the input change
    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        },()=>{this.validateFields(name, value)})

    }
    validateFields(fieldName, value){
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;

        switch (fieldName) {
            case 'first_name':
                firstNameValid = value.length > 0;
                fieldValidationErrors.first_name = firstNameValid ? '': 'First name field cannot be empty';
                break;

            case 'last_name':
                lastNameValid = value.length > 0;
                fieldValidationErrors.last_name = lastNameValid ? '' : 'Last name field cannot be empty';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value != '';
                fieldValidationErrors.email = emailValid ?'' : 'Provide a valid email';
                break;
            case 'message':
                messageValid = value.length > 0;
                fieldValidationErrors.message = messageValid ? '' : "please fill the message"
                break
            }
            this.setState({
                formErrors : fieldValidationErrors,
                firstNameValid: firstNameValid,
                lastNameValid: lastNameValid,
                emailValid: emailValid,
                messageValid: messageValid
            }, this.validateForm);
    }
    validateForm = () => {
        this.setState({
            formValid : this.state.first_name && this.state.last_name
            && this.state.email && this.state.message
        });
    }

    // this send the value to the sendMessage method in the App.js
    contactMessage = (e) => {
        e.preventDefault();

        const tempValue = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            message: this.state.message
        }
        // this send the value to the method sendMessage (props) in the Navbar.js
        this.props.sendMessage(tempValue);

        //clear the fields after send
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            message: '',
            successMsg: true
        })

    }

    //for adding has-error class to form-group fields
errorClass = (error) =>{
        return (
            error.length === 0 ? '' :' has-error'
        )
}
    render() {
        return (
            <>

                <div className="contactDiv">
                    <div className="col-lg-10 col-md-10 m-auto">
                        {this.state.successMsg ? <CMessage/> : ''}

                        <p>
                            <a href="mailto:aftab1234011@gmail.com" style={{color: '#ffffff', textDecoration: 'none'}}>
                                <FaEnvelope style={{color:"red"}}/>
                                aftab1234011@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="tel: +14379944453" style={{color: '#ffffff', textDecoration: 'none'}}> <FaPhone
                                style={{color: 'green'}}/>
                                +1 (437) 994 4453
                            </a>
                        </p>
                        <h3 style={{borderBottom:'1px solid #16ADE3',color:'#16ADE3'}}>
                            SEND MESSAGE
                        </h3><br/>
                        <div className="panel panel-default">
                            <ContactFormsErrors formsErrors={this.state.formErrors}/>
                        </div>


                        <form onSubmit={this.contactMessage}>
                            <div className="form-row">

                                <div className={`form-group col-lg-6 col-md-6  ${this.errorClass(this.state.formErrors.first_name)}`}>
                                    <input type="text" name="first_name" placeholder="FIRST NAME"
                                           className="form-control"
                                           onChange={this.onChange} value={this.state.first_name}
                                    />
                                </div>
                                <div className={`form-group col-lg-6 col-md-6 ${this.state.formErrors.last_name}`}>
                                    <input type="text" name="last_name" placeholder="LAST NAME" className="form-control"
                                           onChange={this.onChange} value={this.state.last_name}
                                    />
                                </div>
                                <div className={`form-group col-md-12 ${this.state.formErrors.email}`}>
                                    <input type="text" name="email" placeholder="example@gmail.com"
                                           className="form-control"
                                           onChange={this.onChange} value={this.state.email}
                                    />
                                </div>
                                <div className={`form-group col-md-12 ${this.state.formErrors.message}`}>
                                <textarea name="message" placeholder="Message" rows={5} className="form-control"
                                          onChange={this.onChange} value={this.state.message}
                                />
                                </div>

                                <button className="btn btn-group-lg btn-primary" type="submit"
                                        disabled={!this.state.formValid} style={{color:'#fff'}}>Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )

    }
}

export default Contact;