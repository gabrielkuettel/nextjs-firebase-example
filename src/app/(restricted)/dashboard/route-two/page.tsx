import Link from 'next/link'

export default function RouteTwoPage(): JSX.Element {
  return (
    <div>
      <h1>Route Two</h1>
      <p>
        Go to{' '}
        <Link className="underline" href="/dashboard/route-one">
          Route One
        </Link>{' '}
        or back to{' '}
        <Link className="underline" href="/dashboard">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
