import React from 'react'

function Button({handleClick, children}) {
    console.log(`rerendering button ${children}`);
  return (
    <div>
      <p>
        <button type='button' onClick={handleClick}>
            {children}
        </button>
      </p>
    </div>
  )
}

export default React.memo(Button);
// export default Button;
