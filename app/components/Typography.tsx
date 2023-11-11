type Size = "heading-1" | "heading-2" | "heading-3"| "heading-4"| "heading-5"| "heading-6" | "body-default"

export const sizes = {
	"heading-1":
		"font-heading text-3xl md:text-5xl leading-[1.25] -tracking-[0.02em]",
	"heading-2":
		"font-heading text-2xl md:text-3xl leading-[1.375] -tracking-[0.01em]",
	"heading-3": "font-heading text-xl md:text-2xl leading-[1.375]",
	"heading-4": "font-heading text-lg md:text-xl leading-[1.375]",
	"heading-5": "font-heading text-md md:text-lg leading-[1.375]",
	"heading-6": "font-heading text-base md:text-md leading-[1.5]",
	"body-large":
		"font-body text-md md:text-lg leading-[1.375] tracking-normal",
	"body-default": "font-body text-sm md:text-base leading-[1.5]",
};


type TypographyProps = {
    as?: React.ElementType
    children?: React.ReactNode
    className?: string
}

const sizeToTag: Record<Size, React.ElementType> = {
    "heading-1": "h1",
    "heading-2": "h2",
    "heading-3": "h3",
    "heading-4": "h4",
    "heading-5": "h5",
    "heading-6": "h6",
    "body-default": "p",
}

export function Typography({as, size, children}: TypographyProps & {size: Size}) {

    const Tag = as ?? sizeToTag[size]

    return (
        <Tag className={sizes[size]}>{children}</Tag>
    )
}

export function H1(props: TypographyProps) {
    return (
        <Typography size="heading-1" {...props}/>
    )
}

export function H2(props: TypographyProps) {
    return (
        <Typography size="heading-2" {...props}/>
    )
}

export function H3(props: TypographyProps) {
    return (
        <Typography size="heading-3" {...props}/>
    )
}

export function H4(props: TypographyProps) {
    return (
        <Typography size="heading-4" {...props}/>
    )
}

export function H5(props: TypographyProps) {
    return (
        <Typography size="heading-5" {...props}/>
    )
}

export function H6(props: TypographyProps) {
    return (
        <Typography size="heading-6" {...props}/>
    )
}

export function Paragraph(props: TypographyProps) {
    return (
        <Typography size="body-default" {...props}/>
    )
}