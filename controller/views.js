exports.index  = (req,res)=>{
    res.render('index',{
        title:'Admin: Pfxnet',
        description:'',
        index:true,


    })
}

exports.home  = (req,res)=>{
    res.render('home',{
        title:'Admin: Pfxnet',
        description:'',
        home:true,


    })
}


exports.admin = (req,res)=>{
    res.render('admin',{
        title:'Admin: Pfxnet',
        description:'',
        admin:true,


    })
}

exports.tree = (req,res)=>{
    res.render('tree',{
        title:'Tree: Pfxnet',
        description:'',
        tree:true,


    })
}

exports.settings = (req,res)=>{
    res.render('settings',{
        title:'Admin: Pfxnet',
        description:'',
        index:true,


    })
}

exports.register = (req,res)=>{
    res.render('register',{
        title:'Register: Pfxnet',
        description:'',
        register:true,


    })
}


exports.cart = (req,res)=>{
    res.render('cart',{
        title:'Cart: Pfxnet',
        description:'',
        cart:true,


    })
}


exports.profile = (req,res)=>{
    res.render('profile',{
        title:'Profile: Pfxnet',
        description:'',
        profile:true,


    })
}

exports.wallets = (req,res)=>{
    res.render('wallets',{
        title:'Wallets: Pfxnet',
        description:'',
        wallets:true,


    })
}

exports.members = (req,res)=>{
    res.render('members',{
        title:'Member: Pfxnet',
        description:'',
        member:true,


    })
}

exports.system = (req,res)=>{
    res.render('system',{
        title:'System: Pfxnet',
        description:'',
        system:true,


    })
}


exports.report = (req,res)=>{
    res.render('report',{
        title:'Report: Pfxnet',
        description:'',
        report:true,


    })
}

exports.mail = (req,res)=>{
    res.render('mail',{
        title:'Mail: Pfxnet',
        description:'',
        mail:true,


    })
}

exports.general = (req,res)=>{
    res.render('general',{
        title:'General: Pfxnet',
        description:'',
        general:true,


    })
}

exports.activateMember = (req,res)=>{
    res.render('activateMember',{
        title:'Activate Member: Pfxnet',
        description:'',
        activateMember:true,


    })
}

exports.cashoutRequest = (req,res)=>{
    res.render('cashoutRequest',{
        title:'Cashout Request: Pfxnet',
        description:'',
        cashoutRequest:true,


    })
}


exports.walletInfo = (req,res)=>{
    res.render('walletInfo',{
        title:'Wallet Info: Pfxnet',
        description:'',
        walletInfo:true,


    })
}

exports.fundManagement=(req,res)=>{
    res.render('fundManagement',{
        title:'Fund Management: Pfxnet',
        description:'',
        fundManagement:true,


    })
}
exports.websiteSettings =(req,res)=>{
    res.render('websiteSettings',{
        title:'Website Settings: Pfxnet',
        description:'',
        websiteSettings:true,


    })
}

exports.planSettings =(req,res)=>{
    res.render('planSettings',{
        title:'Plan Settings: Pfxnet',
        description:'',
        planSettings:true,


    })
}

exports.userAccount =(req,res)=>{
    res.render('userAccount',{
        title:'User Account: Pfxnet',
        description:'',
        userAccount:true,


    })
}

exports.mailContent =(req,res)=>{
    res.render('mailContent',{
        title:'Mail Content: Pfxnet',
        description:'',
        mailContent:true,


    })
}

exports.termsAndPrivacy =(req,res)=>{
    res.render('termsAndPrivacy',{
        title:'Terms And Privacy: Pfxnet',
        description:'',
        termsAndPrivacy:true,
    })
}

exports.defaultImages =(req,res)=>{
    res.render('defaultImages',{
        title:'Default Images: Pfxnet',
        description:'',
        defaultImages:true,
    })
}

exports.incomeReports =(req,res)=>{
    res.render('incomeReports',{
        title:'Income Reports: Pfxnet',
        description:'',
        incomeReports:true,
    })
}
exports.userEarnings =(req,res)=>{
    res.render('userEarnings',{
        title:'User Earnings: Pfxnet',
        description:'',
        userEarnings:true,
    })
}
//messageList,viewMessage,composeMessage
exports.messageList =(req,res)=>{res.render('messageList',{title:'Message List: Pfxnet',description:'',messageList:true, })}
exports.viewMessage =(req,res)=>{res.render('viewMessage',{title:'viewMessage: Pfxnet',description:'',viewMessage:true, })}

exports.composeMessage =(req,res)=>{res.render('composeMessage',{title:'composeMessage: Pfxnet',description:'',composeMessage:true, })}

exports.notifications =(req,res)=>{res.render('notifications',{title:'Notifications: Pfxnet',description:'',notifications:true, })}

exports.announcements =(req,res)=>{res.render('announcements',{title:'Announcements: Pfxnet',description:'',announcements:true, })}

exports.manageDocument =(req,res)=>{res.render('manageDocument',{title:'Manage Documents: Pfxnet',description:'',manageDocument:true, })}

exports.cart =(req,res)=>{res.render('cart',{title:'Cart: Pfxnet',description:'',cart:true, })}


