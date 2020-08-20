import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Dl from '@/components/dl'
import Gj from '@/components/guoji'
import Grzx from '@/components/grzx'
// import {userlogin} from '@/service/login.js'
import {userLogin} from "@/service/login.js"


Vue.use(Router)
  var router = new Router({


// export default new Router({
  routes: [
    //hello
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //首页
    {
      path: '/index',
      component: Index,children:
      [
        {path:"guoji",component: Gj}
      ]
    },
    //登录
    {
      path: '/dl',
      component: Dl
    },
  //个人中心
    {
      path:'/grzx',
      component:Grzx
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.path=="/grzx"){
   if(userLogin){
     next();
   }else{
      next({ path: "/dl"})
   }
  }else{
    next()
  }
 
 })
 export default router;

  // router.beforeEach((to, from, next) => {
  //   if (to.path=="/user") {
  //     next()
  //   }
    
  // })
