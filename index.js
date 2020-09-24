function max(currentNode) {
    if (currentNode.right) {
        return max(currentNode.right)
    }
    else {
        return currentNode 
    }
}

function min(currentNode) {
    if (currentNode.left) {
        return min(currentNode.left) 
    }
    else {
        return currentNode 
    }
}

function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left) 
    }
    console.log(currentNode.data) 

    if (currentNode.right) {
        inOrder(currentNode.right) 
    }
}

function findOrAdd(currentNode, newNode) {
    if (currentNode.data == newNode.data) {
        return true 
    }
    if (newNode.data < currentNode.data) {
        if (currentNode.left) {
            return findOrAdd(currentNode.left, newNode) 
        }
        else {
            return currentNode.left = newNode 
        }
    }
    if (newNode.data > currentNode.data) {
        if (currentNode.right) {
            return findOrAdd(currentNode.right, newNode)  
        }
        else {
            return currentNode.right = newNode 
        }
    }
}

// class TreeNode {
//     constructor(data) {
//         this.data = data 
//         this.left = null 
//         this.right = null 
//     }
// }

// class BinaryTree {
//     constructor() {
//         this.root = null 
//     }

//     inOrder() {
//         this._inOrder(this.root) 
//     }

//     _inOrder(node) {
//         if (node === null) {
//             return 
//         }
//         this._inOrder(node.left) 
//         console.log(node.data) 
//         this._inOrder(node.right) 
//     }

//     findOrAdd(value) {
//         if (this.root === null) {
//             this.root = new TreeNode(value) 
//         }
//         else {
//             return this._findOrAdd(this.root, value) 
//         }
//     }

//     _findOrAdd(node, value) {
//         if (node.data === value) {
//             return true 
//         }
//         else if (value < node.value && node.left === null) {
//             node.left = new TreeNode(value) 
//         }
//         else if (value > node.value && node.right === null) {
//             node.right = new TreeNode(value) 
//         }
//         else if (value < node.value) {
//             return this._findOrAdd(node.left, value) 
//         }
//         else if (value > node.value) {
//             return this._findOrAdd(node.right, value) 
//         }
//     }

//     max() {
//         return this._max(this.root) 
//     }

//     _max(node) {
//         if (node.right === null) {
//             return node.data 
//         }
//         return this._max(node.right) 
//     }

//     min() {
//         return this._min(this.root) 
//     }

//     _min(node) {
//         if (node.left === null) {
//             return node.data 
//         }
//         return this._min(node.left) 
//     }
// }

// module.exports = {TreeNode, BinaryTree}