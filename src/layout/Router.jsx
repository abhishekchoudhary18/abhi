import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Layout from "./Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/abhi" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    </>
  )
);
