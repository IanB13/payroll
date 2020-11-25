import payDate from './payDate';

const getPayDates = (startDate: Date):void =>{
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' };

    const month = startDate.getMonth();
    const year = startDate.getFullYear(); 

    console.log("Pay Type , Pay Date");
    for(let i = 0 ; i < 12 ; i++){
        const bonusDate = payDate(year, month+ i , "bonus");
        console.log(`Bonus Pay Date, "${bonusDate.toLocaleDateString("en-GB",dateOptions)}"`);
        const baseDate= payDate(year, month+ i , "base");
        console.log(`Base Pay Date, "${baseDate.toLocaleDateString("en-GB",dateOptions)}"`);
    }
}; 

export default getPayDates;