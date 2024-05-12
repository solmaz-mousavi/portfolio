class FormValidation{
    constructor(form){
        this.__form = form;
        this.submitHandler();
    }

    submitHandler(){
        this.__form.addEventListener('submit', (event)=>{
            event.preventDefault();
            errorElem.innerHTML='';
            this.validationHandler();
        })
    }

    validationHandler(){
        // console.log(inputElems);
        inputElems.forEach((input)=>{
            console.log(input);
            let datasetValidation = input.dataset.validation.split(" ");
            let datasetLabel = input.dataset.label;

            for (let i = 0; i < datasetValidation.length; i++) {
                const validationMethod = datasetValidation[i];
                let message = this[validationMethod](input, datasetLabel);
                if (message) {
                    errorElem.innerHTML += message + '</br>';
                }
            };
        });
        if(errorElem.innerHTML === ''){
            modalHandler();
        }
    }

    isRequired(element, label){
        if(element.value ===""){
            return "فیلد " + label + " نباید خالی باشد. "
        }
        return "";
    }

    isPhone(element, label){
        const regexCode = /09[0139]\d{8}/;
        if(!regexCode.test(element.value)){
            return "فرمت  " + label + " صحیح نمی باشد.";
        };
        return ""
    }
    isEmail(element, label){
        const regexCode = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1.3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regexCode.test(element.value)){
            return "فرمت  " + label + " صحیح نمی باشد";
        };
        return ""
    }
}

new FormValidation(formElem)