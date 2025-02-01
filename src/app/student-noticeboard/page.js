import { getStudentNoticeBoard } from "@/lib/univeristyapi";
export default async function StudentNoticeBoardPage(){
    const studentNoticeBoard = await getStudentNoticeBoard();
    console.log(studentNoticeBoard);
    
    return (
        <div>
            <p>{studentNoticeBoard[0].content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>
    );
}