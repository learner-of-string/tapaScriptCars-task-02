import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import IsPremiumFilter from "./Components/IsPremiumFilter";
import CarList from "./Components/CarList";
import { useEffect, useState } from "react";

function Container() {
  const [cars, setCars] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/learner-of-string/d3b0864bb0413ba2533d600b04413978/raw/df17d0d6fe2bde8493ed6f0b5efa29ba366b4a5e/CARS.json"
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="mx-10 space-y-12 select-none">
      <Header></Header>
      <div className="flex gap-2 items-center">
        <SearchBox
          searchKeyword={searchKeyword}
          onSearchCar={setSearchKeyword}
        ></SearchBox>
        <IsPremiumFilter></IsPremiumFilter>
      </div>
      <CarList cars={cars} searchKeyword={searchKeyword}></CarList>
    </div>
  );
}

export default Container;
