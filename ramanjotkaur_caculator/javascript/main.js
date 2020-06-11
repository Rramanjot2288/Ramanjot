var x = 0;

function percentage(y) {
    x = y.value;
    y.value = y.value + "%";
}

function sqrt(form)
{
    form.inputchar.value = Math.sqrt(form.inputchar.value);
}

function log(form) 
{
    form.inputchar.value = Math.log(form.inputchar.value);
}

function square(form) {
    form.inputchar.value = eval(form.inputchar.value) * eval(form.inputchar.value);
}

function exp(form) {
    form.inputchar.value = Math.exp(form.inputchar.value);
}

function deleteVal(a) {
    a.value = a.value.substring(0, a.value.length - 1);
}

function sin(form) 
{
    form.inputchar.value = Math.sin(form.inputchar.value);
}

function cos(form) 
{
    form.inputchar.value = Math.cos(form.inputchar.value);
}


function tan(form) 
{
    form.inputchar.value = Math.tan(form.inputchar.value);
}

function sign(input) {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}

function inputvalue(input, character) {
    if (input.value == "0")
        input.value = character
    else
        input.value += character
}


function final(form) {
    form.inputchar.value = eval(form.inputchar.value);
}

