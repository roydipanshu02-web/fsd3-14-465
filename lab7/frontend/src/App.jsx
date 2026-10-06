import Book from "./components/Book";
import Event from "./components/Event";
import Fruit from "./components/Fruit";
import Pen from "./components/Pen";
import { books } from "./data/books";
import { pens } from "./data/pens";


export default function App() {
  return (
   <>
   <h1>ONLINE STATIONERY STORE</h1>
   <div className="container">
   <Book book={books[0]} />
   <Book book={books[1]} />
   <Book book={books[0]} />
   <Book book={books[1]} />
   </div>
   <div className="container">
   <Pen pen={pens[0]} />
   <Pen pen={pens[0]} />
   <Pen pen={pens[0]} />
   </div>
   <div className="container">
    <Fruit />
   </div>
   <div className="container">
    <Event />
   </div>
   </>
  );
}