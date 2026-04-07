import { Injectable, inject } from '@angular/core';
import { Auth, user, signInWithEmailAndPassword, signOut, AuthError } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private auth = inject(Auth);

  public user$ = user(this.auth);

  public currentUser = toSignal(this.user$, { initialValue: null });

  async login(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      throw new Error(this.getFirebaseLoginMessage(error as AuthError));
    }
  }

  async logout() {
    return signOut(this.auth);
  }

  getUID() {
    return this.auth.currentUser?.uid ?? null;
  }

  private getFirebaseLoginMessage(error: AuthError): string {
    switch (error.code) {
      case 'auth/user-not-found':
        return 'No existe ningún usuario registrado con ese correo.';
      case 'auth/invalid-credential':
        return 'El correo o la contraseña no son correctos.';
      case 'auth/wrong-password':
        return 'La contraseña introducida no es correcta.';
      case 'auth/invalid-email':
        return 'El formato del correo electrónico no es válido.';
      case 'auth/too-many-requests':
        return 'Demasiados intentos fallidos. Inténtalo más tarde.';
      default:
        return 'No se pudo iniciar sesión. Revisa tus datos e inténtalo de nuevo.';
    }
  }
}