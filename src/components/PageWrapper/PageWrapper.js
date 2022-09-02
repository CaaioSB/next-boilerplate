import React, { useEffect, useState } from 'react'
import Loader from 'components/Loader'
import { PUBLIC_ROUTES } from 'helpers/constants'
import { useRouter } from 'next/router'

/**
 * PageWrapper render a loader when is the first attempt to load a page
 *
 * @param {JSX.Element} children
 * @returns {JSX.Element} PageWrapper
 */
function PageWrapper({ children }) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false)

  const router = useRouter()

  useEffect(() => {
    /**
     * Check if the current route is on public route constants
     */
    const onFinishedRequest = async () => {
      if (PUBLIC_ROUTES.includes(router.pathname)) {
        await router.push(router.pathname)
      }

      setFirstAttemptFinished(true)
    }

    onFinishedRequest()
  }, [router])

  if (!firstAttemptFinished) {
    return <Loader />
  }

  return children
}

export default PageWrapper
