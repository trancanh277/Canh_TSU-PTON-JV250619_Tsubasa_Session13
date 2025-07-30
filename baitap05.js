let arr = [];
tongchan = 0;
tongle = 0;
for( i = 1; i < 20; i++) {
    arr.unshift(Math.floor(Math.random() * 100));
} alert(arr);
for( i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
tongchan += arr[i];

} else if (arr[i] % 2 !== 0) {
    tongle += arr[i];
    
} else {
    alert("Mời nhập lại");
}
}
alert(`Tổng các số chẵn là: ${tongchan}`);
alert(` Tổng các số lẻ là: ${tongle}`);
