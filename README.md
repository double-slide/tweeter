# Tweeter Project

Tweeter is a simple, single-page Twitter clone built with HTML, CSS, JS, jQuery and AJAX on the front-end, as well as Node and Express on the back-end.

## Final Product

!["URL Summary Page"](https://github.com/double-slide/tweeter/blob/master/docs/app_view.jpg "App view")

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. With the server running, use your browser to navigate to `localhost:8080/`[^1]

## Dependencies

- Express
- Node 5.10.x or above

## Responsive Design
- The app includes responsive design that uses media queries to change the layout depend on page window size
- The character counter automatically counts down as the user types their tweet, and becomes red if the character count is exceeded (and counter becomes negative)
- Tweet cards are shadowed and slightly highlighted when the user hovers over them
- Buttons on each tweet card for Flag, Retweet, and like are highlighted red when the user hovers over them
- The "Tweet" submission button expands to include a colorful border when the user hovers over the button

## Functionality
- A user can create a tweet post by entering text into the tweet text area and clicking "Tweet"
- The posted tweet is then displayed (using a partial page post back to avoid complete page refresh)
- A user can scroll through existing tweets, which are displayed in reverse chronological order
- Each tweet includes a user avatar, user name, user handle, the tweet content, and time since the tweet was posted
- An error message is shown if the user attempts to submit an empty tweet
- An error message is shown if the user attempts to submit a tweet exceeding the character limit 


## Future Objectives
1. Add persistant data storage for user data
2. Add user accounts with login/logout functionality [^2]

[^1]: Currently only set-up for local running. Check back in future for the fully-hosted version!
[^2]: Check back in future for persistant database functionality!