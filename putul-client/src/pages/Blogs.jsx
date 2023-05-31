import H3 from "../components/H3";
import useDynamicTitle from "../utils/useDynamicTitle";

const Blogs = () => {
  useDynamicTitle("Putul - Blogs");

  return (
    <div className="mb-40 mt-10 space-y-5">
      <H3>Blogs</H3>

      <div className="mx-auto w-[720px] space-y-10">
        <div className="space-y-3 rounded bg-slate-200 p-7">
          <h4 className="text-lg font-semibold">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>

          <p>
            An access token is a credential that is used to authenticate and
            authorize requests to protected resources or APIs.
          </p>

          <p>
            A refresh token is a long-lived credential used to obtain a new
            access token without requiring the user to reauthenticate.
          </p>

          <ul className="list-inside list-decimal">
            <li>
              User Authentication: The user authenticates with their credentials
            </li>
            <li>
              Token Generation: Upon successful authentication, the server
              generates an access token and a refresh token and sends them back
              to the client.
            </li>
            <li>
              Access Token Usage: The client includes the access token in the
              headers or query parameters of requests to protected resources or
              APIs.
            </li>
            <li>
              Expiration and Renewal: The access token has a limited lifespan,
              and once it expires, the client needs to use the refresh token to
              obtain a new access token.
            </li>
          </ul>

          <p>
            A common approach is to store the access token in the browser&apos;s
            memory or a secure HTTP-only cookie. Storing access tokens in local
            storage or client-side storage (e.g., localStorage or
            sessionStorage) is generally not recommended due to the risk of
            cross-site scripting (XSS) attacks.
          </p>
        </div>

        <div className="space-y-3 rounded bg-slate-200 p-7">
          <h4 className="text-lg font-semibold">
            2. Compare SQL and NoSQL databases?
          </h4>

          <div className="">
            <table>
              {/* head */}
              <thead>
                <tr>
                  <th>Point</th>
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Structure</td>
                  <td>
                    Data is organized into tables with fixed columns and rows.
                  </td>
                  <td>
                    Data is stored in various formats, such as key-value pairs,
                    documents, wide-column stores, or graphs.
                  </td>
                </tr>

                {/* row 2 */}
                <tr>
                  <td>Relationships</td>
                  <td>
                    Maintains relationships between tables using primary keys
                    and foreign keys.{" "}
                  </td>
                  <td>
                    Relationships are either not enforced or handled differently
                    depending on the NoSQL database.
                  </td>
                </tr>

                {/* row 3 */}
                <tr>
                  <td>Schema</td>
                  <td>
                    Uses a predefined schema with a fixed structure, requiring
                    the definition of tables, columns, and data types.
                  </td>
                  <td>
                    Has a flexible schema or schema-less design, allowing for
                    dynamic and evolving data structures.
                  </td>
                </tr>

                {/* row 4 */}
                <tr>
                  <td>Query Language</td>
                  <td>
                    Uses Structured Query Language (SQL) for defining and
                    manipulating data using standardized syntax.
                  </td>
                  <td>
                    Each NoSQL database may have its own query language or API
                    for data retrieval and manipulation.
                  </td>
                </tr>

                {/* row 5 */}
                <tr>
                  <td>Scalability</td>
                  <td>
                    Primarily scales vertically by increasing the hardware
                    capacity of the server, such as CPU, memory, or disk
                    storage.
                  </td>
                  <td>
                    Designed for horizontal scalability, distributing data
                    across multiple servers to handle high volumes and velocity
                    of data.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3 rounded bg-slate-200 p-7">
          <h4 className="text-lg font-semibold">
            3. What is express js? What is Nest JS?
          </h4>

          <p>
            <code>Express.js</code> is a minimalist web application framework
            for <code>Node.js</code>. It provides a simple and unopinionated
            approach to building web applications and APIs.{" "}
            <code>Express.js</code> focuses on being lightweight, flexible, and
            providing a basic set of features to handle HTTP requests and
            responses.
          </p>

          <p>
            <code>Nest.js</code> is a progressive, opinionated framework for
            building scalable and efficient server-side It is built with
            TypeScript and uses modern JavaScript features.applications.
            <code>Nest.js</code> takes inspiration from Angular, borrowing its
            module-based architecture and dependency injection system.
          </p>
        </div>

        <div className="space-y-3 rounded bg-slate-200 p-7">
          <h4 className="text-lg font-semibold">
            4. What is MongoDB aggregate and how does it work?
          </h4>

          <p>
            In MongoDB, the aggregate method is used to perform advanced data
            processing and analysis operations on collections. It allows you to
            combine multiple stages of data transformation and aggregation into
            a single pipeline.
          </p>

          <ul className="list-inside list-decimal">
            <li>
              Pipeline Stages: The aggregate method takes an array of pipeline
              stages as its argument. Each stage represents a data processing
              step and performs a specific operation on the documents.
            </li>

            <li>
              Data Transformation: Each stage in the pipeline applies a
              transformation or aggregation operation to the input documents and
              produces output documents. Examples of common stages include{" "}
              <code>$match, $project, $group, $sort, $limit, and $lookup</code>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
