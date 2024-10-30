require('dotenv').config();

// Print out value of API key stored in .env file
const keyword = 'dogs';
const key = process.env.API_KEY;
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

async function getGiph() {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const singleGiph = data.data[0];
        console.log(singleGiph);
    } catch (error) {
        console.log("Error: ", error);
    }
}

getGiph();