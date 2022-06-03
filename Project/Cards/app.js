let data = [
{
    name: 'Akash',
    age: '22'
},
{
    name: 'Ritik',
    age: '22'
},
{
    name: 'Suraj',
    age: '19'
},
{
    name: 'Ravi kumar',
    age: '23'
}
];
const info = document.querySelector('#info')
let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});
info.innerHTML = details.join('\n');