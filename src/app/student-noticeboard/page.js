import he from "he";
import {
  getStudentNoticeBoard,
  getStudentNoticeBoardCategoriesIds,
  getStudentNoticeBoardCategoryPosts,
} from "@/lib/univeristyapi";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default async function StudentNoticeBoardPage() {

  const studentNoticeBoard = await getStudentNoticeBoard(); // only for page description or content
  //   console.log(studentNoticeBoard);
  // -------------------
  // Get All Categories available in wordpress
  const categories = await getStudentNoticeBoardCategoriesIds();
  console.log("categories", categories);
  // Get Posts for the Category of student-noticeboard via array filter method
  const studentNoticeBoardCategories = categories.filter(
    (category) => category.slug === "student-noticeboard"
  );
  console.log("studentNoticeBoardCategories", studentNoticeBoardCategories); // array of objects and each object has id which is a post id

  // Each Category has id
  // Sending the id of stdNoticeboardCategory to the API in order to get all posts array related to this category
  const studentNotices = await getStudentNoticeBoardCategoryPosts(
    studentNoticeBoardCategories[0].id
  );
  console.log("studentNotices", studentNotices);

  return (<>
    <Header />
    <main>
      <div className="p-4">
        <p className="font-2xl">
          {studentNoticeBoard[0].content.rendered.replace(
            /<\/?[^>]+(>|$)/g,
            ""
          )}
        </p>
      </div>
      {/* Posts Outer Container */}
      <div className="mt-4 shadow-xl m-8">
        {/* Card Container */}
        {studentNotices.map((post) => {
          return (
            <div key={post.id} className="mt-4 border border-black p-2">
              <h2 className="text-2xl font-bold">
                {he.decode(post.title.rendered)}
              </h2>
              <p>{new Date(post.date_gmt).toLocaleDateString()}</p>
              {/* <p>{post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</p> */}
              <div
                className="prose max-w-none" 
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          );
        })}
      </div>
      </main>
    <Footer />
  </>);
}
