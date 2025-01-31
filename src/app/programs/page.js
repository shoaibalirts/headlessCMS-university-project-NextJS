// app/programs/page.js
import axios from "axios";

async function getPrograms() {
  const res = await axios.get("http://localhost:8080/university/wordpress/wp-json/wp/v2/program");
  return res.data;
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">University Programs</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program) => (
          <li key={program.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{program.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: program.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
