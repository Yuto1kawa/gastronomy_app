const sampleMenus = [
  {
    name: "Seasonal tasting",
    description: "旬の食材を軸にしたコース体験",
  },
  {
    name: "Pairing notes",
    description: "料理とドリンクの相性を記録",
  },
  {
    name: "Reservation flow",
    description: "来店前後の接客導線を整理",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Gastronomy App
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-950 sm:text-5xl">
            食体験を設計するための Next.js サンプル
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            TypeScript、React、Tailwind CSS、App Router を使った
            モノレポ構成のフロントエンド雛形です。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {sampleMenus.map((item) => (
            <article
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
              key={item.name}
            >
              <h2 className="text-lg font-semibold text-gray-950">
                {item.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
