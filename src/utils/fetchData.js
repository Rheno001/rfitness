export const exerciseOptions = {
    method: 'GET',
	headers: {
		'x-rapidapi-key': '210365ab2amsh05bce8f759c2816p1683c9jsn018e42d7b3d9',
		'x-rapidapi-host': process.env.REACT_APP_RAPID_API_KEY
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}