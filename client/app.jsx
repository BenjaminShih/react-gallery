import React from 'react'
import { hot } from 'react-hot-loader'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            str: '',
        }
    }
    componentDidMount() {
        axios.post('/api/string').then((res) => {
            this.setState({ str: res.data })
            console.log('this.state.str', this.state.str)
        })
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.str}
                </h1>
            </div>
        )
    }
}

export default hot(module)(App)
