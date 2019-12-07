precision mediump float;

attribute vec3 vPosition;
attribute vec3 vColor;
varying vec3 fColor;
uniform vec3 theta;

void main() {
  fColor = vColor;
  vec3 angle = radians(theta);
  vec3 sinD = sin(angle);
  vec3 cosD = cos(angle);
  
  mat4 rx = mat4(
    1.0, 0.0, 0.0, 0.0,
    0.0, cosD.x, sinD.x, 0.0,
    0.0, -sinD.x, cosD.x, 0.0,
    0.0, 0.0, 0.0, 1.0
  );

  mat4 ry = mat4(
    cosD.y, 0.0, -sinD.y, 0.0,
    0.0, 1.0, 0.0, 0.0,
    sinD.y, 0.0, cosD.y, 0.0,
    0.0, 0.0, 0.0, 1.0
  );

  mat4 rz = mat4(
    cosD.z, sinD.z, 0.0, 0.0,
    -sinD.z, cosD.z, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );

  gl_Position = vec4(vPosition, 1.0) * rz * ry * rx ;
}