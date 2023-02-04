const requestURL = '';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const shopping_centers = jsonObject['shopping_centers'];
        for (let i = 0; i < shopping_centers.length; i++) {
            //create a section for card
            let card = document.createElement('section');
            
            //create the title of the card which is the name of the prophet
            let h4 = document.createElement('h4');

            //set the textcontent of the element h4 shopping_centers[i] means the shopping_centers index then .name means the name to be accessed. same goes with .lastname
            h4.textContent = shopping_centers[i].name

            //time to store the <h4>FirstName Lastname(Of The Prophet)</2>
            card.appendChild(h4);

            //time to append the card section to the div element with .cards class
            document.querySelector('div.shopping_centers_cards').appendChild(card);

            //create a p element
            let address = document.createElement("p");

            //so .textContent is a way to store a text inside a newly created element huh
            
            address.textContent = "Address: " + shopping_centers[i].address;

            card.appendChild(address);

            let phone = document.createElement("p");
            //so .textContent is a way to store a text inside a newly created element huh
            phone.textContent = "Phone: " + shopping_centers[i].phone;
            card.appendChild(phone);

            


            let image = document.createElement("img");
            image.setAttribute("src", shopping_centers[i].imageurl);
            image.setAttribute("alt", shopping_centers[i].name + " " + shopping_centers[i].lastname + " - " + i)
            card.appendChild(image)
            

        }
        });