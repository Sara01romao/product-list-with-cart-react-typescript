export type ProductType = {
    id: number;
    name: string;
    type: string;
    img: string;
    price: number;
  };
  
  export const products: ProductType[] = [
    {
      id: 1,
      name: "Waffle with Berries",
      type: "Waffle",
      img: "/waffle.png",  
      price: 6.50,
    },
    {
      id: 2,
      name: "Vanilla Bean Crème Brûlée",
      type: "Crème Brûlée",
      img: "/vanilla-bean.png",  
      price: 7.00,
    },
    {
      id: 3,
      name: "Macaron Mix of Five",
      type: "Macaron",
      img: "/macaron.png",  
      price: 8.00,
    },
    {
      id: 4,
      name: "Classic Tiramisu",
      type: "Tiramisu",
      img: "/tiramisu.png",  
      price: 5.50,
    },
    {
      id: 5,
      name: "Pistachio Baklava",
      type: "Baklava",
      img: "/baklava.png",  
      price: 4.00,
    },
    {
      id: 6,
      name: "Lemon Meringue Pie",
      type: "Pie",
      img: "pie.png",  
      price: 5.00,
    },
    {
      id: 7,
      name: "Red Velvet Cake",
      type: "Cake",
      img: "/cake.png",  
      price: 4.50,
    },
    {
      id: 8,
      name: "Salted Caramel Brownie",
      type: "Brownie",
      img: "brownie.png",  
      price: 5.50,
    },
    {
      id: 9,
      name: "Vanilla Panna Cotta",
      type: "Panna Cotta",
      img: "/panna-cotta.png",  
      price: 6.50,
    },
  ];
  