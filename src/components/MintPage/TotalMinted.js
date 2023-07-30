const TotalMinted = ({ marketMinted, mintSupply }) => {
    return (
        <div className="text-center font-neueHaas text-[36px] font-semibold tracking-wider text-[#01C99B] mobile:p-1 tablet:p-4">
            {marketMinted} / {mintSupply}
        </div>
    );
};

export default TotalMinted;
