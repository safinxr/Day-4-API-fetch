function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data =>posts(data))
}

function posts(data){
    const container = document.getElementById("section");
    for(const post of data){
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `<h2>User Id: ${post.userId}</h2>
        <h1>Id: ${post.id}</h1>
        <h3>${post.title}</h3>
        <p>${post.body}</p>`
        container.appendChild(div);
    }
}
loadPost();
function getimg(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(imgs =>show(imgs))
} 
function show(x){
    const container =document.getElementById("section");
    for(const img of x){
        const div =document.createElement("div");
        div.classList.add("d");
        div.innerHTML = `<img src="${img.url}">`
        container.appendChild(div);
        
    }
}
getimg();