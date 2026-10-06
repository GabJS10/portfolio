// Normaliza las fechas libres de projects.json ("Oct 06, 2026", "Ago 09, 2026", "April 20, 2025") a AAAA-MM-DD.
const months: Record<string, string> = {
	jan: "01", ene: "01", feb: "02", mar: "03", apr: "04", abr: "04", may: "05", jun: "06",
	jul: "07", aug: "08", ago: "08", sep: "09", oct: "10", nov: "11", dec: "12", dic: "12",
};

export function isoDate(raw: string): string {
	const match = raw.trim().match(/^([A-Za-zÁÉÍÓÚáéíóú]+)\.?\s+(\d{1,2}),?\s+(\d{4})$/);
	const month = match && months[match[1].slice(0, 3).toLowerCase()];
	if (!match || !month) return raw;
	return `${match[3]}-${month}-${match[2].padStart(2, "0")}`;
}
