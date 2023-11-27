import Image from "next/image";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "1rem" }}>
      <h1>Roboweb</h1>
      <br />
      <Image
        src="/roboweb.jpg"
        width={350}
        height={350}
        alt="roboweb"
        sizes="350px"
      />
    </main>
  );
}
