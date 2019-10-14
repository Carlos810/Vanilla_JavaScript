
/* 
solucion 1
for(var i = 1; i <= 100; i++ )
{
    let divisible = false;

    if(i % 3 == 0)
    {
        document.write('Fizz');
        divisible = true;
    }

    if(i % 5 == 0)
    {
        document.write('Buzz');
        divisible = true;
    }

    if (!divisible) 
    {
        document.write(i);
    }

    document.write("<br/>");          
} */



// solucion 2
for(var i = 1; i <= 100; i++ )
{
    if((i % 3 == 0) && (i % 5 == 0))
    {
        document.write('FizzBuzz')
    }
    
    else if(i % 3 == 0)
    {
        document.write('Fizz')
    }

    else if(i % 5 == 0)
    {
        document.write('Buzz')
    }

    else
    {
        document.write(i)
    }
    
    document.write('<br>')
    
}