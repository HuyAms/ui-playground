type Props = {
    as?: React.ElementType
    children: React.ReactNode
}


export function Container({children, as}:Props) {

    const Tag = as ?? "div"

    return (
        <Tag className="py-layout5 px-layout4 max-w-[1440px] mx-auto">{children}</Tag>
    )
}