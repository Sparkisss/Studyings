function solution(str){
  let out = [];
  for(let i = str.length-1; i >= 0;i--) {
    out.push(str[i]);
  }
  return out;
}

let str = ['w', 'o', 'r', 'l', 'd'];
out = solution(str);
console.log(out);