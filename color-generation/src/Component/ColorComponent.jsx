import { useEffect, useState } from "react";

function ColorComponent() {
    const [color, setColor] = useState("#1f2f30");
    const [colorType, setColorType] = useState("hex");

    function handleGenerateRandomColor(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[handleGenerateRandomColor(hex.length)];
        }
        setColor(hexColor);
    }
    function handleCreateRgbColor() {
        const r = handleGenerateRandomColor(256);
        const g = handleGenerateRandomColor(256);
        const b = handleGenerateRandomColor(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=> {
        if(colorType === "rgb") {
            handleCreateRgbColor();
        }
        else{
            handleCreateHexColor();
        }
    }, [colorType]);

    const btnBase =
        "rounded-lg px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2";
    const btnPrimary =
        `${btnBase} bg-blue-600 text-white shadow-sm hover:bg-blue-700`;
    const btnSecondary =
        `${btnBase} border border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100`;

    return (
        <div className="w-full max-w-2xl">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <button
                        type="button"
                        onClick={() => setColorType("hex")}
                        className={
                            colorType === "hex" ? btnPrimary : btnSecondary
                        }
                    >
                        Hex Color
                    </button>
                    <button
                        type="button"
                        onClick={() => setColorType("rgb")}
                        className={
                            colorType === "rgb" ? btnPrimary : btnSecondary
                        }
                    >
                        RGB Color
                    </button>
                    <button
                        type="button"
                        onClick={
                            colorType === "hex"
                                ? handleCreateHexColor
                                : handleCreateRgbColor
                        }
                        className={`${btnPrimary} sm:ml-auto`}
                    >
                        Change Color
                    </button>
                </div>

                <div
                    style={{ backgroundColor: color }}
                    className="mt-6 flex min-h-[180px] items-center justify-center rounded-lg border border-gray-200 p-6 shadow-inner"
                >
                    <div className="rounded-lg bg-black/45 px-5 py-3 text-center shadow-lg backdrop-blur-sm">
                        <h3 className="text-xs font-bold uppercase tracking-wide text-white/90">
                            {colorType === "rgb" ? "RGB color" : "Hex color"}
                        </h3>
                        <h2 className="mt-1 font-mono text-xl font-bold tracking-wide text-white sm:text-2xl">
                            {color}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorComponent;
