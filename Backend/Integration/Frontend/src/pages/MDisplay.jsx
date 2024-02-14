import "../assets/css/Mstyle.css";
import axios from 'axios';
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import items from "../components/MData";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import AddMenuPage from "../components/AddMenu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Food() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  useEffect(()=> {
    axios.get('http://localhost:8080/fget')
    .then(response => setMenuItems(response.data))
    .catch(error => console.error("Error in fetching data",error));
  },[]);
  const addMenuItem = (newMenu)=>{
    setMenuItems([...menuItems,newMenu]);
  };
  return (
    <>
    <NavBar/>
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
      <AddMenuPage onAddMenu={addMenuItem}/>
    </main>
    </>
  );
}
