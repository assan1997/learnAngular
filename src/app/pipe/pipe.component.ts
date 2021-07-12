import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})

export class PipeComponent implements OnInit {
  name = 'nicolas'
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.loger()
  }

}
