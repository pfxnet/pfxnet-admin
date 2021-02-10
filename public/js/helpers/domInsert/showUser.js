

const displayUserData = (data) => {
    console.log(data)
    console.log(settingReferralLink.value, data, data.link)

    settingNameShow.textContent = data != 'Empty Search..' ? `${data.firstname} ${data.lastname}` : '----';
    settingEmailShow.textContent =  data != 'Empty Search..' ? data.mail : '----';
    settingPhoneShow.textContent = data != 'Empty Search..' ? data.phone : '----';
    settingJoined.textContent = data != 'Empty Search..' ? data.createdAt : '----';
    settingReferralLink.value   = data != 'Empty Search..' ? data.link : '';
    settingReferralPackage.textContent = data != 'Empty Search..' ? data.packageActivated : '';
}

const inputForUpdate = (data) => {
    settingFirstnameEdit.value = data.firstname ? data.firstname : '';
    settingLastnameEdit.value = data.lastname ? data.lastname : '';
    settingPhoneEdit.value = data.phone ? data.phone : '';
    settingDOBEdit.value = data.dob ? data.dob : '';
    settingGenderEdit.value = data.gender ? data.gender : '';
    settingAddressEdit.value = data.address ? data.address : '';
    settingCountryEdit.value = data.country ? data.country : '';
    settingStateEdit.value = data.state ? data.state : '';
    settingCityEdit.value = data.city ? data.city : '';
    settingUserIDEdit.value = data.userId ? data.userId : '';
    settingBankEdit.value = data.bankName ? data.bankName : '';
    settingAccountNumberEdit.value = data.accountNumber ? data.accountNumber : '';
}