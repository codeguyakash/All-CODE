let activeCount = document.getElementById("activeCount");
let deathCount = document.getElementById("deathCount");
let recoverdCount = document.getElementById("recoverdCount");
let totalCount = document.getElementById("totalCount");
var jsonData = null

// This data from Covid-19 API.com
// fetch('https://api.covid19api.com/summary').then((apidata) => {
//     return apidata.json();
// })
//     .then((actualdata) => {
//         const myData = actualdata.Countries[76];

//         document.getElementById("deathCount").innerHTML = `Total Deaths - ${myData.TotalDeaths}`;
//         document.getElementById("recoverdCount").innerHTML = `Total Recovered-${myData.TotalRecovered}`;
//         document.getElementById("totalCount").innerHTML = `Total Confirmed-${myData.TotalConfirmed}`;

//     }).catch((error) => {
//         console.log(error);
//     });

    // This data from Covid-19 API.com

    var table = document.getElementById("dataTable");
    var tbody = table.querySelector("tbody");

fetch('https://api.rootnet.in/covid19-in/stats/latest').then((CovidData) => {
     
      
        // console.log("jsondata" , jsonData.data.regional)  
     
    console.log(jsonData)
    return CovidData.json();
})
    .then((APIData) => {
        var regionalData = APIData.data.regional;

        console.log("jsondata" , regionalData) 
        const myData = APIData.data.summary;
        
        document.getElementById("deathCount").innerHTML = `Total Deaths - ${myData.deaths}`;
        document.getElementById("recoverdCount").innerHTML = `Total Discharged - ${myData.discharged}`;
        document.getElementById("totalCount").innerHTML = `Total - ${myData.total}`;
        document.getElementById("activeCount").innerHTML = `Total Active - ${myData.confirmedCasesIndian}`;

           regionalData.forEach(d => {
                 var tr = document.createElement("tr");
                Object.keys(d).forEach(key => {
                    if(key=="confirmedCasesForeign" || key=="confirmedCasesIndian"){

                    }else{
                        var td = document.createElement("td");
                        td.innerHTML = d[key];
                        tr.appendChild(td);
                    }
                   
                });
                tbody.appendChild(tr);
            })
   
       
    })   
    .catch((error) => {
        console.log(error);
    });


    // let row = jsonData.data.regional.map(region => {
    //     return {
    //         "loc": region.loc,
    //         "totalConfirmed": region.totalConfirmed,
    //         "discharged": region.discharged,
    //         "deaths": region.deaths
    //     }
    //     console.log(row);
    // });
    
    // var table = document.getElementById("dataTable");
    // var tbody = table.querySelector("tbody");
    
    // row.



