import { SectionCreationService } from './../../services/section-creation/section-creation.service';
import { Component, OnInit } from '@angular/core';
import SectionParent from '../parent/section-parent';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vocabulary-indentification',
  templateUrl: './vocabulary-indentification.component.html',
  styleUrls: ['./vocabulary-indentification.component.css']
})
export class VocabularyIndentificationComponent extends SectionParent implements OnInit {

  SECTION_TYPE = 2;

  constructor(protected flow: SectionCreationService, protected activatedRoute: ActivatedRoute) {
    super(flow, activatedRoute);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
