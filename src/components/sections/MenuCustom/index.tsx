import { useState } from 'react'

import SubMenu from './Submenu'

export interface SubmenuImagesProps {
  imageURL: string
  imageLink: string
  imageAlt: string
}

export interface SubmenuItemsProps {
  submenuTitle: string
  submenuLink: string
}

export interface SideNavItemsProps {
  title: string
  icon:
    | 'icon-bio'
    | 'icon-fruits-legumes'
    | 'icon-ketchup-moutarde'
    | 'icon-eau-petillante '
    | 'icon-surgeles'
    | 'icon-baby-garcon'
    | 'icon-beaute-hygiene-1'
    | 'icon-faire-le-menage'
    | 'icon-eclairage'
    | 'icon-chien'
  titleLink: string
  submenuItems: SubmenuItemsProps[]
  submenuImages?: SubmenuImagesProps[]
}
export interface SideNavMenuProps {
  mainTitle: string
  sidenavItems: SideNavItemsProps[]
}

function SideNavMenu(sidenavmenu: SideNavMenuProps) {
  const { mainTitle, sidenavItems = [] } = sidenavmenu

  const [currentMenu, setCurrentMenu] = useState('')
  const [openSideMenu, setOpenSideMenu] = useState(false)

  const handleOpenMenu = () => {
    if (sidenavItems.length) {
      setOpenSideMenu((prev) => !prev)
      setCurrentMenu('')
      document.body.classList.toggle('overflow-hidden')
    }
  }

  return (
    <div className="shopping-open hamburger-open d-none d-lg-flex align-items-center justify-content-center mainnav-item">
      <div
        onClick={handleOpenMenu}
        className="shopping-content"
        aria-hidden="true"
      >
        <i className="icon icon-lists" />
        <span className="shopping-label">{mainTitle}</span>
        <div
          className={`carrefour-sidenav-overlay ${openSideMenu ? 'open' : ''}`}
        />
      </div>

      <div
        id="carrefourSidenav"
        className={`carrefourSidenav sidenav ${
          openSideMenu ? 'carrefourSidenav--open' : ''
        }`}
      >
        <div className="carrefourSidenavMenuContainer">
          <ul>
            {sidenavItems?.map(
              (sidenavItem: SideNavItemsProps, index: number) => (
                <li key={index}>
                  <div
                    className="carrefourSidenav__menuItem"
                    onClick={() => setCurrentMenu(`sub-${index}`)}
                    aria-hidden="true"
                  >
                    <i className={`icon ${sidenavItem.icon}`} />
                    <span>{sidenavItem.title}</span>
                    <i className="icon icon-arrow-right" />
                  </div>

                  <div
                    className={`carrefourSidenavSubmenuContainer
                    ${
                      currentMenu === `sub-${index}`
                        ? 'carrefourSidenavSubmenuContainer--open'
                        : ''
                    }
                  `}
                  >
                    <SubMenu {...sidenavItem} />
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideNavMenu