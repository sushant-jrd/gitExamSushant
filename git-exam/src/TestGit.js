import "./App.css";
import { ReactDOM } from "react-dom/client";
import { Navigate, Redirect } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloWorld from "./HelloWorld";

function TestGit() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HelloWorld />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default TestGit;
