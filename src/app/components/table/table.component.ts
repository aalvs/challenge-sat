import { FormResourceService } from './../../shared/services/form-resource.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() colaboradores: Array<any>;

  constructor(private frService: FormResourceService) { }

  ngOnInit(): void {

  }

}
