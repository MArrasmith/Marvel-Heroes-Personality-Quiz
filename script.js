const publicKey = '2c9e466c091310ad41de04f333dcdf40';
const privateKey = '80931ab7cb0a7961c5cc9f78d56d18e632722af1';
const timestamp = new Date().getTime();
const dataHash = timestamp + privateKey + publicKey;
const hash = CryptoJS.MD5(dataHash).toString();// Create a hash based on timestamp and private key (you'll need a hashing library for this)
var caPoints=0, ironPoints=0, thorPoints=0, hulkPoints=0, antPoints=0, waspPoints=0;
const modal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName('close')[0];
var heroText = document.getElementById("heroText");
var heroInfo = document.getElementById("heroInfo");
var gif = document.getElementById("gif");



const questions = document.querySelectorAll('.question');
const nextBtn = document.getElementById('nextBtn');
  let currentQuestion = 0;

function getPoints(){
  const selected = document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`);
    if(selected){
      const heroAnswer = selected.classList[0];

      switch(heroAnswer){
        case 'IronMan':
          ironPoints++;
          break;
        case 'CaptainAmerica':
          caPoints++;
          break;
        case 'TheHulk':
          hulkPoints++;
          break;
        case 'Thor':
          thorPoints++;
          break;
        case 'TheWasp':
          waspPoints++;
          break;
        case 'AntMan':
          antPoints++;
          break;
        default:

      }
    }

}




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
            getPoints();
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(currentQuestion);
            } else {
                // Quiz completed, you can handle this case here
            
                console.log("test");
                assignHero();
            }
        });

        // Show the first question initially
        modal.style.display = "none";
        showQuestion(currentQuestion);



function assignHero(){
    //the answers will have classes corresponding to the heros.
    var hero = Math.max(caPoints, ironPoints, thorPoints, hulkPoints, antPoints, waspPoints);
    
    
    
  
    
    //TODO add logic to give correct first name.
    
      if (caPoints===hero){
        displayResults("Captain America");
      }
      else if(ironPoints===hero){
        displayResults("Iron Man");
      }
      else if (thorPoints===hero){
        displayResults("Thor");
      }
      else if (hulkPoints===hero){
        displayResults("Hulk");
      }
      else if (antPoints===hero){
        displayResults("AntMan");
      }
      else if (waspPoints===hero){
        displayResults("The Wasp");
      }
      else{

      }
      

    
    
}



function closeModal(){
  modal.style.display = "none";
}
closeButton.addEventListener("click", closeModal);

//!!!!!!!!!!!!!!!DISPLAY RESULTS IN THE MODAL!!!!!!!!!!!!!
function displayResults(heroName){
     
  //Fetch marvel api
    console.log("testing display results");
    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${heroName}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process and display data on your website 
      console.log(data);
      modal.style.display = "block";
      modal.style.backgroundColor = "white";
      heroText.textContent = "You are " + heroName + "!";
      heroInfo.textContent = data.data.results[0].description;

      console.log(caPoints + " " + ironPoints + " " + thorPoints + " " + hulkPoints + " " + antPoints + " " + waspPoints);
      
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

    //Fetch giphy api
    const apiKey = "JH9332CExLkO5kD2VRLsKceFMMT5HUCO";
    var heroNameGif = heroName.replace(/ /g, '+');
    console.log(heroNameGif);
    const giphyEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=JH9332CExLkO5kD2VRLsKceFMMT5HUCO&q=${heroNameGif}&limit=1`;

    fetch(giphyEndpoint)
      .then((response) => response.json())
      .then((data) => {
        
        var heroGifUrl = data.data[0].images.original.url;
        var heroGif = document.createElement("img");
        heroGif.onload = function(){
          gif.innerHTML = "";
          gif.appendChild(heroGif);

        }
        heroGif.src = heroGifUrl;
        
      })
      .catch((error) => {
        console.error("Error fetching Giphy data:", error);
      });
    

}
  




  