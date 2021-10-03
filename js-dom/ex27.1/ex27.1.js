// function Square(a, b, c, d) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
//     this.d = d;
// }
// Square.prototype.isSquare = function () {
//     if (this.a !== this.b || this.c !== this.d || this.a !== this.c) {
//         return false;
//     }
//     return true;
// }

class Square{
    constructor(a,b,c,d){
        this.a=a
        this.b=b
        this.d=d
        this.c=c
    }
isSquare() {
    if (this.a !== this.b || this.c !== this.d || this.a !== this.c) {
        return false;
    }
    return true;
}

}

const square = new Square(1, 1, 1, 1);
const square2 = new Square(1, 1, 1, 2);
console.log(square.isSquare());
console.log(square2.isSquare());