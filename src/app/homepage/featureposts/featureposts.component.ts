import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-featureposts',
  templateUrl: './featureposts.component.html',
  styleUrls: ['./featureposts.component.scss']
})
export class FeaturepostsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPostClick(){
   this.router.navigateByUrl('/post');
 }
 onSecondPostClick(){
   this.router.navigateByUrl('/secondpost')
 }
 onThirdPostClick(){
   this.router.navigateByUrl('/empresa')
 }

}
