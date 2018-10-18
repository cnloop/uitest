import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

import ContentManager from '@/components/ContentManager/ContentManager'
import Article from '@/components/ContentManager/Article'
import Comment from '@/components/ContentManager/Comment'

import UserManager from '@/components/UserManager/UserManager'
import NewUser from '@/components/UserManager/NewUser'
import ActiveUser from '@/components/UserManager/ActiveUser'

import MyTools from '@/components/MyTools/MyTools'

import Machine from '@/components/Machine'

import Ceshi from '@/components/Ceshi'
import Show from '@/components/Show'






Vue.use(Router)


const homePage = {
  path: "/",
  component: HomePage
}

const contentRouter = {
  path: '/content-manager',
  component: ContentManager,
  children: [{
    path: '/',
    component: Article,
    redirect: 'article'
  }, {
    path: 'article',
    component: Article
  }, {
    path: 'comment',
    component: Comment
  }]
}

const userRouter = {
  path: '/user-manager',
  component: UserManager,
  children: [{
    path: '/',
    component: NewUser
  }, {
    path: 'new-user',
    component: NewUser
  }, {
    path: 'active-user',
    component: ActiveUser
  }]
}

const test = {
  path: '/my-tools',
  component: MyTools
}

const machine = {
  path: "/machine",
  component: Machine
}


const ceshi = {
  path: "/ceshi",
  component: Ceshi
}

const show = {
  path: "/show",
  component: Show
}

export default new Router({
  linkActiveClass: "active",
  routes: [homePage, contentRouter, userRouter, test, machine, ceshi, show]
})
