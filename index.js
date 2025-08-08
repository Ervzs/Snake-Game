const mapLayout=[[0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0]];
let control ='';

document.addEventListener('keydown', function(event){
    control = event.key;
    snakeMove(control);
})


function snakeMove(control){
    document.getElementById('snake').textContent = control
};

