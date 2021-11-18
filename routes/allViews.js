const express = require('express')
const router = express.Router()
const {index,settings,admin,tree,register,activateMember,cashoutRequest,home,walletInfo,fundManagement,websiteSettings,planSettings,userAccount,mailContent,termsAndPrivacy,defaultImages,incomeReports,userEarnings,messageList,viewMessage,composeMessage,notifications,announcements,manageDocument,cart} = require('../controller/views')


router.get('/',index)
router.get('/home',home)
router.get('/settings',settings)
router.get('/admin',admin)
router.get('/tree',tree)
router.get('/register',register)
router.get('/activateMember',activateMember)
router.get('/cashoutRequest',cashoutRequest)
router.get('/walletInfo',walletInfo)
router.get('/fundManagement',fundManagement)
router.get('/websiteSettings',websiteSettings)
router.get('/planSettings',planSettings)
router.get('/userAccount',userAccount)
router.get('/mailContent',mailContent)
router.get('/termsAndPrivacy',termsAndPrivacy)
router.get('/defaultImages',defaultImages)
router.get('/incomeReports',incomeReports)
router.get('/userEarnings',userEarnings)
router.get('/messageList',messageList)
router.get('/viewMessage',viewMessage)
router.get('/composeMessage',composeMessage)
router.get('/notifications',notifications)
router.get('/announcements',announcements)
router.get('/manageDocument',manageDocument)
router.get('/cart',cart)

module.exports = router

  