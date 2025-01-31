// app/programs/[slug]/page.js
import axios from "axios";

async function getProgram(slug) {
  const res = await axios.get(`http://localhost:8080/university/wordpress/wp-json/wp/v2/program?slug=${slug}`);
  return res.data.length ? res.data[0] : null;
}

export default async function ProgramDetail({ params }) {
  const program = await getProgram(params.slug);

  if (!program) return <p>Program not found.</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{program.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: program.content.rendered }} className="mt-4" />
    </div>
  );
}
