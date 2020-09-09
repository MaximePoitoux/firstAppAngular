import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title1 = 'The Shawshank Redemption';
  title2 = 'Gone With The Wind';

  path1 = '../../assets//img/d8c146be-ef32-49b5-86bc-d1ab2ceb6fb6.jpg';
  path2 = '../../assets/img/783c1e5d-4598-49d1-8f13-7d0de96dc398.jpg';

  showMovies:boolean = true;

}
