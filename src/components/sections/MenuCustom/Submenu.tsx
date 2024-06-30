import type {
    SubmenuImagesProps,
    SubmenuItemsProps,
    SideNavItemsProps,
  } from './index'
  
  function SubMenu(sidenavItem: SideNavItemsProps) {
    const { title, icon, titleLink, submenuItems, submenuImages } = sidenavItem
  
    return (
      <>
        <div>
          <div className="border-shadow" />
          <div className="carrefourSidenavSubmenuContainer__header">
            <i className={`icon ${icon}`} />
            <div className="w-100">
              <p className="submenuTitle">{title}</p>
              <a className="submenuTitleLink" href={titleLink}>
                Tout voir
              </a>
            </div>
          </div>
          <ul className="carrefourSidenavSubmenuContainer__listItems">
            {submenuItems?.map(
              (
                { submenuTitle, submenuLink }: SubmenuItemsProps,
                index: number
              ) => (
                <li key={index}>
                  <a href={submenuLink}>{submenuTitle}</a>
                </li>
              )
            )}
          </ul>
        </div>
  
        <div>
          <div className="border-shadow" />
          <div className="carrefourSidenavSecondarySectionContainer">
            {submenuImages?.map(
              (
                { imageLink, imageURL, imageAlt }: SubmenuImagesProps,
                index: number
              ) => (
                <a key={index} href={imageLink}>
                  <img
                    loading="lazy"
                    className="w-100 showCursor"
                    alt={imageAlt}
                    src={imageURL}
                  />
                </a>
              )
            )}
          </div>
        </div>
      </>
    )
  }
  
  export default SubMenu