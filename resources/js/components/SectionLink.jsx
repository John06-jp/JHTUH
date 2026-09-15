import { Link } from 'react-router-dom'

/**
 * Replaces links like `index.html#learning-areas` (cross-page section
 * anchor). Navigation to `to` with `hash` is handled by useScrollToHash.
 */
export default function SectionLink({ to, hash = '', children, ...rest }) {
  return (
    <Link to={{ pathname: to, hash: hash ? `#${hash}` : undefined }} {...rest}>
      {children}
    </Link>
  )
}