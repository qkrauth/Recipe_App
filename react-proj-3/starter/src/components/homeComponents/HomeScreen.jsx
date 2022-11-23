import React from "react";
import AdBanner from "./AdBanner";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState();

  const [search, setSearch] = useState("");

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      console.log(res.data);
      setRecipes(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe:"
        />
      </div>

      <div className="card-container">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
};

export default HomeScreen;
