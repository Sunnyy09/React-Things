import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="all-posts">All Posts</Link>
          </li>
          <li>
            <Link to="add-post">Add Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
