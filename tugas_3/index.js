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
  var verticesKubus = [];
  var cubePoints = [
    [ -0.8, -0.8,  0.8 ],
    [ -0.8,  0.8,  0.8 ],
    [  0.8,  0.8,  0.8 ],
    [  0.8, -0.8,  0.8 ],
    [ -0.8, -0.8, -0.8 ],
    [ -0.8,  0.8, -0.8 ],
    [  0.8,  0.8, -0.8 ],
    [  0.8, -0.8, -0.8 ]
  ];
  var cubeColors = [
    [],
    [0.0, 1.0, 1.0], // biru hijau
    [0.0, 1.0, 0.5], // hijau biru
    [0.0, 1.0, 0.5], // hijau biru
    [0.0, 1.0, 0.5], // hijau biru
    [0.0, 1.0, 0.5], // hijau biru
    [0.0, 1.0, 0.5], // hijau biru
    []
  ];
  var cubeNormals = [
    [],
    [  0.0,  0.0,  1.0 ], // depan
    [  1.0,  0.0,  0.0 ], // kanan
    [  0.0, -1.0,  0.0 ], // bawah
    [  0.0,  0.0, -1.0 ], // belakang
    [ -1.0,  0.0,  0.0 ], // kiri
    [  0.0,  1.0,  0.0 ], // atas
    []
  ];

  function quadKubus(a, b, c, d) {
    var indices = [a, b, c, a, c, d];
    for (var i=0; i < indices.length; i++) {
      for (var j=0; j < 3; j++) {
        verticesKubus.push(cubePoints[indices[i]][j]);
      }
      for (var j=0; j < 3; j++) {
        verticesKubus.push(cubeColors[a][j]);
      }
      for (var j=0; j < 3; j++) {
        verticesKubus.push(-1*cubeNormals[a][j]);
      }
      switch (indices[i]) {
        case a:
          verticesKubus.push((a-2)*0.125);
          verticesKubus.push(0.0);
          break;
        case b:
          verticesKubus.push((a-2)*0.125);
          verticesKubus.push(1.0);
          break;
        case c:
          verticesKubus.push((a-1)*0.125);
          verticesKubus.push(1.0);
          break;
        case d:
          verticesKubus.push((a-1)*0.125);
          verticesKubus.push(0.0);
          break;
      
        default:
          break;
      }
    }
  }

  quadKubus(2, 3, 7, 6);
  quadKubus(3, 0, 4, 7);
  quadKubus(4, 5, 6, 7);
  quadKubus(5, 4, 0, 1);
  quadKubus(6, 5, 1, 2);
  cubeSize = 30;

  var currentPositionCube = [];
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

    var mmLoc = gl.getUniformLocation(program3, "modelMatrix");
    var modelMatrix = glMatrix.mat4.create();
    glMatrix.mat4.translate(modelMatrix, modelMatrix, [0.0, 0.0, -2.0]);

    function matrix_mult(a, b) {
      var c1, c2, c3, c4;
      c1 = a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3];
      c2 = a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3];
      c3 = a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3];
      c4 = a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3];
      return [c1, c2, c3, c4];
    }
    function drawCube() {
      gl.uniformMatrix4fv(mmLoc, false, modelMatrix);
      gl.drawArrays(gl.TRIANGLES, 0, cubeSize);
      currentPositionCube = [];
      for (var i = 0; i < cubePoints.length; i++) {
        x = matrix_mult(modelMatrix, [...cubePoints[i], 1.0]);
        currentPositionCube.push(x);
      }
      pointsPlane = [
        [
          currentPositionCube[0],
          currentPositionCube[1],
          currentPositionCube[2]
        ],
        [
          currentPositionCube[2],
          currentPositionCube[3],
          currentPositionCube[6]
        ],
        [
          currentPositionCube[6],
          currentPositionCube[7],
          currentPositionCube[5]
        ],
        [
          currentPositionCube[5],
          currentPositionCube[4],
          currentPositionCube[1]
        ],
        [
          currentPositionCube[0],
          currentPositionCube[3],
          currentPositionCube[7]
        ],
        [currentPositionCube[1], currentPositionCube[2], currentPositionCube[6]]
      ];
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

// var thetaLocCube = gl.getUniformLocation(program3, 'theta');

function render3()
{

  gl.useProgram(program3);
  // var thetaCube = [10, 10, 0];
  // gl.uniform3fv(thetaLocCube, thetaCube);
  // drawShapes3(gl.LINES, kubus , 24);
  drawCube();

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