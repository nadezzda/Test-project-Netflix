export default function Home() {
  return (
    <main>
      <h1>Test project</h1>
    </main>
  );
}

export async function getStaticProps() {
  const user = false;

  if (!user) {
    return {
      redirect: {
        destination: "/tv-series",
      },
      props: {},
    };
  }
  return {
    props: {},
  };
}