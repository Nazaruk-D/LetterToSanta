import {instance} from "./instance";


export const appAPI = {
    lengthLetters(){
        return instance.get<string>(`/length`)
    }
}


//types

export type FormType = {
    id?: string
    name: string
    email: string
    age: string
    underTree: string
    text: string
}
