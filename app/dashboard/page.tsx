import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import CourseList from "@/components/course-list"
import { RecentActivity } from "@/components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">96</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Assigned Learners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">789</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Training Time</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,250h</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Web Development Basics</span>
                  <span className="text-sm">75%</span>
                </div>
                <Progress value={75} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">UI/UX Design</span>
                  <span className="text-sm">45%</span>
                </div>
                <Progress value={45} />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Digital Marketing</span>
                  <span className="text-sm">90%</span>
                </div>
                <Progress value={90} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Courses</h2>
        <CourseList />
      </div>
    </div>
  )
}

