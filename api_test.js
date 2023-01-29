const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '843eab5cefmshf0093c15bf89726p1385f8jsn76e882bc7b1a',
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
	}
};

fetch('https://sephora.p.rapidapi.com/categories/list?categoryId=cat150006', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));