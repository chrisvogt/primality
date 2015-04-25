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
        content.setAttribute('class', 'col-mb-2 col-3 col-dt-3 card');
        content.innerHTML = '<p>' + i + '</p>';
        container.appendChild(content);
    }
}
/**
 * Determines if selection is correct or not.
 */
function handleClick() {
    var num = $(this).text();
    if ( isPrime(num) ) {
        $(this).addClass( "prime correct animated bounce" );
    } else {
        $(this).addClass( "false animated shake" );
    }
}
buildTable(0, 50);
