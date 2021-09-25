const calcRectAnglePerimeter = (length, width) => {
    if (typeof length === 'number' && typeof width === 'number') {

        return 2 * (length + width);
    }
    return undefined;
}
console.log(calcRectAnglePerimeter(20, 10));
console.log(calcRectAnglePerimeter(2, 9));