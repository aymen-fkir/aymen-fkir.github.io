function fetchJSONData() {
    return fetch("data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>{
            return data;
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error);
            throw error; // Rethrow the error to propagate it further if needed
        });
}

function generateautomation(name){
    const items = document.getElementsByClassName("item")
    fetchJSONData()
    .then((res)=>{
        const data = res[name]
        for (let i = 0; i < 4; i++) {
            const images = document.createElement("div")
            images.className = "image"
            const image = document.createElement("img")
            image.src = data[i].image
            images.append(image)
            const title = document.createElement("h1")
            title.textContent = data[i].title
            images.append(title)
            items[i].append(images)
            const description = document.createElement("p")
            description.textContent = data[i].description
            items[i].append(description)
            const skils = document.createElement("span")
            skils.className = "skills"
            skils.innerHTML = `<span class="title">Skills : </span>${data[i].skils}`
            items[i].append(skils)
            items[i].addEventListener("click",()=>{
                window.open(data[i].url,"_blank")
            })
        }
    }).catch((error) => {
        console.error("Error occurred:", error);
    });

}
generateautomation("automation")

const automation = document.getElementById("automation")
automation.addEventListener("click",()=>{
    const items = document.getElementsByClassName("item")
    const itemsArray = Array.from(items);
    itemsArray.forEach(element => {
        element.innerHTML ='';
    });
    generateautomation("automation")
}) 

const ai = document.getElementById("ai")
ai.addEventListener("click",()=>{
    const items = document.getElementsByClassName("item")
    const itemsArray = Array.from(items);
    itemsArray.forEach(element => {
        element.innerHTML ='';
    });
    generateautomation("ai")
})

    
