import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'swordfish',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
        const auth = password === this.state.password;
        this.setState({
            authorized: auth
        });
    }
    get approve() {
        return this.state.authorized ? "Welcome" : "Enter the Password";
    }
    render() {
        const login = (
            <form action="#" onSubmit={this.authorize}>
                <input type="password" placeholder="Password" />
                <input type="submit" />
            </form>
        )
        const contactInfo = (
            <div>
                <h4>Contact Info</h4>
                <ul>
                    <li>
                        client@example.com
                    </li>
                    <li>
                        555.555.5555
                    </li>
                </ul>
                <form action="#" onSubmit={this.authorize = false}>
                    <input type="submit" value="Log Out" />
                </form>
            </div>
        );
        const status = this.state.authorized ? contactInfo : login;
        return (
            <div id="authorization">
                <h1>{this.approve}</h1>
                <h1>{status}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <Contact />,
    document.getElementById('app')
);
