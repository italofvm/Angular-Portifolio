import { NgModule, Component } from '@angular/core';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
