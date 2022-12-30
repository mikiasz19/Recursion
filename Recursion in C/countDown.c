#include <stdio.h>
void countDown(int n)
{
    if (n == 0)
    {
        return;
    }else
    {
        printf("%d\n", n);
        return countDown(n-1);
    }
    
    
}
int main(void)
{
    int n = 10;
    countDown(n);
}