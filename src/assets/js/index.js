var gridParent = document.querySelector('.grid-master');

var div = document.createElement('div');
var box = 1000
var grid = 5




div.classList.add('grid-item');
div.classList.add('grid-item--width2');
div.classList.add('grid-item--height2');
div.innerHTML = '2x2';
const widhtClient = document.documentElement.clientWidth;
const heightClient = document.documentElement.clientHeight;



for (var i = 0; i < grid; i++) {
    for (var j = 0; j < grid; j++) {
        var div = document.createElement('div');
        div.style.width = 32 + 'px';
        div.style.height = 32 + 'px';
        div.style.border = '1px solid #000';
        div.style.float = 'left';
        div.style.boxSizing = 'border-box';
        div.style.backgroundColor = '#fff';
        div.style.cursor = 'pointer';
        div.addEventListener('click', function (e) {
            e.target.style.backgroundColor = '#000';
        });
        gridParent.appendChild(div);
    }
}


function createSvgInGrid(){

    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('style', 'position: absolute; top: 0; left: 0;');

    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '0');
    rect.setAttribute('y', '0');
    rect.setAttribute('width', '100');
    rect.setAttribute('height', '100');
    rect.setAttribute('fill', 'none');
    rect.setAttribute('stroke', 'red');
    rect.setAttribute('stroke-width', '2');

    svg.appendChild(rect);
    gridParent.appendChild(svg);
    
}

createSvgInGrid()
