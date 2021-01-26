import React, { Component } from "react";
import CardNota from "./CardNota/CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {Array.of("work", "work", "study").map((categoria, index) => {
          return (
            <li key={index}>
              <div>{categoria}</div>
              <CardNota></CardNota>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
