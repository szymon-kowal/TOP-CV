export function keyToTitle(key: string): string {
  const keyArr = key.split("");
  const resultArr: string[] = [];
  for (let i = 0; i < keyArr.length; i++) {
    if (i > 0 && keyArr[i] === keyArr[i].toUpperCase()) {
      resultArr.push(" ");
    }
    resultArr.push(keyArr[i]);
  }
  resultArr[0] = keyArr[0].toUpperCase();
  const result = resultArr.join("");
  return result;
}
