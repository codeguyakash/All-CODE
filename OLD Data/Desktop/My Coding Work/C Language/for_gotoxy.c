#include<windows.h>
void gotoxy(int m, int n)
{
COORD k;
k.X=m;
k.Y=n;
SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE),k);
}

main()

{
gotoxy(15,2);
printf("Hello Guys i am akash");
getch();
}
