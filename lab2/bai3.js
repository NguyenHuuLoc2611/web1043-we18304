//nhập giá trị họ tên và giới tính 
let hoTen = prompt("Nhập vào họ tên: ");
let gioiTinh = prompt("Nhập vào giới tính: ");

let manghoTen = hoTen.split(" ");//tách chuỗi thành các mảng 
var ho = manghoTen[0];//họ là phần tử đầu tiên
var ten=manghoTen[manghoTen.length-1];//tên là phần tử cuối 
var tendem= manghoTen.slice(1, manghoTen.length-1).join(" ");//lấy ra họ và tên còn lại tên đệm 
//in các giá trị ra console
console.log("Họ là: "+ho);
console.log("Tên đệm là: "+tendem);
console.log("Tên là: "+ten);
if(gioiTinh=="nam"){//nếu giới tính bằng nam
    tendem="Văn";//tên đệm được thay thế bằng Văn 
}else if(gioiTinh=="nữ"){
    tendem="Vẽ";//nếu giới tính là nữ thì tên đệm được thay thế bằng Vẽ
}
console.log("Ten mới là "+ho+" "+tendem+" "+ten);