export interface HttpErrorSignIn {
    code: number;
    message: string;
}

export interface HttpSuccessSignIn {
    code: number;
    user: any; // add model user
}