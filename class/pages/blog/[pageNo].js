import { useRouter } from "next/router";
// we have to import 'useRouter' hooks to use dynamic routing

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  //   'router.query.<name_used_inside_[]>
  return (
    <>
      <h1>This is Blog {pageNumber} page</h1>
    </>
  );
};

export default pageNo;
