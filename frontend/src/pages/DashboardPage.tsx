import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { FileText, Upload, TrendingUp, DollarSign, FileCheck, Clock } from 'lucide-react';

// Mock data
const kpiData = [
  {
    title: 'Total Statements',
    value: '24',
    change: '+12% from last month',
    icon: FileText,
  },
  {
    title: 'Transactions Extracted',
    value: '1,847',
    change: '+18% from last month',
    icon: TrendingUp,
  },
  {
    title: 'Total Volume',
    value: '$2.4M',
    change: '+8% from last month',
    icon: DollarSign,
  },
  {
    title: 'Processing Time',
    value: '2.3 min',
    change: '-15% from last month',
    icon: Clock,
  },
];

const recentTransactions = [
  {
    id: '1',
    date: '2025-12-28',
    bank: 'Banorte',
    type: 'Credit',
    amount: '$5,432.00',
    description: 'Client Payment - Invoice #1234',
    status: 'Processed',
  },
  {
    id: '2',
    date: '2025-12-27',
    bank: 'BBVA',
    type: 'Debit',
    amount: '$1,234.00',
    description: 'Office Supplies',
    status: 'Processed',
  },
  {
    id: '3',
    date: '2025-12-27',
    bank: 'Santander',
    type: 'Credit',
    amount: '$8,900.00',
    description: 'Project Payment',
    status: 'Processed',
  },
  {
    id: '4',
    date: '2025-12-26',
    bank: 'Banorte',
    type: 'Debit',
    amount: '$567.00',
    description: 'Software Subscription',
    status: 'Processed',
  },
  {
    id: '5',
    date: '2025-12-25',
    bank: 'BBVA',
    type: 'Credit',
    amount: '$3,210.00',
    description: 'Consulting Services',
    status: 'Processing',
  },
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="flex-1 space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of your bank statement processing activities
          </p>
        </div>
        <Button size="lg">
          <Upload className="mr-2 h-5 w-5" />
          Upload Statement
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {kpi.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <p className="text-xs text-muted-foreground">
                  {kpi.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity and Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>
              Latest transactions extracted from your bank statements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Bank</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">
                      {transaction.date}
                    </TableCell>
                    <TableCell>{transaction.bank}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          transaction.type === 'Credit'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {transaction.description}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {transaction.amount}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          transaction.status === 'Processed'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Statements</CardTitle>
            <CardDescription>
              Your uploaded bank statements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Banorte_Dec_2025.pdf', date: '2025-12-28', transactions: 156 },
                { name: 'BBVA_Dec_2025.pdf', date: '2025-12-27', transactions: 89 },
                { name: 'Santander_Nov_2025.pdf', date: '2025-12-15', transactions: 234 },
                { name: 'Banorte_Nov_2025.pdf', date: '2025-12-10', transactions: 178 },
              ].map((statement, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between space-x-4"
                >
                  <div className="flex items-center space-x-4">
                    <FileCheck className="h-8 w-8 text-primary" />
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {statement.name}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {statement.date} • {statement.transactions} transactions
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Export
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and operations
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <Button variant="outline" className="h-20 flex-col">
            <Upload className="h-6 w-6 mb-2" />
            <span>Upload New Statement</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <FileText className="h-6 w-6 mb-2" />
            <span>View All Statements</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col">
            <TrendingUp className="h-6 w-6 mb-2" />
            <span>Generate Report</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
