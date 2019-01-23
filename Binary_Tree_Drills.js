//Binary Search Tree Drills

'use strict';

//3,1,4,6,9,2,5,7

//         3
//        / \
//       1   4
//       \    \
//        2   6
//           / \
//          5   9
//             /
//            7
//
//
//         
//         
//            4
//          /  \
//         1    6
//         \   / \
//         2  5   9
//               /
//              7

//Tree Class
class BinarySearchTree {

  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  //insert a key
  insert(key,value){

    if (this.key === null){
      this.key = key;
      this.value = value;

    }

    //key is less than the parrent
    else if(key < this.key){

      if(this.left === null) {

        this.left = new BinarySearchTree(key, value, this);

      }

      else {

        this.left.insert(key, value);
      }


    }

    else {
      if(this.right === null){
        this.right = new BinarySearchTree(key, value, this);

      }
      else {

        this.right.insert(key,value);

      }

    }

  } 

  //find a key
  find(key){

    if (this.key === key){
      return this.value;
    }

    //if key arg is less than the current key then return left key
    else if (key < this.key && this.left){

      return this.left.find(key);

    }

    //if key arg is greater than the current key then return the right key
    else if (key > this.key && this.right){

      return this.right.find(key);

    }

    else{
      throw new Error('Key Error');
    }

  }

  //remove a key
  remove(key){

    if (this.key === key){

      if(this.left && this.right){

        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);

      }

      else if(this.left){

        this._replaceWith(this.left);

      }

      else if(this.right){

        this.replaceWith(this.right);

      }

      else {
        this.replaceWith(null);
      }

    }

    else if(key < this.key && this.left){

      this.left.remove(key);
    }

    else if(key > this.key && this.right){

      this.right.remove(key);

    }

    else {
      throw new Error ('Key Error');
    }

  }

  //replace with a new node
  replaceWith(node){

    if(this.parent) {

      if(this === this.parent.left){

        this.parent.left = node;

      }
      else if (this === this.parent.right){
        this.parent.right.node;
      }
      if(node){
        node.parent = this.parent;
      }

    }
    else{

      if(node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else{
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }

    }

  }

  //find minimum key on a tree
  _findMin(){

    if(!this.left){
      return this.key;
    }
  
    return this.left._findMin();
 
  }

  //find max
  _findMax(){
  
    if(!this.right){
      return this.key;
    }
     
    return this.right._findMax();

  }

  findThirdMax(myOne,myTwo,myThree){
 
    if(!this.right){
       
      return myThree;
 
    }
    
    myThree = myTwo;
    myTwo = myOne;
    myOne = this.right.key;
    
    return this.right.findThirdMax(myOne,myTwo,myThree);

  }

  //find the parent
  findParent(){
   
    if(this.parent === null){
 
      return this.key;

    }

    return this.parent.findParent();

  }

  getHeight(count){
   
    if(!this.right){
      return count + 1;//the plus one is for the parent node
    }
     
    count ++;

    return this.right.getHeight(count);

  }
 
}
  
  
let myData = [3,1,4,6,9,2,5,7];

// function displayBST(){





// }

function main(myData){

  let BST = new BinarySearchTree();
 
  for (let i = 0; i < myData.length; i++){

    BST.insert(myData[i],myData[i]);

  }
 
  //show the tree
  console.log('------------------ START -------------------');

  console.log('The tree: ', BST);

  console.log('------------------- END --------------------');
 
  //find minimum key
  console.log('minimum key:', BST._findMin());

  //find max key
  console.log('maximum key:', BST._findMax());

  //Height of the BST -- always send value of 1 to count for parent
  console.log('the Height', BST.getHeight());

  //Find Parent
  console.log('Tree Parent Key: ', BST.findParent());

  //CheckBST(BST);

  console.log('The third largest key: ',BST.findThirdMax());

  //Is it BST?
  function CheckBST(tree){

    //get the parent node value
    let parentValue = tree.findParent().value; 
  
    //get the highest value on the left


    //get the highest value on the right


    //make sure the left is < than parent and right is > than parent
 
  }


  //Third largest Node

   
}

main(myData);
