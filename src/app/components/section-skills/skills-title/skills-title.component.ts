import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-title',
  templateUrl: './skills-title.component.html',
  styleUrls: [
    './skills-title.component.css',
    './skills-title.responsive.component.css',
  ],
})
export class SkillsTitleComponent {
  @Input()
  skillTitle = '';

  @Input()
  skillImg = '';
}
