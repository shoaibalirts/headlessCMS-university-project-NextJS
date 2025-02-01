// app/programs.js
import { getPrograms } from "@/lib/univeristyapi";
export default async function GetProgramsPage() {
  try {
    const programPosts = await getPrograms();
    // console.log(programPosts);
    // console.log(programPosts[0].title.rendered);

    return (
      <div>
        <section className="bg-blue-600 text-white text-center p-16">
          <h1 className="text-4xl font-bold">Welcome to Our University</h1>
          <p className="mt-4">Empowering students for the future.</p>
        </section>

        <section className="container mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programPosts.slice(0, 3).map((program) => (
              <li key={program.id} className="border p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">
                  {program.title.rendered}
                </h3>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    return;
  }
}
