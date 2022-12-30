#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
typedef struct node
{
    int data;
    struct node *right;
    struct node *left;
} node;
node *getNewNode(int data)
{
    node *new_node = (node *)malloc(sizeof(node));
    (*new_node).data = data;
    (*new_node).right = NULL;
    (*new_node).left = NULL;
    return new_node;
}
node *insert(node *root, int data)
{
    if (root == NULL)
    {
        root = getNewNode(data);
    }
    else if (data <= (*root).data)
    {
        (*root).left = insert((*root).left, data);
    }
    else
    {
        (*root).right = insert((*root).right, data);
    }
    return root;
}
bool search(node *root, int data)
{
    if (root == NULL)
    {
        return false;
    }
    else if (data == (*root).data)
    {
        return true;
    }
    else if (data < (*root).data)
    {
        return search((*root).left, data);
    }
    else
    {
        return search((*root).right, data);
    }
}
int main(void)
{
    int number;
    node *root = NULL;
    int lists[] = {6, 5, 7, 4, 8, 3, 9, 2, 0, 1};
    int size = sizeof(lists) / sizeof(lists[0]);
    for (int i = 0; i < size; i++)
    {
        root = insert(root, lists[i]);
    }
    printf("Enter number be searched: ");
    scanf("%d", &number);
    if (search(root, number) == true)
    {
        printf(" _____");
        printf("\n|Found|\n");
        printf(" -----\n");
    }
    else
    {
        printf(" _________");
        printf("\n|Not Found|\n");
        printf(" ---------\n");
    }
}