import Header from "./Components/Header";
import Search from "./Components/Search";
import IsPremiumFilter from "./Components/IsPremiumFilter";
import CarList from "./Components/CarList";

function Container() {
  return (
    <div className="mx-10 space-y-12">
      <Header></Header>
      <div className="flex gap-2 items-center">
        <Search></Search>
        <IsPremiumFilter></IsPremiumFilter>
      </div>
      <CarList></CarList>
    </div>
  );
}

export default Container;
