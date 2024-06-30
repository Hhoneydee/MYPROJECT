let numbers = [2, 9, -6, 30, -3, 8, -4]
const noNegativenum = (negative) => {
    for (let i=0; i<negative.length; i++)
    {
        if (negative [i]<0)
        negative.splice (i, 1)

    }
    return negative
}
console.log(noNegativenum(numbers))