import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.page.html',
  styleUrls: ['./skill-set.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SkillSetPage {

  constructor() { }

  selectedView = 'computing'; // default view
}
