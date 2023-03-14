// nhập giá trị cho các cạnh
let a = parseInt(prompt ("Nhap canh a: "));
let b = parseInt(prompt ("Nhap canh b: "));
let c = parseInt(prompt ("Nhap canh c: "));
//nếu tổng 2 cạnh lớn hơn cạnh còn lại thì đó là tam giác và ngược lại
if( a<b+c && b<a+c && c<a+b ){
    if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)//nếu bình phương 1 cạnh bằng tổng 2 cạnh còn lại thì đó là tam giác vuông
    console.log("Day la tam giac vuong");
    else if(a==b || a==c || b==c)//nếu cạnh  a=canh b = canh c thì đó là tam giác cân
    console.log("Day la tam giac can.");
    else
    console.log("Day la tam giac thuong");//và trường hợp cuối là tam giác thường 
    }
    else
    console.log("Day khong phai la tam giac");