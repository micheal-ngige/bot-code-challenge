import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotFilterSort from './components/BotFilterSort';
import BotSpecs from './components/BotSpecs';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedBot, setSelectedBot] = useState(null);


  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.bot_class === bot.bot_class)) {
      setArmy([...army, bot]);
      removeBotFromCollection(bot.id);
    } else {
      alert(`You can only enlist one bot from the ${bot.bot_class} class.`);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };


  const dischargeForever = (bot) => {
    // Send a DELETE request to the backend API to remove the bot permanently.
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If the DELETE request was successful, update the frontend state.
          const updatedBots = bots.filter((b) => b.id !== bot.id);
          const updatedArmy = army.filter((b) => b.id !== bot.id);
          setBots(updatedBots);
          setArmy(updatedArmy);
        } else {
          throw new Error('Failed to delete the bot from the backend.');
        }
      })
      .catch((error) => console.error('Error deleting the bot:', error));
  };

  const removeBotFromCollection = (botId) => {
    const updatedBots = bots.filter((b) => b.id !== botId);
    setBots(updatedBots);
  };
  

  const goBackToListView = () => {
    setSelectedBot(null);
  };


  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  const filteredAndSortedBots = bots
  .filter((bot) => (filterBy ? bot.bot_class === filterBy : true))
  .sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b[sortBy] - a[sortBy];
    }
  });

  return (
    <div className="App">
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBackToListView={goBackToListView} enlistBot={enlistBot} />
      ) : (
        <>
          <YourBotArmy army={army} releaseBot={releaseBot} dischargeForever={dischargeForever} />
          <BotFilterSort
            filterBy={filterBy}
            sortBy={sortBy}
            onFilterChange={setFilterBy}
            onSortChange={setSortBy}
          />
          <BotCollection bots={filteredAndSortedBots} showBotSpecs={showBotSpecs}  enlistBot={enlistBot}/>
        </>
      )}
    </div>
  );
};

export default App;