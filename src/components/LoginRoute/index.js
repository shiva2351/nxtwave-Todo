import { Link } from "react-router-dom"


const LoginRoute=()=>{

    console.log("signup")
    return <div>
    <form>
        <input id="user" type="text" placeholder="Username" />
        <label htmlFor="user">username</label>
        <input id="pass" type="password" placeholder="Password" />
        <label htmlFor="pass">username</label>
        <button type="button">show</button>
        <button type="Submit">Login</button>
    </form>
    <p>new to Todo website? <Link to="/signup">SignUp here!</Link></p>
</div>
}


export default LoginRoute