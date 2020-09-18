function inOrder(node) {
    if (node.left) {
        inOrder(node.left)
    }
    console.log(node.data)
    if (node.right) {
        inOrder(node.right)
    }
}

function findOrAdd(tree, node) {
    if (node.data < tree.data) {
        if (tree.left) {
            return findOrAdd(tree.left, node)
        }
        else {
            tree.left=node
        }
    }
    else if (node.data === tree.data) {
        return true
    }
    else {
        if (tree.right) {
            return findOrAdd(tree.right, node)
        }
        else {
            tree.right=node
        }
    }
}

function max(tree) {
    if (tree.right) {
        return max(tree.right)
    }
    else {
        return tree
    }
}

function min(tree) {
    if (tree.left) {
        return max(tree.left)
    }
    else {
        return tree
    }
}