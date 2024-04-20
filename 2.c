#include <stdio.h>
int main()
{
int a[100][100],limit,i,j,temp;
printf("Enter the limiit of the square matrix.");
scanf("%d",&limit);
printf("Enter the values.");
for(i=0;i<limit;i++){
    for(j=0;j<limit;j++){
        scanf("%d",&a[i][j]);
    }
}
for(i=0;i<limit;i++){
    for(j=0;j<limit;j++){
        temp = a[i][j];
        a[i][j] = a[j][i];
        a[j][i] = temp;
    }
}
printf("The matrix is as follows.\n");
for(i=0;i<limit;i++){
    for(j=0;j<limit;j++){
        printf("%d",a[i][j]);
    }
    printf("\n");
}
}