import { useState } from "react";
import { useSubmit, useSearchParams } from "react-router";

export default function FilterSection({ availableTypes }) {
    const [searchParams] = useSearchParams();
    const submit = useSubmit();

    // Sync local state with URL params
    const [type, setType] = useState(searchParams.get("type") || "");
    const [range, setRange] = useState(searchParams.get("maxPrice") || 12000000);

    const handleFilterChange = (newType, newRange) => {
        const formData = new FormData();
        if (newType) formData.append("type", newType);
        // Map the range to the API's price_lte parameter
        formData.append("maxPrice", newRange);
        
        // This triggers the propertiesLoader to re-run with new params
        submit(formData, { method: "get" });
    };

    return (
        <section className="max-w-7xl mx-auto p-8 mt-6 relative z-10">
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-heading-2 text-head-4 inline-block pb-1 border-b-4 border-primary-1">
                    Søg efter dit drømmehus
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                    <label className="block text-paragraph-1 text-para-2 mb-2 font-medium">Ejendomstype</label>
                    <select 
                        className="w-full border border-gray-300 p-3 rounded text-gray-500 focus:outline-none focus:border-blue-500"
                        value={type}
                        onChange={(e) => {
                            setType(e.target.value);
                            handleFilterChange(e.target.value, range);
                        }}
                    >
                        <option value="">Ejendomstype</option>
                        {availableTypes?.map((typeName) => (
                            <option key={typeName} value={typeName}>
                                {typeName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price Range Slider */}
                <div className="w-full md:w-2/3">
                    <label className="block text-paragraph-1 text-para-1 mb-2 font-medium">Pris-interval</label>
                    <div className="relative">
                        <input 
                            type="range" 
                            min="0" 
                            max="12000000" 
                            step="100000"
                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-400"
                            value={range}
                            onChange={(e) => setRange(e.target.value)}
                            onMouseUp={() => handleFilterChange(type, range)} 
                        />
                        <div className="flex justify-between text-sm mt-4 text-gray-400">
                            <span>0 kr.</span>
                            <span className="text-right">{Number(range).toLocaleString('da-DK')} kr.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}