main()
{
    int marks;
    printf("Enter Your Marks ");
    scanf (" %d",&marks);
    if(marks>=100)
    {
        printf("Grade-A");
    }
    else
        if(marks>=90)
        {
        printf("Grade-B");
        }
        else
        if(marks>=80)
        {
        printf("Grade-C");
        }

        else
        if(marks>=70)
        {
        printf("Grade-D");
        }
        else
        if (marks>=60)
        {
            printf("Grade-E");

        }
        else
            printf("You are Fail ''BETTTER LUCK NEXT TIME''");
    getch();

}
