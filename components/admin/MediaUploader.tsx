import React from 'react';
import Button from '@/components/ui/Button';

interface MediaUploaderProps {
  onUpload: (file: File) => void;
  accept?: string;
  maxSize?: number;
  className?: string;
}

const MediaUploader: React.FC<MediaUploaderProps> = ({
  onUpload,
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB
  className
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const file = files[0];
    if (file.size > maxSize) {
      alert(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
      return;
    }
    
    onUpload(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className={[
      'border-2 border-dashed border-gray-300 rounded-lg p-6 text-center',
      dragActive ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400',
      className
    ].filter(Boolean).join(' ')}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />
      
      <div className="space-y-4">
        <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        
        <div>
          <p className="text-gray-600 mb-2">
            Drag and drop files here, or{' '}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              browse
            </button>
          </p>
          <p className="text-sm text-gray-500">
            Maximum file size: {maxSize / (1024 * 1024)}MB
          </p>
        </div>
      </div>
    </div>
  );
};

MediaUploader.displayName = 'MediaUploader';

export default MediaUploader;