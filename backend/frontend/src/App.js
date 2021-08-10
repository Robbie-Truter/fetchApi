import "./App.css";
import ColoredLine from "./ColoredLine";
import React from "react";


class App extends React.Component {
    constructor(props) {
        super(props);
        //states for storing each api result
        this.state = {
            apiResponse1: "" ,
            apiResponse2: "",
            apiResponse3: "",
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    };

    // Triggers fetch request when submit is clicked
    handleSubmit(event) {
        //fetch each third party api from backend
        //storing api data into empty states
        fetch("http://localhost:8000/github/" + this.state.value)
            .then(res => res.text())
            .then(res => this.setState({apiResponse1: res}))
            .catch(err => err);


        //fetch gitLab api from backend
        fetch("http://localhost:8000/gitlab/" + this.state.value)
            .then(res => res.text())
            .then(res => this.setState({apiResponse2: res}))
            .catch(err => err);


        //fetch bitBucket api from backend
        fetch("http://localhost:8000/bitbucket/" + this.state.value)
            .then(res => res.text())
            .then(res => this.setState({apiResponse3: res}))
            .catch(err => err);

        event.preventDefault();
    }


    render() {
        return (
                <header className="App-header">

                    <div className="App">
                    <h2><b>Third party api user details:</b></h2>
                        <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" placeholder={"Enter username here.."} value={this.state.value} onChange={this.handleChange} />
                            <br />
                            <input type="submit" value="Submit" />
                        </label>
                    </form>

                        <ColoredLine />
                        <img src={"/gitHub.gif"} alt="gitHub logo" />
                        <p>{this.state.apiResponse1}</p>

                        <ColoredLine />
                        <img src={"/gitLab.gif"} alt="gitLab logo" />
                        <p>{this.state.apiResponse2}</p>

                        <ColoredLine />
                        <img src={"/bitbucket.gif"} alt="Bitbucket logo" />
                        <p><b>(Note: Have to enter valid user id for Bitbucket results)</b></p>
                        <p>{this.state.apiResponse3}</p>
                    </div>

                </header>
        );
    }
}


export default App;