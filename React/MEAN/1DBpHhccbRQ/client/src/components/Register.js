import React, { Component } from "react"
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.prvenDefault()

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password = this.state.password
        }

        login(user).then(res => {
            if(res) {
                this.props.history.push('\login')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="div.col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="first_name">First name</label>
                                <imput type="first_name"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter First name"
                                value={this.state.first_name}
                                onChange={this.state.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <imput type="last_name"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter Last name"
                                value={this.state.last_name}
                                onChange={this.state.onChange}
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register