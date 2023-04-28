interface TechnologiesTableRowProps {
    link: string,
    technologyName: string,
    imageSource: string,
    imageSize: string,
    imageAlt: string,
    description: string
}

export default function TechnologiesTableRow({ link, technologyName, imageSource, imageSize, imageAlt, description }: TechnologiesTableRowProps) {
    return (
        <tr className="divide-x-2 divide-white">
            <td className="bg-white hover:opacity-90">
                <a href={link} rel="noopener noreferrer" target="_blank" className="p-4 block w-full flex justify-center items-center">
                    <img className={`${imageSize}`} src={imageSource} alt={imageAlt} />
                </a>
            </td>
            <td className="p-4 bg-zinc-800">
                <a href={link} rel="noopener noreferrer" target="_blank">
                    <p className="text-white hover:underline hover:text-slate-400 font-semibold">{technologyName}</p>
                </a>
            </td>
            <td className="p-4 overflow-y-scroll scrollbar bg-zinc-800">
                <p className="text-white break-words h-6 md:h-12 text-left text-xs md:text-base">
                    {description}
                </p>
            </td>
        </tr>
    )
}