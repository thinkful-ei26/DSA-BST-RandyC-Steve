//Binary Search Tree Drills

'use strict';

//3,1,4,6,9,2,5,7

//         3
//        / \
//       1   4
//      /    \
//     2      5
//             \
//             6
//              \
//              7
//               \
//                9
//         
//         4
//        / \
//       1   5
//      /     \
//     2      6
//             \
//             7
//              \
//              9

//Tree Class
class BinarySearchTree {

  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }


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
        this.right = newBinarySearchTree(key, value, this);

      }
      else {

        this.right.insert(key,value);

      }

    }

  } 
  //remove

  //find



  }
  
  


}




