import { useQuery } from "@apollo/client";
import { client, gql } from "@/apolloClient"

const GET_MAIN_MENU = gql`
  query GetMainMenu {
    nav(handle: "main") {
      tree {
        page {
          title
          url
        }
      }
    }
  }
`;

export default function BaseLayout({ children }) {
  const { loading, error, data } = useQuery(GET_MAIN_MENU, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading navigation</p>;

  const navigation = data?.nav?.tree?.map((item) => item.page) || [];

  return (
    <>
      <nav>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}