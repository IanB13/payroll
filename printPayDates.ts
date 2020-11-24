import payDate from './payDate'

const getPayDates = (startDate: Date) =>{
    /*   decided against storing this in external config as it would make the
    function impure */
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' }

    let month = startDate.getMonth()
    const year = startDate.getFullYear() 

    console.log("Pay Type , Pay Date")
    for(let i = 0 ; i < 12 ; i++){
        const bonuseDate = payDate(year, month+ i , "bonus");
        console.log(`Bonus Pay Date, "${bonuseDate.toLocaleDateString("en-GB",dateOptions)}"`)
        const baseDate= payDate(year, month+ i , "base");
        console.log(`Base Pay Date, "${baseDate.toLocaleDateString("en-GB",dateOptions)}"`)
    }
} 

export default getPayDates