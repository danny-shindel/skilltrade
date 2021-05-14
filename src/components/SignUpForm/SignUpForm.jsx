import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    location: this.props.location,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // const formData = new FormData()
      const fileField = document.querySelector("input[type='file']")
      if (fileField.files[0]) {
        const formData = new FormData()
        formData.append("name",this.state.name)
        formData.append("email",this.state.email)
        formData.append("password",this.state.password)
        formData.append("latitude",this.state.location.latitude)
        formData.append("longitude",this.state.location.longitude)
        formData.append("profilepic",fileField.files[0])
        const user = await signUp(formData);
        this.props.setUser(user);
      } else {
        const formData = { ...this.state };
        delete formData.error;
        delete formData.confirm;
        const user = await signUp(formData);
        this.props.setUser(user);
      }
    } catch {
      // An error occurred
      this.setState({ error: 'Sign Up Failed - Try Again'});
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit} encType="multipart/form-data">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <input type="file" name="profilepic"/>
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}