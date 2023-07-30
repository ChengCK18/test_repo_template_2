const TotalMinted = ({ marketMinted, mintSupply }) => {
    return (
        <div className="p-4 text-center font-neueHaas text-[36px] font-semibold tracking-wider text-[#01C99B]">
            {marketMinted} / {mintSupply}
        </div>
    );
};

export default TotalMinted;
