import React from "react";
import BotCard from "./BotCard";

function BotCollection({bot}) {
  // Your code here
  //console.log(botImage) //props working

  const botOne = bot.map((dataOne)=>{
    console.log(dataOne) //map is working and creating a new array of each indviually bot
    return <BotCard key={dataOne.id} bot={dataOne}/>
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {/* Collection of all bots */}
        {botOne}
      </div>
    </div>
  );
}

export default BotCollection;
