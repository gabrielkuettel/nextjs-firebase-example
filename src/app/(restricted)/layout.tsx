import { RestrictedLayout as Layout } from '@/components/layout/restricted-layout'

export default function RestrictedLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}
