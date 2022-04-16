// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  let sVolume = (4/3) * Math.PI * Math.pow(radius, 3);
  return sVolume;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let cVolume = PI * (radius * radius) * height / 3;
  return cVolume;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let pVolume = height * width * depth;
  return pVolume;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  let volSphere = 0;
  let volSphere2 = 0;
  let volCone = 0;
  let volPrism = 0;
  
  for (let i = 0; i < solids.length; i++) {
    if (solids[i] === largeSphere) {
      volSphere = sphereVolume(largeSphere.radius);
    } else if (solids[i] === smallSphere) {
      volSphere2 = sphereVolume(smallSphere.radius)
    } else if (solids[i] === cone) {
      volCone = coneVolume(cone.radius, cone.height);
    } else if (solids[i] === prism) {
      volPrism = prismVolume(prism.height, prism.width, prism.depth);
    }
  }
  total = volSphere + volSphere2 + volCone;
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);