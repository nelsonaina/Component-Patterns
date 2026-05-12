import { useEffect, useState } from "react";

function LoadMore() {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
            );
            const result = await response.json();
            if (result && result.products && result.products.length) {
                setProduct((prevData) => {
                    const merged = [...prevData, ...result.products];
                    const unique = Array.from(
                        new Map(merged.map((item) => [item.id, item])).values(),
                    );
                    return unique;
                });
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    console.log(product);

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (product && product.length === 100) {
            setDisableBtn(true);
        }
    });

    function handleLoadMore(newCount) {
        setCount(newCount);
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex justify-center items-center px-6 text-slate-600">
                <div className="rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm">
                    Loading data Please Wait!!!
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
                <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
                    {product && product.length
                        ? product.map((item) => (
                              <div
                                  key={item.id}
                                  className="w-full max-w-64 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                              >
                                  <div className="aspect-square bg-slate-100 p-4">
                                      <img
                                          src={item.thumbnail}
                                          alt={item.title}
                                          className="h-full w-full object-contain"
                                      />
                                  </div>
                                  <p className="border-t border-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                                      {item.title}
                                  </p>
                              </div>
                          ))
                        : null}
                </div>
                <div className="m-20 flex flex-col items-center justify-center gap-4">
                    <button
                        disabled={disableBtn}
                        onClick={() => handleLoadMore(count + 1)}
                        className="rounded-lg border border-emerald-600 bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300 disabled:text-slate-500"
                    >
                        Load More products
                    </button>
                    {disableBtn ? (
                        <p className="text-sm text-slate-500">
                            You have reached your limit
                        </p>
                    ) : null}
                </div>
            </div>
        </>
    );
}

export default LoadMore;
