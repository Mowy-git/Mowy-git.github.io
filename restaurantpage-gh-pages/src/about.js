const content = document.querySelector("#content");

export default function menuTab() {
    const description = document.createElement("div");
    const title = document.createElement("div");
    const name = document.createElement("div");
    const div = document.createElement("div");
    const info = document.createElement("div");

    title.style.fontSize = "3rem";
    title.style.backgroundColor = "#1c5da3";
    title.style.margin = "50px 0px";
    title.style.border = "#a83323 solid 10px";
    title.style.borderRadius = "10px";
    title.style.display = "flex";
    title.style.alignItems = "center";
    title.style.justifyContent = "center";
    title.style.width = "40%";
    title.style.height = "100px";

    title.textContent = "Contact Us!";
    

    div.style.minWidth = "60%";
    div.style.border = "#a83323 solid 10px";
    div.style.borderRadius = "10px";
    div.style.backgroundColor = "#1c5da3";
    div.style.padding = "20px 0px";
    div.style.margin = "30px";
    div.style.fontSize = "1.5rem";

    name.textContent = "Mowy";
    name.style.fontSize = "2rem";
    name.style.marginLeft = "40px";
    name.style.fontFamily = "Arial";

    info.setAttribute('style', 'white-space: pre;');
    info.textContent = "Manager\r\n123-456-7890\r\nmowysomething@gmail.com";
    info.style.alignSelf = "center";

    div.style.display = "flex";
    div.style.flexDirection = "column";

    div.appendChild(name);
    div.appendChild(info);


    content.append(title);
    content.append(div);
}