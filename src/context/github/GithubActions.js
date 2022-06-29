import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
	baseURL: GITHUB_URL,
});

/* // fetch users for (testing perpose)
	const fetchUsers = async () => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/users`, {
			Authorization: `token ${GITHUB_TOKEN}`,
		});
		const data = await response.json();

		dispatch({ type: "GET_USERS", payload: data });
}; */

/**
 * Without using axios
 */
/* // search users
export const searchUsers = async text => {
	const params = new URLSearchParams({
		q: text,
	});

	const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
	const { items } = await response.json();
	return items;
};

// get a single user
export const getUser = async login => {
	const response = await fetch(`${GITHUB_URL}/users/${login}`);

	if (response.status === 404) {
		window.location = "/notfound";
	} else {
		const data = await response.json();
		return data;
	}
};

// fetch user repos
export const getUserRepos = async login => {
	const params = new URLSearchParams({
		sort: "created",
		per_page: 10,
	});

	const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
	const data = await response.json();
	return data;
}; */

/**
 * using axios
 */
// search users - using axios
export const searchUsers = async text => {
	const params = new URLSearchParams({
		q: text,
	});

	const response = await github.get(`${GITHUB_URL}/search/users?${params}`);
	return response.data.items;
};

// get a single user
export const getUser = async login => {
	const response = await github.get(`${GITHUB_URL}/users/${login}`);

	if (response.status === 404) {
		window.location = "/notfound";
	} else {
		return response.data;
	}
};

// fetch user repos
export const getUserRepos = async login => {
	const params = new URLSearchParams({
		sort: "created",
		per_page: 10,
	});

	const response = await github.get(
		`${GITHUB_URL}/users/${login}/repos?${params}`
	);
	return response.data;
};
