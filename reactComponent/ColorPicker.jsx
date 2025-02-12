import { useState } from "react";

//color data array
const colorsData = [
  { id: 1, name: "Red", hex: "#FF0000" },
  { id: 2, name: "Green", hex: "#00FF00" },
  { id: 3, name: "Blue", hex: "#0000FF" },
  { id: 4, name: "Yellow", hex: "#FFFF00" },
  { id: 5, name: "Purple", hex: "#800080" },
  { id: 6, name: "Orange", hex: "#FFA500" },
  { id: 7, name: "Pink", hex: "#FFC0CB" }
];
// ColorItem component to display one color



function ColorPicker() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
    const [bgColor, setBgColor] = useState("white");

    return (
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: bgColor, height: "100vh" }}>
            <h2>Pick a Color! Home button is at the bottom of page!</h2>
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
