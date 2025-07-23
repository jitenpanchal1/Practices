import React, { Component } from 'react'
import { Link, Outlet } from 'react-router'

export default class Othercontact extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="contactone" > This Contact One</Link></li>
                    <li><Link to="contacttwo" > This Contact Two</Link></li>
                    <li><Link to="contactthree" > This Contact Three</Link></li>
                    <li><Link to="contactfour" > This Contact Four</Link></li>
                </ul>
                <Outlet />
            </div>
        )
    }
}
