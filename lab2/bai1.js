let a = parseInt(prompt ("Nhap a: "));
let b = parseInt(prompt ("Nhap b: "));
let c = parseInt(prompt ("Nhap c: "));
//kiem tra a=0 hay a!=0
if(a==0){
    let x=-c/b;
    console.log("Phuong trinh co 1 nghiem la: "+x);
}else{//a!=0
    let delta = Math.pow(b,2) - 4*a*c;
    //kiem tra dieu kien cua deltal
    if(delta < 0){
        console.log("Phuong trinh vo nghiem.");
    }/*delta >0 or delta =0*/else if(delta==0){
        let x=-b/(2*a);
        console.log("Phuong trinh co nghiem kep la: "+x);

    }else/*delta>0*/{
        let x1 = (-b + Math.sqrt(delta)/(2*a));
        let x2 = (-b - Math.sqrt(delta)/(2*a));
        console.log("Phuong trinh co 2 nghiem la x1="+x1+"x2"+x2);
    }
}
