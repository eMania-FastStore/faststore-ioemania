import { SectionOverride } from "@faststore/core";
import { AlertCustom } from "../sections/AlertCustom";

const SECTION = 'Alert' as const

const override: SectionOverride = {
    section: SECTION,
    components: {
        Alert: { Component: AlertCustom }
    }
}

export { override }