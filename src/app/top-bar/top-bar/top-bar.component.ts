import { Component, OnInit } from '@angular/core';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {select, Store} from '@ngrx/store';
import {userSelector} from 'src/app/auth/store/selectors';
import {logOut} from 'src/app/auth/store/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  currentUser: CurrentUserInterface | null = null;

  constructor(private store: Store, private router: Router) {
    const user = this.store.pipe(select(userSelector));
    user.subscribe((curUser) => this.currentUser = curUser);
  }

  ngOnInit(): void {

  }

  logout() {
    this.store.dispatch(logOut());
    this.router.navigate(['/login']);
  }

}
