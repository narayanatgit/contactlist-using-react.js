import React from "react";
import { Link } from "react-router-dom";
class AddContact extends React.Component {
	state = {
		name: "",
		email: " ",
	};
	add = (e) => {
		e.preventDefault();
		this.props.addContactHandler(this.state);
		this.setState({ name: "", email: " " });
		console.log(this.state);
	};
	render() {
		return (
			<div className="ui main">
				<h2>ADD CONTACT</h2>
				<form className="ui form" onSubmit={this.add}>
					<div className="field">
						<label>NAME</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={this.state.name}
							onChange={(e) => this.setState({ name: e.target.value })}
						/>
					</div>
					<div className="field">
						<label>EMAIL</label>
						<input
							type="email"
							name="email"
							placeholder="Email address"
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
						/>
						<label></label>
					</div>
					<button className="ui button">ADD</button>
				</form>
				<div>
					<Link to="/">
						<button>see list</button>
					</Link>
				</div>
			</div>
		);
	}
}
export default AddContact;
