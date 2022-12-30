#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
bool palindrome(char *input, int i, int j)
{
    // base case
    if (i == j - 1)
    {
        return true;
    }
    else if (input[i] == input[j - 1])
    {
        i++;
        j--;
        return palindrome(input, i, j);
    }
    else
    {
        return false;
    }
}
int main(void)
{
    char input[] = "racecar";
    int i = 0;
    int j = strlen(input);
    printf("%s", palindrome(input, i, j) ? "True" : "False");
}