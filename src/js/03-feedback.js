import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const formData = form.elements;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

loadTextarea();

const getFormData = () => {
    let data = {};
    for(const element of formData) {
        if (element.name){ 
            data[element.name] = element.value;
        }
    }
    return data;
}

function onTextareaInput(){
    let data = getFormData();
    localStorage.setItem('STORAGE_KEY', JSON.stringify(data));
};

function onFormSubmit(event){
    event.preventDefault();
    let data = getFormData();
    console.log(data);
    event.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY');
};

function loadTextarea(){
    try {
        let loadData = JSON.parse(localStorage.getItem('STORAGE_KEY'));

        for(let element of formData){
            if(element.name in loadData){
                element.value = loadData[element.name];
            }
        }
         
    } catch (error) {
        const message = "Enter data";
        console.log(message);
    }
    
};

