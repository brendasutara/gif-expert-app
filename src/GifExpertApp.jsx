import { useState } from "react";
import { AddCategory, GifGrid, RiverApp } from "./components";
import Bolita from "./components/Bolita";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(["Valorant"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <main>
        <h1>Gif Expert App</h1>

        <AddCategory onNewCategory={onAddCategory} />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RiverApp />
        <Bolita />
      </div>
    </>
  );
}
