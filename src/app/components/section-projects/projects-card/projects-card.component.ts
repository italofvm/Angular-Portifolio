import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: [
    './projects-card.component.css',
    './projects-card.responsive.component.css',
  ],
})
export class ProjectsCardComponent {
  @Input()
  projectsPhoto = '';

  @Input()
  projectsTitle = '';

  @Input()
  projectsTechnology = '';

  @Input()
  projectsLinkRepo = '';

  @Input()
  projectsLinkDemo = '';
}
