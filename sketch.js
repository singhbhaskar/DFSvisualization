let visit = [0, 0, 0, 0, 0, 0, 0];
let tree = [[0, 1, 1, 0, 0, 0, 0] , [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

let st = [0]; // stack for DFS
let outp = [] // to store the output for visualization

class point{
  constructor(a,b){
    this.x = a;
    this.y = b;
  }
  
  drawPointWhite(){
    stroke(255);
    ellipse(this.x, this.y, 14, 14);
  }
  
  drawPointVisit(){
    strokeWeight(9)
    stroke(7, 237, 10);
    ellipse(this.x, this.y, 14, 14);
  }
}

let pts = [new point(289, 26), new point(181, 146), new point(410, 139), new point(106, 272), new point(240, 265), new point(353, 261), new point(508, 264)]

function setup() {
  createCanvas(640, 400);
  noStroke();
  background(0);
  
  strokeWeight(3);
  stroke(237, 206, 7);
  for(i=0; i<3; i++){
    for(let j=0; j<7; j++){
      if(tree[i][j] == 1){
        line(pts[i].x, pts[i].y, pts[j].x, pts[j].y )
      }
    }
  }
  
  for(i=0; i<pts.length; i++){
      pts[i].drawPointWhite();
    }
}

function draw() {  
  
}

function dfs(){
  
  while(st.length > 0){
    let ver = st.shift();
    outp.push(ver);
    if(visit[ver] == 0){
      visit[ver] = 1;
      outp.push(ver);
    }
      for(let i=7; i>0; i--){
      if(tree[ver][i] == 1){
          st.unshift(i);
      }
    } 
  }
  
}


function mousePressed() {
  
  dfs();
  setInterval(function() {
    if(outp.length > 0)
      pts[outp.shift()].drawPointVisit();
  }, 750);
}//mouse pressed

