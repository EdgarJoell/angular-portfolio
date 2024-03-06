import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterViewInit{
  constructor(private projectService: ProjectService, private route: ActivatedRoute) {

  }

  project!: Project;
  projects: Project[] = this.projectService.getAllProjects();

  // imageBlockArray = document.querySelector(".image-block")

  ngOnInit(): void {
    let projectId: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.project = this.projectService.getOneProject(projectId);
  }

  ngAfterViewInit(): void {
    let imageBlockArray = document.querySelectorAll(".image-block")
    console.log(imageBlockArray);
  }

}
