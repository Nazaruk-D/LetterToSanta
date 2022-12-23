import {initializeApp, InitStateType, lettersReducer, setIsLoggedInAC} from "./letters-reducer";

it('isInitialized must be change', () => {

    const db: InitStateType = {
        letters: [],
        arrLength: null,
        isInitialized: false
    }

    const endState = setIsLoggedInAC(db)

    expect(endState.payload.isInitialized).toBe(true);
});

it('isInitializeApp must be change', () => {

    const db: InitStateType = {
        letters: [],
        arrLength: null,
        isInitialized: false
    }

    const endState = lettersReducer(db, initializeApp.fulfilled({arrLength:3},"requestId"))

    expect(endState.arrLength).toBe(3);
});