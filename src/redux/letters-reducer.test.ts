import {initializeApp, InitStateType, lettersReducer, sendMessage, setIsLoggedInAC} from "./letters-reducer";


it('arrLength must be change', () => {

    const db: InitStateType = {
        letters: [],
        arrLength: null,
        isInitialized: false
    }

    const endState = lettersReducer(db, initializeApp.fulfilled({arrLength:3},"requestId"))

    expect(endState.arrLength).toBe(3);
});

it('The array after adding a new letter should increase', () => {

    const db: InitStateType = {
        letters: [],
        arrLength: null,
        isInitialized: false
    }

    const newLetter = {
        "id": "dea322b0-8293-11ed-8738-a14320bec1be",
        "age": "17",
        "email": "eznak06@mail.ru",
        "name": "Kate",
        "content": "Nutella",
        "underTree": "yes"
    }


    const endState = lettersReducer(db, sendMessage.fulfilled({param: newLetter}, "requestId", newLetter))

    expect(endState.letters.length).toBe(1);
    expect(endState.letters[0].age).toBe("17");
});