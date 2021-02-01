import { firebaseAuth, googleProvider, githubProvider, facebookProvider } from './firebase';

class AuthService{
    signup(email, password){
        return firebaseAuth.createUserWithEmailAndPassword(email, password);
    }
    
    signin(email, password){
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    }

    remoteSignin(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        });
    }

    signout(){
        firebaseAuth.signOut();
    }

    resetPassword(email){
        return firebaseAuth.sendPasswordResetEmail(email);
    }

    getProvider(providerName){
        switch(providerName){
            case 'Google' :
                return googleProvider;
            case 'Github' :
                return githubProvider;
            case 'Facebook' :
                return facebookProvider;
            default: 
                throw new Error(`not supported provider ${providerName}`);
        }
    }
}

export default AuthService;