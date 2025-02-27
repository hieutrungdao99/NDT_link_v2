export default function CatchAll() {
  if (typeof window !== "undefined") {
    window.location.href = "/community-standard.html";
  }
  return null;
}
