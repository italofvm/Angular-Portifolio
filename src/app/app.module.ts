import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './pages/home/home.component';
import { TitlePhotoComponent } from './components/title/title-photo/title-photo.component';
import { TitleContentComponent } from './components/title/title-content/title-content.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { SkillsTitleComponent } from './components/section-skills/skills-title/skills-title.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TitleComponent,
    HomeComponent,
    TitlePhotoComponent,
    TitleContentComponent,
    SectionAboutComponent,
    SectionSkillsComponent,
    SkillsTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
