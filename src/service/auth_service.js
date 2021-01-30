import firebase from 'firebase';

class AuthService{
    login(providerName) {
        const authProvider = new firebase.auth[`${provierName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }

}

export default AuthService;