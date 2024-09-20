import "./App.css";
import About from "./components/About";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";
import MyFavoriteFoods from "./components/MyFavoriteFoods";
import NotFound from "./components/NotFound";
import TodoList from "./components/TodoList";
import Users from "./components/Users";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
    const UsersInfo = [
        { name: "takuto", age: 10, hobbies: ["Cooking", "Running"] },
        { name: "Hanako", age: 20, hobbies: ["Reading", "Traveling"] },
        { name: "Tom", age: 30, hobbies: ["Listening", "Cycling"] },
    ];

    return (
        <div style={{ padding: "0 20px 20px" }}>
            <HelloWorld />
            <MyFavoriteFoods />

            {UsersInfo.map((UserInfo, index) => {
                return (
                    <Users
                        key={index}
                        name={UserInfo.name}
                        age={UserInfo.age}
                        hobbies={UserInfo.hobbies}
                    />
                );
            })}
            {/* count up setting */}
            <Counter />

            {/* todo list */}
            <div
                style={{
                    borderTop: "solid 1px #9c9c9c",
                    marginTop: "20px",
                }}
            >
                <h2>TodoList</h2>
                <TodoList />
            </div>

            <Router>
                <h2
                // style={{
                //     borderTop: "solid 1px #9c9c9c",
                //     paddingTop: "10px",
                // }}
                >
                    React Router
                </h2>
                <nav>
                    {/* Link component を使ってページ間の移動リンク作成 */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/fetch-data">Fetch Data</Link>
                </nav>

                {/* Routes内に個々のページへのルート作成 */}
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/fetch-data" element={<FetchData />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
