const content = document.querySelector("#content");

export default function homeTab() {
    const title = document.createElement("div");
    const description = document.createElement("div");
    const hoursOpen = document.createElement("div");
    const hours = document.createElement("div");
    const hoursTime = document.createElement("div");
    const location = document.createElement("div");
    const locationtext = document.createElement("div");
    const locationaddress = document.createElement("div");

    title.id = "title";
    description.id = "description";
    hoursOpen.id = "hoursOpen";
    hoursTime.id = "hoursTime";
    location.id = "location";

    title.innerHTML = "Mowy's Pizzeria";
    title.style.fontSize = "3rem";
    title.style.backgroundColor = "#1c5da3";
    title.style.margin = "50px 0px";
    title.style.border = "#a83323 solid 10px";
    title.style.borderRadius = "10px";
    title.style.width = "70%";
    title.style.display = "flex";
    title.style.alignItems = "center";
    title.style.justifyContent = "center";

    description.style.fontSize = "1.5rem";
    description.style.border = "#a83323 solid 10px";
    description.style.borderRadius = "10px";
    description.style.backgroundColor = "#1c5da3";
    description.style.maxWidth = "60%";
    description.style.padding = "20px";
    description.textContent = "Welcome to the Mowy's Pizzeria! We make pizza here with love and fresh ingredients, Come try some!";

    hours.style.minWidth = "60%";
    hours.style.border = "#a83323 solid 10px";
    hours.style.borderRadius = "10px";
    hours.style.backgroundColor = "#1c5da3";
    hours.style.padding = "20px";
    hours.style.margin = "30px";
    hours.style.fontSize = "1.5rem";

    hoursOpen.textContent = "Hours";
    hoursOpen.style.fontSize = "2rem";
    hoursOpen.style.marginLeft = "40px";
    hoursOpen.style.fontFamily = "Arial";

    hoursTime.setAttribute('style', 'white-space: pre;');
    hoursTime.textContent = "Sunday: 8am - 8pm\r\nMonday: 6am - 6pm\r\nTuesday: 6am - 6pm\r\nWednesday: 6am - 6pm\r\nThursday: 6am - 10pm\r\nFriday: 6am - 10pm\r\nSaturday: 8am - 10pm";
    hoursTime.style.alignSelf = "center";

    hours.style.display = "flex";
    hours.style.flexDirection = "column";

    hours.appendChild(hoursOpen);
    hours.appendChild(hoursTime);

    location.style.minWidth = "60%";
    location.style.border = "#a83323 solid 10px";
    location.style.borderRadius = "10px";
    location.style.backgroundColor = "#1c5da3";
    location.style.padding = "20px";
    location.style.fontSize = "1.5rem";

    location.style.display = "flex";
    location.style.flexDirection = "column";
    
    locationtext.textContent = "Location";
    locationtext.style.marginLeft = "40px";
    locationtext.style.fontFamily = "Arial";
    locationtext.style.fontSize = "2rem";

    locationaddress.textContent = "#123 Sesame St, Black Shore";
    locationaddress.style.alignSelf = "center";

    location.appendChild(locationtext);
    location.appendChild(locationaddress);

    content.style.height = "850px";

    content.append(title);
    content.append(description);
    content.append(hours);
    content.append(location);
}