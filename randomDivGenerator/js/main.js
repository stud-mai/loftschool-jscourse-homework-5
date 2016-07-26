let body = document.body,
    button = document.querySelector('#button'),
    js = body.querySelector('script'),
    divs = body.getElementsByTagName('div'),
    mouseDown = false,
    targetDiv, targetDivX, targetDivY;

function generateNewDiv() {
    let div = document.createElement('div'),
        currentNumb = 0,
        top, left,
        width, height;
    let minDimension = 30,
        maxDimension = 300;

    function random(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    for (let i = divs.length-1; i>=0; i--){
        if (divs[i].getAttribute('id').indexOf('div-') == 0){
            currentNumb = Number(divs[i].getAttribute('id').slice(4));
            break;
        }
    }

    width = random(minDimension,maxDimension);
    height = random(minDimension,maxDimension);
    top = random(0,window.innerHeight - height/2);
    left = random(0,window.innerWidth - width/2);
    div.id = 'div-' + ++currentNumb;
    div.style.position = 'absolute';
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.top = top + 'px';
    div.style.left = left + 'px';
    div.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    body.insertBefore(div,js);
}

function capture(e) {
    if (e.target.getAttribute('id').indexOf('div-') == 0){
        targetDiv = e.target;
        targetDivX = e.offsetX;
        targetDivY = e.offsetY;
        targetDiv.style.zIndex = 500;
        mouseDown = true;

    }
}

function move(e) {
    if (targetDiv && mouseDown){
        targetDiv.style.left = e.clientX - targetDivX + 'px';
        targetDiv.style.top = e.clientY - targetDivY + 'px';
    }
}

function release(e) {
    if (e.target.getAttribute('id').indexOf('div-') == 0){
        targetDiv = e.target;
        targetDiv.style.zIndex = 0;
        targetDiv = null;
        mouseDown = false;
    }
}

button.addEventListener('click', generateNewDiv);
document.addEventListener('mousedown',capture);
document.addEventListener('mousemove',move);
document.addEventListener('mouseup',release);