export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/mindset') {
    // setting the redirect code to '301 Moved Permanently'
    return navigateTo('/mindset', { redirectCode: 301 })
  }
})
