function displayPost(){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(posts => displayPost1(posts))
}
displayPost();

function displayPost1(posts){
let posCon= document.getElementById('posts');
for(let post of posts){
    let siglePost=document.createElement('div');
    siglePost.classList.add('post');
    siglePost.innerHTML=`
    <h3> Country name= ${post.name.common} </h3>
    <h3> Population= ${post.population} </h3>
    <h3> Flag= ${post.flag} </h3>
    `;
    posCon.appendChild(siglePost)
}


}
