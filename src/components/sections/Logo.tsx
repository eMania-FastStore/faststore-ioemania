import { useState } from 'react'
import { SearchInput, SearchInputField, SearchDropdown } from '@faststore/ui'

export function Logo() {
    const [searchDropdownVisible, setSearchDropdownVisible] = useState(false)

    const {SearchDropdownUsage}: any = SearchDropdown

    const [term, setTerm] = useState('')
    return (
        <header className='r-header__main'>
            <div className="r-header__main--logo">
                <a href="/"><span>Emania</span></a>
            </div>
            <div className="r-header__main--search">
                <SearchInput visibleDropdown={searchDropdownVisible}>
                    <SearchInputField
                        placeholder="Search everything at the store"
                        onFocus={() => setSearchDropdownVisible(true)}
                        onSubmit={() => setSearchDropdownVisible(false)}
                        onChange={(e: any) => setTerm(e)}
                        buttonProps={{
                            onClick: () => {},
                        }}
                    />
                    {searchDropdownVisible && <SearchDropdownUsage term={term} />}
                </SearchInput>
            </div>
            <div className="e-header__main--account"><a href="/account" className="e-account--icon">
                <svg  width="21" height="21" viewBox="0 0 21 21" version="1.1"><g id="Canvas" transform="translate(-11027 2233)"><g id="Union"><use  transform="translate(11027.3 -2233)" fill="#555559"></use></g></g><defs><path id="path0_fill" fill-rule="evenodd" d="M 13.6456 5.50684C 13.6456 7.45557 12.0792 9.01367 10.1739 9.01367C 8.26814 9.01367 6.70173 7.45557 6.70173 5.50684C 6.70173 3.55811 8.26814 2 10.1739 2C 12.0792 2 13.6456 3.55811 13.6456 5.50684ZM 13.2198 10.0823C 14.6827 9.09387 15.6456 7.41345 15.6456 5.50684C 15.6456 2.46545 13.1959 0 10.1739 0C 7.15144 0 4.70173 2.46545 4.70173 5.50684C 4.70173 7.41345 5.66413 9.09387 7.12751 10.0823C 3.75105 11.0967 1.09235 13.7537 0.0933309 17.1176C -0.378349 18.7058 1.00837 20.0769 2.66511 20.0769L 17.6827 20.0769C 19.3394 20.0769 20.7261 18.7058 20.2545 17.1176C 19.2554 13.7535 16.5967 11.0966 13.2198 10.0823ZM 2.01081 17.687C 3.04743 14.1952 6.30671 11.637 10.1739 11.637C 14.0416 11.637 17.3004 14.1952 18.3375 17.687C 18.3467 17.7184 18.3477 17.7363 18.3477 17.7428C 18.3482 17.7495 18.3472 17.7533 18.3463 17.7567C 18.3453 17.7625 18.3355 17.7943 18.2906 17.8435C 18.1905 17.9532 17.9732 18.0769 17.6827 18.0769L 2.66511 18.0769C 2.37507 18.0769 2.15778 17.9532 2.0572 17.8435C 2.01228 17.7943 2.003 17.7625 2.00153 17.7567L 2.00007 17.7429C 2.00007 17.7363 2.00153 17.7184 2.01081 17.687Z"></path></defs></svg></a><p className="e-msg-logged"><strong>Olá, Visitante!</strong><a href="/account/">Minha Conta</a> | <a href="/no-cache/user/logout">Sair</a></p><p className="e-msg-not-logged e-active"><a href="/login" rel="nofollow" title="Entre">Entre</a> ou <a href="/login" rel="nofollow" title="Cadastre-se">Cadastre-se</a></p>
            </div>
        </header>
    )
}