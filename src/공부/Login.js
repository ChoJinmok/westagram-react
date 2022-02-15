import React from "react";

// function component
function Login() {
    const notify = () => alert("Hello");

    return <h1 onClick={notify} style={{color:"red"}}>Login</h1>;
}


// class component
// class Login extends React.Component {
//     render() {
//         return <h1>Login</h1>
//     }
// }

export default Login;