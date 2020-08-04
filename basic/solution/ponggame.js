//criando variavel "canvas" usando a variavel "pong" do html
var canvas = document.getElementById("pong");
//criando variavel "ctx" chamando o contexto 2d do canvas
var ctx = canvas.getContext("2d");
//criando a variavel "ball"
var ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    velocityX : 5,
    velocityY : 5,
    speed : 7,
    color : "WHITE"
}
//variavel player
var user = {
    x : 0,
    y : (canvas.height - 100)/2,
    width : 10,
    height : 100,
    score : 0,
    color : "WHITE"
}
//variavel computador
var com = {
    x : canvas.width -10,
    y : (canvas.height - 100)/2,
    width : 10,
    height : 100,
    score : 0,
    color : "WHITE"
}
//variavel rede
var net = {
    x : (canvas.width - 2)/2,
    y : 0,
    width : 10,
    height : 2,
    color : "WHITE"
}
//desenhando a bola a partir do render
function drawArc(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}
//cria a raquete do player
function drawRect (x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
//desenha a rede, loopando a criação de um risco de 15 pixels, pulando 15 pixels e desenhando outro, até que atinja o limite do canvas
function drawNet () {
    for(var i = 0; i <= canvas.height; i+= 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}
//amarra os metodos "getMousePos" e "getKeyboardKey" ao evento ativador
//window.addEventListener('keydown', getKeyboardKey);
window.addEventListener('mousemove', getMousePos);

//controla a raquete com o mouse
function getMousePos (evt) {
 var rect = canvas.getBoundingClientRect ();
    user.y = evt.clientY - rect.top - user.height/2;
    com.y = evt.clientY - rect.top - com.height/2;
}
//controla a raquete com os botões do teclado
function getKeyboardKey (evt) {
  
    var rect = canvas.getBoundingClientRect ();
    
    evt = evt || window.event;
    if (evt.keyCode == '38') {
        user.y = (user.y - 2) - rect.top - user.height/2;
        console.log(user.y);
    } 
    else if (evt.keyCode == '40') {
        user.y = (user.y + 2) - rect.top - user.height/2;
        console.log(user.y);
    }
}
// função de colisão
function colision(b,p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return p.left < b.right && p.top < b.bottom && p.right > b.left && p.bottom > b.top;
}

//atualiza o render e testa a colisão entre o player e a bola
function update () {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if(ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.velocityY = -ball.velocityY;
    }
    
    var player = (ball.x + ball.radius < canvas.width/2) ? user : com;

    if (colision(ball,player)){
        var collidePoint = (ball.y - (player.y + player.height/2));
        collidePoint = collidePoint / (player.height/2);
        var angleRad = (Math.PI/4) * collidePoint;
        var direction = (ball.x + ball.radius < canvas.width/2) ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);
        ball.speed += 0.1;
    }
}



//rederizando o jogo
function render () {
    drawRect (0, 0, canvas.width, canvas.height, "BLACK");
    drawNet ();
    drawRect (user.x, user.y, user.width, user.height, user.color);
    drawRect (com.x, com.y, com.width, com.height, com.color)
    drawArc (ball.x, ball.y, ball.radius, ball.color);
    
    
}
// criando função "game"
function game () {
    render ();
    update ();
}
//usando a função game para criar um loop
var loop = setInterval(() => {
   game();
}, 1000/50);



