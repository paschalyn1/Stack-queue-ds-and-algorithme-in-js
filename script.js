class myStack {
    constructor(){
        const txt=" MY STACK";
        document.write(txt);
        this.element = [];
        this.count = 0;
    }
    
    pushElement(element)
    {
        this.element[this.count] = element;
        console.log(`${element} has been added to the Stack`);
        this.count += 1;
    }
    
     print(){
        if (this.count == 0) return console.log("Stack is empty, nothing to print!")
         for (let i = 0; i < this.count; i++)
         {
            console.log(this.element[i]);
         }
         
    }
    
    popElement(){
        if (this.count == 0) return "Stack is empty, nothing to pop!"
            let delElement = this.element.splice(0, 1);
            console.log(delElement + " has been removed");
            this.count-=1;
    }
    
    isEmpty(){
        if (this.count == 0) return console.log("Stack is empty")
        return console.log("stack not empty")
    }
    
    clear(){
        this.element = [];
        this.count = 0;
        return console.log(this.count + ", stack cleared")
    }
    
    size(){
        console.log('size is ' + this.count);
        return this.count
    }
}


const stack = new myStack();
stack.pushElement(10)
stack.pushElement(20)
stack.pushElement(100)
stack.isEmpty()
stack.popElement()
stack.size();
stack.print();
stack.clear()
stack.isEmpty();
stack.print();
stack.popElement()
