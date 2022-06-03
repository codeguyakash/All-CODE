main()
{

/*    int divident,reminder,divisor=2,quotient;
    printf("Enter a number=");
    scanf("%d",&divident);
    quotient=divident/divisor;
    reminder=divident-(divisor*quotient);

    if(reminder==0)
    {
        printf("NUMBER IS EVEN");
    }
    else
    {
        printf("number is odd");

    }

  */
    int a;
    printf("Enter a number:");
    scanf("%d",&a);
    if(a>0)
    {
        printf("POSITIVE");
    }
    else if(a==0)
    {
        printf("ZERO");
    }
    else
    {
        printf("NEGATIVE");
    }
    getch();

}

