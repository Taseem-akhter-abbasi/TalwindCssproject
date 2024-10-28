import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({className, href,onClick, children, px, white}) => {
    // here we passes different props use in button
const classes= `button relative inline-flex justify-center items-center h-11 transitions-colors hover:text-color-1 ${px || "px-7"}
${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
// this is functional component which combine several classes
const spanClasses = "relative z-10";
// this is use to style text inside button
  const renderButton = ()=>(
    <button className={classes} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
        {/* this is used to border of button */}
    </button>
  );
//   this function is to make the button as simple button
const renderLink = ()=>(
    <a className={classes}>
    <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}</a>
)
  return  href ?
  renderLink() : renderButton();
}

export default Button