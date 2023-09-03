const content = document.createElement("div");
content.classList.add("content")

document.body.appendChild(content);
//--------------------create box
const box = document.createElement("div");
box.classList.add("box");
content.appendChild(box);
//------------------------create boxData
const boxData = [
    { tag: "div", class: "box_header"},
    { tag: "div", class: "cards"},
];

for (const data of boxData){
    const element = document.createElement(data.tag);
    element.classList.add(data.class);
    box.appendChild(element);
}
//-----------------------create headerData
const headerData = [
  { tag: "h1", class: "box_header_h1", text: "تست css" },
  { tag: "h2", class: "box_header_h2", text: "فونت استفاده شده: بی نازنین" },
  { tag: "p", class: "box_header_p1", text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت" },
  { tag: "p", class: "box_header_p2", text: "صنعت چاپ و با استفاده از طراحان گرافیک است" },
];

for (const data of headerData) {
  const element = document.createElement(data.tag);
  element.classList.add(data.class);
  element.innerText = data.text;
  document.querySelector(".box_header").appendChild(element);
}
//----------------create cardsData
const cardsData = [
    { tag: "div", class: "cards_card1"},
    { tag: "div", class: "cards_card2"},
];

for (const data of cardsData){
    const element = document.createElement(data.tag);
    element.classList.add(data.class);
    document.querySelector(".cards").appendChild(element);
}
//------------------create card1 data
const card1Data = [
    { tag: "div", class: ["card","card1_cards1"]},
    { tag: "div", class: ["card","card1_cards2"]},
];

for (const data of card1Data){
    const element = document.createElement(data.tag);
    element.classList.add(...data.class);
    document.querySelector(".cards_card1").appendChild(element);
}
//--------------------------------create card2 data
const card2Data = [
    { tag: "div", class: ["card","card2_cards3"]},
    { tag: "div", class: ["card","card2_cards4"]},
];

for (const data of card2Data){
    const element = document.createElement(data.tag);
    element.classList.add(...data.class);
    document.querySelector(".cards_card2").appendChild(element);
}
//--------------------create card content
const cardData = [
    { tag: "div", class: ["card_content"] },
];

document.querySelectorAll(".card").forEach((card) => {
    cardData.forEach((data) => {
        const element = document.createElement(data.tag);
        element.classList.add(...data.class);
        card.appendChild(element);
    });
});
//---------------------------------create card content data
const cardContent = [
    {tag: "h1", class:"h1", text:"متن تست"},
    {tag: "p", class:"card_content_p", text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
]

document.querySelectorAll(".card_content").forEach((card) => {
    cardContent.forEach((data) => {
    const element = document.createElement(data.tag);
    element.classList.add(data.class);
    element.innerText = data.text;
    card.appendChild(element);  
});
});

const fontIcon = [
    ["fa", "fa-search"],
    ["fa", "fa-home"],
    ["fa", "fa-lightbulb-o"],
    ["fa", "fa-desktop"],
];
const cards = document.querySelectorAll(".card");
for(var i=0; i<fontIcon.length; i++){
    const element = document.createElement("i");
    element.classList.add(...fontIcon[i]);
    cards[i].appendChild(element)
}