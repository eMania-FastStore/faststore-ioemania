import { SectionOverride } from "@faststore/core";

const SECTION = 'ProductShelf' as const

const override: SectionOverride = {
    section: SECTION,
    components: {
        __experimentalProductCard: {
            props: {
                onButtonClick: () => {},
                ratingValue: 4
            }
        }
    }
}

export { override }