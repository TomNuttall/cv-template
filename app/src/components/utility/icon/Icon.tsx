import './Icon.css'

export enum IconLocation {
  LEFT,
  RIGHT,
}

type IconProps = {
  icon: React.ReactNode
  iconLocation?: IconLocation
}

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  children,
  icon,
  iconLocation = IconLocation.LEFT,
}) => {
  return (
    <div className="icon">
      {icon && iconLocation === IconLocation.LEFT && icon}
      {children}
      {icon && iconLocation === IconLocation.RIGHT && icon}
    </div>
  )
}

export default Icon
