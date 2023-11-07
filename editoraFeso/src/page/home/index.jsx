import NavBar from "../../components/navBar";
import SideBar from "../../components/sideBar";
import Tables from "../../components/table";

export default function Home() {
  return (
    <div className="container">
      <NavBar />

      <div className="mt-5">
        <div className="col-2 position-fixed  p-0" style={{ height: "95vh", left: 0 }}>
          <SideBar />
        </div>
        <div
          className="col-10 mx-auto text-center "
          style={{
            height: "95vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Tables />
        </div>
      </div>
    </div>
  );
}
