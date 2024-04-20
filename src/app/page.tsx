import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/1fd6777a-2b30-40fb-8610-98cbce1b9ed3-nryy8a.jpg",
  "https://utfs.io/f/67f36887-269c-4a00-a958-2222a0da33a3-r7jp96.jpg",
  "https://utfs.io/f/781cb240-2b19-4332-8723-a7bee4d555b0-xfjyso.jpg",
  "https://utfs.io/f/cf23d7d3-3f71-4a78-98a5-03a8c96eb158-tuzyn3.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
