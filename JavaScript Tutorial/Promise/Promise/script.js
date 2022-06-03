const project1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no);
    }, 2000);
});
project1.then((rollno)=>{
    console.log(rollno);
})