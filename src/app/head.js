"use client";

export default function Head() {
  return (
    <>
      {/* Only favicon here — title/description handled by layout.js metadata */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* JSON-LD Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Technile IT Solutions",
            url: "https://technileitsolutions.com",
            logo: "https://technileitsolutions.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8369633838",
              contactType: "Customer Support",
            },
            sameAs: [
              "https://linkedin.com/company/technileitsolutions",
              "https://twitter.com/technileitsolutions",
              "https://instagram.com/technileitsolutions",
            ],
          }),
        }}
      />
    </>
  );
}
