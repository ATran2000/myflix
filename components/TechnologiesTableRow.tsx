import Link from "next/link";

interface TechnologiesTableRowProps {
    link: string,
    technologyName: string,
    imageSource: string,
    imageAlt: string,
    description: string
}

export default function TechnologiesTableRow({ link, technologyName, imageSource, imageAlt, description }: TechnologiesTableRowProps) {
    return (
        <tr className="divide-x-2 divide-white">
            <td className="bg-white hover:opacity-90">
                <Link href={link} className="p-4 block w-full flex justify-center items-center">
                    <img className="h-12 w-20" src={imageSource} alt={imageAlt} />
                </Link>
            </td>
            <td className="p-4">
                <Link href={link} >
                    <p className="text-white hover:underline">{technologyName}</p>
                </Link>
            </td>
            <td className="p-4 overflow-y-scroll scrollbar">
                <p className="text-white break-words h-12 text-left text-xs md:text-base">
                    {description}
                </p>
            </td>
        </tr>
    )
}