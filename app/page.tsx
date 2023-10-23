import ProjectCard from "@/components/ProjectCard";
import { ProjectInterface } from "@/common.types";
import { fetchAllProjects } from "@/lib/actions";

// type ProjectSearch = {
//   projectSearch: {
//     edges: { node: ProjectInterface }[];
//     pageInfo: {
//       hasPreviousPage: boolean;
//       hasNextPage: boolean;
//       startCursor: string;
//       endCursor: string;
//     };
//   };
// };

const Home = async () => {
  const data = await fetchAllProjects();
  //const projectsToDisplay = data?.projectSearch?.edges || [];

  // if (projectsToDisplay.length === 0) {
  //   return (
  //     <section className="flexStart flex-col paddings">
  //       Categories
  //       <p className="no-result-text text-center">
  //         No projects found,go create some first.
  //       </p>
  //     </section>
  //   );
  // }
  return (
    <section className="flex-start flex-col paddings mb-16 ">
      <h1>Categories</h1>
      <section className="projects-grid">
        {/* {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node?.id}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
          />
        ))} */}
      </section>
      <h1>Posts</h1>
      <h1>LoadMore</h1>
    </section>
  );
};
export default Home;
