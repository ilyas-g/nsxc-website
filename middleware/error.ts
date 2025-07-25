export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/' && to.path !== '/mindset' && to.path !== '/mindset/rules') {
    return navigateTo('/mindset')
  }
})
