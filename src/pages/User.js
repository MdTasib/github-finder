import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
	const { login } = useParams();
	const { user, getUser } = useContext(GithubContext);

	useEffect(() => {
		getUser(login);
	}, [login]);

	console.log(user);

	return <div>{login}</div>;
}

export default User;
