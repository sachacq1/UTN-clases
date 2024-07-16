import { useState } from "react";
import { useContador } from "../../../context/ContadorContext.jsx";
import '../../home/home.css'


const Contacto = () => {

    const { contador, sumar, restar } = useContador();

    console.log(contador);

    return (
        <div>
            <h4>Tienes {contador} productos</h4>

            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>

    )
};
export default Contacto