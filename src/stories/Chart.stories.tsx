import type { Meta, StoryObj } from '@storybook/react';

import Chart, { ChartProps } from '../components/Chart/Chart';

const meta: Meta<typeof Chart> = {
    title: 'Example/Chart',
    component: Chart,
    tags: ['autodocs'],
};

const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Receitas',
        data: [500, 400, 600, 100, 800, 20],
        fill: true,
        backgroundColor: '#0099FF',
        borderColor: '#0099FF',
        borderWidth: 0.5,
        yAxisID: 'cashflow',
      },
      {
        label: 'Despesas',
        data: [100, 200, 250, 500, 1000, 600],
        fill: true,
        backgroundColor: '#274060',
        borderColor: '#274060',
        borderWidth: 0.5,
        yAxisID: 'cashflow',
      },
    ],
  };
  

export default meta;
type Story = StoryObj<typeof Chart>;

export const Default: Story = {
    args:{
        data
    }
};

// export const WhithoutData: Story = {
//     args:{
//     }
// };
