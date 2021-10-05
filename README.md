# React-Scoreboard-app
 
Check out this portfolio page now! https://react-scoreboardapp.herokuapp.com/

Using Heroku to deploy this portfolio app, in order to use Heroku CLI ,

#1. Created 'Procfile' file contain "web: node app.js".

#2. Specified with engines key in 'Package.json' file to tell Heroku which version of Node.js to use when running this app.

"engines": {

"node": "14.17.5"

}

#3. Must test locally before Git push heroku master .

#4. Run 'npm run build' command on PowerShell.

#5. Run 'heroku login' command on PowerShell.

#6. Using Heroku site https://dashboard.heroku.com/apps to deploy a GitHub branch.
