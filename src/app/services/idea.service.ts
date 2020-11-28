import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
export interface Idea {
  id: string,
  accomodation: string ,
  mobility: string ,
  dailyfeeding: string
}
 
@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  private ideas: Observable<Idea[]>;
  private ideaCollection: AngularFirestoreCollection<Idea>;
 
  constructor(public afs: AngularFirestore) {
    this.ideaCollection = this.afs.collection<Idea>('test');
    this.ideas = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getIdeas(): Observable<Idea[]> {
    return this.ideas;
  }
 
  getIdea(id: string): Observable<Idea> {
    return this.ideaCollection.doc<Idea>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea;
      })
    );
  }
 
  addIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).set(idea);
  }
 
  updateIdea(idea: Idea): Promise<void> {
    return this.ideaCollection.doc(idea.id).update({ accomodation: idea.accomodation, mobility: idea.mobility, dailyfeeding: idea.dailyfeeding });
  }
 
  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }
}