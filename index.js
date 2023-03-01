const btnEl = document.getElementById("btn")
const animeContainerEl =document.querySelector(".anime-container")
const animeImgEl = document.querySelector(".anime-img")
const animeNameEl = document.querySelector(".anime-name")

async function getAnime(){
    try{
        btnEl.disabled = true;
       btnEl.innerText="Loading...";
       animeNameEl.innerText="Updating..."
       animeImgEl.src="https://thumbs.gfycat.com/FloweryInfamousIvorybilledwoodpecker-size_restricted.gif"
    const response= await fetch("https://api.catboys.com/img")
    const data = await response.json()
    btnEl.disabled= false;
    btnEl.innerText="Get Anime"
    animeContainerEl.style.display = "block"
    animeImgEl.src = data.url
    animeNameEl.innerText = data.artist
    
    
    }
    catch (error){
        btnEl.disabled= false;
    btnEl.innerText="Get Anime";
    animeNameEl.innerText="An error happened, please try again"
        console.log(error)
    }

    
}



btnEl.addEventListener("click",getAnime)