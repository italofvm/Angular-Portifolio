import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.css'],
})
export class SectionProjectsComponent {
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
