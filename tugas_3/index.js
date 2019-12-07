(function(global) {

  var canvas, gl, program,program2;

  glUtils.SL.init({ callback:function() { main(); } });

  function main() {
    // Register Callbacks
    window.addEventListener('resize', resizer);

    // Get canvas element and check if WebGL enabled
    canvas = document.getElementById("glcanvas");
    gl = glUtils.checkWebGL(canvas);

    // Initialize the shaders and program
    // var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex),
      var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex),
        vertexShader3 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v3.vertex),
        fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);

  //  program = glUtils.createProgram(gl, vertexShader, fragmentShader);
   program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader);
   program3 = glUtils.createProgram(gl, vertexShader3, fragmentShader);


  resizer();
  

  // draw!

  //kubus
  var kubus= ([
    //BAWAH
    -0.3,  -0.8,  0.7,      255, 255, 255,          
    0.4,  -0.8,  0.7,       255, 255, 255,          
    0.4,  -0.8,  0.7,       255, 255, 255,          
    0.4,  -0.8,  -0.6,      255, 255, 255,          
    0.4,  -0.8,  -0.6,      255, 255, 255,          
    -0.3,  -0.8,  -0.6,     255, 255, 255,          
    -0.3,  -0.8,  -0.6,     255, 255, 255,          
    -0.3,  -0.8,  0.7,      255, 255, 255,          
    //ATAS
    -0.3,  0.6,  0.7,       255,255, 255,          
    0.4,  0.6,  0.7,        255,255, 255,       
    0.4,  0.6,  0.7,        255,255, 255,         
    0.4,  0.6,  -0.6,      255,255, 255,          
    0.4,  0.6,  -0.6,       255,255, 255,          
    -0.3,  0.6,  -0.6,      255,255, 255,          
    -0.3,  0.6,  -0.6,      255,255, 255,          
    -0.3,  0.6,  0.7,       255,255, 255,          
    //BELAKANG
    -0.3,  -0.8,  0.7,      255,255, 255,            
    -0.3,  0.6,  0.7,       255,255, 255,           
    0.4,  -0.8,  0.7,      255,255, 255,            
    0.4,  0.6,  0.7,        255,255, 255,            
    //DEPAN
    0.4,  -0.8,  -0.6,      255,255, 255,            
    0.4,  0.6,  -0.6,       255,255, 255,           
    -0.3,  -0.8,  -0.6,     255,255, 255,            
    -0.3,  0.6,  -0.6,      255,255, 255      
  ]);
    var vertices5 = [],
    vertices6 = [],
    vertices7 = [],
    vertices8 = [];


    //adaisi
    //adaisi
    var linesVertices6 = new Float32Array([ //bagian luar
      0.45, 0.15,    0.1765, 0.8157, 0.9255,
      0.45, -0.15,   0.1765, 0.8157, 0.9255,
      0.45, 0.15,    0.1765, 0.8157, 0.9255,
      0.5, 0.15,     0.1765, 0.8157, 0.9255,
      0.45, -0.15,   0.1765, 0.8157, 0.9255,
      0.5, -0.15,    0.1765, 0.8157, 0.9255

    ]);
    var linesVertices7 = new Float32Array([
      0.45, 0.25,    0.1765, 0.8157, 0.9255,
      0.45,  0.55,   0.1765, 0.8157, 0.9255,
      0.45, 0.25,    0.1765, 0.8157, 0.9255,
      0.5, 0.25,     0.1765, 0.8157, 0.9255,
      0.45, 0.55,    0.1765, 0.8157, 0.9255,
      0.5, 0.55,     0.1765, 0.8157, 0.9255
    ]);

    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;
      var vert5 = [
        0.5 + Math.sin(z)*0.1,
        0 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      var vert6 = [
        0.5 + Math.sin(z)*0.1,
        0.4 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      vertices5 = vertices5.concat(vert5);
      vertices6 = vertices6.concat(vert6);
    }

    //luar atas
    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;
      var vert6 = [
        0.5 + Math.sin(z)*0.1,
        0.4 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      var vert7 = [
        0.5 + Math.sin(z)*0.2,
        0.4 + Math.cos(z)*0.25,
        0.0078, 0.2078, 0.3922,
      ];

      vertices7 = vertices7.concat(vert7);
      vertices7 = vertices7.concat(vert6);
    }

    //luar bawah
    for (var x=0.0; x<=180; x+=1) {
      // degrees to radians
      var z = x * Math.PI / 180;
      var vert5 = [
        0.5 + Math.sin(z)*0.1,
        0.0 + Math.cos(z)*0.15,
        0.1765, 0.8157, 0.9255
      ];
      var vert8 = [
       0.5 + Math.sin(z)*0.2,
       0 + Math.cos(z)*0.25,
       0.0078, 0.2078, 0.3922
      ];
      vertices8 = vertices8.concat(vert8);
      vertices8 = vertices8.concat(vert5);
    }

    var isian1 = new Float32Array([
      0.45, -0.25,     0.0078, 0.2078, 0.3922,
      0.45,  0.65,     0.1765, 0.8157, 0.9255,
      0.40,-0.25,      0.1765, 0.8157, 0.9255,
      0.40, 0.65,      0.0078, 0.2078, 0.3922
    ]);
    
    var isiatas = new Float32Array([
      0.45, 0.65,     0.1765, 0.8157, 0.9255,
      0.45, 0.55,     0.0078, 0.2078, 0.3922,
      0.50, 0.65,     0.1765, 0.8157, 0.9255,
      0.50, 0.55,     0.1765, 0.8157, 0.9255
    ]);

    var isitengah = new Float32Array([
      0.45, 0.15,     0.1765, 0.8157, 0.9255,
      0.45, 0.25,     0.0078, 0.2078, 0.3922,
      0.50, 0.15,     0.1765, 0.8157, 0.9255,
      0.50, 0.25,     0.0078, 0.2078, 0.3922
    ]);


    var isibawah = new Float32Array([
      0.45, -0.15,    0.1765, 0.8157, 0.9255,
      0.45, -0.25,    0.0078, 0.2078, 0.3922,
      0.50, -0.15,    0.1765, 0.8157, 0.9255,
      0.50, -0.25,    0.0078, 0.2078, 0.3922
    ])

  
  function drawShapes(type,vertices,n) {
    
    var vertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
  
    var vPosition = gl.getAttribLocation(program, 'vPosition');
    var vColor = gl.getAttribLocation(program, 'vColor');
  gl.vertexAttribPointer(
    vPosition, //variabel pemegang posisi atribut di shader
    2,          // jumlah elemen per atribut
    gl.FLOAT,   // tipe data atribut
    gl.FALSE,   
    5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex
    0
  );
  gl.vertexAttribPointer(
    vColor, 
    3, 
    gl.FLOAT, 
    gl.FALSE, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    2 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(vPosition);
  gl.enableVertexAttribArray(vColor);

  var vPosition = gl.getAttribLocation(program, 'vPosition');
  var vColor = gl.getAttribLocation(program, 'vColor');
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.drawArrays(type, 0, n);
  }

  


//isi
  function drawShapes2(type,vertices,n) {
    
    var vertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
  
  var vPosition = gl.getAttribLocation(program2, 'vPosition');
  var vColor = gl.getAttribLocation(program2, 'vColor');
  gl.vertexAttribPointer(
    vPosition, //variabel pemegang posisi atribut di shader
    2,          // jumlah elemen per atribut
    gl.FLOAT,   // tipe data atribut
    gl.FALSE,   
    5 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex
    0
  );
  gl.vertexAttribPointer(
    vColor, 
    3, 
    gl.FLOAT, 
    gl.FALSE, 
    5 * Float32Array.BYTES_PER_ELEMENT, 
    2 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(vPosition);
  gl.enableVertexAttribArray(vColor);

  var vPosition = gl.getAttribLocation(program2, 'vPosition');
  var vColor = gl.getAttribLocation(program2, 'vColor');
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.drawArrays(type, 0, n);
  }

  var thetaLoc1 = gl.getUniformLocation(program2, 'theta1'); 
  var transLoc1 = gl.getUniformLocation(program2, 'trans1');
  var thetaA1 = [10, 20, 0];
  var trans1 = [0, 0, 0]; 
  var X1 = 0.0080;
  var Y1 = 0.0090;
  var Z1 = 0.0130;

function render2(){

    gl.useProgram(program2);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    if(trans1[0] >= 0.4*0.8 || trans1[0] <= -0.3*0.8 ){
      X1 *= -1;
    }
    trans1[0] += X1;

    if(trans1[1] >= 0.6*0.8 || trans1[1] <= -0.8*0.8 ){
      Y1 *= -1;
    }
    trans1[1] += Y1;

    if(trans1[2] >= 0.7*0.8 || trans1[2] <= -0.6*0.8){
      Z1 *= -1;
    }
    trans1[2] += Z1;

    gl.uniform3fv(transLoc1, trans1);
    thetaA1[1] += 0.099;
    gl.uniform3fv(thetaLoc1, thetaA1);  
  // gl.uniform1f(scaleYLocation, scaleY);

    //huruf b dengan isian
    drawShapes2(gl.LINE_STRIP, vertices5,180);//dalam
    drawShapes2(gl.LINE_STRIP, vertices6,180);//dalam

    drawShapes2(gl.TRIANGLE_STRIP, isian1,4);//samping

    drawShapes2(gl.TRIANGLE_STRIP, isiatas,4);
    drawShapes2(gl.TRIANGLE_STRIP, isitengah,4);
    drawShapes2(gl.TRIANGLE_STRIP, isibawah,4);

    drawShapes2(gl.TRIANGLE_STRIP, vertices7,360);
    drawShapes2(gl.TRIANGLE_STRIP, vertices8,362);
    // drawA(gl.LINES, linesVertices6);
    // drawA(gl.LINES, linesVertices7);
    // drawA(gl.LINES, linesVertices3);
    // drawA(gl.LINES, linesVertices4);

  requestAnimationFrame(render2);

} 

function drawShapes3(type,vertices,n) {
  var vertexBufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);

  var vPosition = gl.getAttribLocation(program3, 'vPosition');
  var vColor = gl.getAttribLocation(program3, 'vColor');

  gl.vertexAttribPointer(
    vPosition, //variabel pemegang posisi atribut di shader
    3,          // jumlah elemen per atribut
    gl.FLOAT,   // tipe data atribut
    gl.FALSE,   
    6 * Float32Array.BYTES_PER_ELEMENT, // ukuran byte tiap vertex
    0
  );

  gl.vertexAttribPointer(
    vColor, 
    3, 
    gl.FLOAT, 
    gl.FALSE, 
    6 * Float32Array.BYTES_PER_ELEMENT, 
    3 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(vPosition);
  gl.enableVertexAttribArray(vColor);

  var vPosition = gl.getAttribLocation(program3, 'vPosition');
  var vColor = gl.getAttribLocation(program3, 'vColor');
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.drawArrays(type, 0, n);
}

var thetaLocCube = gl.getUniformLocation(program3, 'theta');


function render3()
{

  gl.useProgram(program3);
  var thetaCube = [10, 10, 0];
  gl.uniform3fv(thetaLocCube, thetaCube);
  drawShapes3(gl.LINES, kubus , 24);

  requestAnimationFrame(render3);
}
  // render();
  render2();
  render3();


}
  function resizer() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  }

})(window || this);