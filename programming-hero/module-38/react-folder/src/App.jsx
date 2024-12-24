import React from "react";
import "./App.css";
import Todo from "./todo";
import Product from "./Product";
import Bookstore from "./Bookstore";

function App() {
  const book = [
    {id: 1, subject: 'Biology', price: 120},
    {id: 2, subject: 'Math', price: 100},
    {id: 3, subject: 'English', price: 150},
    {id: 4, subject: 'Physics', price: 130},
    {id: 5, subject: 'Chemistry', price: 200},
  ]


  const item = [
    {name: 'Dove', quantity: 24, price: 5},
    {name: 'Head & Shoulder', quantity: 15, price: 12},
    {name: 'Sunsilk', quantity: 8, price: 3},
    {name: 'Pentene', quantity: 15, price: 10},
    {name: 'Clear', quantity: 10, price: 3},
  ]

  return (
    <>
      <Bookstore bookArr={book}></Bookstore>
      {
        item.map(eachProduct => <Product arr={eachProduct}></Product>)
      }


      {/* <Todo work="Making Dynamic UI for Webpage" isDone={true}></Todo>
      <Todo work="Appling UI" isDone={true}></Todo>
      <Todo work="Rendering Webpage" isDone={false}></Todo> */}
      {/* <Info name="Fahad" age="25"></Info>
      <Info name="Rahat" age="16"></Info>
      <Info></Info>
      <Info name="Nirob" age="21"></Info>
      <CustomCss></CustomCss>

      <Content product="Car" price="65000"></Content>
      <Content product="House" price="955000"></Content>
      <Content product="Bike" price="245000"></Content>
      <Content></Content> */}
    </>
  );
}

function Info(props) {
  return (
    <>
      <h3 className="custom">
        Hi, I am {props.name} and my age is {props.age}
      </h3>
    </>
  );
}

function Content({ product = "Item", price = 0 }) {
  return (
    <div>
      <h2
        className="custom"
        style={{ padding: "40px", border: "5px solid cyan" }}
      >
        This is {product} and the price is {price}
      </h2>
    </div>
  );
}

function CustomCss() {
  const cssByObject = {
    padding: "20px",
    margin: "20px",
    border: "1px solid cadetblue",
    borderRadius: "25px",
    "font-size": "50px",
  };

  return <h4 style={cssByObject}>Custom CSS by JS Object</h4>;
}

export default App;
