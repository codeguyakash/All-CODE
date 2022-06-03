let activeCount = document.getElementById("activeCount");
let deathCount = document.getElementById("deathCount");
let recoverdCount = document.getElementById("recoverdCount");
let totalCount = document.getElementById("totalCount");

activeCount.innerHTML = "Active - " + covidData.data["unofficial-summary"][0].active;
deathCount.innerHTML = "Deaths - " + covidData.data["unofficial-summary"][0].deaths;
recoverdCount.innerHTML = "Recovered - " + covidData.data["unofficial-summary"][0].recovered;
totalCount.innerHTML = "Total - " + covidData.data["unofficial-summary"][0].total;


let row = covidData.data.regional.map(region => {
    return {
        "loc": region.loc,
        "totalConfirmed": region.totalConfirmed,
        "discharged": region.discharged,
        "deaths": region.deaths
    }
});

var table = document.getElementById("dataTable");
var tbody = table.querySelector("tbody");

row.forEach(region => {
    var tr = document.createElement("tr");
    Object.keys(region).forEach(key => {
        var td = document.createElement("td");
        td.innerHTML = region[key];
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
})