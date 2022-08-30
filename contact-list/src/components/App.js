import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import react from "react";
import ContactDetails from "./ContactDetails";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import axios from "axios";

function App() {
	let i = 0;
	const LOCAL_STORAGE_KEY = "contacts";
	const [contacts, setContacts] = useState([]);

	const addContactHandler = (contact) => {
		console.log(contact);
		// let  = contact
		let id = contacts.length;
		setContacts([...contacts, { id, ...contact }]);
	};
	const removeContactHandler = (id) => {
		console.log("-------------------", id);
		let temp = contacts;

		const newContactList = temp.filter((item) => item.id != id);

		setContacts(newContactList);
	};

	const getData = async () => {
		const { data } = await axios.get(`http://localhost:3006/contacts`);
		setContacts(data);
	};
	console.log(contacts);
	useEffect(() => {
		// setInterval(function () {
		getData();
		// }, 5000);
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div className="ui container  main">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/add"
						element={
							<div>
								<AddContact addContactHandler={addContactHandler} />
							</div>
						}
					/>
					<Route
						path="/"
						exact
						element={
							<div>
								<ContactList
									contacts={contacts}
									getContactId={removeContactHandler}
								/>
							</div>
						}
					/>
					<Route
						path="/contact/:id"
						element={
							<div>
								<ContactDetails />
							</div>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
