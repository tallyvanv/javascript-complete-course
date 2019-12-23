/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target"); //var for the target id
    let tbl = document.createElement('table'); //var for a table
    let tbdy = document.createElement('tbody'); //var for table body

    for (var i = 0; i < 10; i++) {//iterate 10 times
        let tr = document.createElement('tr');//create table row
        tbdy.appendChild(tr);//append row to table body
        for (var j = 0; j < 1; j++) {//create cell within
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(""));//empty string so it creates the rows

        }
    }
    tbl.appendChild(tbdy);
    target.appendChild(tbl)
})();
