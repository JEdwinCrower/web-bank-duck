// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Mission } from "./pages/Mission";
import { Vision } from "./pages/Vision";
import { Comunicados } from "./pages/Comunicados";
import { Credits } from "./pages/Credits";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes  >
        <Route
          path="/web-bank-duck/"
          element={<Home />}
        />
        <Route
          path="/web-bank-duck/inicio"
          element={<Home />}
        />
        <Route
          path="/web-bank-duck/mision"
          element={<Mission />}
        />
        <Route
          path="/web-bank-duck/vision"
          element={<Vision />}
        />
        <Route
          path="/web-bank-duck/acerca"
          element={<About />}
        />
        <Route
          path="/web-bank-duck/creditos"
          element={<Credits />}
        />
        <Route
          path="/web-bank-duck/comunicados"
          element={
            <Comunicados
              comunicados={[
                {
                  titulo: "Comunicado 1",
                  contenido:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellat in et magnam vitae esse voluptas, incidunt, sint corrupti quo totam veniam adipisci mollitia possimus animi similique cupiditate facilis? Iure?",
                  archivo: "/",
                },
                {
                  titulo: "Comunicado 2",
                  contenido:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellat in et magnam vitae esse voluptas, incidunt, sint corrupti quo totam veniam adipisci mollitia possimus animi similique cupiditate facilis? Iure?",
                  archivo: "/",
                },
                {
                  titulo: "Comunicado 3",
                  contenido:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellat in et magnam vitae esse voluptas, incidunt, sint corrupti quo totam veniam adipisci mollitia possimus animi similique cupiditate facilis? Iure?",
                  archivo: "/",
                },
              ]}
            />
          }
        />
        <Route
          path="/web-bank-duck/contacto"
          element={<Contact />}
        />
        <Route
          path="/web-bank-duck/login"
          element={<Login />}
        />
        <Route
          path="/web-bank-duck/registrarse"
          element={<Register />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
