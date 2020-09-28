let links=document.getElementsByClassName('tag');
let content=document.getElementsByClassName('content')

for(let i=0;i<links.length;i++){
    links[i].style.fontSize=getRandom(40,20)+'px';
    links[i].addEventListener('click', choice);
}
function getRandom(a,b){
    return Math.floor(Math.random() * (a - b)) + b;
}


function choice(event){
    console.log(event.target.innerHTML);
    getImage(event.target.innerHTML)
    event.preventDefault();
}

function getImage(name){
    fetch("https://pixabay.com/api/?key=17821756-c0a219aa3d5764e612ea56f36&q="+name+"&page=2&per_page=200&image_type=photo")
    .then(function(data){
      return data.json();
    })
    .then(function(data){
        let rand=getRandom(200,1);
        console.log(data.hits[rand])
        if(content[0].contains(document.getElementsByClassName('photo')[0]))
        content[0].removeChild(document.getElementsByClassName('photo')[0]);

        let divPhoto=document.createElement('div');
        divPhoto.classList.add('photo');
        let image=document.createElement('img');
        image.classList.add('image');
        image.src=data.hits[rand].largeImageURL;
        let divDesc=document.createElement('div');
        divDesc.classList.add('desc');
        divDesc.innerHTML=name;
        divPhoto.appendChild(image);
        divPhoto.appendChild(divDesc);
        content[0].appendChild(divPhoto);
   
// image.parentElement.classList.add('photo')

//         image.src = data.hits[rand].largeImageURL;
//         desc.innerHTML='Tags: '+data.hits[rand].tags;

    })
}