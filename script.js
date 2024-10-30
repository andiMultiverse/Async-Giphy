require("dotenv").config();



// Print out value of API key stored in .env file
const keyword = "snoopy";
const key = process.env.API_KEY;
const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

const button = document.querySelector("button");
const img = document.querySelector("img");

button.addEventListener("click", displayImage);

async function displayImage() {
  try {
    img.src = await getRandomGiph();
    console.log(img.src);
  } catch (error) {
    console.log("error displaying image:", error);
  }
}

async function getGiphs() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const singleGiph = data.data[0];
    console.log(singleGiph);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function getRandomGiph() {
  try {
    const data = await getGiphs();
    const randomNum = Math.floor(Math.random() * 25);
    const giph = data.data[randomNum];
    console.log(giph.url);
    return giph.embed_url;
  } catch (error) {
    console.log("error fetchin giph: ", error);
  }
}

// console.log(getRandomGiph());
