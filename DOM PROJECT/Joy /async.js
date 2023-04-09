console.log("Hello world");

const order = async (() =>{
    try
    {
    

    }catch(error)
    {
        console.log("AbC doesnt exist ,", error);
    }finally
    {
        console.log("Its runs anyways");
    }
});


order.then(() =>{
    console.log("We are more solid than we ever been");
});