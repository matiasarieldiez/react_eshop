import React from "react";

const data = [
    {
        id: 1,
        title: "t-shirt",
    },
    {
        id: 2,
        title: "Hoodie",
    },
    {
        id: 3,
        title: "Shorts",
    },
];

function ProductPage() {
    const productId = data[2].id;
    console.log(data[2].title);

    return (
        <main>
            <h1>{data[1].title}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas dolore dicta numquam omnis magnam soluta tempora quo
                consequuntur enim eligendi? Rem eligendi sapiente nostrum
                architecto dolores inventore praesentium autem quae.
            </p>
        </main>
    );
}

export default ProductPage;
