export interface UserModel {
    name: string;
    uuid: string;
    email: string;
    picture_url?: string;
    type: string;
    metadata?: any;
}
