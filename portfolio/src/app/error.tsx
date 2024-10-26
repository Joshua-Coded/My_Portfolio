"use client";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-primary">Something went wrong!</h2>
                <button
                    onClick={() => reset()}
                    className="btn-primary"
                >
                    Try again
                </button>
            </div>
        </div>
    )
}