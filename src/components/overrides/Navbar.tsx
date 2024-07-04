import { SectionOverride } from "@faststore/core";
import BrandSlider from "./ListBrand";

const SECTION = 'Navbar' as const

const override: SectionOverride = {
    section: SECTION,
    components: {
        Navbar: { Component: BrandSlider }
    }
}

export { override }