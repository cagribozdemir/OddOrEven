function oddishOrEvenish(number) 
{
    var total=0;
    var result;
    if(number < 10)
    {
        total = number
    }
    else if(number < 100 && number > 9)
    {
        var a = number%10
        var b = ((number%100)-a)/10
        total = a + b
    }
    else if(number < 1000 && number > 99)
    {
        var a = number%10
        var b = ((number%100)-a)/10
        var c = ((number%1000)-(number%100))/100
        total = a + b + c
    }
    else if(number < 10000 && number > 999)
    {
        var a = number%10
        var b = ((number%100)-a)/10
        var c = ((number%1000)-(number%100))/100
        var d = ((number%10000)-(number%1000))/1000
        total = a + b + c + d
    }
    else if(number < 100000 && number > 9999)
    {
        var a = number%10
        var b = ((number%100)-a)/10
        var c = ((number%1000)-(number%100))/100
        var d = ((number%10000)-(number%1000))/1000
        var e = ((number%100000)-(number%10000))/10000
        total = a + b + c + d + e
    }
    

    if (total === 0) 
    {
        result = "Please enter a value between 0 and 100000."
    }
    else if (total % 2 === 1)
    {
        result = "Odd"
    } 
    else if (total % 2 === 0)
    {
        result = "Even"
    }
    console.log(result)
}

oddishOrEvenish(43)   // Odd
oddishOrEvenish(373)  // Odd
oddishOrEvenish(4433) // Even