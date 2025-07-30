let chuoi = prompt("Mời nhập vào chuỗi ");
let arr = chuoi.split(" ");
let max = +arr[0];
for ( i = 1; i <= arr.legth - 1; i++ ) {
    if( max < +arr[i]) {
        max = +arr[i];
    }
} alert(`Số lớn nhất là: ${max}`);