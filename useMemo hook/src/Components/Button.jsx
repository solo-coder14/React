import { memo } from 'react';

const Button = memo(
  function Button({ locale }) {
    console.log("re-renader Button")
    return <div>{locale}</div>;
  },
  (prevProps, nextProps) => {
    // Skip re-render if locale hasn't changed
    return prevProps.locale === nextProps.locale;
  }
);

export default Button;