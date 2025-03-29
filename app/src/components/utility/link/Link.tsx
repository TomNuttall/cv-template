import { ExternalLink } from '../../../assets/icons'
import Icon from '../icon'
import { IconLocation } from '../icon/Icon'
import './Link.css'

const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
}) => {
  return (
    <div className="link">
      <Icon
        icon={<ExternalLink title="Opens in a new tab" />}
        iconLocation={IconLocation.RIGHT}
      >
        <a href={href} target="_blank">
          {children}
        </a>
      </Icon>
    </div>
  )
}

export default Link
