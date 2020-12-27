import { Link } from "gatsby"
import React, { useContext } from "react"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import { useTranslation } from "react-i18next"
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav }) => {
  const alternateLinks = useContext(AlternateLinksContext)
  const { t, i18n } = useTranslation("common")

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h1 className={styles.branding} >
          <Link
            to={"/" + i18n.language}
          >
            {t("title")}
          </Link>
        </h1>

        <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
          <Icon symbol='hamburger' />
        </button>

        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              {alternateLinks &&
                alternateLinks
                  .filter(link => link.language !== i18n.language)
                  .map((link, i) => [
                    i > 0 && " | ",
                    <Link
                      key={i}
                      to={link.path}
                      hrefLang={link.language}
                    >
                      {t(link.language)}
                    </Link>,
                  ])}
            </li>
          </ul>
        </nav>
      </div>
    </div>

  )
}

Header.propTypes = {}

Header.defaultProps = {}


export default Header
