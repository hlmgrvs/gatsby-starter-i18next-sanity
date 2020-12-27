import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, companyInfo, onShowNav, showNav, siteTitle }) => {

  return (
    <>
      <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav}  />

        <div  className={styles.content}>{children}</div>
        <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
        <div className={styles.companyAddress}>
          {companyInfo && (
            <div>
              {companyInfo.name}
              <br />
              {companyInfo.address1}
              <br />
              {companyInfo.address2 && (
                <span>
                  {companyInfo.address2}
                  <br />
                </span>
              )}
              {companyInfo.zipCode} {companyInfo.city}
              {companyInfo.country && <span>, {companyInfo.country}</span>}
            </div>
          )}
        </div>
        </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
