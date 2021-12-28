import Header from "../components/Header";
import Hero from "../components/Hero";
import Investment from "../components/Investment";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Products />
      <Investment />
    </div>
  )
}
