/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux';


class Footer extends Component {
    render() {


        if (this.props.instance) {
            let i = this.props.instance;
            return (
                <footer>
                    <p>App version 1.0. Last API call came from the instance
                        <span>{i.instance}</span> found in
                        region <span>{i.region}</span>, Availability Zone <span>{i.availabilityZone}</span>, with private IP <span>{i.privateIp}</span></p>
                </footer>
            )
        } else {
            return <footer><p>No information</p></footer>

        }

    }
}

export default  connect(
    (state) => ({
        instance: state.instance
    }), null)(Footer);