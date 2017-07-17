/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import axios from 'axios';
import {RECEIVED_NOTES,RECEIVED_INSTANCE_DETAILS} from '../../../reducer';
import {API_URL} from '../../../config'

export const getNotes  = () => {


    let url = `${API_URL}/note`;


    return function (dispatch) {

        axios.get(url).then((response) => {

            let notes = {
                notes: response.data.data,
                loaded : true
            };
            dispatch({type: RECEIVED_NOTES, payload: notes});
            dispatch({type: RECEIVED_INSTANCE_DETAILS, payload: response.data.instance});
        }).catch((error) => {

            //dispatch empty object.
            console.log(error)
        })

    }
};