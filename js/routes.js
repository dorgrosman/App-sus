import homePage from './pages/home-page.js'
// import aboutUs from './pages/about-us.js'
import { mailApp } from './apps/Mail/pages/mail-app.js'
import { composeMail } from './apps/Mail/cmps/compose-mail.cmps.js'
import mailDeatail from './apps/Mail/pages/mail-detail.js'
import keepApp from './apps/Keep/pages/keep-app.js'
import navMail from './apps/Mail/cmps/mail-nav.cmps.js'
import {mailMark} from './apps/Mail/cmps/mail-mark.cmps.js'
import bookApp from './apps/Books/pages/book-app.js'
import bookDetails from './apps/Books/cmps/book-details.js'





const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutUs
    // },
    
   
    {
        path: '/mail',
        component: mailApp,
        children: [

            {
                path: '',
                // component: navMail
            },
          
            {
                path: 'newmail',
                component: composeMail
            },

        ]
    },
    {
        path: '/mail/:mail',
        component: mailDeatail
    },
   
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/book',
        component: bookApp,
        children: [
            {
                path: '/book/:bookId',
                component: bookDetails
            },
            // {
            //     path: '/book/add',
            //     component: bookAdd
            // },
        ] 
    },


]

export const myRouter = new VueRouter({ routes: myRoutes })
