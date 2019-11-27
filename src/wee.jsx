import React from 'react';
import axios from 'axios';

export default class MessageFromBackend extends React.Component {
    state = {
        response: []
    };

    getMsg() {
        axios.get('http://127.0.0.1:8000/user/test/test')
            .then(res => {
                const response = res.data;
                this.setState(response);
            }
            );
    }

    justCallThisFunction = this.getMsg();

    render() {
        return (
            <span>
                <b>{ this.state.status }</b>
                { this.state.msg }
            </span>
        )
    }
}

/*
* json from backend
* {
* "msg":"Test route is Really working",
* "status":"It is all OK!"
* }
*
* */