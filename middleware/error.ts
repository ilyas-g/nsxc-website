export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/mindset' && to.path !== '/mindset/rules') {
    // setting the redirect code to '301 Moved Permanently'
    return navigateTo('/mindset', { redirectCode: 301 })
  }
})
