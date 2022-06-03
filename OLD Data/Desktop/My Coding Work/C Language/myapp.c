#include<stdio.h>
#include<conio.h>
int registration();
int coursed();
int schedule();
int assignment();
int exam();
int main()
{
int ch;
printf("Choose any option\n");
printf("1.Registration Status\n");
printf("2.Courses in Current Semester\n");
printf("3.Assignment Submission Schedule\n");
printf("4.Assignment Marks\n");
printf("5.Term End Exam Marks\n");
printf("6.Quit\n");
scanf("%d", &ch);
switch(ch)
{
case 1:
printf("-----Registration Status-----\n");
registration();
break;
case 2:
printf("-----Courses in the Semester-----\n");
courses();
break;
case 3:
printf("-----Assignment Submission Schedule-----");
schedule();
break;
case 4:
printf("-----Assignment Marks-----\n");
assignment();
break;
case 5:
printf("-----Term End Exam Marks-----\n");
exam();
break;
case 6:
printf("Thankyou !");
break;
default:
printf("Please Enter a valid Number");
break;
}
}
int registration()
{
printf("Enrollment Number : 190064956\n");
printf("Current Semester : 3rd Semester\n");
printf("Fee Details : 6000 per semester\n");
printf("Study Center : 39:NOIDA\n");
printf("Enrollment Number : 185564956\n");
printf("Regional Center : DELHI RC-01\n");
}
int courses()
{
printf("MCS-021\n");
printf("MCS-023\n");
printf("MCS-014\n");
printf("BCS-031\n");
printf("BCSL-032\n");
printf("BCSL-033\n");
printf("BCSL-034\n");
}
int schedule()
{
printf("31st october for July 2020 session");
printf("15th April for January 2021 session");
}
int assignment()
{
printf("1st Semester Assignment Marks\n");
printf("ECO-01 : 75\n");
printf("FEG-02 : 80\n");
printf("BCS-011 : 85\n");
printf("BCS-012 : 80\n");
printf("BCSL-013 : 79\n");
printf("2nd Semester Marks\n");
printf("ECO-02 : 70\n");
printf("MCS-012 : 78\n");
printf("MCS-011 : 88\n");
printf("MCS-013 : 85\n");
printf("BCSL-021 : 90\n");
printf("BCSL-022 : 82\n");
}
int exam()
{
printf("1st Semester Term End Exam Marks\n");
printf("ECO-01 : 50\n");
printf("FEG-02 : 58\n");
printf("BCS-011 : 53\n");
printf("BCS-012 : 41\n");
printf("BCSL-013 : 61\n");
printf("2nd Semester Term End Exam Marks\n");
printf("ECO-02 : 70\n");
printf("MCS-012 : 50\n");
printf("MCS-011 : 71\n");
printf("MCS-013 : 56\n");
printf("BCSL-021 : 58\n");
printf("BCSL-022 : 60\n");
}
