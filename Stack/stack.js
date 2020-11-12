/*
    Stack Data Strcuture in Javascirpt
*/
class Stack {
    constructor() {
        this.stack = [];
    }
    // Push element into the stack
    push(item) {
        this.stack.push(item);
    }
    // Pop and return the top element from stack
    pop() {
        // Return 'Message' if stack is empty 
        if(this.stack.length === 0) {
            return "No items in the stack";
        }
        return this.stack.pop();
    }
    
    peek() {
        // Return the top most element from the stack
        if(this.stack.length === 0) {
            return "No items in the stack";
        }
        return this.stack[this.stack.length -1];
    }
 
    // Return 'true' if Stack is Empty
    isEmpty() {
        return this.stack.length == 0;
    }

    // Total items count 
    count() {
        return this.stack.length;
    }

    // Clear the stack
    clear() {
        this.stack = [];
    }
    
    // Print items in the stack
    printStack() {
        let items = "";
        if(this.stack.length === 0) {
            items =  "No items in the stack";
        }
        for (let i = 0; i < this.stack.length; i++) {
            items += this.stack[i] + " "; 
        }
        return items;
    }
}
 
var stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.pop()); 
 
stack.push(100); 
stack.push(200); 
stack.push(300);
stack.push(400);
stack.push(500);
 
console.log(stack.printStack()); 
  
// Returns 500
console.log(stack.peek()); 
  
// Returns 500 and remove it from stack 
console.log(stack.pop()); 
  
// returns [100, 200, 300, 400] 
console.log(stack.printStack()); 
 
// Returns 4
console.log(stack.count());
 
//Clear the stack
console.log(stack.clear());
console.log(stack.pop()); // No items in the stack
console.log(stack.peek()); // No items in the stack
console.log(stack.isEmpty()); //true
console.log(stack.printStack()); // No items in the stack
 
stack.push(1000); 
stack.push(2000); 
stack.push(3000);
 
console.log(stack.peek()); // 3000
console.log(stack.isEmpty()); //false
console.log(stack.printStack()); // 1000 2000 3000