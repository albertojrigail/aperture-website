import Product from "./Product"

function Products() {
    return (
        <div className="h-screen bg-black">
            <div className="flex flex-col items-center sm:p-12 m d:pl-32 md:pr-32 p-8 h-screen">
                <h2 className="mr-6 ml-6 mt-6 hero-gradient-heading text-2xl md:text-4xl font-bold">
                    OUR PRODUCTS
                </h2>

                <p className="mr-8 ml-8 text-5xl font-bold text-center text-white">
                    We create unbelievable products.
                </p>

                <section className="flex flex-wrap m-8 flex-row items-center justify-around">
                    <Product logoPath="/glados.png" name="GLaDOS" desc="GLaDOS (Genetic Lifeform and Disk Operating System) is our system maintaining the Aperture Science Enrichement Center. GLaDOS is stuffed with AI, and speech. Additional cores specify how does it behave." />

                    <Product logoPath="/cube.png" name="Cube" desc="The Weighted Storage Cube is a cube used for our Aperture Science Supercolliding Superbuttons." />

                    <Product logoPath="/portalgun.png" name="Portal Gun" desc="The Portal Gun is our most ambitious project. It is capable of shooting 2 different colored portals, creating a gate." />
                </section>
            </div>
        </div>
    )
}

export default Products
