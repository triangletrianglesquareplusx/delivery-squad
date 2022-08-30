import MiddleSection from '../Components/MiddleSection/MiddleSection';
import Restaurants from '../Pages/Restaurants/Restaurants';
import Searchbar from '../Components/Searchbar/Searchbar';

export default function RestaurantsFullPage() {
  return (
    <>
        <MiddleSection />
        <Searchbar />
        <Restaurants />
    </>
  );
}