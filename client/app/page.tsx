"use client";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useDataQuery, useLiveDataSubscription } from "./queries";

const columnHelper = createColumnHelper<DataItem>();

const columns = [
    columnHelper.accessor("name", {}),
    columnHelper.accessor("alpha", {}),
    columnHelper.accessor("bravo", {}),
    columnHelper.accessor("charlie", {}),
    columnHelper.accessor("delta", {}),
    columnHelper.accessor("echo", {}),
    columnHelper.accessor("foxtrot", {}),
    columnHelper.accessor("golf", {}),
    columnHelper.accessor("hotel", {}),
    columnHelper.accessor("india", {}),
    columnHelper.accessor("juliet", {}),
    columnHelper.accessor("kilo", {}),
    columnHelper.accessor("lima", {}),
    columnHelper.accessor("mike", {}),
    columnHelper.accessor("november", {}),
    columnHelper.accessor("oscar", {}),
    columnHelper.accessor("papa", {}),
    columnHelper.accessor("quebec", {}),
    columnHelper.accessor("romeo", {}),
    columnHelper.accessor("sierra", {}),
    columnHelper.accessor("tango", {}),
    columnHelper.accessor("uniform", {}),
    columnHelper.accessor("victor", {}),
    columnHelper.accessor("whiskey", {}),
    columnHelper.accessor("xray", {}),
    columnHelper.accessor("yankee", {}),
    columnHelper.accessor("zulu", {}),
];

export default function Home() {
    useLiveDataSubscription();
    let { data } = useDataQuery();
    if (!data) {
        data = [];
    }

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                          header.column.columnDef.header,
                                          header.getContext()
                                      )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
