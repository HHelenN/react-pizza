import React from 'react'
import cx from 'classnames'

export const Button = ({onClick, className, outline, children}) =>  {

    return (
      <button
        className={cx('button', className, { 'button-outline': outline })}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

