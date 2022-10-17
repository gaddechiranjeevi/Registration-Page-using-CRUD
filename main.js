function saveToLocalStorage(event){
    const name=event.target.Name.value
    const email= event.target.email.value
    const phonenumber= event.target.phone.value
    let myobj={
        name,email,phonenumber
    } 

   //POST User data
    event.preventDefault() 
    axios.post('https://crudcrud.com/api/6a0e1fb8cdd74094999411a9c9192621/UserData',myobj)
        .then((response) => {
            showUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        });
   
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/6a0e1fb8cdd74094999411a9c9192621/UserData')
        .then((response)=>{
            for (var i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i])
            }
        })
        .catch((err)=> {
            console.log(err)
        })
    
    
}) 