import PageWrapper from 'components/PageWrapper'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
button, a {
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
}
`

/**
 * Component Function
 * @returns {JSX.Element} App
 */
function App({ Component, pageProps }) {
  return (
    <PageWrapper>
      <GlobalStyle />
      <Component {...pageProps} />
    </PageWrapper>
  )
}

export default App
