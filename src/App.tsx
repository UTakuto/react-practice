import "./App.css";
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import MyFavoriteFoods from "./components/MyFavoriteFoods";
// import HelloUser from "./components/HelloUser";
import Users from "./components/Users";

function App() {
    const UsersInfo = [
        { name: "takuto", age: 10, hobbies: ["Cooking", "Running"] },
        { name: "Hanako", age: 20, hobbies: ["Reading", "Traveling"] },
        { name: "Tom", age: 30, hobbies: ["Listening", "Cycling"] },
    ];

    return (
        <div>
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
            <Counter />
        </div>
    );
}

export default App;
