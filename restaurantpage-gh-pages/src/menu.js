const content = document.querySelector("#content");



export default function menuTab() {
    const description = document.createElement("div");
    const title = document.createElement("div");
    const page1 = document.createElement("div");

    title.style.fontSize = "3rem";
    title.style.backgroundColor = "#1c5da3";
    title.style.margin = "50px 0px";
    title.style.border = "#a83323 solid 10px";
    title.style.borderRadius = "10px";
    title.style.display = "flex";
    title.style.alignItems = "center";
    title.style.justifyContent = "center";
    title.style.width = "70%";

    title.textContent = "Menu";
    
    page1.style.fontSize = "3rem";
    page1.style.backgroundColor = "#1c5da3";
    page1.style.margin = "50px 0px";
    page1.style.border = "#a83323 solid 10px";
    page1.style.borderRadius = "10px";
    page1.style.display = "flex";
    page1.style.alignItems = "center";
    page1.style.justifyContent = "center";
    page1.style.width = "40%";

    page1.textContent = "Pizza";

    // const box1 = document.createElement("div");
    // box1.style.fontSize = "3rem";
    // box1.style.backgroundColor = "#1c5da3";
    // box1.style.border = "#a83323 solid 10px";
    // box1.style.borderRadius = "10px";
    // box1.style.display = "flex";
    // box1.style.alignItems = "center";
    // box1.style.justifyContent = "center";
    // box1.style.width = "450px";
    // box1.style.height = "450px";
    let box1 = document.createElement("div");
    let box2 = document.createElement("div");

    box1 = box("Pizza" ,"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", "100");

    box2 = box("Pizza" ,"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", "100");
    content.style.height = "2000px";
    content.style.gap = "20px";

    content.append(title);
    content.append(page1);
    content.append(box1);
    content.append(box2);
    // content.append(box1);
}

function box(name, desc, price) {
    const box = document.createElement("div");
    const boxname = document.createElement("div");
    const boxdescription = document.createElement("div");
    const boxprice = document.createElement("div");
    box.style.fontSize = "2rem";
    box.style.backgroundColor = "#1c5da3";
    box.style.border = "#a83323 solid 10px";
    box.style.borderRadius = "10px";
    box.style.width = "450px";
    box.style.height = "450px";

    box.style.display = "flex";
    box.style.flexDirection = "column";

    boxname.style.margin = "30px 0px 20px 40px";
    boxdescription.style.display = "flex";
    boxdescription.style.justifyContent = "center";
    boxdescription.style.alignContent = "center";
    boxdescription.style.marginLeft = "60px";
    boxdescription.style.marginRight = "30px";

    boxname.innerHTML = name;
    boxdescription.innerHTML = desc;
    boxdescription.style.fontSize = "1rem";

    boxprice.innerHTML = "$" + price;
    boxprice.style.fontSize = "1rem";
    boxprice.style.marginLeft = "60px";
    boxprice.style.marginRight = "30px";

    box.appendChild(boxname);
    box.appendChild(boxdescription);
    box.appendChild(boxprice);

    return box;
}