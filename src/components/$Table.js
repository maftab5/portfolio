import React,{Component} from "react";


class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users : [],
            lastIndex :0
        }
    }



    componentDidMount(){
        fetch('./users.json') // this line process the url
            .then(response => response.json())   // this gets the response and change the response in the json format
            .then(result => {                    // this is the result of json parse
                const users = result.results.map(user => {  // iterating the each items in the array from result
                    // to generate the unique id for the items
                    user.userId = this.state.lastIndex;

                    this.setState({lastIndex : this.state.lastIndex +1})
                    return user;
                })

                // never change the state directly, rather use setState method to change the state
                this.setState({
                    users : users
                })

            })

    }


    render() {

        return(
            <>
                <table>
                    <thead>
                    <tr>
                        <th className="th-sm">ID

                        </th>
                        <th className="th-sm">First Name

                        </th>
                        <th className="th-sm">Last Name

                        </th>

                    </tr>
                    </thead>
                    <tbody>
                {
                    this.state.users.slice(0,5).map(user => (
                        <tr>
                            <td>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    ))
                }
                    </tbody>
                </table>
                <div className="w3-bar">
                    <a href="#" className="w3-button">1</a>
                    <a href="#" className="w3-button">2</a>
                    <a href="#" className="w3-button">3</a>
                    <a href="#" className="w3-button">4</a>
                    <a href="#" className="w3-button">5</a>
                </div>
                </>
        )

    }

}
export default Table;