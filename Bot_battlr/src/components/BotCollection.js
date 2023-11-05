// components/BotCollection.js
import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, showBotSpecs, enlistBot }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} showBotSpecs={showBotSpecs} enlistBot={enlistBot} />
      ))}
    </div>
  );
};

export default BotCollection;
