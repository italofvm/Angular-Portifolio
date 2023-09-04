import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css'],
})
export class SectionSkillsComponent {
  @Input()
  skill = 'Skills';

  @Input()
  skillTitle = '';

  @Input()
  skillImg = '';
}
