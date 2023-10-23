'use client'

import { Roboto, Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '700']
})

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '700']
})

export default function Table({ dbResults, nombreTabla }) {

    return (
        <>
            <div className="tableContainer">
                <h3 className={""}>{nombreTabla}</h3>
                <table className={`${"tableSet"} ${inter.className}`}>
                    <thead>
                        <tr>
                            {dbResults[0].columns.map((columnName, index) => (
                                <th key={index}>
                                    {columnName}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dbResults[0].values.map((row, index) => (
                            <tr key={index}>
                                {row.map((value, index) => (
                                    <td key={index}>
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

