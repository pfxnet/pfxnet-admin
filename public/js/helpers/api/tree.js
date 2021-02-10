
const searchDownlinerInput = document.querySelector("#searchDownlinerInput");
const downlinerBlock = document.querySelector("#downlinerBlock");

const treeDownliner = (e) => {
    e.preventDefault();
    const downlinerInfo = e.currentTarget.value;    
    const data = {
        theUserId: downlinerInfo
    }
    http.post(`admin/api/findGeneology`, data)
    .then((data) => {

        if(!data.theUserObj) {
            return downlinerBlock.innerHTML = `
                <td style="text-align: center; margin-top: 15px;">
                    Search field cannot be empty
                </td>
            `;
        }
            //Show the User
            console.log(data)
            document.querySelector("#downliner").innerHTML = `
                <img src="${data.theUserObj.avatar ? data.theUserObj.avatar : 'https://www.csklegal.com/wp-content/uploads/2014/07/no-image.png'}" class="img-fluid img-rounded m" alt="" /><br>
                <p style="color: white;">${data.theUserObj.firstname} ${data.theUserObj.lastname}</p>
                <p style="color: white;">${data.theUserObj.mail}</p>
                <p style="color: white;">${data.theUserObj.phone}</p>`;

            downlinerBlock.innerHTML = "";
            data.myDirect.docs.map(x => {
                downlinerBlock.innerHTML += `
                <td style="text-align: center; margin-top: 15px;">
                    <img src="${x.avatar ? x.avatar : 'https://www.csklegal.com/wp-content/uploads/2014/07/no-image.png'}" class="img-fluid img-rounded" alt="" />
                    <p style="color: white;">
                        ${x.firstname} ${x.lastname}<br>
                        ${x.mail}<br>
                        ${x.phone}
                    </p>
                </td>`;
            }) 
    }).catch((err) => {
        console.log(err)
       alertify.set('notifier', 'position', 'top-center');
       return alertify.notify('<span style="color: white; font-weight: bold;">An error occurred, please check internet connection, refresh and try again</span>', 'error', 10)
    })
}

if(searchDownlinerInput) {
    searchDownlinerInput.addEventListener('keyup', (e) => treeDownliner(e))
}

