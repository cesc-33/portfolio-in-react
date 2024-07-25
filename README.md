# Personal Website
This React-based web application serves as a portfolio, demonstrating my web development skills. It consists of several core components:

- Navbar: Provides site navigation and user interactions.
- Home: Displays the main landing page content.
- About: Presents information about the developer.
- Skills: Showcases technical proficiencies with interactive visualizations.
- SkillsDiagram: Renders a visual representation of skill levels.
- Resume: Hosts a downloadable resume.
- TicTacToe: Includes a built-in game for interactive engagement.
- Footer: Provides contact information and additional links.

## Tech and Libraries
- HTML, CSS, Tailwind
- JS / ES
- React
- react-icons, react-scroll, recharts

## Features
- Navbar: Smooth scrolling to corresponding section. 
- - Displays links to external websites in a fixed vertical column on the left side of the navbar (links slide out on hover).
- Interactive Easter Egg:
- - Clicking on the navbar title (SK) three times within 5 seconds triggers a hidden Tic Tac Toe game to appear in place of the normal content.
- - Clicking the title a second time within 5 seconds reveals the icons again (cancelling the game activation).
- Interactive View Switching: Toggle between two visualization formats for skills.
- - Chart View: Presents a bar chart depicting the level (sample data) of each skill.
- - Card View: Displays individual cards for each skill, with the name and a description that appears on hover.

## Known issues:
- Topic change button is currently non-functional.
- There are occasional issues with the transition from "SK" to icon display.

## Planned Features
- Integrate a custom game.
- Enable theme switching (dark to light and vice versa).
- Combine CSS into classes.
- Lazy loading
- 

## Unit tests for various components to ensure functionality:
- App Tests: Checks whether all sections are rendered correctly.
- Navbar test: Checks whether the e-mail link is correct.

## Acknowledgements
This tic-tac-toe game was originally developed by [Kartik Budhraja](https://dev.to/kartikbudhraja/building-a-simple-tic-tac-toe-game-with-react-4bdj).

## Installation

1. ### Clone the repository to the local system:

    ```bash
    git clone https://github.com/cesc-33/repository.git
    cd repository
    ```

2. ### Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. ### Launch:

    ```bash
    npm start
    ```

2. ### Navigate to this address in the browser: `http://localhost:3000` to see the application.
