fetch('https://api.covid19api.com/summary').then((apidata)=>{
    return apidata.json();
})
.then((actualdata)=>{
    const myData = actualdata.Countries[76];

    document.getElementById("APIindia").innerHTML = `Name-${myData.Country}.Total Case-${myData.TotalConfirmed} Total Death-${myData.TotalDeaths} Total Recovered-${myData.TotalRecovered}`;





}).catch((error)=>{
    console.log(error);
});





// function getData() {
//     url = "https://covid-19latestupdates.web.app";
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }