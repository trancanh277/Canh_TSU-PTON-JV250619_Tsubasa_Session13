let arr = [
    5, 8, 45, 6, 1, 104, 87, 51, 16, 26, 96, 35, 53, 
];
let k = + prompt("Mời nhập vào số nguyên k");
let dem = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
dem++;
    }
} 
if (dem > 0) {
    alert(`số ${k} có số lần xuất hiện là: ${dem}`);
} else {
    alert(`Số ${k} không xuất hiện trong mảng `);
}