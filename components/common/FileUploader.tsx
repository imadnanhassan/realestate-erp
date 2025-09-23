"use client";

import { useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { UploadCloud } from "lucide-react";

export default function FileUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  function onPick() {
    inputRef.current?.click();
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = Array.from(e.target.files || []);
    setFiles(f);
  }

  return (
    <div className="card p-4">
      <input ref={inputRef} type="file" className="hidden" onChange={onChange} multiple />
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium text-gray-900">Upload Documents</div>
          <p className="text-sm text-gray-500">UI only. Supports multiple files.</p>
        </div>
        <Button onClick={onPick}>
          <UploadCloud className="h-4 w-4" />
          Choose Files
        </Button>
      </div>
      {files.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm">
          {files.map((f, i) => (
            <li key={i} className="flex items-center justify-between rounded-lg border border-gray-200 p-2">
              <span className="truncate">{f.name}</span>
              <span className="text-gray-500">{Math.round(f.size / 1024)} KB</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}