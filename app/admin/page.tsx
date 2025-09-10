export const dynamic = "force-dynamic"

import { kv } from "@vercel/kv"

interface Application {
  id: string
  name: string
  email: string
  university: string
  submittedAt: string
  timestamp: number
}

export default async function AdminPage() {
  const applications: Application[] = []

  try {
    const applicationIds = (await kv.lrange("applications", 0, -1)) as string[]

    for (const id of applicationIds) {
      const app = (await kv.get(id)) as Application
      if (app) applications.push(app)
    }

    // Sort by most recent first
    applications.sort((a, b) => b.timestamp - a.timestamp)
  } catch (error) {
    console.error("Failed to fetch applications:", error)
  }

  return (
    <div className="min-h-screen bg-white pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif font-bold text-4xl text-gray-900 mb-4">SIFF Applications</h1>
          <p className="text-gray-600">Total applications received: {applications.length}</p>
        </div>

        <div className="space-y-6">
          {applications.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No applications received yet.</p>
            </div>
          ) : (
            applications.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">{app.name}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(app.submittedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> {app.email}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">University:</span> {app.university}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
