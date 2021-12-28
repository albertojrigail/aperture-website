function Product({
    name,
    logoPath,
    desc
}) {
    return (
        <article className="m-6 max-w-xs">
            <img 
                src={logoPath}
                className="w-full"
                alt={name}
            />

            <h2 className="mt-4 mb-4 font-bold text-2xl md:text-3xl text-white">
                {name}
            </h2>

            <p className="mb-4 text-lg md:text-xl text-white">
                {desc}
            </p>
        </article>
    )
}

export default Product
