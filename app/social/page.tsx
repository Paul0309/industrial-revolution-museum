"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialExhibit() {
  const textBlocks = [
    "Industrialization dramatically reshaped society by transforming daily routines and redefining class structures.",
    "The Factory Act of 1833 marked an early effort to protect children, limiting night shifts and improving working conditions.",
    "Japan’s 1868 Charter Oath symbolized the Meiji Restoration’s rapid push toward modernization and social reform.",
    "Urbanization between 1850–1914 accelerated dramatically, shifting populations from rural villages into crowded industrial cities.",
    "Industrialization was not only mechanical progress—it reshaped how families lived, worked, and imagined the future."
  ];

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#333] px-6 md:px-20 py-24">

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Social Impacts — Life Transformed
      </motion.h1>

      {/* Scrollytelling Text Blocks */}
      <section className="space-y-16 max-w-4xl mx-auto mb-24">
        {textBlocks.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
            className="text-lg leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            {text}
          </motion.p>
        ))}
      </section>

      {/* Artifact Section */}
      <h2 className="text-3xl font-semibold mb-10 text-center">Artifacts</h2>

      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
        {[
          {
            title: "Factory Act (1833)",
            desc: "Shows early government intervention to protect children in industrial workplaces.",
            srcNote: "UK Parliament (1833), reform legislation; shows legal effort to protect youth laborers. Limit: focuses on formal rules, not lived conditions.",
            img: "/artifact1.jpg"
          },
          {
            title: "Meiji Charter Oath (1868)",
            desc: "Illustrates Japan’s deliberate shift away from feudal social structures.",
            srcNote: "Japanese Government (1868), modernization decree; shows national goals for reform. Limit: represents elite perspective.",
            img: "/artifact2.jpg"
          }
        ].map((art, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200"
          >
            <Image
              src={art.img}
              alt={art.title}
              width={800}
              height={500}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">{art.title}</h3>
              <p className="text-gray-600 text-sm">{art.desc}</p>

              <p className="text-gray-500 text-xs italic leading-relaxed">
                <span className="font-semibold">Source Note:</span> {art.srcNote}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Data Display */}
      <h2 className="text-3xl font-semibold text-center mb-8">
        Urban Population Growth (1850–1914)
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl border border-gray-200 shadow-sm max-w-5xl mx-auto p-10"
      >
        <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
          <img src="https://www.campop.geog.cam.ac.uk/blog/wp-content/uploads/Copy-of-Copy-of-new-Figure-1-scaled.jpg" style={{ width: "50%" }}>
          </img>
        </div>

        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          Urban population data shows dramatic migration into industrial cities during the 19th century,
          illustrating how economic opportunity and new factory systems reshaped social structures.
        </p>
      </motion.div>

      {/* Page Close */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-700 mt-24 text-lg max-w-3xl mx-auto"
      >
        Social life was transformed by industrialization—not only through machines and factories,
        but through the reshaping of routines, families, and identities. These changes reveal the
        human dimension of industrial progress.
      </motion.p>
    </main>
  );
}
