import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import IsPremiumFilter from "./Components/IsPremiumFilter";
import CarList from "./Components/CarList";
import { useEffect, useState } from "react";

function Container() {
  const [cars, setCars] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isPremiumOnly, setIsPremiumOnly] = useState(false);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/learner-of-string/d3b0864bb0413ba2533d600b04413978/raw/df17d0d6fe2bde8493ed6f0b5efa29ba366b4a5e/CARS.json"
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const filteredCars = cars.filter((car) => {
    if (isPremiumOnly && !car.isPremium) {
      return false;
    } else if (
      car.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) === -1
    ) {
      return false;
    }
    return true;
  });
  // I don't know what this if statement does, but the GitHub copilot suggests adding it. So I did it but I don't know anything and even I am not understand anything why and what it was searching for at the second block. But it is working somehow. I repeat IDK what is this actually.

  return (
    <div className="mx-10 space-y-12 select-none">
      <Header></Header>
      <div className="flex gap-2 items-center">
        <SearchBox
          searchKeyword={searchKeyword}
          onSearchCar={setSearchKeyword}
        ></SearchBox>
        <IsPremiumFilter
          isPremiumOnly={isPremiumOnly}
          onTogglePremium={setIsPremiumOnly}
        ></IsPremiumFilter>
      </div>
      <CarList cars={filteredCars} searchKeyword={searchKeyword}></CarList>
    </div>
  );
}

export default Container;
