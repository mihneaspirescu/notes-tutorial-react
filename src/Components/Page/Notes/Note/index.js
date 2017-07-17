/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import React, {Component} from 'react'


export default class Note extends Component {
    render() {

        let { title, content, location, flag_url, inserted_at} = this.props;
        var date = new Date(inserted_at);
        return (
            <li>
                <h1>{title}</h1>
                <p>{content}</p>
                <div>
                    <img src={flag_url} alt=""/>
                    <p>Posted from {location} | Added {date.toDateString()}</p>
                </div>
            </li>
        )
    }
}

Note.propTypes = {

}