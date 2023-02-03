const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            //create a section for card
            let card = document.createElement('section');
            
            //create the title of the card which is the name of the prophet
            let h2 = document.createElement('h2');

            //set the textcontent of the element h2 prophets[i] means the prophets index then .name means the name to be accessed. same goes with .lastname
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

            //time to store the <h2>FirstName Lastname(Of The Prophet)</2>
            card.appendChild(h2);

            //time to append the card section to the div element with .cards class
            document.querySelector('div.cards').appendChild(card);

            //create a p element
            let birthdate = document.createElement("p");

            //so .textContent is a way to store a text inside a newly created element huh
            
            birthdate.textContent = "Date of Birth: " + prophets[i].birthdate;

            card.appendChild(birthdate);

            let birthplace = document.createElement("p");
            //so .textContent is a way to store a text inside a newly created element huh
            birthplace.textContent = "Place of Birth: " + prophets[i].birthplace;
            card.appendChild(birthplace);

            


            let image = document.createElement("img");
            image.setAttribute("src", prophets[i].imageurl);
            image.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + " - " + i)
            card.appendChild(image)
            

        }
        });