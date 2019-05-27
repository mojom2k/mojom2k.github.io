let globalButton = document.querySelector('.btn-primary');
let globalCounter = document.querySelector('#global-counter');
let globalCount = 0;

globalButton.onclick = function () {
    globalCount++;
    globalCounter.innerHTML = globalCount;
};

