const characterInfo = localStorage.getItem('characterUrl');

const characterHTML = {
    name: document.getElementById('character-name'),
    image: document.getElementById('character-img'),
    id: document.getElementById('character-id'),
    gender: document.getElementById('character-gender'),
    species: document.getElementById('character-species'),
    location: document.getElementById('character-location'),
    status: document.getElementById('character-status'),
}

const GetCharacter = () =>{
    fetch(characterInfo).then(res => res.json()).then(character => {
        console.log(character);
        const {name, image, id, gender, species, location, status} = character;
        characterHTML.name.innerHTML = `Name: ${name}`;
        characterHTML.image.src = image;
        characterHTML.id.innerHTML = `ID: ${id}`;
        characterHTML.gender.innerHTML = `Gender: ${gender}`;
        characterHTML.species.innerHTML = `Species: ${species}`;
        characterHTML.location.innerHTML = `Location: ${location.name}`;
        characterHTML.status.innerHTML = `Status: ${status}`;

        console.log(name, image, id, gender, species, location, status);
    });
}

GetCharacter();

//console.log(characterInfo);
/*        <img id="character-img" src="" alt="character" />

        <h4 id="character-name"></h4>
        <h5 id="character-id"></h5>
        <h5 id="character-gender"></h5>
        <h5 id="character-species"></h5>
        <h5 id="character-location"></h5>
        <h5 id="character-status"></h5>
        */