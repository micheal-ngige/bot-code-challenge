// components/YourBotArmy.js
import React from 'react';

const YourBotArmy = ({ army, releaseBot, dischargeForever }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <button onClick={() => releaseBot(bot)}>Release Bot</button>          
          <button onClick={() => dischargeForever(bot)}><span role="img" aria-label="discharge-icon">
              ❌
            </span>Discharge Forever</button>
        
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
