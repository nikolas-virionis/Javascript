const ePaisagem = (h, w) => w > h ? true : false;
let width = Number((Math.random() * 1920).toFixed(0)); 
let height = Number((Math.random() * 1080).toFixed(0));
console.log(`${width} / ${height}  ==============> ${ePaisagem(height, width)}`);