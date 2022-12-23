import {instance} from "./instance";


export const appAPI = {
    lengthLetters(){
        return instance.get<number>(`/length`)
    },
    sendMessage(form: FormType){
        return instance.post<FormType[]>(`/sendMessage`, form)
    }
}


//types
export type FormType = {
    id?: string
    name: string
    email: string
    age: string
    underTree: string
    content: string
}
