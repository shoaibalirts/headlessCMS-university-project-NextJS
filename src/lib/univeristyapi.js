export async function getPrograms() {
    try {
      const response = await fetch("http://localhost:8080/university/wordpress/wp-json/wp/v2/program");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
}

export async function getStudentNoticeBoard(){
    try {
        const response = await fetch("http://localhost:8080/university/wordpress/wp-json/wp/v2/pages?slug=student-noticeboard");
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
}
