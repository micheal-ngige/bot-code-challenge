// components/BotCard.js
import React from 'react';

const BotCard = ({ bot, showBotSpecs, enlistBot }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button onClick={() => showBotSpecs(bot)}>View Details</button>
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotCard;
