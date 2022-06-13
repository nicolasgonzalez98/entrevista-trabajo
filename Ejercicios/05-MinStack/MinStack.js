class Node {
  // Your code here:
  constructor(value){
    this.value = value
    this.next = null
  }
}

class MinStack {
  // Your code here:
  constructor(value){
    this.top = null
  }

  push(value){
    if(!this.top){
      this.top = new Node(value)
    }else{
      let nodo = new Node(value)
      nodo.next = this.top
      this.top = nodo
    }
  }

  pop(){
    
  }

  min(){

  }

  peek(){

  }
}

module.exports = {
  Node,
  MinStack
}
