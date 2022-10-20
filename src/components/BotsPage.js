import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bot, setBot] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
  .then((response) => response.json())
  .then((data) => setBot(data));
  }, []);
  //console.log(bot) //Works bot is the array of data
  return (
    <div>
      <YourBotArmy />
      <BotCollection bot={bot}/>
    </div>
  )
}

export default BotsPage;
