type pageContent = {
  children: React.ReactNode;
};
const Main = (props: pageContent) => {
  return (
    <main className="w-full bg-gradient-to-b from-light-lilac/[20%] to-light-lilac/50 mx-auto text-dark-teal text-center">
      {props.children}
    </main>
  );
};

export default Main;
