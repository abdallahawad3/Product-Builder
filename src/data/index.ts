import type {  ICategory, IInputs, IProduct } from "../interfaces";
import {v4 as uuid} from "uuid"
import {car1, car2, furniture1, furniture2, furniture3, nike, nike2, pc, pcDesktop, tShirt,} from "../assets/images/index"

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    description:
      "quia et suscipit\nsuscipit quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    imageURL:car1,
    price: "5000000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "car",
      imageURL: car1,
    },
  },
  {
    id: uuid(),
    title: "qui est esse",
    description:
      "est rerum tempore vitae sequi  porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    imageURL: car2,
    price: "6598359",
    colors: ["#01204E", "#028391", "#F6DCAC"],
    category: {
      name: "car",
      imageURL: car2,
    },
  },
  {
    id: uuid(),
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    description:
      "deserunt eos nobis asperiores ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
    imageURL: furniture1,
    price: "8548789",
    colors: ["#850F8D ", "#C738BD", "#E49BFF"],
    category: {
      name: "furniture",
      imageURL: furniture1,  
    },
  },
  {
    id: uuid(),
    title: "eum et est occaecati",
    description:
      "ad mollitia et omnis minus architecto aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore",
    imageURL: furniture2,
    price: "5454824",
    colors: ["#222831", "#31363F", "#76ABAE"],
    category: {
      name: "furniture",
      imageURL:
        furniture2,
    },
  },
  {
    id: uuid(),
    title: "nesciunt quas odio",
    description:
      "corporis rerum ducimus vel eum  deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex",
    imageURL:
      furniture3,
    price: "425",
    colors: ["#43766C", "#F8FAE5", "#F97300"],
    category: {
      name: "furniture",
      imageURL:
        furniture3,
    },
  },
  {
    id: uuid(),
    title: "dolorem eum magni eos aperiam quia",
    description:
      "similique fugit est\nillum et dolorum harum et odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
    imageURL:
      nike,
    price: "205",
    colors: ["#070F2B", "#1B1A55", "#88re27"],
    category: {
      name: "nike",
      imageURL:
        nike,
    },
  },
  {
    id: uuid(),
    title: "magnam facilis autem",
    description:
      "error suscipit maxime adipisci consequuntur distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur",
    imageURL:
      nike2,
    price: "20589",
    colors: ["#030637", "#910A67", "#424769"],
    category: {
      name: "nike",
      imageURL:
        nike2,
    },
  },
  {
    id: uuid(),
    title: "dolorem dolore est ipsam",
    description:
      "commodi non non omnis et voluptas sit\nautem aut nobis magnam et amet et nemo voluptate expedita adipisci error dolorem",
    imageURL:
      pc,
    price: "520",
    colors: ["#FF0000", "#FFF9D0", "#03AED2"],
    category: {
      name: "pc-desktop",
      imageURL:
        pc,
    },
  },
  {
    id: uuid(),
    title: "dolorem dolore est ipsam",
    description:
      "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente amet et nemo voluptate expedita adipisci error dolorem",
    imageURL:
      pcDesktop,
    price: "10005",
    colors: ["#F6E9B2", "#7ABA78", "#B3C8CF"],
    category: {
      name: "pc-desktop",
      imageURL:
        pcDesktop,
    },
  },
  {
    id: uuid(),
    title: "dolorem dolore est ipsam",
    description:
      "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente amet et nemo voluptate expedita adipisci error dolorem",
    imageURL:
      tShirt,
    price: "10005",
    colors: ["#F6E9B2", "#7ABA78", "#B3C8CF"],
    category: {
      name: "t-shirt",
      imageURL:
      tShirt,
    },
  },
];

export const formInputList:IInputs[] = [
  {
    id: "title",
    name:"title",
    label:"Product Title",
    type:"text",
  },
  {
    id: "description",
    name:"description",
    label:"Product description",
    type:"text",
  },
  {
    id: "image",
    name:"imageURL",
    label:"Product image url",
    type:"text",
  },
  {
    id: "price",
    name:"price",
    label:"Product price",
    type:"text",
  },
  
]


export const colors: string[] = [
  "#A855F7",
  "#2563EB",
  "#84D2C5",
  "#13005A",
  "#FF6E31",
  "#3C2A21",
  "#6C4AB6",
  "#CB1C8D",
  "#000000",
  "#645CBB",
  "#1F8A70",
  "#820000",
  "#FF0032",
] 


export const Category:ICategory[] = [
  
  {
    id: uuid(),
    name: "Cars",
    imageURL:car1,
  },
  
  {
    id: uuid(),
    name: "Nike",
    imageURL:nike,
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageURL:tShirt,
  },
  

  {
    id: uuid(),
    name: "Furniture",
    imageURL:furniture1,
  },
  {
    id: uuid(),
    name: "Pc-Desktop",
    imageURL:pcDesktop,
  },
]