import {Routes} from '@angular/router'
import {HomepageComponent} from './homepage/homepage.component'
import {BlogpageComponent} from './blogpage/blogpage.component'
import {PostpageComponent} from './postpage/postpage.component'

export const ROUTES : Routes = [
  {path: '', component: HomepageComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'blog', component: BlogpageComponent},
  {path: 'post', component: PostpageComponent}

];
