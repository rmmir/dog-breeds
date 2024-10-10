type HeaderProps = {
    breedCount: number;
};

const Header: React.FC<HeaderProps> = ({ breedCount }) => {
    return <div className="flex gap-2 text-2xl mb-20 font-semibold text-gray-700">
        Breeds
        <p className="text-gray-400">{breedCount}</p>
    </div>;
};

export default Header;