import { Meta, StoryObj } from "@storybook/react";
import Table from "../components/Table/Table";

import { useMemo } from "react";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import { Column, useTable } from "react-table";

const meta: Meta<typeof Table> = {
    title: 'Example/Table',
    component: Table,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export function Default() {
    type Data = {
        preview: React.ReactNode
        col1: string
        col2: string
        actions: string
    }

    const data = useMemo<Data[]>(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
                actions: 'ações',
                preview: <Icon
                    path={mdiOpenInNew}
                    size="14px"
                    color="#09f"
                />
            },
            {
                col1: 'react-table',
                col2: 'rocks',
                actions: 'ações',
                preview: <Icon
                    path={mdiOpenInNew}
                    size="14px"
                    color="#09f"
                />
            },
            {
                col1: 'whatever',
                col2: 'you want',
                actions: 'ações',
                preview: <Icon
                    path={mdiOpenInNew}
                    size="14px"
                    color="#09f"
                />
            },
            {
                col1: 'Batata',
                col2: 'Banana',
                actions: 'ações',
                preview: <Icon
                    path={mdiOpenInNew}
                    size="14px"
                    color="#09f"
                />
            },
        ],
        []
    )

    const columns = useMemo<Column<Data>[]>(
        () => [
            {
                Header: '',
                accessor: 'preview',

            },
            {
                Header: 'Column 1',
                accessor: 'col1', // accessor is the "key" in the data
                Cell(row) {
                    return <div style={{ textAlign: 'center' }}>{row.value}</div>
                }
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
                Cell(row) {
                    return <div style={{ textAlign: 'center' }}>{row.value}</div>
                }
            },
            {
                Header: 'Ações',
                accessor: 'actions',
                Cell(row) {
                    return <div style={{ textAlign: 'center' }}>{row.value}</div>
                }
            },
        ],
        []
    )

    const instance = useTable({data, columns})

    return <Table instance={instance} />
}