import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtService } from './jwt.service';
import { map, distinctUntilChanged, tap, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoginResponseDto, User } from '../user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  public isAuthenticated = this.currentUser.pipe(map((user) => !!user));

  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService,
    private readonly router: Router
  ) {}

  login() {
    // implement login here ...
  }

  register() {
    // implement register here ...
  }

  logout(): void {
    this.purgeAuth();
    void this.router.navigate(['/']);
  }

  getCurrentUser(token: string) {
    // implement the logic here ...
  }

  update(user: Partial<User>): Observable<{ user: User }> {
    return this.http.put<{ user: User }>('/user', { user }).pipe(
      tap(({ user }) => {
        this.currentUserSubject.next(user);
      })
    );
  }

  purgeAuth(): void {
    // destroy the token to logout
    this.jwtService.destroyToken();
    this.currentUserSubject.next(null);
  }
}
