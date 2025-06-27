"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useDropzone } from "react-dropzone"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, Video, CheckCircle, XCircle, Loader2 } from "lucide-react"

type DetectionResult = {
  isDeepfake?: boolean
  confidence?: number
  details: string
  error?: boolean
}

export function VideoDetection() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<DetectionResult | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file) {
      setFile(file)
      setResult(null)

      const url = URL.createObjectURL(file)
      setPreview(url)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".avi", ".mov", ".wmv", ".flv", ".webm"],
    },
    maxFiles: 1,
  })

  const analyzeVideo = async () => {
    if (!file) return

    setIsAnalyzing(true)
    setProgress(0)
    setResult(null)

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("https://deepfake-backend-api-fjdjczh9cagkesex.centralindia-01.azurewebsites.net/predict", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.statusText}`)
      }

      const isDeepfake = data.prediction === "deepfake"
      const confidence = parseFloat(data.confidence_percentage)

      setResult({
        isDeepfake,
        confidence,
        details: `The model is ${confidence}% confident that this video is ${
          isDeepfake ? "a deepfake" : "authentic"
        }.`,
        error: false,
      })
    } catch (error) {
      console.error("Error analyzing video:", error)
      setResult({
        confidence: 0,
        details:
          error instanceof Error
            ? error.message
            : "An unknown error occurred. Please try again.",
        error: true,
      })
    } finally {
      setProgress(100)
      setIsAnalyzing(false)
    }
  }

  const reset = () => {
    setFile(null)
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setPreview(null)
    setResult(null)
    setProgress(0)
    setIsAnalyzing(false)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
        <CardContent className="p-8">
          <div {...getRootProps()} className="cursor-pointer">
            <input {...getInputProps()} />
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
              {isDragActive ? (
                <p className="text-lg font-medium">Drop the video here...</p>
              ) : (
                <div>
                  <p className="text-lg font-medium">Drag & drop a video here</p>
                  <p className="text-sm text-muted-foreground">or click to select a file</p>
                </div>
              )}
              <p className="text-xs text-muted-foreground">Supports: MP4, AVI, MOV, WMV, FLV, WebM (Max 100MB)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Video className="mr-2 h-5 w-5" />
                      Preview
                    </h3>
                    <div className="relative rounded-lg overflow-hidden bg-muted">
                      <video src={preview} controls className="w-full h-64 object-contain" preload="metadata" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {file?.name} ({((file?.size || 0) / 1024 / 1024).toFixed(2)} MB)
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">Analysis</h3>

                    {!isAnalyzing && !result && (
                      <Button onClick={analyzeVideo} className="w-full">
                        Start Video Analysis
                      </Button>
                    )}

                    {isAnalyzing && (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm">Analyzing video frames...</span>
                        </div>
                        <Progress value={progress} className="w-full" />
                        <p className="text-xs text-muted-foreground">Processing frame-by-frame analysis...</p>
                      </div>
                    )}

                    {result && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <div
                          className={`p-4 rounded-lg border-2 ${
                            result.error || result.isDeepfake
                              ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20"
                              : "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20"
                          }`}
                        >
                          {result.error ? (
                            <>
                              <div className="flex items-center space-x-2 mb-2">
                                <XCircle className="h-5 w-5 text-red-600" />
                                <span className="font-semibold">ANALYSIS ERROR</span>
                              </div>
                              <p className="text-sm mb-2">Confidence: {result.confidence}%</p>
                              <p className="text-sm text-muted-foreground">{result.details}</p>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center space-x-2 mb-2">
                                {result.isDeepfake ? (
                                  <XCircle className="h-5 w-5 text-red-600" />
                                ) : (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                )}
                                <span className="font-semibold">
                                  {result.isDeepfake ? "DEEPFAKE DETECTED" : "AUTHENTIC"}
                                </span>
                              </div>
                              <p className="text-sm mb-2">Confidence: {result.confidence}%</p>
                              <p className="text-sm text-muted-foreground">{result.details}</p>
                            </>
                          )}
                        </div>

                        <Button onClick={reset} variant="outline" className="w-full">
                          Analyze Another Video
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
