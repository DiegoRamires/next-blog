import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      <main className={styles.container}>
        <div className={styles.posts}>
          <title>
            Como utilizar hooks
          </title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores</p>
          <div>
            <time>22 out 2022</time>
            <span>Diego</span>
          </div>
        </div>

        <div>
          <title>
            Como utilizar hooks
          </title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores</p>
          <div>
            <time>22 out 2022</time>
            <span>Diego</span>
          </div>
        </div>

        <div>
          <title>
            Como utilizar hooks
          </title>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores</p>
          <div>
            <time>22 out 2022</time>
            <span>Diego</span>
          </div>
        </div>
      </main>
    </div>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };
