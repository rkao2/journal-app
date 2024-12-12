### AuraNotes 📝✨

Our project, AuraNotes, is a web application designed to empower young adults, writers, and productivity enthusiasts with a high-quality, user-friendly mental health and mood-tracking tool. Built with CSS, HTML, and JavaScript, AuraNotes will offer seamless user authentication, organized entry creation, a robust search and filter feature, and a mood tracker to analyze emotional trends over time. This intuitive platform aims to help users understand and manage their mental well-being through thoughtful design and functionality.


## Setup Instructions ⚙️

# Setting up Frontend
1. Install React using the command 🛠️:  
   ```bash
   npm install

2. Install dependencies 📦 :
    ```bash
    npm install 

3. Open src in integrated terminal
    ```bash
    npm run build 


# Setting up backend: 
1. Go to your MacBook terminal and paste this in:
    ```bash
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

2. Once you have Homebrew installed, run the following command in the terminal to install MongoDB:
    ```bash
	brew tap mongodb/brew
	brew install mongodb-community@5.0

3. Start mongoDB:
    ```bash
	brew services start mongodb/brew/mongodb-community@5.0
    
4. Verify MongoDB is Running. To check that MongoDB is running, you can use the following command:
    ```bash
	ps aux | grep mongod

5. Show Current Database: 
    ```bash
	db

6. Switch to a database:
    ```bash
	use auranotesdb


7. Start the backend server by opening ‘backend’ in integrated terminal and typing in this command : 
    ```bash
	node server.js 
8. Check the browser at http://localhost:5001
9. It should say "API is running. Use /api/entries for journal entries"


![aura notes demo](gif/auranotesdemo1.gif)
