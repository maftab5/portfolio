import React, {Component} from "react";
import '../css/Contact.css';

class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {
            first_name :'',
            last_name:'',
            email :'',
            message :''
        }
    }

    //on the input change
    onChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name] : value
        })

    }

 // this send the value to the sendMessage method in the App.js
    contactMessage = (e) =>{
        e.preventDefault();

        const tempValue = {
         first_name : this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            message: this.state.message
        }
   // this send the value to the method sendMessage (props) in the Navbar.js
    this.props.sendMessage(tempValue);

        //clear the fields after send
        this.setState({
            first_name :'',
            last_name:'',
            email :'',
            message :''
        })

 }

    render() {
        return (
            <>

                <div className="contactDiv" >
                <div className="col-lg-10 col-md-10 m-auto">
                    <h3>Hello !! Let's Talk</h3>
                    <form onSubmit={this.contactMessage}>
                        <div className="form-row">

                            <div className="form-group col-lg-6 col-md-6">
                                <input type="text" name="first_name" placeholder="FIRST NAME" className="form-control"
                                onChange={this.onChange} value={this.state.first_name}
                                />
                            </div>
                            <div className="form-group col-lg-6 col-md-6">
                                <input type="text" name="last_name" placeholder="LAST NAME" className="form-control"
                                       onChange={this.onChange} value={this.state.last_name}
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" name="email" placeholder="example@gmail.com" className="form-control"
                                       onChange={this.onChange} value={this.state.email}
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <textarea name="message" placeholder="Message" rows={10} className="form-control"
                                          onChange={this.onChange} value={this.state.message}
                                />
                            </div>

                            <button className="btn btn-group-lg btn-secondary" type="submit" >Send Request</button>
                        </div>

                    </form>
                </div>
                </div>
            </>
        )

    }
}
export default Contact;