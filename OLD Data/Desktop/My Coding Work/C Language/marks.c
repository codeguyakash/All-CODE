main()
{
    int marks;
    printf("Enter Your Marks ");
    scanf (" %d",&marks);
    if(marks>=90)
        printf("Grade-A");
    else if(marks>=80)
        printf("Grade-B");
    else if(marks>=70)
        printf("Grade-C");
    else
        printf("Your are Fail");
    getch();

}
