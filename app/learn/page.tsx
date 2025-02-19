"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import QuizPage from "./quiz/quiz";

interface ProcessedData {
  summary: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export default function LearnPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [processedData, setProcessedData] = useState<ProcessedData | null>(
    null
  );
  const [showQuiz,setShowQuiz] = useState(false)
  const [questions,setQuestions] = useState<any>(null)


  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setIsUploading(true);

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("http://localhost:8000/api/pdf/process", {
          method: "POST",
          body: formData,
        });
        console.log(response);

        const data = await response.json();
        console.log(data);
        setProcessedData(data);
        setIsUploading(false);
        setShowSummary(true);
        setQuestions(data?.questions)
      } catch (error) {
        console.error("Error processing PDF:", error);
        setIsUploading(false);
      }
    }
  };

  if(showQuiz){
    return <QuizPage questions={questions}/>
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
                    <h3 className="text-lg font-semibold mb-2">
                      Processing your document...
                    </h3>
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
                    <p className="text-sm text-muted-foreground mt-1">
                      Drag and drop or click to select a file
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileUpload}
                  />
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
              <div className="prose max-w-none">{processedData?.summary}</div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={()=>setShowQuiz(true)}>Take Quiz</Button>
          </div>
        </div>
      )}
    </div>
  );
}
