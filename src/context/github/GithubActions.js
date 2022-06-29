const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

/* // fetch users for (testing perpose)
	const fetchUsers = async () => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/users`, {
			Authorization: `token ${GITHUB_TOKEN}`,
		});
		const data = await response.json();

		dispatch({ type: "GET_USERS", payload: data });
	}; */

// search users
export const searchUsers = async text => {
	const params = new URLSearchParams({
		q: text,
	});

	const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
	const { items } = await response.json();
	return items;
};
