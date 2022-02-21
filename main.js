async function apiCall(url) {
    //add api call logic here
    try{
       let res = await fetch(url);

       let data = await res.json();
    //    console.log("data:",data)
        return data;
    }catch(error){
        console.log("error:",error)
    }
}


function appendArticles(articles, main) {
    //add append logic here
articles.forEach((element) => {

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = element.urlToImage;

    let p = document.createElement("p");
    p.innerText = element.source.name;

    let description = document.createElement("p");
    description.innerText = element.description;

    let content = document.createElement("p");
    content.innerText = element.content;

    div.append(image, p, description, content);

    main.append(div);
});

}

export { apiCall, appendArticles }