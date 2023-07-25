// A simple pseudo-random number generator function
function pseudoRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function fetchAPI(date) {
  const result = [];
  const dt = new Date(date);
  const seed = dt.getDate();

  const random = () => pseudoRandom(seed);

  for (let i = 16; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }

  return result;
}

export function submitAPI(formData) {
  return true;
}
