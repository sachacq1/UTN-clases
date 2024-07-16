import { useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { useContador } from "../../context/ContadorContext.jsx";
import './home.css'


const Home = () => {

    const { userData, updateUser, showName } = useUser();
    const { contador, sumar, restar } = useContador();

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    console.log(contador);
    const handleChangeName = (e) => {
        setName(e.target.value)
    };
    console.log(name);
    const handleChangEmail = (ev) => {
        setEmail(ev.target.value)
    };

    console.log(email);

    const handleSubmit = (eve) => {
        eve.preventDefault();
        updateUser(name, email);
        setName("");
        setEmail("");
    }

    return (
        <div>
            {userData.name ? <div>
                <h1>Hola desde el home {userData.name}</h1>
                <h2>{userData.email}</h2>
            </div> : "no hay usuario"}

            <h4>Tienes {contador} productos</h4>

            <button onClick={sumar}>+</button>
            <button onClick={restar}></button>

            <h2>compraste {userData.purchase} productos</h2>
            <form onSubmit={handleSubmit}>
                <label > Name
                    <input type="text" placeholder="Nombre..." value={name} onChange={handleChangeName} />
                </label>
                <label >Email
                    <input type="email" placeholder="Email..." value={email} onChange={handleChangEmail} />
                </label>
                <button >Enviar</button>
            </form>
        </div>
    )
};
export default Home