import React from "react";
import Table from "./Table";
import Form from "./Form";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Services from "./Sevices";

export default function PageIndex(){
  return (
    <Routes>
    <Route path="/table" element={<Table />} />
    <Route path="/form" element={<Form />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
  </Routes>
  );
}