import PropTypes from 'prop-types'
import React from 'react'

/**
 * This is skeleton for a loader component
 *
 * @param {String, JSX.Element} children
 * @returns {JSX.Element} Loader
 */
function Loader({ children = 'Loading...' }) {
  return <p>{children}</p>
}

Loader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default Loader
