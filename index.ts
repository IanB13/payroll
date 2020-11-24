import printPayDates from "./utils/printPayDates";

if(process.argv.length === 2){
    printPayDates(new Date(Date.now()));
}
else if(process.argv.length === 3){
    const currentDate = process.argv[2];
    if(Date.parse(currentDate)){
        printPayDates(new Date(currentDate));
    }
    else{
        console.error("invalid date provided");
    }
}
else{
    console.error("too many arguments provided");
}