import {Link} from 'react-router-dom'
import './Button.css'

const Button = ({
    children,
    to,
    variant = 'primary',
    href,
    external = false,
    className = '',
    ...rest
}) => {

  const variants = {
    primary: 'btn-primary btn-primary-hover',
    outline: 'btn-outline btn-outline-hover',
    neutral: 'btn-neutral btn-neutral-hover',
    blue: 'btn-blue btn-blue-hover',
  }

  const classes = `btn ${variants[variant] || variants.primary} ${className}`
    
  if(href){
    return (
      <a 
        href={href} 
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  if(to){
    return(
      <Link 
        to={to} 
        className={classes}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  return(
    <button 
      className={classes}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button