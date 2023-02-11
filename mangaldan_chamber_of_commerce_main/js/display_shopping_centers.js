const requestURLShoppingCenters = 'https://raw.githubusercontent.com/rcari013/wdd230/master/mangaldan_chamber_of_commerce_main/json/shoppingCenters.json';

fetch(requestURLShoppingCenters)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        
        const shoppingCenters = jsonObject['shoppingCenters'];
        for (let i = 0; i < shoppingCenters.length; i++) {
            //create a section for card
            let card = document.createElement('section');
            
            //create the title of the card which is the name of the prophet
            let h4 = document.createElement('h4');

            //set the textcontent of the element h4 shoppingCenters[i] means the shoppingCenters index then .name means the name to be accessed. same goes with .lastname
            h4.textContent = shoppingCenters[i].name

            //time to store the <h4>FirstName Lastname(Of The Prophet)</2>
            card.appendChild(h4);

            //time to append the card section to the div element with .cards class
            document.querySelector('div.shopping_centers_cards').appendChild(card);

            //create a p element
            let address = document.createElement("p");

            //so .textContent is a way to store a text inside a newly created element huh
            
            address.textContent = "Address: " + shoppingCenters[i].address;

            card.appendChild(address);

            let phone = document.createElement("p");
            //so .textContent is a way to store a text inside a newly created element huh
            phone.textContent = "Phone: " + shoppingCenters[i].phone;
            card.appendChild(phone);

            


            let image = document.createElement("img");
            image.setAttribute("src", shoppingCenters[i].imageurl);
            image.setAttribute("alt", shoppingCenters[i].name + " ")
            card.appendChild(image)
            

        }
        });