const divCards = document.querySelector("#container-cards");
const heroes = [
  {
    nombre: "Capitán América",
    url: "/imgs/capi.jpg",
    desc: "El Capitán América es un superhéroe conocido por su patriotismo, valentía y habilidades sobrehumanas.",
    producer: "Marvel",
    date: "22/07/2011",
  },
  {
    nombre: "Capitana Marvel",
    url: "/imgs/marvel.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Bruja Escarlata",
    url: "/imgs/bruja.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Loki",
    url: "/imgs/loki.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Doctor Strange",
    url: "/imgs/strange.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Spiderman",
    url: "/imgs/spiderman.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Pantera Negra",
    url: "/imgs/pantera.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Vision",
    url: "/imgs//vision.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Viuda Negra",
    url: "/imgs/viuda.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Thor",
    url: "/imgs/thor.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Falcon",
    url: "/imgs/falcon.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
  {
    nombre: "Hulk",
    url: "/imgs/hulk.jpg",
    desc: "La Capitana Marvel, también conocida como Carol Danvers, es una heroína poderosa de Marvel con habilidades cósmicas.",
    producer: "Marvel",
    date: "08/03/2019",
  },
];

document.addEventListener("DOMContentLoaded", (e) => {
  heroes.forEach((item) => {
    divCards.insertAdjacentHTML(
      "beforeend",
      ` <card-component class="g-3 col-4">
        <span slot = "nombre">${item.nombre}</span>
        <img slot="img" src="${item.url}" alt="${item.nombre}">
        <span slot = "desc">${item.desc}</span>
        <span slot = "producer">${item.producer}</span>
        <span slot = "date">${item.date}</span>
        </card-component> `
    );
  });
});
