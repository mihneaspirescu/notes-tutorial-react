/**
 * Created by mihneaspirescu on 03/07/2017.
 */
import React, {Component} from 'react'
import Logo from './img/logo.png'
import Notes from './Notes'
import Form from './Form'
import Footer from './Footer/index';



export default class Page extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src={Logo} alt="logo"/>
                </header>

                <div className="content">

                    <Form/>

                    <Notes/>

                    <Footer/>


                </div>
            </div>
        )
    }
}