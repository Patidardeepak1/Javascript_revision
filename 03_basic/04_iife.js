//Immediately invoked Function expressiom

//global scope  ke pollution ko hatane k liye
//named ec
(function chai(){
    console.log(`DB CONNECTED`);
})();


//unnmaed ec
((name)=>{
    console.log(`DB connected ${name}`);
})('deepak')

