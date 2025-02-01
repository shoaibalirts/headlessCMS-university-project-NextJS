export async function getProgram() {
    try {
      const response = await fetch("http://localhost:8080/university/wordpress/wp-json/wp/v2/program");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }