const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};


function Book() {
  return(
    <div>
    <img src={b1.picUrl}
    alt={b1.bname}
    />  
    <h1>{b1.bname}</h1>
    <h2>Price : {b1.price}</h2>
    <h3>Quantity: {b1.quantity}</h3>
    <h4>Rating : {b1.rating}<span>{"\u2605"}</span></h4>
    </div>
  );
}

export default function App() {

  return (
  <>
  <Book/>
  <h1>Hello React</h1>
  <Book/>
  <Book/>
  <Book/>
  </>
  );
}