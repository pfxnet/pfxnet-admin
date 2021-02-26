
    //Get the Direct Refereal Link 
    const domInput = document.querySelector("#messageDom");
    const pagination = document.querySelector("#pagination");
    const next = document.getElementById("next-page");
    const prev = document.getElementById("prev-page");
    const tabItem = Array.from(document.querySelectorAll(".page-item"))

    const searchInbox  = document.querySelector("searchInbox");

    let nextPayLoad = 0;
    let tab1 = 0;
    let tab2 = 0;
    let tab3 = 0;


    //Trigger disbusrt btn from the cashOut api

const deleteApi = (e) => {

    if (!confirm("Are you sure to delete message, if yes click OK to continue or else cancle!")) {
        return false;
    } 

    const id = e.currentTarget.dataset.idRef;
    console.log(id)

    http.delete(`admin/api/deleteMessage/${id}`)
    .then(response => {
        console.log(response)
        if (response.error) {
            alertify.set('notifier', 'position', 'top-center');
            return alertify.notify(`<span style="color: white; font-weight: bold;">${response.error}</span>`, 'error', 10)
        } else {   
            alertify.set('notifier', 'position', 'top-center');
            alertify.notify(`<span style="color: white; font-weight: bold;">Message deleted successufully successfully!</span>`, 'success', 10)     
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    })
    .catch(err => {
        console.log(err)
        alertify.set('notifier', 'position', 'top-center');
        return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })

}


    const getMessageApi = (url) => {
        console.log(url)
        //Call The Api
        http.get(url)//perPage=20&jump=20
            .then(response => {
                console.log(response)
                               
                next.innerHTML = `<i class="fa fa-arrow-right"></i>`;
                prev.innerHTML = `<i class="fa fa-arrow-left"></i>`;
                
                if(response.data.allAdminMessages.docs.pagingCounter != 1 && response.data.allAdminMessages.docs.pagingCounter >= response.data.allAdminMessages.docs.totalDocs) {
                    nextPayLoad = nextPayLoad - 20;
                    console.log('close work')
                    return false
                }
                
                if (response.data.allAdminMessages.docs.length == 0)  {
                    domInput.innerHTML = `
                    <tr> 
                        <td style="text-align: center; position: absolute; left: 40%;"> No Inbox Message Found</td>
                    </tr>`
                    return false;
                } 

                if(response.data.allAdminMessages.docs.length > 0){
                    domInput.innerHTML = "";
                    response.data.allAdminMessages.docs.map((x, i) => {
                        const { _id, createdAt, title, content, sender  } = x;
                        //Insert in to the Dom
                        domInput.innerHTML += `
                       
                            <tr>
                                <td class="unread">
                                    <div class="checkbox">
                                        <input type="checkbox">
                                        <label></label>
                                    </div>
                                </td>
                                <td><a href="#">${sender}</a></td>
                                <td><a href="#">${title}</a></td>
                                <td>${content}</td>
                                <td style="width: 250px">${new Date(createdAt).toDateString()}</td>
                                <td> <a href="/viewMessage?message_id=${_id}">View Message</a></td>
                                <td><button class="btn btn-default delete btn-sm" data-id-ref="${_id}">
                                <i class="fa fa-trash-o"></i></button></td>
                            </tr>`;
                    });

                     const deleteAll = Array.from(document.querySelectorAll('.delete'))

                    deleteAll.map(x => {
                        x.addEventListener('click', (e) => deleteApi(e))
                    })

                    pagination.style.display = 'block';
                    return true
                }
         
             
            }).catch(err => {
                console.log(err.message)
                alertify.set('notifier', 'position', 'top-center');
                return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
            })
    }

    getMessageApi("admin/api/getMessages");//Load first

    next.addEventListener('click', (e) => {
        console.log("next accepted")
        nextPayLoad = nextPayLoad + 20;
        next.innerHTML = `<img style="width: 15px;" src="img/logo/preloader.gif"  alt="" />`;
        //Call the API Function
        getMessageApi(`admin/api/getMessages?perPage=20&jump=${nextPayLoad}`)
    })

    prev.addEventListener('click', (e) => {
        console.log(nextPayLoad)
        if(nextPayLoad > 0) {
            nextPayLoad = nextPayLoad - 20;
            prev.innerHTML = `<img style="width: 15px;" src="img/logo/preloader.gif"  alt="" />`;
            getMessageApi(`admin/api/getMessages?perPage=20&jump=${nextPayLoad}`)
        }
    })

    document.querySelector('#searchInbox').addEventListener('keyup', (e) => {

        getMessageApi(`admin/api/getMessages?search=${e.target.value}`);

    });






