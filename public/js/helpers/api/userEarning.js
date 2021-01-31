
    //Get the Direct Refereal Link 
    const domInput = document.querySelector("#userEarningDom");
    const usernameBtn = document.querySelector("#usernameBtn");
    const username = document.querySelector("#username");
    console.log(username.value)


    const getCashOutRequestApi = (e) => {
        e.preventDefault();
        //Call The Api
        http.get(`api/userEarnings/${username.value}`)//perPage=20&jump=20
            .then(response => {
                console.log(response)

                if (!response)  {
                    domInput.innerHTML = `
                    <tr> 
                        <td style="text-align: center; position: absolute; left: 40%;"> No Cashout Request Found</td>
                    </tr>`
                } 

                const { totalEarned, totalInvested, userId, userName, userPhone } = response;
                domInput.innerHTML = '';
                    //Insert in to the Dom
                domInput.innerHTML += `
                    <tr>
                        <td>${userId}</td>
                        <td>${userName}</td>
                        <td>${userPhone}</td>
                        <td>${totalEarned}</td>
                        <td>${totalInvested}</td>
                    </tr>`

            }).catch(err => {
                console.log(err.message)
                alertify.set('notifier', 'position', 'top-center');
                return alertify.notify('An error occurred, please check internet connection, refresh and try again', 'error', 10)
            })
    }

    usernameBtn.addEventListener('click', (e) => getCashOutRequestApi(e));




