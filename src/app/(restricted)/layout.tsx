import { Restricted } from '@/components/Restricted'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <Restricted>{children}</Restricted>
}
