
export const CircleButton = ({ExtraClass,children,href})=>{
  return(
    <a className={`rounded-full | flex-center ${ExtraClass}`} {...(!!href ? {href}:{})} >
      {children}
    </a>
  )
}