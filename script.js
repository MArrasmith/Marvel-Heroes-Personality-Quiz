const publicKey = '2c9e466c091310ad41de04f333dcdf40';
const privateKey = '80931ab7cb0a7961c5cc9f78d56d18e632722af1';
const timestamp = new Date().getTime();
const dataHash = timestamp + privateKey + publicKey;
const hash = CryptoJS.MD5(dataHash).toString();// Create a hash based on timestamp and private key (you'll need a hashing library for this)

      const questions = document.querySelectorAll('.question');
        const nextBtn = document.getElementById('nextBtn');
        let currentQuestion = 0;

        function showQuestion(questionIndex) {
            questions.forEach((question, index) => {
                if (index === questionIndex) {
                    question.style.display = 'block';
                } else {
                    question.style.display = 'none';
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(currentQuestion);
            } else {
                // Quiz completed, you can handle this case here
                alert('Quiz completed!');
            }
        });

        // Show the first question initially
        showQuestion(currentQuestion);


const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;


  
function getHeroGif(){
    // Function to fetch and display Giphy data
    const apiKey = "JH9332CExLkO5kD2VRLsKceFMMT5HUCO";
    const giphyEndpoint = "https://api.giphy.com/v1/gifs/search?api_key=JH9332CExLkO5kD2VRLsKceFMMT5HUCO&?q=marvel";

    fetch(giphyEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        
      })
      .catch((error) => {
        console.error("Error fetching Giphy data:", error);
      });
}

function getHeroInfo(heroname){
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process and display data on your website
    console.log(data);

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}


  