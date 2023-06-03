import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/static/Home.vue'
import Auth from '@/views/Auth.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import ForgotPassword from '@/components/ForgotPassword.vue'
import About from '@/components/static/About.vue'
import Landing from '@/views/Landing.vue'
import Dashboard from '@/views/Dashboard.vue'
import Settings from '@/components/Settings.vue'
import DashboardHome from '@/components/DashboardHome.vue'
import Profile from '@/components/Profile.vue'
import Leaderboard from '@/components/Leaderboard.vue'
import Achievements from '@/components/Achievements.vue'
import Editing from '@/views/Editing.vue'
import EditWord from '@/components/EditWord.vue'
import EditName from '@/components/EditName.vue'
import EditTranslation from '@/components/EditTranslation.vue'
import VerifyWord from '@/components/VerifyWord.vue'
import VerifyName from '@/components/VerifyName.vue'
import VerifySound from '@/components/VerifySound.vue'
import VerifyTranslation from '@/components/VerifyTranslation.vue'
import Verifying from '@/views/Verifying.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Landing,
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: Home
                },
                {
                    path: '/about',
                    name: 'About',
                    component: About
                }
            ]
        },
        {
            path: '/auth',
            component: Auth,
            children: [
                {
                    // Default route
                    path: '',
                    redirect: 'login'
                },
                {
                    // UserProfile will be rendered inside User's <router-view>
                    // when /user/:id/profile is matched
                    path: 'login',
                    name: 'login',
                    component: Login
                },
                {
                    // UserPosts will be rendered inside User's <router-view>
                    // when /user/:id/posts is matched
                    path: 'register',
                    component: Register
                },
                {
                    // UserPosts will be rendered inside User's <router-view>
                    // when /user/:id/posts is matched
                    path: 'reset',
                    component: ForgotPassword
                }
            ]
        },
        {
            path: '/u',
            component: Dashboard,
            children: [
                {
                    // Default route
                    path: '',
                    redirect:  { name: 'dashboard'}
                },
                {
                    path: 'd',
                    name: 'dashboard',
                    component: DashboardHome
                },
                {
                    path: 'settings',
                    component: Settings
                },
                {
                    path: 'profile',
                    component: Profile
                },
                {
                    path: 'achievements',
                    component: Achievements
                }
            ]
        },
        {
            path: '/leaderboard',
            component: Leaderboard
        },
        {
            path: '/edit',
            component: Editing,
            children: [
                {
                    // Default route
                    path: '',
                    redirect:  { name: 'dashboard'}
                },
                {
                    path: 'word',
                    component: EditWord
                },
                {
                    path: 'name',
                    component: EditName
                },
                {
                    path: 'translation',
                    component: EditTranslation
                }
            ]
        },
        {
            path: '/verify',
            component: Verifying,
            children: [
                {
                    // Default route
                    path: '',
                    redirect: { name: 'dashboard'}
                },
                {
                    path: 'word',
                    component: VerifyWord
                },
                {
                    path: 'name',
                    component: VerifyName
                },
                {
                    path: 'translation',
                    component: VerifyTranslation
                },
                {
                    path: 'sound',
                    component: VerifySound
                }
            ]
        }
    ]
})

export default router
