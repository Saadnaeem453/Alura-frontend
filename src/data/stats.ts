interface Stat {
  id: number;
  title: string;
  value: string;
  description: string;
  gradient: 'primary' | 'blue-cyan';
}

export const stats: Stat[] = [
  {
    id: 1,
    title: 'Active Users',
    value: '10,000+',
    description: '47% increase from last year',
    gradient: 'primary'
  },
  {
    id: 2,
    title: 'Calls Per Month',
    value: '1,200,000+',
    description: 'Reliable uptime with 99.99% SLA',
    gradient: 'blue-cyan'
  },
  {
    id: 3,
    title: 'Customer Satisfaction',
    value: '98%',
    description: 'Based on over 5,000 reviews',
    gradient: 'primary'
  }
];
