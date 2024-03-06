import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/Project';
import { GlobalFuncsService } from 'src/app/service/global-funcs.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit{
  constructor(private projectService: ProjectService, public globalService: GlobalFuncsService) {

  }

  projects!: Project[];

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
  }

}
