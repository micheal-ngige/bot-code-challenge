###
Bot Battlr App
The Bot Battlr App is a web application built with React that allows users to create an army of bots, view bot profiles, enlist bots, and manage their bot army.


##
Core Features
1. Bot Collection: Users can see a collection of all available bots in a table. Each bot's profile includes information such as their name, health, damage, armor, class, catchphrase, and an avatar image.


2. Your Bot Army: The app provides a section where users can view their enlisted bot army. Enlisted bots are displayed in a separate table, showing their profiles and the option to release or discharge them.


3. Enlist Bots: Users can click on a bot in the Bot Collection to enlist it in their bot army. Once enlisted, the bot is added to the Your Bot Army section. Each bot can only be enlisted once.

4. Release Bot: In Your Bot Army, users can choose to release a bot from their army. This action removes the bot from the army but keeps it in the Bot Collection.

5. Discharge Forever: Users have the option to discharge a bot from their service permanently. This action deletes the bot both from the backend and from the Your Bot Army section.

Advanced Features
1. Bot Specs: Users can click on a bot in the Bot Collection to view detailed specifications of that bot. The Bot Specs view replaces the Bot Collection temporarily and includes options to go back to the list view or enlist the bot.

2. Sort Bots: The app provides a SortBar component where users can sort the bots in the Bot Collection based on health, damage, or armor.

3. Filter Bots by Class: Users can apply filters to view bots based on their class. Multiple filters can be selected simultaneously.

4. One Bot Per Class Limit: Users can only enlist one bot from each bot class (e.g., Support, Medic, Assault, Defender, Captain, Witch).


###
Technologies Used
- React: JavaScript library for building user interfaces.
- CSS: Used for styling and layout of the application.
- npm: Package manager for Node.js.


###
Installation
1. Clone this repository to your local machine:
   ```
   git clone https://github.com/kipkirui63.Bot-battlr.git
   cd your-repo
   ```
2. Install the required dependencies:
   ```
   npm install
   ```

Usage
To start the development server and run the application, use the following command:
```
npm start
```
The application will be accessible at http://localhost:3000.

Users can view the Bot Collection, enlist bots, view their bot army, release or discharge bots, and use the advanced features to sort and filter bots based on their preferences.

Author
Your Name (Replace with your name or GitHub username)

License
This project is licensed under the MIT License 

(Note: Please replace "your-username" and "your-repo" with your actual GitHub username and repository name where the Bot Battlr App code is located.)