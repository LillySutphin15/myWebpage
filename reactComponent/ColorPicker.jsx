import { useState } from "react";



function ColorPicker() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    const [bgColor, setBgColor] = useState("white");

    return (
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: bgColor, height: "100vh" }}>
            <h2>Pick a Color!</h2>
            <h3><a href="../index.html">Go back Home</a></h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => setBgColor(color)}
                        style={{
                            backgroundColor: color,
                            color: "black",
                            border: "none",
                            padding: "10px 20px",
                            cursor: "pointer",
                            borderRadius: "5px",
                            fontWeight: "bold",
                        }}
                    >
                        {color}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ColorPicker;
