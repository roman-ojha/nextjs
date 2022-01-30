/*
  => File-system based routing mechanism
    => When a file is added to the pages folder in aproject, by default all the files becomes avilable as a route.

  => another way:
    -> create a folder inside pages and create a component 'index.js' inside that folder 
    -> then the folder name is the name of the route
*/

const index = () => {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

export default index;
