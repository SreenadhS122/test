#include <stdio.h>
int main()
{
    int i,j,val,k=0;
    for(i=0;i<5;i++){
        val = 1;
        for(j=0;j<9;j++){
            if(j >= 6-i && j <= 4+i && k == 0){
                printf("%d",val);
                val++;
                k=1;
            }else{
                printf(" ");
                k=0;
            }
           
        }
        printf("\n");
    }
    return 0;
}