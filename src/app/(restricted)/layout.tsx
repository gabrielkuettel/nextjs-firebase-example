import { Restricted } from '@/components/Restricted'

export default function RestrictedLayout({ children }: { children: React.ReactNode }) {
  return <Restricted>{children}</Restricted>
}
