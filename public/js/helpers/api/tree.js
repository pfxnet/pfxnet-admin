
const searchDownlinerInput = document.querySelector("#searchDownlinerInput");
const downlinerBlock = document.querySelector("#downlinerBlock");

const treeDownliner = (e) => {
    e.preventDefault();
    const downlinerInfo = e.currentTarget.value;
    console.log(downlinerInfo)

    http.get(`api/searchUserProfile?search=${downlinerInfo}`)
    .then((data) => {
        if(data != "Empty Search..") {
            //Show the User
            console.log(data)
            downlinerBlock.innerHTML = `
                <td style="text-align: center; margin-top: 15px;">
                    <img src="img/notification/fenibo.jpg" class="img-fluid img-rounded" alt="" />
                    <p style="color: white; text-align: center;">
                        ${data.firstname} ${data.lastname}<br>
                        ${data.mail}<br>
                        ${data.phone}
                    </p>
                </td>
            `;
        }else {
            downlinerBlock.innerHTML = `
            <td style="text-align: center; margin-top: 15px;">
                Search field cannot be empty
            </td>
        `;
        }
    }).catch((err) => {
       alertify.set('notifier', 'position', 'top-center');
       return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })
}

if(searchDownlinerInput) {
    searchDownlinerInput.addEventListener('keyup', (e) => treeDownliner(e))
}

