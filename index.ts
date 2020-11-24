import getPayDates from "./getPayDates";

console.log("hello ts")
console.log(process.argv);

if(process.argv.length === 2){
    getPayDates(new Date(Date.now()))
}
else{
    const currentDate = process.argv[2]
    if(Date.parse(currentDate)){
        getPayDates(new Date(currentDate))
    }
    else{
        console.error("invalid date provided")
    }

}