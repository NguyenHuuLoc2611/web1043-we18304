let thuNgay=["Tue","Thu","Sat","Nine"];//ban đầu của mảng
//lấy và thay thế vị trí của mảng phần tử trong mảng
thuNgay.splice(0, 0, "Mon");
thuNgay.splice(2, 0, "Wed");
thuNgay.splice(4, 0, "Fri");
thuNgay.splice(6, 1, "Sun");
console.log("Thứ ngày trong tuần là "+thuNgay);//in ra console
    