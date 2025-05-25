import { useState } from "react";

function State() {
    const [value, setValue] = useState("");
    const [warning, setWarning] = useState("");

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        const newWarning = newValue.toLowerCase().includes("hi") 
            ? "You can't just say HI!" 
            : null;
        setWarning(newWarning);
    };

    return (
        <div>
            <input 
                className="border rounded" 
                type="text" 
                name="value" 
                onChange={handleChange} 
                value={value} 
            />
            <p>{warning || "Hello Programmers!"}</p>
        </div>
    );
}

export default State;