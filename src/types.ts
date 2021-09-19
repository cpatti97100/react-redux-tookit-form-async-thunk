export interface MessageFormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
}

export interface Message {
    name: string;
    email: string;
    message: string;
}
