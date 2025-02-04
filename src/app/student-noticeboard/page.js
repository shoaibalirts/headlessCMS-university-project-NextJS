import he from "he";
import cheerio from 'cheerio';

import {
  getAllCategories,
  getCategoryPosts,
  getStudentNoticeBoardPageContent,
} from "@/lib/univeristyapi";
import Header from "../../components/header";
import Footer from "../../components/footer";
export default async function StudentNoticeBoardPage() {

  const studentNoticeBoardPageContent = await getStudentNoticeBoardPageContent(); // only for page description or content
  //   console.log(studentNoticeBoard);
  // -------------------
  // Get All Categories available in wordpress
  const categories = await getAllCategories();
  // console.log("categories", categories);

  // Get only one Category named student-noticeboard
  const studentNoticeBoardCategory = categories.filter(
    (category) => category.slug === "student-noticeboard"
  );
  console.log("studentNoticeBoardCategory", studentNoticeBoardCategory); // array of objects and each object has id which is a post id

  // Each Category has id
  // Get All Posts spacific to this category id
  const posts = await getCategoryPosts(
    studentNoticeBoardCategory[0].id
  );
  // console.log("studentNotices", posts);

  return (<>
    <Header>Student Noticeboard</Header>
    <main>
      <div className="p-4">
        <p className="font-2xl">
          {studentNoticeBoardPageContent[0].content.rendered.replace(
            /<\/?[^>]+(>|$)/g,
            ""
          )}
        </p>
      </div>
      {/* Posts Outer Container */}
      <div className="mt-4 shadow-xl m-8">
        {/* Card Container */}
        {posts.map((post) => {
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
