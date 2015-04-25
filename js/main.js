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
        content.setAttribute('class', 'col-mb-2 col-3 col-dt-3 card animated zoomIn');
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
        $(this).addClass( "prime correct animated tada" );
    } else {
        $(this).addClass( "false animated shake" );
    }
}

var midpoint = Math.ceil(Math.random() * (999 - 100 + 1) + 100);
buildTable(midpoint - 50, midpoint + 50);

// hover function
// move this to all cards
$( "#brief a" ).hover(
  function() {
    $( this ).addClass( "animated infinite pulse" );
  }, function() {
    $( this ).removeClass( "animated infinite pulse" );
  }
);
