#include <stdio.h>
int sumOfNaturalNumbers(int n)
{
    if (n == 0)
    {
        return 0;
    }
    else
    {
        return n + sumOfNaturalNumbers(n - 1);
    }
}
int main(void)
{
    int n = 10;
    printf("%d", sumOfNaturalNumbers(n));
}