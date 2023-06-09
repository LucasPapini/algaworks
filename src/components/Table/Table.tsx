import { TableInstance } from "react-table"
import * as T from './Table.styles'

import NoData from "../NoData/NoData"
import { transparentize } from "polished"

export default function Table<T extends Object>({ instance }: { instance: TableInstance<T> }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = instance

    return (
        <>
            <T.Wrapper cellSpacing={0} {...getTableBodyProps()}>
                <T.Heading>
                    {
                        headerGroups.map(headerGroup => (
                            <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <T.HeadingCell {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </T.HeadingCell>
                                    ))
                                }
                            </T.HeadingRow>
                        ))
                    }
                </T.Heading>

                <T.Body {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return <T.BodyRow {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return <T.BodyCell {...cell.getCellProps()}>
                                            {
                                                cell.render('Cell')
                                            }
                                        </T.BodyCell>
                                    })
                                }
                            </T.BodyRow>
                        })
                    }
                </T.Body>
            </T.Wrapper>
            {
                !rows.length && <div style={{ backgroundColor: transparentize(0.95, '#274060')}}>
                    <NoData height={360} />
                </div>
            }
        </>
    )
}