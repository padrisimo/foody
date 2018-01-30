import { action } from 'mobx';
import firebase from 'firebase';
import MobxFirebaseStore from "mobx-firebase-store";

export default class MatchStore extends MobxFirebaseStore {
    constructor(){
        super(firebase.database().ref());
        firebase.auth().onAuthStateChanged((user) => {
            this.user = user;
        })
    }
    resolveFirebaseQuery(sub) {
        return this.fb.child(sub.path).orderByChild(`viewed/${this.user.uid}`).equalTo(null);
    }
    @action
    markViewed(post) {
        let updates = {};
        updates[`viewed/${this.user.uid}`] = true;
        this.fb.child('posts').update(updates);
    }
    subs(){
        return [{
            subKey: 'matches',
            path: 'posts',
            asList: true,
            user: this.user
        }]
    }
}