const getPayDates = (startDate: Date) =>{

    let month = startDate.getMonth()
    const year = startDate.getFullYear() 

    for(let i = 0 ; i < 12 ; i++){

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const midMonth = new Date(year, month, 15);
        const midMonthDay = midMonth.getDay();

        // 0 is Sunday, 6 is Saturday
        if(midMonthDay === 0 || midMonthDay === 6){
            const plusDays = midMonthDay?4:3
            const bonusDay = new Date(year, month, 15 + plusDays) 
            console.log("Bonus Pay Day," ,bonusDay.toLocaleDateString("en-GB",options))
        } 
        else{
            console.log("Bonus Pay Day,",midMonth.toLocaleDateString("en-GB",options))
        }

        
        const monthEnd = new Date(year, month + 1, 0);
        const monthEndDay = monthEnd.getDay();

        // 0 is Sunday, 6 is Saturday
        if(monthEndDay === 0 || monthEndDay === 6){
            const minusDays = monthEndDay?1:2
            const BasePayDay = new Date(year, month +1, 0 - minusDays) 
            console.log("Base Pay Day," ,BasePayDay.toLocaleDateString("en-GB",options))
        } 
        else{
            console.log("Base Pay Day,",monthEnd.toLocaleDateString("en-GB",options))
        }

        month++
    }
} 

export default getPayDates