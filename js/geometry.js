function areaOfRect(width, height) {
  return height * width;
}

function volumeOfRectPrism(width, height, length) {
  return width * height * length;
}

function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function volOfSphere(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 2);
}

console.log(areaOfRect(5, 22));
console.log(volumeOfRectPrism(4.5, 12.5, 17.4));
console.log(areaOfRect(7.2));
console.log(volOfSphere(7.2));
