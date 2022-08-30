import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const ContactList = (props) => {
	let navigate = useNavigate();
	const { id } = props.contacts;
	console.log("---------------");
	console.log(props.contacts);
	console.log("---------------");

	const contacts = props.contacts;
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	const toComponentB = (hi) => {
		navigate("/contact/$(id)", { state: { contacts: hi } });
	};
	return (
		<div class="main">
			<h1>ContactList</h1>

			<div className="item">
				{contacts.map((hi) => (
					<div className="item">
						<img
							src="https://react.semantic-ui.com/images/wireframe/square-image.png"
							class="ui avatar image"
						/>
						<div className="content">
							<a
								onClick={() => {
									toComponentB(hi);
								}}
							>
								<div className="header">{hi.name}</div>
								<div>{hi.email}</div>
							</a>
						</div>
						<i
							className="trash alternate outline icon"
							style={{ color: "red", marginTop: "7px" }}
							onClick={() => deleteContactHandler(hi.id)}
						></i>
					</div>
				))}
			</div>
			<div>
				<Link to="/add">
					<button>AddContact</button>
				</Link>
			</div>
		</div>
	);
};
export default ContactList;
