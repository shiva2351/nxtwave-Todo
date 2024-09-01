import Header from "../Header"
import "./index.css"

const Home=()=>{
    console.log('home')
    const demo=["kk","ff","dfjd"]
    return <div>
        <Header />
        <div>
            <div class="home-card-1">
                <input type="search" />
                <div>
                    <button type="button">All</button>
                    <button type="button">Active</button>
                    <button type="button">Done</button>
                </div>
            </div>
            <ul>
                {demo.map(each=><li key={each}><ul>
                      <li>each</li>
                      <li>
                        <span>active</span>
                        <span>Edit</span>
                        <span>Delete</span>
                      </li>
                    </ul></li>)}
            </ul>
            <div class="home-card-1">
                <input type="search" />
                <div>
                    <button type="button">Add Task</button>
                </div>
            </div>
        </div>
    </div>
}

export default Home;