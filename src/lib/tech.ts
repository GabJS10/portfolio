// Nombres de exhibición para los identificadores de tecnología de projects.json.
const names: Record<string, string> = {
	react: "React", nextjs: "Next.js", astro: "Astro", angular: "Angular", vue: "Vue",
	tailwind: "Tailwind CSS", tailwindcss: "Tailwind CSS", typescript: "TypeScript",
	javascript: "JavaScript", python: "Python", rust: "Rust", tauri: "Tauri",
	nodejs: "Node.js", express: "Express", nestjs: "NestJS", fastapi: "FastAPI",
	mongodb: "MongoDB", postgresql: "PostgreSQL", sqlite: "SQLite", redis: "Redis",
	docker: "Docker", git: "Git", supabase: "Supabase", neon: "Neon", leaflet: "Leaflet",
};

export const techName = (id: string) => names[id.toLowerCase()] ?? id;
