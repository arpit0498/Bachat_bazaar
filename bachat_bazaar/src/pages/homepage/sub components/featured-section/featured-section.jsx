import "./featured-section.css"
import { FeatureCard } from "../../../../components/index.js"
import { useCategoryContext } from "../../../../contexts/category-context.jsx";

export function FeatureSection() {
    const { categories } = useCategoryContext();

    return (
        <section className="featured-section">
            <h3 className="featured-text">Our Featured Categories</h3>
            <div className="featured-products">
                {categories.map(({ _id, categoryName, img }) => {
                    return <FeatureCard className="featured-product" key={_id} img={img} category={categoryName} />
                })}
            </div>
        </section>
    )
}