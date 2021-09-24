const centuryFromYear = (year) => {
    return (year % 100 !== 0) ? Number.parseInt(1 + (year / 100)) : year / 100;
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));