

const url = new URLSearchParams(window.location.search);
const messageId = url.get("message_id")


const viewMessageApi = ()  => {

    console.log(messageId)

    if(!messageId) {
        localStorage.replace('/composeMessage')
    }

    http.get(`admin/api/viewMessage/${messageId}`)//perPage=20&jump=20
    .then(response => {
        console.log(response)
        if(response.status) {

            //Insert in to the Dom
            document.querySelector('#subject').innerHTML = response.data.title;
            document.querySelector('#sender').innerHTML   = response.data.sender;
            document.querySelector('#date').innerHTML   = response.data.createdAt;
            document.querySelector('#content').innerHTML = response.data.content;
        }


    }).catch(err => {
        console.log(err.message)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
    })

}


viewMessageApi()