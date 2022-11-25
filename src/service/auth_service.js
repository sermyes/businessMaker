import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  FacebookAuthProvider,
  GoogleAuthProvider
} from 'firebase/auth';

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleAuthProvider = new GoogleAuthProvider();
    this.githubAuthProvider = new GithubAuthProvider();
    this.facebookProvider = new FacebookAuthProvider();
  }

  signup(email, password) {
    return createUserWithEmailAndPassword(this.firebaseAuth, email, password);
  }

  signin(email, password) {
    return signInWithEmailAndPassword(this.firebaseAuth, email, password);
  }

  remoteSignin(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.firebaseAuth, user => {
      onUserChanged(user);
    });
  }

  resetPassword(email) {
    return sendPasswordResetEmail(this.firebaseAuth, email);
  }

  signout() {
    signOut(this.firebaseAuth);
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      case 'Facebook':
        return this.facebookProvider;
      default:
        throw new Error(`not supported provider ${providerName}`);
    }
  }
}

export default AuthService;
