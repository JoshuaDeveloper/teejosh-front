"use client";
import React, { useState } from "react";
// import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Sidebar } from "primereact/sidebar";
import { AiOutlineMenu } from "react-icons/ai";
import { PanelMenu } from "primereact/panelmenu";
import "./customstyles.css";
const items = [
  {
    label: "Inicio",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-plus",
        items: [
          {
            label: "Bookmark",
            icon: "pi pi-fw pi-bookmark",
          },
          {
            label: "Video",
            icon: "pi pi-fw pi-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-trash",
      },
      {
        label: "Export",
        icon: "pi pi-fw pi-external-link",
      },
    ],
  },
  {
    label: "Marcas",
    icon: "pi pi-fw pi-pencil",
    items: [
      {
        label: "Bluey",
        icon: "pi pi-fw pi-align-left",
      },
      {
        label: "Gaby",
        icon: "pi pi-fw pi-align-right",
      },
      {
        label: "Fisher Price",
        icon: "pi pi-fw pi-align-center",
      },
      {
        label: "Midder",
        icon: "pi pi-fw pi-align-justify",
      },
    ],
  },
  {
    label: "Contacto",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
  {
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archive",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
    ],
  },
];

function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col">
      <div className=" bg-red-500 py-3 text-center">
        <h1 className="md:text-xl text-xs font-bold text-white">
          10% de descuento en compras mayores a S/. 200.
        </h1>
      </div>
      <div className="flex items-center md:px-16 px-3">
        <div className="flex-grow text-center md:text-left p-3">
          <h1 className="text-2xl font-bold">TeeJosh</h1>
        </div>
        <div className="md:hidden ml-auto flex items-center">
          <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <PanelMenu model={items} className="w-full md:w-25rem" />
          </Sidebar>
          <button onClick={() => setVisible(true)} className="bg-bluegray-600">
            <AiOutlineMenu size={25} />
          </button>
        </div>
        <div className="md:flex md:items-center hidden">
          <div className="flex border-2 rounded-lg pr-2">
            <InputText
              className="flex-grow pl-3 py-2 outline-none bg-transparent text-white border-none"
              placeholder="Buscar"
            />
            <Divider layout="vertical" className="bg-black" />
            <button className="ml-3">
              <AiOutlineSearch size={28} />
            </button>
          </div>
          <button className="ml-3">
            <BiUser size={28} />{" "}
          </button>
          <button className="ml-3">
            <AiOutlineShoppingCart size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
