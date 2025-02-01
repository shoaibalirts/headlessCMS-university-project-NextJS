// app/page.js
import { getProgram } from "@/lib/univeristyapi";
export default async function getHomeData() {
  try {
    // const programs = await axios.get("http://localhost:8080/university/wordpress/wp-json/wp/v2/program");
    // const events = await axios.get("http://localhost:8080/university/wordpress/wp-json/wp/v2/events");
    // return { programs: programs.data, events: events.data };
    const programPosts = await getProgram();
    console.log(programPosts);
    
    console.log(programPosts[0].title.rendered);
    
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
                  <h3 className="text-xl font-semibold">{program.title.rendered}</h3>
                </li>
              ))}
            </ul>
          </section>
    
          {/* <section className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <ul>
              {events.map((event) => (
                <li key={event.id} className="mb-4">{event.title.rendered}</li>
              ))}
            </ul>
          </section> */}
        </div>
      );
    
  } catch (error) {
    console.error("Error fetching data:", error.response ? error.response.data : error.message);
    // return { programs: [], events: [] };
    return;
  }


}
