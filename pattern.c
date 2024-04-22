#include <stdio.h>
int main()
{
  int a[3][3] = {{1,2,3},{2,3,1},{1,4,2}},i,sum=0;
  for(i=0;i<3;i++){
    sum = sum + (a[0][i] * (a[1][(i+1)%3] * a[2][(i+2)%3] - a[1][(i+2)%3] * a[2][(i+1)%3]));
  }
  printf("%d",sum);
return 0;
}