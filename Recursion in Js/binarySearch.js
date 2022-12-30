const prompt = require("prompt-sync")({ sigint: true });
class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}
class Bst {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = this.root;
        var newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data > node.data) {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }
    }
    getNewNode() {
        return this.root;
    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }

    }
    findMinNode(node) {
        if (node.left == null) {
            return node;
        }
        else {
            return this.findMinNode(node.left);
        }
    }
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }
    deleteNode(node, data) {
        if (node == null) {
            return null;
        }
        else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
            return node;
        }
        else if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
            return node;
        }
        else {
            //has no child
            if (node.right == null && node.left == null) {
                node = null;
                return node;
            }
            // has one child
            else if (node.right == null) {
                node = node.left;
                return node;
            }
            else if (node.left == null) {
                node = node.right;
                return node;
            }
            // both has children
            else {
                var aux = this.findMinNode(node.right);
                node.data = aux.data;
                node.right = this.deleteNode(node.right, aux.data);
                return node;
            }
        }
    }

    search(node, data) {
        if (!node) {
            return false;
        }
        if (node.data === null || node.data === data) {
            return true;
        }
        else if (data < node.data) {
            return this.search(node.left, data);
        }
        else if (data > node.data) {
            return this.search(node.right, data);
        }
    }
}

var bst1 = new Bst();
bst1.insert(5);
bst1.insert(4);
bst1.insert(6);
bst1.insert(3);
bst1.insert(7);
bst1.insert(2);
bst1.insert(8);
bst1.insert(1);
bst1.insert(9);
bst1.insert(0);
bst1.delete();
var root = bst1.getNewNode();
bst1.inorder(root);
var result = bst1.search(bst1.root, 1);
(result === true)? console.log("Found") : console.log("Not Found");