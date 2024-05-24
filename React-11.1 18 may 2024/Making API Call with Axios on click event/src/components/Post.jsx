// Post.js
function Post({ first_name, last_name, email }) {
  return (
    <div>
      <p>
        Name: {first_name} {last_name}
      </p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Post;
