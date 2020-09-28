function getImage(image,desc,i){
    let result;

    fetch("https://pixabay.com/api/?key=17821756-c0a219aa3d5764e612ea56f36&category=travel&page=2&per_page=200&image_type=photo")
    .then(function(data){
      return data.json();
    })
    .then(function(data){
        let rand=random();
        console.log(data.hits[rand])
   
image.parentElement.classList.add('photo')

        image.src = data.hits[rand].largeImageURL;
        desc.innerHTML='Tags: '+data.hits[rand].tags;

    })
   
}
function random(){
    return Math.floor(Math.random() * (200 - 1)) + 1
}

  
  const images=document.getElementsByClassName("image");
  const descs=document.getElementsByClassName("desc");
  for(let i=0;i<images.length;i++){
      getImage(images[i], descs[i],i)
  }
