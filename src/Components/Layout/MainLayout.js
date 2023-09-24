import Header from "./Header/Header";

export function MainLayout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}
