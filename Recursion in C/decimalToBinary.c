#include <stdio.h>
#include <time.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>
int find(int decimal_number)
{
    //base case
    if (decimal_number == 0)
    {
        return 0;
    }
    else
    {
        find(floor(decimal_number/2));
        printf("%d", decimal_number%2);
      //  return (decimal_number%2 + 10 * find(decimal_number/2));
    }
    
    
}
int main()
{clock_t start_clk = clock();

   
   
    int decimal_number = 10;
    find(decimal_number);
   // printf(" %d", find(decimal_number));
    
    
    
    
    
    
    
    
    
    printf("\nProcessor time used by program: %lg sec.\n",
           (clock() - start_clk) / (long double)CLOCKS_PER_SEC);
    return 0;
}