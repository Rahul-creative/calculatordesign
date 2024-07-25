let cal = (f) => {
        inp.value += f;
    }
    let equ = () => {
        let input_value = inp.value;
        let calu_value = eval(input_value);
        inp.value = calu_value;
    }
    let clr = () => {
        inp.value = "";
    }
       
let del = () =>{
    inp.value = inp.value.slice(0, -1);
  }


