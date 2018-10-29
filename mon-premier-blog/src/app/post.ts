export class Post {
    public id: number;
    public title: string;
    public content: string;
    public loveIts: number;
    public created_at: string;

    constructor(title: string, content: string ) {
        this.title = title;
        this.content = content;
        this.created_at = new Date().toLocaleString();
        this.loveIts = 0;
    }

}
