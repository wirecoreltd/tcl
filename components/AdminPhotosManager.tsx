"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Trash2, LogOut, ImagePlus, Loader2 } from "lucide-react";
import type { GalleryPhoto } from "@/lib/gallery";

const CATEGORY_LABELS: Record<string, string> = {
  "team-building": "Team Building",
  training: "Training",
  celebrations: "Celebrations / Events",
  "office-life": "Office Life",
};

export default function AdminPhotosManager({
  initialPhotos,
}: {
  initialPhotos: Record<string, GalleryPhoto[]>;
}) {
  const router = useRouter();
  const categories = Object.keys(CATEGORY_LABELS);
  const [active, setActive] = useState(categories[0]);
  const [photos, setPhotos] = useState(initialPhotos);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);

    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", active);

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });
        const json = await res.json();
        if (!res.ok || !json.ok) {
          setError(json.error || "Upload failed.");
          continue;
        }
        setPhotos((prev) => ({
          ...prev,
          [active]: [
            {
              src: json.url,
              alt: file.name,
              pathname: `images/${active}/${file.name}`,
            },
            ...(prev[active] || []),
          ],
        }));
      } catch {
        setError("Upload failed. Please try again.");
      }
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleDelete(pathname: string) {
    const prevPhotos = photos;
    setPhotos((prev) => ({
      ...prev,
      [active]: prev[active].filter((p) => p.pathname !== pathname),
    }));

    try {
      const res = await fetch("/api/admin/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pathname }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setError("Couldn't delete that photo — please refresh and try again.");
      setPhotos(prevPhotos);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const activePhotos = photos[active] || [];

  return (
    <div className="min-h-screen bg-navy">
      <header className="border-b border-navy-line">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TCL" className="h-8 w-8 rounded-md" />
            <span className="font-display font-semibold text-offwhite">
              Photo Manager
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-sm text-offwhite/60 hover:text-offwhite transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-electric text-white"
                  : "glass-card text-offwhite/60 hover:text-offwhite"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <label
          className="glass-card rounded-card p-10 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-cyan/50 transition-colors border-dashed"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleUpload(e.dataTransfer.files);
          }}
        >
          {uploading ? (
            <Loader2 size={24} className="text-cyan animate-spin" />
          ) : (
            <Upload size={24} className="text-offwhite/40" />
          )}
          <p className="text-sm text-offwhite/60">
            Drag photos here, or click to browse
          </p>
          <p className="text-xs text-offwhite/35 font-mono">
            JPG, PNG or WEBP · up to 8MB · goes into "{CATEGORY_LABELS[active]}"
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            multiple
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />
        </label>

        {error && (
          <p className="mt-4 text-sm text-brandRed">{error}</p>
        )}

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {activePhotos.length === 0 && (
            <div className="col-span-full glass-card rounded-card p-10 flex flex-col items-center gap-2 text-center">
              <ImagePlus size={20} className="text-offwhite/30" />
              <p className="text-sm text-offwhite/50">
                No photos in this section yet.
              </p>
            </div>
          )}
          {activePhotos.map((photo) => (
            <div
              key={photo.pathname}
              className="glass-card rounded-card aspect-square relative overflow-hidden group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleDelete(photo.pathname)}
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-navy-deep/80 text-offwhite/70 hover:text-brandRed flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Delete photo"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
