const apiKey = "7p0Zui_8uwePLvIKBUJN85u6ZLewSUAFAyCs6EGKLG0";

const searchBG = document.querySelector(".search-Bg");
const searchBar = document.querySelector("#search-bar");
const searchResult = document.querySelector(".result");
const showMoreBtn = document.querySelector(".show-more");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBar.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${apiKey}&per_page=21`;

    if (page === 1) {
        searchResult.innerText = "";
    }
    const response = await fetch(url);
    const data = await response.json();
    
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchBG.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})
showMoreBtn.addEventListener("click", () => {
    page++;
    searchImage();
})
