
document.getElementById("uInfo").addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(userData => userCall (userData))
})

function userCall(userData){
    const ul =document.getElementById("ul");
    for(const user of userData){
        const li = document.createElement("li");
        li.innerText =`Name: ${user.name}
        Id: ${user.id}
        City: ${user.city}`;
        ul.appendChild(li);
    }
}