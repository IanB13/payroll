const payDate = (year: number, month: number, payType: "base" | "bonus"):Date => {
    let payDate = null;

    /*   bonuses are paid on the 15 if not a weekend, if it is a weekend then
        bonus is paid on the following Wednesday.  */
    if (payType === "bonus") {
        const midMonth = new Date(year, month, 15);
        const midMonthDay = midMonth.getDay();
        if(midMonthDay === 0 || midMonthDay === 6){
            const plusDays = midMonthDay?4:3;
            payDate = new Date(year, month, 15 + plusDays); 
        } 
        else{
            payDate = midMonth;
        }
    }
    /*   base salary is paid at the last day of the month if not a weekend. if it 
    is a weekend then base salary is paid on the Friday before the weekend.  */
    else if (payType === "base") {
        const monthEnd = new Date(year, month + 1, 0);
        const monthEndDay = monthEnd.getDay();

        // 0 is Sunday, 6 is Saturday
        if(monthEndDay === 0 || monthEndDay === 6){
            const minusDays = monthEndDay?1:2;
            payDate = new Date(year, month +1, 0 - minusDays); 
        } 
        else{
            payDate = monthEnd;
        }

    }

    //this should never run
    if(payDate === null) throw new Error("No date created, likely a problem with pay type");

    return payDate;
};

export default payDate;