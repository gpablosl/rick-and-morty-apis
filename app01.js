const char={
    image:document.getElementById('char-image'),
    name:document.getElementById('char-name')
}
const Getchar=async _=>{
        const url=(`https://rickandmortyapi.com/api/character/${1}`)
        console.log(url);
        const data= await fetch(url);
        const dataJson=await data.json();
    
        const{name,image}=dataJson;
        char.image.src=await image;
        char.name.innerHTML= `Name: ${name}`;

}
Getchar();