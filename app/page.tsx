import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Trophy, Brain } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <GraduationCap className="h-4 w-4" />
                Smart Learning Platform
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Transform PDFs into Interactive Learning
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Upload your study material, get instant summaries, and test your knowledge with AI-powered quizzes.
              </p>
              <Button size="lg" className="text-lg" asChild>
                <Link href="/learn">Start Learning</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Smart Summaries</h3>
                  <p className="text-sm text-muted-foreground">Get key insights from your PDFs instantly</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <Trophy className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Track Progress</h3>
                  <p className="text-sm text-muted-foreground">Monitor your learning journey</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold">Interactive Quizzes</h3>
                  <p className="text-sm text-muted-foreground">Test your understanding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

