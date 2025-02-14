"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, FileText, Loader2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function LearnPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIsUploading(true)
      // Simulate file processing
      setTimeout(() => {
        setIsUploading(false)
        setShowSummary(true)
      }, 2000)
    }
  }

  return (
    <div className="container py-8 max-w-4xl">
      {!showSummary ? (
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              {isUploading ? (
                <div className="space-y-4">
                  <Loader2 className="h-10 w-10 text-primary animate-spin mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Processing your document...</h3>
                    <Progress value={66} className="w-[300px]" />
                  </div>
                </div>
              ) : (
                <label className="space-y-4 cursor-pointer">
                  <div className="bg-primary/10 p-6 rounded-full mx-auto w-fit">
                    <Upload className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Upload your PDF</h3>
                    <p className="text-sm text-muted-foreground mt-1">Drag and drop or click to select a file</p>
                  </div>
                  <input type="file" className="hidden" accept=".pdf" onChange={handleFileUpload} />
                </label>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Document Summary</h2>
              <p className="text-muted-foreground">Key concepts and insights</p>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                <h3>Introduction to Machine Learning</h3>
                <p>
                  Machine Learning is a subset of artificial intelligence that focuses on developing systems that can
                  learn and improve from experience. Key concepts include:
                </p>
                <ul>
                  <li>Supervised Learning: Training with labeled data</li>
                  <li>Unsupervised Learning: Finding patterns in unlabeled data</li>
                  <li>Reinforcement Learning: Learning through interaction with an environment</li>
                </ul>
                <p>
                  The field has numerous applications across industries, from healthcare to finance, and continues to
                  evolve rapidly with technological advancement.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button asChild>
              <Link href="/learn/quiz">Take Quiz</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

