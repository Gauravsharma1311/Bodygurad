"use client";

export function VideoSection() {
  return (
    <section className="bg-black py-1 px-3 flex justify-center">
      <div className="w-full max-w-7xl">
        <video
          controls
          playsInline
          className="w-full h-auto rounded-lg shadow-md"
        >
          <source src="/bodygrad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
