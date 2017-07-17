/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import axios from 'axios';
import {RECEIVED_LOCATION, RECEIVED_INSTANCE_DETAILS} from '../../../reducer';
import {API_URL} from '../../../config'
import {getNotes} from '../Notes/actions';

export const getLocation = () => {


    let url = `${API_URL}/location`;

    return function (dispatch) {

        axios.get(url).then((response) => {

            let location = {
                location: response.data,
                loaded  : true
            };
            dispatch({type: RECEIVED_LOCATION, payload: location});
            dispatch({type: RECEIVED_INSTANCE_DETAILS, payload: response.data.instance});

        }).catch((error) => {

        })

    }
};


export const sendNote = (data) => {


    let url = `${API_URL}/note`;

    return function (dispatch) {

        axios.post(url, data).then((response) => {


            dispatch(getNotes())


        }).catch((error) => {

            //dispatch empty object.
            console.log(error)
        })

    }
};