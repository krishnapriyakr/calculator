//diapalay number in text box
function diaplayNumber(num)
{
    result.value += num
}
//clear text box
function clearbox()
{
    result.value=""
}
//evaluvate expression
function evaluvateExp() //method1
{
    // exp = result.value
    // output = eval(exp)
    // result.value = output
    
    //method2
    result.value=eval(result.value)
}

//remove the last item 
function removelastitem()
{
    result.value=result.value.slice(0,-1)
}