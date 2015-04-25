function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
function buildTable(floor, ceiling) {
    for (var i = floor; i < ceiling; i++) {
        var container = document.getElementById("num-table");
        var content = document.createElement("div");
        content.setAttribute('class', 'col-mb-2 col-3 col-dt-3');
        content.innerHTML = '<p>' + i + '</p>';
        container.appendChild(content);
    }
}
function handleClick(num) {
    // if num is prime
    // add the 'prime' class
    // if not, darken and shake the element
}
buildTable(0, 50);
