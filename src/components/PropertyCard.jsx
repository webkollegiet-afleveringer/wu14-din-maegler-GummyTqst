import { Link } from "react-router";

export default function PropertyCard({ home }) {
    const formattedPrice = new Intl.NumberFormat('da-DK').format(home.price);
    const formattedCost = new Intl.NumberFormat('da-DK').format(home.cost);

    const getEnergyLabelColor = (label) => {
        switch (label?.toUpperCase()) {
            case "A": return 'bg-primary-3';
            case "B": return 'bg-primary-4';
            case "C": return 'bg-primary-2';
            default: return 'bg-red'
        }
    }
  
    return (
        <Link to={`/properties/${home.id}`} className="w-full mx-auto px-2 sm:px-4 block">
            <div className="bg-white rounded-sm shadow-sm overflow-hidden flex flex-col">
                <img src={home.images[0].url} alt={home.address1} className="w-full h-48 sm:h-64 object-cover" />
                
                <div className="p-4 sm:p-6 flex flex-col grow">
                    <h3 className="text-head-4 font-bold text-heading-1 text-base sm:text-lg">
                        {home.adress1} {home.adress2 ? `• ${home.adress2}` : ''}
                    </h3>
                    <p className="text-para-3 text-paragraph-2 mt-1 mb-3 sm:mb-4 text-sm">{home.postalcode} {home.city}</p>
                
                    <p className="text-para-2 text-paragraph-1 mb-3 sm:mb-4 text-sm">
                        <span className="font-bold">{home.type}</span>
                        <span className="mx-1 font-normal text-paragraph-2">•</span>
                        Ejerudgift: {formattedCost} kr
                    </p>

                    <hr className="border-shape-1 mt-auto mb-3 sm:mb-4" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-4">
                            <span className={`w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center text-white font-bold text-xs sm:text-sm ${getEnergyLabelColor(home.energylabel)}`}>
                                {home.energylabel}
                            </span>

                            <span className="text-paragraph-2 text-para-3 text-xs sm:text-sm">
                                {home.rooms} værelser • {home.livingspace} m²
                            </span>
                        </div>

                        <div className="text-head-4 font-bold text-heading-1 text-sm sm:text-base">
                            Kr. {formattedPrice}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
  };