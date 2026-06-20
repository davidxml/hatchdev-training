abstract class ApiClient<T> {
    async getAll(): Promise<T[]> {
        const res = await fetch("")
        return res.json();
    }
}

protected abstract getEndpoint(): 

getEndpoint(){

}

/**  1. Child class must have an implementation of abstract methods
 *   2. access control must be maintained
 *   3. the abstract methods cannot have an implementation
 * 
 */

interface User {
    name:string;
    age: number;
}

interface Product {
    price: number;
    quantity: number;
    name: string;
}


class userClient extends ApiClient <user> {
    protected getEndpoint(): string {return "api/users";}
}

class ProductClient extends ApiClient<product>{
    protected getEndpoint(): string {return "api/products";}
}

/* ### Json placeholder Api tutorial
# build a custom blog ap with code sent to the group */

