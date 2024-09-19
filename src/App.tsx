import "./App.css";
import HelloWorld from "./components/HelloWorld";
import MyFavoriteFoods from "./components/MyFavoriteFoods";
import HelloUser from "./components/HelloUser";

function App() {
    return (
        <div>
            <HelloWorld />
            <MyFavoriteFoods />
            <HelloUser name="takuto" />
        </div>
    );
}

export default App;
