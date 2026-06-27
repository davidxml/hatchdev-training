// The Node class
export class ListNode <T>{
    public data: T;
    public next: ListNode<T> | null;

    constructor (data: T, next: ListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

