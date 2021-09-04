import React, { useState, useEffect } from "react";

export default function Test() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			let res = await fetch("https://randomuser.me/api/?nat=us").then((res) =>
				res.json()
			);

			setUser(res.results);
		};

		fetchUser();
	}, []);

	let formattedUser = user.map((el, idx) => {
		return (
			<div className="user" key="idx">
				<div className="name">
					{el.name.first} {el.name.last}
				</div>
				<div className="email">{el.email}</div>
				<div className="phone">{el.phone}</div>
			</div>
		);
	});

	return (
		<div>
			<h2>This is a test component</h2>
			{user.length ? formattedUser : null}
		</div>
	);
}
