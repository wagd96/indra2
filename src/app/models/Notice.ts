export interface Notice {
    $id: string;
    body: string;
    headLine: string;
    summary?: string;
    author?:string;
    date:string;
}