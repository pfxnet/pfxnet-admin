
let newRegistrations = document.querySelector("#newRegistrations")

const insertNwReg = (payload) => {

        if (payload.length > 0) {
            newRegistrations.innerHTML = "";
            payload.map((user, i) => {
                const { createdAt, firstname, referrer, phone, lastname, mail, username } = user;

                //Insert in to the Dom
                newRegistrations.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${username}</td>
                    <td>${firstname} ${lastname}</td>
                    <td>${mail}</td>
                    <td>${phone}</td>
                    <td>${referrer}</td>
                    <td style="width: 250px">${new Date(createdAt)}</td>
                </tr>`
            })
            // pagination.style.display = 'block';
            return true
        }

        if (response.teamDownline.docs.length == 0)  {
            newRegistrations.innerHTML = `
            <tr> 
                <td style="text-align: center; position: absolute; left: 40%;">No Direct Downline Found</td>
            </tr>`
        }
}