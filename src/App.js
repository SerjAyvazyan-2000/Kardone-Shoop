import './App.scss';
import "./assets/style/index.scss"
import "./assets/style/fonts/style.css"
import ServerPage from "./SERVER-PAGE";
import AdminPage from "./ADMIN-PAGE";

function App() {
    let userToken = localStorage.getItem("userToken",)
    return (
        <div className="App">
            {userToken ?
                <AdminPage/>
                :
                <ServerPage/>
            }

        </div>
    );
}

export default App;
