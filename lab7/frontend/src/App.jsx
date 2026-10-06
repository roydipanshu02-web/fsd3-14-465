import Book from "./components/Book";
import Pen from "./components/Pen";


const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 ={
  picUrl: "https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY218_.jpg",
  bname:"React Design Pattern",
  price: 1199,
  quantity: 10,
  rating:5.0,
};

const p1 ={
  picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08bDsyW2wtQH4adlVZLIL9xc2l6ws0RH7E1k3fwBKFw&s=10",
  bname: "Exclusive Pen",
  price: 100,
  quantity:10,
  rating: 4.8,
}

export default function App() {
  return (
   <>
   <h1>ONLINE STATIONERY STORE</h1>
   <div className="container">
   <Book book={b1} />
   <Book book={b2} />
   <Book book={b1} />
   <Book book={b2} />
   </div>
   <div className="container">
   <Pen pen={p1} />
   <Pen pen={p1} />
   <Pen pen={p1} />
   </div>
   </>
  );
}