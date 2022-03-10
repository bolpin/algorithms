const permute = (arr) => {
  if (arr.length < 2){
    return [arr];
  }
  const allPerms = [];
  for (let i = 0; i < arr.length; i++) {
    let pivot = arr[i];
    let rest = [...arr.slice(0,i), ...arr.slice(i+1,arr.length)];
    for( let perm of permute(rest)) {
      allPerms.push([pivot, ...perm]);
    }
  }
  return allPerms;
}

let a=[1,2,3,4];

for (let p of permute(a)) {
  console.log(p);
}

console.log('done');
