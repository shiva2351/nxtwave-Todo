import { Link } from "react-router-dom"

const SignUp=()=>{

    console.log("signup")
    return <div>
        <form>
            <input id="user" type="text" placeholder="Username" />
            <label htmlFor="user">username</label>
            <input id="pass" type="password" placeholder="Password" />
            <label htmlFor="pass">username</label>
            <button type="button">show</button>
            <button type="submit">signup</button>
        </form>
        <p>already signIn? <Link to="/login">Login here!</Link></p>
    </div>
}


export default SignUp