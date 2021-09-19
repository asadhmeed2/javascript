const isString = (string, callBack) => {
    if (typeof string === "string") {
        callBack(string);
    }
}


const log = (data) => {
    console.log(data);
}


isString("asad", log);
isString(5, log);


const firstWordUpperCase=(string,callBack)=>{
if(typeof string === "string"){
   let strArr = string.split(" ");
    strArr[0] =strArr[0].toUpperCase();
    string =strArr.join(" ");
    return callBack(string);

}
return "Not a String!!";
}

const potDashesBetweenWords =(sentence)=>{
    return sentence.split(" ").join("-");
}
const potDotsBetweenWords =(sentence)=>{
    return sentence.split(" ").join(".");
}


firstWordUpperCase("asad hmeed" ,potDashesBetweenWords);
firstWordUpperCase('he i am a programmer',potDotsBetweenWords)


const calcTowNum = (a,b , callBack)=>{
    if (typeof a === "number" && typeof b ==="number"){
        return callBack(a,b);
    }
    return NaN;
}

