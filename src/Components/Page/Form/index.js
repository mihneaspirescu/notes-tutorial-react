/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getLocation, sendNote} from './actions';
import Error from './img/error.png'
import Loader from './img/loader.svg';
let newLocation = (flag_url, location, success, reason) => {

    if (!success && reason === "private-addr") {
        return (
            <div className="location error">

                <img src={Error} width="20" height="20" alt="flag"/>
                <p>You are posting from a private address</p>
            </div>
        )
    } else {

        return (
            <div className="location">
                <img src={flag_url} width="35" height="20" alt="flag"/>
                <p>You are posting from {location}</p>
            </div>
        )
    }

};


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', content: ''};

        this.handleChangeTitle   = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleSubmit        = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getLocation();
    }

    handleChangeTitle(event) {
        this.setState({...this.state, title: event.target.value});
    }

    handleChangeContent(event) {
        this.setState({...this.state, content: event.target.value});
    }

    handleSubmit(event) {
        let req = {
            content : this.state.content,
            title   : this.state.title,
            location: this.props.location
        };

        this.props.sendNote(req);

        this.setState({content: "", title: ""});

        event.preventDefault();
    }

    render() {

        let {location}     = this.props;
        let assessLocation = (success, reason) => {
            return !(!success && reason === "private-addr")
        };

        let locationExists = false;
        if (location) {
            locationExists = assessLocation(location.success, location.reason);
        }


        let loc = (location) => {
            if (location) {

                return newLocation(location.flag_url, location.location, location.success, location.reason)
            } else {
                return <div className="location error"><img src={Loader} width="20" height="20"
                                                            alt="flag"/></div>
            }
        };


        return (
            <form className="card" onSubmit={this.handleSubmit}>

                <div className="card-top">
                    <input placeholder="Title" value={this.state.title}
                           onChange={this.handleChangeTitle} required={true}/>
                </div>
                <input placeholder="Content..." value={this.state.content}
                       onChange={this.handleChangeContent} required={true}/>
                <div className="controls">
                    {loc(location)}
                    <button disabled={!locationExists}>Post message</button>
                </div>

            </form>
        )
    }
}
export default  connect(
    (state) => ({
        location: state.location.location
    }), {getLocation, sendNote})(Form);