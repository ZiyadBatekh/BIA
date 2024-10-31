import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    // Implement your logic to check if the user is authenticated
    return !!localStorage.getItem('authToken'); // Example implementation
  }
}
