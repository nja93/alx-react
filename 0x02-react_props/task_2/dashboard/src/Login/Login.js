import React from "react";


function Login() {
 return (
        <>
        <form>
            <label htmlFor='email'>Email: </label>
            <input type='email' id="email"/>

            <label htmlFor="password">Password: </label>
            <input type="password" id="password"/>
            <button> OK </button>
        </form>
    </>
)
}
export default Login;