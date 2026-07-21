import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

export const runtime = "edge";
export const alt = `${personal.name} — ${personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Gera a imagem de Open Graph dinamicamente (sem depender de um arquivo binário em /public).
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1aa", letterSpacing: 2 }}>
          {personal.role.toUpperCase()}
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 24, display: "flex" }}>
          {personal.name}
        </div>
        <div style={{ fontSize: 32, color: "#d4d4d8", marginTop: 32, maxWidth: 900, display: "flex" }}>
          {personal.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
