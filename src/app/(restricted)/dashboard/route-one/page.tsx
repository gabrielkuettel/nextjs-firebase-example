import Link from 'next/link'

export default function RouteOnePage(): JSX.Element {
  return (
    <div>
      <h1>Route One</h1>
      <p>
        Go to{' '}
        <Link className="underline" href="/dashboard/route-two">
          Route Two
        </Link>{' '}
        or back to{' '}
        <Link className="underline" href="/dashboard">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
