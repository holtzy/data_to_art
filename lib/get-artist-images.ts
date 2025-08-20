// lib/getArtistImages.ts
import fs from "fs";
import path from "path";

// Ensure this file is never bundled to the client
export const dynamic = "force-dynamic";

export function getArtistImages(artistId: string): string[] {
    const publicDir = path.join(process.cwd(), "public", "project", artistId);
    const items: string[] = [];

    function walk(dir: string) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walk(fullPath);
            } else if (file.endsWith("-full.webp")) {
                const relPath = fullPath
                    .replace(publicDir, `/project/${artistId}`)
                    .replace(/\\/g, "/");
                items.push(relPath);
            }
        }
    }

    if (fs.existsSync(publicDir)) {
        walk(publicDir);
    }

    return items;
}
