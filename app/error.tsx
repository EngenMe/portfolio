"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-muted">
      <Card className="w-full max-w-md border border-border shadow-xl">
        <CardHeader>
          <CardTitle className="text-destructive">
            Something went wrong!
          </CardTitle>
          <CardDescription>We encountered an unexpected error.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700">
            {error.message || "An unknown error has occurred."}
          </p>
          <div className="flex space-x-2">
            {/* Retry button to attempt rendering the page again */}
            <Button variant="default" onClick={() => reset()}>
              Try Again
            </Button>
            {/* Go back to homepage or a safe route */}
            <Button
              variant="secondary"
              onClick={() => {
                reset();
                router.push("/");
              }}
            >
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
