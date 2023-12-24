import { RestrictedLayout as Layout } from '@/components/layout/RestrictedLayout'

export default function RestrictedLayout({ children }: { children: React.ReactNode }) {
  return <Layout>{children}</Layout>
}
