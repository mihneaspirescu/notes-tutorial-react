/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import React, {Component} from 'react'
import Note from './Note/index';
import {connect} from 'react-redux';
import {getNotes} from './actions';
class Notes extends Component {

    componentDidMount() {
        this.props.getNotes();
    }


    render() {
        const notes = this.props.notes.map((note) => {
            return <Note key={note.note_id} {...note}/>
        });
        return (
            <ul>
                {notes}


            </ul>
        )
    }
}


export default  connect(
    (state) => ({
        notes: state.notes.notes
    }), {getNotes})(Notes);