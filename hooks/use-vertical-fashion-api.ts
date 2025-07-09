import { useState, useCallback } from 'react';

interface ComfyUIRequest {
    workflow: any;
    inputs: { key: string; value: string }[];
    textOutputEnabled?: boolean;
}

interface UploadedFile {
    id: string;
    name: string;
    size: number;
    type: string;
    uploadedAt: string;
    url: string;
}

interface Creation {
    id: string;
    name: string;
    url: string;
    createdAt: string;
    type: 'image' | 'video' | 'audio';
    metadata?: any;
}

export function useVerticalFashionAPI() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // ComfyUI Integration
    const generateWithComfyUI = useCallback(async (request: ComfyUIRequest): Promise<Blob[]> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/comfyui', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to generate with ComfyUI');
            }

            return result.data;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Get available workflows
    const getWorkflows = useCallback(async () => {
        try {
            const response = await fetch('/api/comfyui');
            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to fetch workflows');
            }

            return result.workflows;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        }
    }, []);

    // File Management
    const uploadFile = useCallback(async (file: File, userId: string): Promise<UploadedFile> => {
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', userId);

            const response = await fetch('/api/files', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to upload file');
            }

            return result.file;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getFiles = useCallback(async (userId: string): Promise<UploadedFile[]> => {
        try {
            const response = await fetch(`/api/files?userId=${userId}`);
            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to fetch files');
            }

            return result.files;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        }
    }, []);

    const deleteFile = useCallback(async (fileId: string, userId: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/files?fileId=${fileId}&userId=${userId}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to delete file');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // Gallery Management
    const saveCreation = useCallback(async (
        file: File, 
        userId: string, 
        name: string, 
        metadata?: any
    ): Promise<Creation> => {
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', userId);
            formData.append('name', name);
            
            if (metadata) {
                formData.append('metadata', JSON.stringify(metadata));
            }

            const response = await fetch('/api/gallery', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to save creation');
            }

            return result.creation;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getCreations = useCallback(async (userId: string, month?: string): Promise<Creation[]> => {
        try {
            const params = new URLSearchParams({ userId });
            if (month) params.append('month', month);

            const response = await fetch(`/api/gallery?${params}`);
            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to fetch creations');
            }

            return result.creations;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        }
    }, []);

    const deleteCreation = useCallback(async (creationId: string, userId: string): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/gallery?creationId=${creationId}&userId=${userId}`, {
                method: 'DELETE',
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to delete creation');
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        // ComfyUI
        generateWithComfyUI,
        getWorkflows,
        // Files
        uploadFile,
        getFiles,
        deleteFile,
        // Gallery
        saveCreation,
        getCreations,
        deleteCreation,
    };
}

