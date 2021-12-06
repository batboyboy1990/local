
let vatLy = prompt("diem vat ly");
let hoaHoc = prompt("diem hoa hoc"); 
let sinhHoc = prompt("diem sinh hoc");
let vatly = parseInt(vatLy);
let hoahoc = parseInt(hoaHoc);
let sinhhoc = parseInt(sinhHoc);
let ketqua = vatly + hoahoc + sinhhoc
let trungbinh = vatly + hoahoc + sinhhoc; 

document.write("trungbinh=" + trungbinh /3);
document.write("Tong diem=" + ketqua);