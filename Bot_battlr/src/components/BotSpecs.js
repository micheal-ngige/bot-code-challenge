// components/BotSpecs.js
import React from 'react';

const BotSpecs = ({ bot, goBackToListView, enlistBot }) => {
  return (
    <div className="bot-specs">
      <h2>Bot Specs</h2>
      <div className="bot-card">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Class: {bot.bot_class}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <button onClick={goBackToListView}>Back to List</button>
        <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
      </div>
    </div>
  );
};

export default BotSpecs;
