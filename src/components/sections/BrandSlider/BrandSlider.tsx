import Image from "next/image"
import Link from "next/link"

export type Logo = {
    image?: string
    alt?: string
    link?: string
}

export interface Props {
    logos?: Logo[]
    text?: string
    link?: string
}


export function BrandSlider({
    logos = [
        {
            image: "",
            alt: "",
            link: ""
        },
        {
            image: "",
            alt: "",
            link: ""
        },
    ],
    text = "Ver todas",
    link = "/marcas"
}: Props){
    return (
        <section>
            <div>
                {logos.map((logo) => 
                    <div>
                        <Link
                            href={logo.link}
                        >
                            <Image
                                src={logo.image}
                                alt={logo.alt}
                            />
                        </Link>
                    </div>
                )}
            </div>
            <div>
                <Link href={link}>
                    {text}
                </Link>
            </div>
        </section>
    )
}