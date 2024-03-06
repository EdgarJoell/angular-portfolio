import { Injectable } from '@angular/core';
import { Project } from '../model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  projects: Project[] = [
    {
      id: 1,
      title: "Formula Zero",
      paramTitle: "formula-zero",
      description: "Full-stack Formula 1 inspired racing application using the Angular front-end framework with TypeScript. For the back-end this project utilized Java with Spring Boot, H2 Database, and a RESTful API design.",
      objective: "As a Formula One enthusiast, it's our shared dream to drive the actual race cars of the F1 drivers. It'll be such a thrill to go around hair pin corners in Lewis Hamilton's, or Charles Leclerc's race car on race weekend before they get behind the wheel. Formula Zero brings that thrill to the consumer as an Experience that they can purchase. Disclaimer: Formula Zero is not affiliated with Formula 1 and does not exist.",
      built: "This project was built with the Angular front-end framework following common industry standards while adhering to the programming principles such as DRY and KISS. The back-end was built by using Spring Boot with Java to create a REST API using the MVC layout. The back-end also incorporates the use of the internal H2 database perform CRUD necessary for the front-end to function. The front-end sends and receives content to the back-end by accessing the API endpoints.",
      link: "https://github.com/EdgarJoell/formula-zero-front",
      imageString: [
        'assets/formula-zero/f0-home-page.png', 
        'assets/formula-zero/f0-home-page-2.png', 
        'assets/formula-zero/f0-experiences-page.png', 
        'assets/formula-zero/f0-experience-page.png',
        'assets/formula-zero/f0-cart-page.png'
      ],
      imageDescription: [
        "The user is greeted on the landing page where they immediately see a video of a Formula 1 car on a track that gets them excited to participate in Formula Zero and hints to the user that they too can have that experience.",
        "The next portion of the landing page shows the user where are some tracks they can choose to have this once in a lifetime Formula Zero experience and gives them a link below the featured races to the Experiences page.",
        "Upon entering the Experiences Page, the user can see the different Experiences that they can choose from. Each experience also includes some quick information where they can quickly decipher whether they want to see more or of a particular Experience or not.",
        "When the user finally chooses an Experience, they are taken to that Experience's page where if they decide that it's a yes for them, they can pick the car they wish to drive and at what time as well. When they add it to their cart, all of that information is saved and sent to their cart.",
        "When it's time to finally pay for the Experience, the user gets redirecvted to their current Cart session where the time and car information that they chose gets displayed for their review. Since this project doesn't really exist, the only two forms of payment are my generosity and wishful thinking because I know a lot of people would LOVE to drive one of these cars!",
      ]
    },
    {
      id: 2,
      title: "Real-Estate API",
      paramTitle: "real-estate-api",
      description: "A team-led Back-End application that is supposed to simulate the back-end portion for a real-estate application. This project was built with Java and Spring Boot, used technologies such as JWT Tokens, security, and aurthorization, implemented a RESTful API design, and simulated a scrum team setting.",
      objective: "This API was a group project to create a Spring Boot back-end. We had open creativity so we chose to go with a real-estate company's back-end API wtth two type of users: real-estate agents and buyers. Users and agents login to see properties, place bids, and change information on properties.",
      built: "The API was built using only a back-end that constructed using Spring Boot with Java to make a REST API that also implemented authentication services from Spring Security to create JWT tokens to send and validate the user whether they were an Agent or a regular User.",
      link: "https://github.com/EdgarJoell/real-estate-api",
      imageString: [
          'assets/real-estate-api/re-register.png', 
          'assets/real-estate-api/re-login.png', 
          'assets/real-estate-api/re-base-api-call.png', 
      ],
      imageDescription: [
        "The API does have a register feature for real-estate agents to create an account and be able to change proprty information.",
        "After completing registration, when the agent logs in they'll receieve a JWT token for verification as shown above.",
        "This screenshot shows the information the api sends back to the user if there was a front-end connected to this project.",
      ]
    },
    {
      id: 3,
      title: "Wayfarer Travel",
      paramTitle: "wayfarer-travel",
      description: "A team-led dynamic mock travel blog website using the Angular Front-End framework with TypeScript, scrum methodology, UX/UI wireframes, and simulated a programming environment to create an application for a client.",
      objective: "Wayfarer Travel is supposed to be an app that mimics a travel blog website where users can choose a city that they have visited and add a post to that locations post sections. Others users that kind of want to get a feel of a certain city before they visit it can search for that city via a search bar and see what other users have said about that city.",
      built: "Wayfarer Travel App is a group, front-end only project that was built using the Angular framework with the Bootstrap CSS library. No back-end was implemented for Wayfarer.",
      link: "https://github.com/EdgarJoell/wayfarer-project",
      imageString: [
        'assets/wayfarer/wf-home.png', 
        'assets/wayfarer/wf-cities.png', 
        'assets/wayfarer/wf-new-post.png', 
        'assets/wayfarer/wf-contact.png', 
      ],
      imageDescription: [
        "The Wayfarer home page welcomes the users to a carousel of cities that users of Wayfarer have traveled to with links to take the user to that cities page. The site also sports the navigation bar on top across all pages with a search bar and nav links to different parts of the site.",
        "On the Cities page, the user can see the different cities that they can view to read reviews as well leave reviews if they want to.",
        "If a user wants to leave a review for a city, the 'new post' modal will pop and take the information they put in then post it onto the page.",
        "Let's say something negative happened and a user wishes to get into contact with Wayfarer. They can utilize this contact form to let us know about anything that may have happened.",
      ]      
    },
    {
      id: 4,
      title: "Tic-Tac-Toe!",
      paramTitle: "tic-tac-toe",
      description: "Developed an interactive tic-tac-toe game using JavaScript, HTML, and CSS, featuring an interactive board, turn updates, and game result tracking.",
      objective: "Tic-Tac-Toe is a fun family and friends game that has been played for as long as we can remember for whenever we were bored. This project brings tic-tac-toe onto as a web project for anyone to access and play with. They can keep track of how many games each player won and a game history as well.",
      built: "There was nothing fancy used for this project. It is as vanilla as it can be with only HTML, CSS, and JavaScript used to create the project.",
      link: "https://github.com/EdgarJoell/",
      imageString: [
        'assets/tic-tac-toe/ttt-home.png', 
        'assets/tic-tac-toe/ttt-game-start.png', 
        'assets/tic-tac-toe/ttt-game-results.png', 
      ],
      imageDescription: [
        "When the site loads, the users see the single page application as well as an empty board waiting for the game to start.",
        "When the play button is pressed, the board is generated in real-time using JavaScript as well as the score board and which players turn it is.",
        "After one of the users wins the game, JavaScript is used to highlight the respective players scoreboard box as well as put the game results into the past results section.",
      ]
    },
    {
      id: 5,
      title: "Rock, Paper, Scissors!",
      paramTitle: "rock-paper-scissors",
      description: "Developed a Java console application based on 'Rock, Paper, Scissors', utilizing object-oriented  programming principles for an engaging user experience.",
      objective: "Rock, Paper, Scissors is a game that's probably much older than tic-tac-toe. In this take, it is simply for one user against a computer to see how much better they are than a computer. The application also keeps score and keeps a history of the games played. It also features a main menu for the user to navigate through.",
      built: "This project was created as a console application only with Java and the JDK runtime.",
      link: "https://github.com/EdgarJoell/java-mini-project",
      imageString: [
        'assets/rock-paper-scissors/rps-start.png',
        'assets/rock-paper-scissors/rps-options.png',
        'assets/rock-paper-scissors/rps-results.png',
      ],
      imageDescription: [
        "Upon the console application starting, the user is immediately shown the games main menu where they can enter in specific commands where they can choose things like play the game, see the games history, or quit.",
        "In this photo, the user chose to play the game. Before coming to this screen the application asks whether we are playing 'player vs. player' or 'player vs. computer'. They are followed next by being asked whether they want to change the players or the computers name. For this specific game, we chose to play against the player and to keep original names.",
        "After playing against the computer, we see that the computer also chose paper so it was a draw. This data then gets saved to history. After playing, we are asked to either play again, quit, or return back to the main menu.",
      ]
    }
  ]

  getAllProjects(): Project[] {
    return this.projects;
  }

  getOneProject(id: number): Project {
    return this.projects[id - 1];
  }
}
