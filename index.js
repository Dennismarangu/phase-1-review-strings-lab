// Write your code in this file!

const currentUser = 'Grace Hopper!';

const welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

const welcomeMessage2 = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage2.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
