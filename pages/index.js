export default function Home() {
  if (typeof window !== "undefined") {
    window.location.href = "/community-standard.html";
  }
  return null;
}
