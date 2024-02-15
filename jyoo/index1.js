setInterval(myfunction, 1000);
function myfunction() {
    let d= new Date();
    document.getElementById("demo").innerhtml =
    d.getHours() + ":" + d.getMinutes() + ":" +d.getSeconds();
}