import { PUBLIC_ROUTES } from 'helpers'
import React from 'react'
import { useRouter } from 'next/router'

/**
 * Catch invalid routes, show a 404 page and redirect to the home page after 5 seconds
 * @returns {JSX.Element} 404 page
 */
function ErrorPage() {
  const router = useRouter()

  setTimeout(() => {
    router.push(PUBLIC_ROUTES[0])
  }, 5000)

  return <p>Você chegou no limite do universo, vamos levá-lo(a) novamente a terra.</p>
}

export default ErrorPage
