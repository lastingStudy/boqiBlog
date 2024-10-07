import Vue from "vue"
import VueRouter from "vue-router";
import Blog from "@/views/blog"
import Navigation from "@/views/navigation"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path:'/',
            component:Navigation,
            redirect: '/blog',
            children:[
                {
                  //子组件blog
                  path:'/blog',
                  component:Blog,
                  children:[
                    {
                      path:'/login',
                      components:{
                        text:()=>import("@/views/text"),
                        login:()=>import("@/views/login")
                      }
                    },
                    {
                      path:'/text',
                      components:{
                        text:()=>import("@/views/text"),

                      }
                    },
                    {
                      path:'/love',
                      components:{
                        text:()=>import("@/views/love"),
                      }
                    },
                  ]
                },
                //子组件 与blog为兄弟组件
                {
                  path:'/personalCenter',
                  component:() => import("@/views/PersonalCenter")
              },
                {
                    path:'/enroll',
                    component:() => import("@/views/enroll")
                },
                {
                  path:'/studen',
                  component:() => import("@/views/studen")
              },
              {
                path:'/shopping',
                component:() => import("@/views/shopping")
            },
            {
              path:'/tittle',
              component:() => import("@/views/tittle")
          },
          {
            path:'/fabu',
            component:() => import("@/views/fabu")
        },
            ],
        },
        {
            path:'/navigation',
            component:Navigation,
            children:[
                {
                  path:'/blog',
                  component:Blog,
                }
            ]
        },
        {
          path:'/textDetail',
          component:() => import("@/views/TextDetail"),
        },

    ]
})

export default router