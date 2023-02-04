const requestURL = 'https://raw.githubusercontent.com/rcari013/wdd230/master/mangaldan_chamber_of_commerce_main/json/business.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const business = jsonObject['business'];
        for (let i = 0; i < business.length; i++) {
            //create a section for card
            let card = document.createElement('section');
            
            //create the title of the card which is the name of the prophet
            let h4 = document.createElement('h4');

            //set the textcontent of the element h4 business[i] means the business index then .name means the name to be accessed. same goes with .lastname
            h4.textContent = business[i].name

            //time to store the <h4>FirstName Lastname(Of The Prophet)</2>
            card.appendChild(h4);

            //time to append the card section to the div element with .cards class
            document.querySelector('div.resto_cards').appendChild(card);

            //create a p element
            let address = document.createElement("p");

            //so .textContent is a way to store a text inside a newly created element huh
            
            address.textContent = "Address: " + business[i].address;

            card.appendChild(address);

            let phone = document.createElement("p");
            //so .textContent is a way to store a text inside a newly created element huh
            phone.textContent = "Phone: " + business[i].phone;
            card.appendChild(phone);

            


            let image = document.createElement("img");
            image.setAttribute("src", business[i].imageurl);
            image.setAttribute("alt", business[i].name + " " + business[i].lastname + " - " + i)
            card.appendChild(image)
            

        }
        });