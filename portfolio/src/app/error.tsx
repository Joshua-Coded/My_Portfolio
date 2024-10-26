"use client";
import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-primary">Something went wrong!</h2>
                <button
                    onClick={reset}
                    className="btn-primary"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}