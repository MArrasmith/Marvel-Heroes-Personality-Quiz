const publicKey = '2c9e466c091310ad41de04f333dcdf40';
const privateKey = '80931ab7cb0a7961c5cc9f78d56d18e632722af1';
const timestamp = new Date().getTime();
const dataHash = timestamp + privateKey + publicKey;
const hash = CryptoJS.MD5(dataHash).toString();// Create a hash based on timestamp and private key (you'll need a hashing library for this)

const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process and display data on your website
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
