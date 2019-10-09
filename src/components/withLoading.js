import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

const duration = 300

export const LoadingComponent = ({ loading, onExited }) => (
  <CSSTransition in={loading} timeout={duration} classNames="fade" onExited={onExited} appear>
    <div className="loading-screen">
      <i className="m-4 fas fa-spinner fa-spin fa-3x"></i>
      <div>Loading platform...</div>
    </div>
  </CSSTransition>
)

/**
 * @param {React.FunctionComponent} WrappedComponent
 */
export default WrappedComponent => {
  return props => {
    const [loading, setLoading] = useState(true)
    const [ready, setReady] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }, [])

    if (ready) return <WrappedComponent {...props} />

    return LoadingComponent({
      loading,
      onExited: () => setReady(true)
    })
  }
}
