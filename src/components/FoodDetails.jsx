import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "15b499f0b3ed443e95ea2ce19bb93b72";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.receipeCard}>
        <h1 className={styles.receipeName}>{food.title}</h1>
        <img className={styles.receipeImage} src={food.image} />
        <div className={styles.receipeDetails}>
          <span>
            <strong>🕛{food.readyInMinutes} Miniutes</strong>
          </span>
          <span>
            <strong>Serves 🧑‍🤝‍🧑 {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing / 100} Per serving</strong>{" "}
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2> Instructions</h2>
        <div className={styles.receipeInstructions}>
          <ol>
            {isLoading ? (
              <p>loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step} </li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
