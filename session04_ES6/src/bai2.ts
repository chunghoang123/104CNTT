let diem:number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
// let sum:number =0 ;
// let tb:number = 0 ;

// for(let i=0;i<diem.length;i++){
//     sum += diem[i];
// }

let trungbinh:number = diem.reduce((sum,curr)=>sum+curr,0)/diem.length

console.log(trungbinh.toFixed(2));

