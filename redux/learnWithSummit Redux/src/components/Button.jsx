import React from 'react'

function Button({children, type, handler}) {
    const style = 
        type === "danger" ? "bg-red-500 text-white" : "bg-blue-500 text-white";
  return (
    <button className={style} onClick={handler}>
        {children}
    </button>
  )
}

export default Button
