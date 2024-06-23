import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { useState } from "react";
import "./app.css";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <Innercontainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </Innercontainer>
        <Innercontainer>
          <FoodDetails foodId={foodId} />
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
