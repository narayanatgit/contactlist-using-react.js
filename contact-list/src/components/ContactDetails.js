import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
const ContactDetails = (props) => {
	const location = useLocation();

	console.log(location.state.contacts.id);
	return (
		<div className="main">
			<div className="ui card centered">
				<div className="image">
					{/* <img src={user} alt="user" /> */}
					<img src={process.env.PUBLIC_URL + "/user.jpg"} />
				</div>
				<div className="content">
					<div className="header">{location.state.contacts.name}</div>
					<div className="description">{location.state.contacts.email}</div>
				</div>
				<div className="center-div">
					<Link to="/">
						<button className="ui button blue center ">back to list</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default ContactDetails;
