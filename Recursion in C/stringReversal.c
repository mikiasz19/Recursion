#include <stdlib.h>
#include <stdio.h>
#include <string.h>
void stringRerversal(char *input)
{
    // setup base call
    if (strlen(input) == 0)
    {
        return;
    }
    else
    {
        stringRerversal(input + 1);
        printf("%c", input[0]);
    }
}
int main(void)
{
    char input[] = "hello c";
    stringRerversal(input);
}