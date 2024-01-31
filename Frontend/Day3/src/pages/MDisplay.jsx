import "../assets/css/Mstyle.css";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import items from "../components/MData";
import { useState } from "react";
import NavBar from "../components/Navbar";

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
    </main>
    </>
  );
}
