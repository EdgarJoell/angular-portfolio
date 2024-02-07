import { Component } from '@angular/core';
import { project } from 'src/app/model/projects';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  projects: project[] = [
    {
      title: "Formula Zero",
      description: "Full-stack Formula 1 inspired racing application using the Angular front-end framework with TypeScript. For the back-end this project utilized Java with Spring Boot, H2 Database, and a RESTful API design.",
      link: "https://github.com/EdgarJoell/formula-zero-front"
    },
    {
      title: "Real-Estate API",
      description: "A team-led Back-End application that is supposed to simulate the back-end portion for a real-estate application. This project was built with Java and Spring Boot, used technologies such as JWT Tokens, security, and aurthorization, implemented a RESTful API design, and simulated a scrum team setting.",
      link: "https://github.com/EdgarJoell/real-estate-api"
    },
    {
      title: "Wayfarer Travel",
      description: "A team-led dynamic mock travel blog website using the Angular Front-End framework with TypeScript, scrum methodology, UX/UI wireframes, and simulated a programming environment to create an application for a client.",
      link: "https://github.com/EdgarJoell/wayfarer-project"
    },
    {
      title: "Tic-Tac-Toe!",
      description: "Developed an interactive tic-tac-toe game using JavaScript, HTML, and CSS, featuring an interactive board, turn updates, and game result tracking.",
      link: "https://github.com/EdgarJoell/"
    },
    {
      title: "Rock, Paper, Scissors!",
      description: "Developed a Java console application based on 'Rock, Paper, Scissors', utilizing object-oriented  programming principles for an engaging user experience.",
      link: "https://github.com/EdgarJoell/java-mini-project"
    }
  ]
}
