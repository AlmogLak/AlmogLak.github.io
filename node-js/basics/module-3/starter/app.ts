import { Note } from "./models/note.model";
import { NoteLevel } from "./enums/note-level.enum";
import { User } from "./models/user.model";
import { ObjectID } from "mongodb";

const note = new Note("This is my first note!", "note writen in the class", NoteLevel.High);
console.log("inserted note", note);

const user = new User(new ObjectID(), "Almog", "Laktivi", "Achisemakh", [note]);
console.log("inserted user", user);

Promise.all([
    user.getNotesByLevel(NoteLevel.High),
    user.getNotesByLevel(NoteLevel.Medium),
    user.getNotesByLevel(NoteLevel.Low)])
    .then(values => {
        console.log("High level notes", values[0]);
        console.log("Medium level notes", values[1]);
        console.log("Low level notes", values[2]);
    });
