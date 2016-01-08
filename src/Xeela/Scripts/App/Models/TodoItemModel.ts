export default class TodoItem {
    constructor(id: string = null, isComplete: boolean = false, text: string = "") {
        this.Id = id;
        this.IsComplete = isComplete;
        this.Text = text;
    }
    public Id: string;
    public IsComplete: boolean;
    public Text: string;
}