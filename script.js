let string = "";
let input=document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);


arr.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        if (e.target.innerHTML == 'x'){
            e.target.innerHTML='*';
            string += e.target.innerHTML;
            input.value=string;

        }
        else if (e.target.innerHTML == 'x<sup>2</sup>') {
         
            input.value =Math.pow(string,2);
        }
        else if (e.target.innerHTML == 'clear') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == '√') {
         
            input.value =Math.sqrt(string);
        }
        
        else if (e.target.innerHTML == '=') {
           try{
            input.value = eval(string);
        } catch {
            input.value = "Error";

        }
        }

        else if (e.target.innerHTML == 'del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
