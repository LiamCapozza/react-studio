// TODO: create a component that displays a single bakery item
import React from "react";

export default function BakeryItem(props) {
  return (
    <div class="BakeryItem">
      <img src={props.image} />
      <p class="name">{props.name}</p>
      <p class="description">{props.description}</p>
      <p class="price">{props.price}</p>
      <button onClick={props.func}>Add</button>
    </div>
  );
}
