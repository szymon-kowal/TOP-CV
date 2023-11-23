export function keyToTitle(key: string): string {
  const keyArr = key.split("");
  const resultArr: string[] = [];
  for (let i = 0; i < keyArr.length; i++) {
    if (i > 0 && keyArr[i] === keyArr[i].toUpperCase()) {
      keyArr[i] = keyArr[i].toLowerCase();
      resultArr.push(" ");
    }
    resultArr.push(keyArr[i]);
  }
  resultArr[0] = keyArr[0].toUpperCase();
  const result = resultArr.join("");
  return result;
}

export function clearValues(
  obj: Record<string, string>,
): Record<string, string> {
  for (const key in obj) {
    obj[key] = "";
  }
  return obj;
}
