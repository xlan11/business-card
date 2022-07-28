import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--item"><FontAwesomeIcon icon={brands('twitter')} /></div>
            <div className="footer--item"></div>
            <div className="footer--item"></div>
            <div className="footer--item"></div>
            
        </div>
    )
}