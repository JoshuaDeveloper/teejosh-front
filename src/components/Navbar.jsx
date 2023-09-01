"use client";
import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-24 py-6 bg-green-700">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">TeeJosh</h1>
        <h1 className="text-xl font-bold text-white">10% de descuento en compras mayores a S/. 200.</h1>
      </div>
      <div className="flex items-center">
        <div className="flex border-2 rounded-lg pr-2">
          <InputText
            className="flex-grow pl-3 py-2 outline-none bg-transparent text-white"
            placeholder="Buscar"
          />
          <Divider layout="vertical" className="bg-black" />
          <Button className="ml-3">
            <AiOutlineSearch size={28} />
          </Button>
        </div>
        <Button className="ml-3">
          <BiUser size={28} />{" "}
        </Button>
        <Button className="ml-3">
          <AiOutlineShoppingCart size={28} />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
