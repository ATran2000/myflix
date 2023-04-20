interface NavbarItemProps {
    label: string
}

export default function NavbarItem( {label}: NavbarItemProps) {
    return (
        <div className="font-mono text-green-400 cursor-pointer hover:text-green-500 transition">
            {label}
        </div>
    )
}