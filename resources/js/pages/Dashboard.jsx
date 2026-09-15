import { Head, Link, router, usePage } from '@inertiajs/react'

const STATUS_STYLES = {
  submitted: 'bg-teal-bg text-teal-dark border-teal-light/40'
}

/**
 * Learner dashboard (GET /dashboard, auth only). Replaces the previous
 * "Login is a demo" placeholder with a real signed-in area that lists the
 * course applications tied to the learner's account.
 */
export default function Dashboard({ applications = [] }) {
  const { auth } = usePage().props
  const user = auth?.user

  return (
    <main className="bg-soft text-ink">
      <Head title="Student Dashboard" />
      <div className="mx-auto w-full max-w-[960px] px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-1.5 text-xs font-extrabold uppercase tracking-widest text-teal">Learner area</p>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Student Dashboard</h1>
            <p className="mt-1 text-muted">
              Signed in as <strong className="text-navy">{user?.name}</strong> ({user?.email})
              {user?.role ? <span className="ml-2 inline-block rounded-full border border-line bg-white px-2.5 py-0.5 text-xs font-bold capitalize text-muted">{user.role}</span> : null}
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-teal bg-white px-4 text-sm font-semibold text-teal transition-colors hover:bg-teal/[0.08]"
            onClick={() => router.post('/logout')}
          >
            Log out
          </button>
        </div>

        <section className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-sm" aria-labelledby="applications-h">
          <h2 id="applications-h" className="font-heading text-lg font-bold text-navy">Your course applications</h2>

          {applications.length === 0 ? (
            <p className="mt-3 text-sm text-muted">
              No applications yet. Browse the{' '}
              <Link href="/skillsoft-catalog" className="font-semibold text-teal hover:underline">Skillsoft catalog</Link>{' '}
              or a{' '}
              <Link href="/program" className="font-semibold text-teal hover:underline">program guide</Link>{' '}
              and use “Apply Now” on any course.
            </p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="bg-navy text-left text-white">
                    <th scope="col" className="px-4 py-3 font-semibold">Course</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Status</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Submitted</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:nth-child(even)]:bg-soft">
                  {applications.map((application) => (
                    <tr key={application.id} className="border-t border-line">
                      <td className="px-4 py-3">{application.course_title}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold capitalize ${STATUS_STYLES[application.status] || 'border-line bg-soft text-muted'}`}>
                          {application.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{application.submitted_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
