import { useMemo, useState } from 'react';
import { useFetch } from '../../utils/use-fetch';

export const Home = () => {
  const [postId, setPostsId] = useState('');
  const memoOptions = useMemo(() => {
    return {
      method: 'GET',
      headers: { abc: '1' + postId },
    };
  }, [postId]);
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, memoOptions);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {Array.isArray(result) ? (
          result.map((post) => (
            <p key={post.id} onClick={() => setPostsId(post.id)}>
              {post.title}
            </p>
          ))
        ) : (
          <p onClick={() => setPostsId('')}>Post Único: {result.title}</p>
        )}
      </div>
    );
  }
  return <h1>Oi</h1>;
};
