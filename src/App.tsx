// import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

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
          path="/"
          element={<Home />}
        />
        <Route
          path="/inicio/"
          element={<Home />}
        />
        <Route
          path="/mision/"
          element={<Mission />}
        />
        <Route
          path="/vision/"
          element={<Vision />}
        />
        <Route
          path="/acerca/"
          element={<About />}
        />
        <Route
          path="/creditos/"
          element={<Credits />}
        />
        <Route
          path="/comunicados/"
          element={
            <Comunicados
              comunicados={[
                {
                  titulo: "Comunicado 1",
                  contenido:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellat in et magnam vitae esse voluptas, incidunt, sint corrupti quo totam veniam adipisci mollitia possimus animi similique cupiditate facilis? Iure?",
                  archivo: "/web-bank-duck/",
                },
                {
                  titulo: "Comunicado 2",
                  contenido:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellat in et magnam vitae esse voluptas, incidunt, sint corrupti quo totam veniam adipisci mollitia possimus animi similique cupiditate facilis? Iure?",
                  archivo: "/web-bank-duck/",
                },
                {
                  titulo: "Comunicado 3",
                  contenido:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellat in et magnam vitae esse voluptas, incidunt, sint corrupti quo totam veniam adipisci mollitia possimus animi similique cupiditate facilis? Iure?",
                  archivo: "/web-bank-duck/",
                },
              ]}
            />
          }
        />
        <Route
          path="/contacto/"
          element={<Contact />}
        />
        <Route
          path="/login/"
          element={<Login />}
        />
        <Route
          path="/registrarse/"
          element={<Register />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
